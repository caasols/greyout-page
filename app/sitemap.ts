import type { MetadataRoute } from "next";

// Emitted as a static /sitemap.xml at build (output: "export").
export const dynamic = "force-static";

const BASE = "https://greyout.cc";

// Indexable pages only. /success is intentionally excluded (noindex).
// Trailing slashes match the site's trailingSlash: true canonical URLs.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/privacy/`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/terms/`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/contact/`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
