/* eslint-disable */
// Runs as `prebuild` (before every `yarn build`). Pulls the most recent upload
// from the YTWC YouTube channel via its public RSS feed (no API key/quota
// needed) and writes it to src/data/latestVideo.json, which the Portfolio
// page imports as a static value. If the fetch fails for any reason (no
// network, channel has no videos, feed format changes), it writes a null
// result instead of failing the build — the site should never break because
// YouTube was unreachable at build time.
const fs = require("fs");
const https = require("https");
const path = require("path");

const CHANNEL_ID = "UCuxF9seWKYo09VAG1n7_MFw"; // youtube.com/@YTWC-Studio
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const OUT_PATH = path.join(__dirname, "..", "src", "data", "latestVideo.json");

function fetchText(url, redirectsLeft = 3) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirectsLeft > 0) {
          res.resume();
          resolve(fetchText(res.headers.location, redirectsLeft - 1));
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function run() {
  let result = null;
  try {
    const xml = await fetchText(FEED_URL);
    const firstEntry = xml.split("<entry>")[1];
    if (firstEntry) {
      const videoId = (firstEntry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1];
      const title = (firstEntry.match(/<title>([^<]+)<\/title>/) || [])[1];
      const published = (firstEntry.match(/<published>([^<]+)<\/published>/) || [])[1];
      if (videoId && title) {
        result = {
          videoId,
          title: decodeEntities(title),
          publishedAt: published || null,
          url: `https://www.youtube.com/watch?v=${videoId}`,
          // YouTube's thumbnail CDN follows a fixed, documented URL pattern —
          // no need to scrape it out of the feed.
          thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          fetchedAt: new Date().toISOString(),
        };
      }
    }
    if (result) {
      console.log(`[fetch-latest-video] latest: "${result.title}" (${result.videoId})`);
    } else {
      console.warn("[fetch-latest-video] feed returned no entries, writing empty result");
    }
  } catch (e) {
    console.warn(`[fetch-latest-video] fetch failed (${e.message}), keeping site build going with no latest video`);
  }
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(result, null, 2) + "\n");
}

run();
