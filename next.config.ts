import type { NextConfig } from "next";

// Static export for GitHub Pages. The site is now served at the custom-domain
// ROOT (https://greyout.cc/ — see public/CNAME), so basePath is empty: assets must
// be root-relative (/_next/...), NOT /greyout-page/_next/... To build for the bare
// github.io subpath again, set BASE_PATH="/greyout-page".
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // appcast.xml + other static assets must resolve at the same path;
  // unoptimized images are required for a static export (no image server).
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
