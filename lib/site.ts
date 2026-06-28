export const DOWNLOAD_URL =
  "https://github.com/caasols/greyout-page/releases/latest/download/Greyout-macOS.zip";
export const BUY_URL =
  "https://buy.polar.sh/polar_cl_iT4TD2VSkrQfucsiKgyMiu112QF5s9cEC9pjD0EQ5LT";
export const SUPPORT_EMAIL = "hello@greyout.cc";
export const GITHUB_URL = "https://github.com/caasols";
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? null;
export const APP_SIZE = process.env.NEXT_PUBLIC_APP_SIZE ?? null; // e.g. "1.3 MB"

// Transparency report (powers the "If Greyout is free, why ask for money?" FAQ).
// Out-of-pocket costs to keep Greyout running, and how much optional Premium has
// covered so far. Bump PREMIUM_RAISED_EUR as sales come in; the bar updates itself.
export const PREMIUM_RAISED_EUR = 0;
export const RUNNING_COSTS = [
  { label: "Domain", detail: "Namecheap", amount: 12, cadence: "per year" },
  { label: "Build & research", detail: "AI tokens", amount: 25, cadence: "one-time" },
  { label: "Maintenance, polish & bug fixes", detail: "AI tokens", amount: 0, cadence: "so far" },
  { label: "Notarization", detail: "Apple Developer", amount: 90, cadence: "per year" },
] as const;

// Root-relative anchors so the nav works from any page (e.g. /privacy), not
// just the home page. Order mirrors the on-page section flow.
export const NAV = [
  { href: "/#see-it", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#changelog", label: "Changelog" },
];
