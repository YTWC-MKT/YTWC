import { Helmet } from "react-helmet-async";
import { SITE_URL, ORG_SCHEMA, breadcrumbSchema, withSlash } from "../data/seo";

// Renders per-page <title>, meta description, canonical + JSON-LD (Org + Breadcrumb always,
// plus any extra schemas passed in). Captured into static HTML during prerender.
export default function Seo({ title, description, path = "", breadcrumbs, schemas = [] }) {
  const canonical = `${SITE_URL}${withSlash(path)}`;
  const graph = [ORG_SCHEMA];
  if (breadcrumbs && breadcrumbs.length) graph.push(breadcrumbSchema(breadcrumbs));
  graph.push(...schemas);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      {graph.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
