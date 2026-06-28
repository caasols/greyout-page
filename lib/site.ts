export const DOWNLOAD_URL =
  "https://github.com/caasols/greyout-page/releases/latest/download/Greyout-macOS.zip";
export const BUY_URL =
  "https://buy.polar.sh/polar_cl_iT4TD2VSkrQfucsiKgyMiu112QF5s9cEC9pjD0EQ5LT";
export const SUPPORT_EMAIL = "hello@greyout.cc";
export const GITHUB_URL = "https://github.com/caasols";
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? null;
export const APP_SIZE = process.env.NEXT_PUBLIC_APP_SIZE ?? null; // e.g. "1.3 MB"
// Root-relative anchors so the nav works from any page (e.g. /privacy), not
// just the home page. Order mirrors the on-page section flow.
export const NAV = [
  { href: "/#see-it", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#premium", label: "Premium" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#changelog", label: "Changelog" },
];
