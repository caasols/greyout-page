import type { MetadataRoute } from "next";

// Emitted as a static /robots.txt at build (output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/success/", // post-purchase page, noindex
    },
    sitemap: "https://greyout.cc/sitemap.xml",
    host: "https://greyout.cc",
  };
}
