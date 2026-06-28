export interface Release {
  version: string;
  date: string; // ISO (yyyy-mm-dd)
  summary: string;
}

// Curated public release history, newest first. The Sparkle appcast only
// carries the latest build, so the on-page changelog reads from this list.
// Add an entry here whenever you cut a release (mirror the GitHub release note).
export const RELEASES: Release[] = [
  {
    version: "0.9.1",
    date: "2026-06-28",
    summary:
      "Premium polish: Activate is disabled while a request is in flight (protecting your key's 3 device slots), and status messages now word-wrap.",
  },
  {
    version: "0.9.0",
    date: "2026-06-28",
    summary:
      "Premium now uses Polar licence keys — paste your GREYOUT-… key in Preferences → Premium (validated online once, then works offline).",
  },
  {
    version: "0.8.0",
    date: "2026-06-27",
    summary:
      "HUD-free greyscale toggling — no more system filter HUD on every switch — and schedule windows now start disabled until you enable them.",
  },
  {
    version: "0.7.1",
    date: "2026-06-27",
    summary: "Copy and paste now work in text fields (such as the licence key).",
  },
  {
    version: "0.7.0",
    date: "2026-06-27",
    summary:
      "Greyscale now applies to all displays (external monitors fixed); it saves and restores your previous filter state and reverts on quit.",
  },
  {
    version: "0.6.0",
    date: "2026-06-27",
    summary:
      "Premium tier with export / import / backup, plus snooze, a schedule tab, global hotkeys, launch-at-login, and media exclusions.",
  },
  {
    version: "0.3.0",
    date: "2026-06-27",
    summary: "Activate for a set duration — timed greyscale that reverts automatically.",
  },
  {
    version: "0.2.3",
    date: "2026-06-27",
    summary: "Self-update enabled, with fixes and refinements.",
  },
  {
    version: "0.2.2",
    date: "2026-06-27",
    summary:
      "First release — a tiny menu-bar greyscale app with built-in self-update (Sparkle).",
  },
];
