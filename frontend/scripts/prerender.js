/* eslint-disable */
// Static prerender: crawls the built SPA with headless Chrome and writes a
// full static HTML file for every route, plus sitemap.xml. Runs as `postbuild`.
const fs = require("fs");
const path = require("path");
const http = require("http");
const { spawn } = require("child_process");
const puppeteer = require("puppeteer-core");

const BUILD_DIR = path.join(__dirname, "..", "build");
const PORT = 45678;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const SITE_URL = "https://ytwc.in";

function findChrome() {
  const candidates = [];
  // Prefer the Playwright headless shell — it launches reliably in this sandbox.
  try {
    const base = process.env.PLAYWRIGHT_BROWSERS_PATH || "/pw-browsers";
    if (fs.existsSync(base)) {
      for (const d of fs.readdirSync(base)) {
        candidates.push(path.join(base, d, "chrome-linux", "headless_shell"));
      }
    }
  } catch (e) {}
  if (process.env.PUPPETEER_EXECUTABLE_PATH) candidates.push(process.env.PUPPETEER_EXECUTABLE_PATH);
  candidates.push("/usr/bin/chromium", "/usr/bin/google-chrome");
  return candidates.find((c) => { try { return fs.existsSync(c); } catch { return false; } }) || "/usr/bin/google-chrome";
}
const CHROME = findChrome();
console.log(`[prerender] chrome binary: ${CHROME}`);

const MIME = {
  ".html": "text/html", ".js": "application/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".txt": "text/plain", ".xml": "application/xml",
  ".woff": "font/woff", ".woff2": "font/woff2", ".map": "application/json",
};

function serve() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(BUILD_DIR, urlPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream" });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA fallback
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(path.join(BUILD_DIR, "index.html")).pipe(res);
    }
  });
}

const norm = (p) => {
  if (!p) return "/";
  p = p.split("#")[0].split("?")[0];
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p || "/";
};

async function run() {
  const server = serve();
  await new Promise((r) => server.listen(PORT, r));
  console.log(`[prerender] serving build on ${ORIGIN}`);

  const CDP_PORT = 45999;
  const chromeProc = spawn(CHROME, [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--disable-crashpad",
    "--disable-breakpad",
    `--remote-debugging-port=${CDP_PORT}`,
    "--user-data-dir=/tmp/pptr-profile",
    "about:blank",
  ], { stdio: "ignore", detached: false });
  chromeProc.on("error", (e) => console.error("[prerender] chrome spawn error:", e.message));
  chromeProc.on("exit", (c, s) => console.log(`[prerender] chrome exited code=${c} sig=${s}`));

  // Wait for the DevTools endpoint to come up.
  const getVersion = () => new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${CDP_PORT}/json/version`, (res) => {
      let d = ""; res.on("data", (c) => (d += c)); res.on("end", () => resolve(d));
    });
    req.on("error", () => resolve(null));
  });
  let up = null;
  for (let i = 0; i < 80 && !up; i++) { up = await getVersion(); if (!up) await new Promise((r) => setTimeout(r, 250)); }
  if (!up) { chromeProc.kill("SIGKILL"); server.close(); throw new Error("Chrome DevTools endpoint did not start"); }

  const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${CDP_PORT}`, defaultViewport: { width: 1366, height: 900 } });
  console.log(`[prerender] connected to ${CHROME}`);

  const queue = ["/"];
  const seen = new Set();
  const rendered = {};

  while (queue.length) {
    const route = norm(queue.shift());
    if (seen.has(route)) continue;
    seen.add(route);

    const page = await browser.newPage();
    // Block cross-origin requests (fonts, analytics, unsplash) for fast, reliable loads.
    await page.setRequestInterception(true);
    page.on("request", (r) => {
      if (r.url().startsWith(ORIGIN)) r.continue();
      else r.abort();
    });

    try {
      await page.goto(`${ORIGIN}${route}`, { waitUntil: "networkidle2", timeout: 30000 });
    } catch (e) {
      console.warn(`[prerender] slow load ${route}: ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 400));

    // Discover internal links.
    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll("a[href]"))
        .map((a) => a.getAttribute("href"))
        .filter((h) => h && h.startsWith("/") && !h.startsWith("//"))
    );
    links.forEach((l) => { const n = norm(l); if (!seen.has(n)) queue.push(n); });

    // Clean platform-only scripts/badges before capture.
    await page.evaluate(() => {
      document.querySelectorAll("#emergent-badge").forEach((n) => n.remove());
      document.querySelectorAll("script").forEach((s) => {
        const src = s.getAttribute("src") || "";
        if (src.includes("assets.emergent.sh") || s.textContent.includes("posthog") || s.textContent.includes("PerformanceServerTiming")) s.remove();
      });
    });

    let html = await page.evaluate(() => document.documentElement.outerHTML);
    // Final cleanup for the static export: strip analytics + duplicate default meta.
    html = html
      .replace(/<script[^>]*posthog[^>]*>\s*<\/script>/gi, "")
      .replace(/<script[^>]*src="https:\/\/[^"]*posthog[^"]*"[^>]*>\s*<\/script>/gi, "")
      .replace(/<meta[^>]*content="A product of emergent\.sh"[^>]*>/gi, "");
    rendered[route] = "<!DOCTYPE html>\n" + html;
    await page.close();
    console.log(`[prerender] captured ${route}`);
  }

  await browser.disconnect();
  try { chromeProc.kill("SIGKILL"); } catch (e) {}
  server.close();

  // Write files.
  const routes = Object.keys(rendered).sort();
  for (const route of routes) {
    const outPath = route === "/"
      ? path.join(BUILD_DIR, "index.html")
      : path.join(BUILD_DIR, route, "index.html");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, rendered[route]);
  }

  // sitemap.xml
  const today = new Date().toISOString().split("T")[0];
  const urls = routes
    .map((r) => `  <url>\n    <loc>${SITE_URL}${r === "/" ? "/" : r + "/"}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${r === "/" ? "1.0" : "0.8"}</priority>\n  </url>`)
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(BUILD_DIR, "sitemap.xml"), sitemap);

  console.log(`[prerender] done — ${routes.length} routes, sitemap.xml written`);
}

run().catch((e) => { console.error(e); process.exit(1); });
