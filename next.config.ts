import type { NextConfig } from "next";

// Static export for GitHub Pages. The site is served from the /greyout-page
// subpath today (https://caasols.github.io/greyout-page/); when greyout.cc is
// wired as a custom domain at the root, set BASE_PATH="" (or unset it).
const basePath = process.env.BASE_PATH ?? "/greyout-page";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // appcast.xml + other static assets must resolve at the same path;
  // unoptimized images are required for a static export (no image server).
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
