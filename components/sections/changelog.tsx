import { RELEASES as FALLBACK, type Release } from "@/lib/changelog";

const RELEASES_API =
  "https://api.github.com/repos/caasols/greyout-page/releases?per_page=100";

interface GitHubRelease {
  tag_name?: string;
  name?: string | null;
  body?: string | null;
  published_at?: string | null;
  created_at?: string | null;
  draft?: boolean;
  prerelease?: boolean;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function compareVersionDesc(a: string, b: string): number {
  const pa = a.split(".").map((n) => parseInt(n, 10) || 0);
  const pb = b.split(".").map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pb[i] ?? 0) - (pa[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

// GitHub release bodies look like: "Greyout 0.9.1 — premium polish… See CHANGELOG.md".
// Keep the first line, drop the "Greyout x.y.z —" prefix and the boilerplate tail.
function cleanSummary(
  body: string | null,
  name: string | null,
  version: string,
): string {
  // Notes may be a one-liner ("Greyout 0.9.1 — …") or a CHANGELOG.md section
  // (markdown: ### sub-heading, then bullets that hard-wrap across lines). Skip
  // leading blanks/headings, then gather the first block — a bullet plus its
  // wrapped continuation, or the first prose paragraph — stopping at a blank
  // line, a new bullet, or a heading. Then strip markdown.
  const lines = (body ?? "").split(/\r?\n/);
  let i = 0;
  while (i < lines.length && (!lines[i].trim() || /^\s*#{1,6}\s/.test(lines[i]))) i++;
  const block: string[] = [];
  for (let j = i; j < lines.length; j++) {
    if (!lines[j].trim()) break;
    if (j > i && /^\s*([-*]\s|#{1,6}\s)/.test(lines[j])) break;
    block.push(lines[j].trim());
  }
  let s = block.join(" ");
  s = s.replace(/^[-*]\s+/, ""); // leading bullet marker
  s = s.replace(/\*\*([^*]+)\*\*/g, "$1"); // **bold**
  s = s.replace(/`([^`]+)`/g, "$1"); // `code`
  s = s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1"); // [text](link)
  s = s.replace(/^Greyout\s+v?[\d.]+\s*[—–-]\s*/i, ""); // "Greyout x.y.z —" prefix
  s = s.replace(/\s*See\s+CHANGELOG(\.md)?\.?/gi, " ").replace(/\s{2,}/g, " ").trim();
  s = s.replace(/^[\s.,;:–—-]+/, "").trim();
  if (!s) s = name?.trim() || `Version ${version}`;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Fetched once at build time (static export bakes the result). Falls back to the
// curated snapshot in lib/changelog.ts if the API is unavailable or rate-limited,
// so the build never breaks and the section is never empty.
async function getReleases(): Promise<Release[]> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const res = await fetch(RELEASES_API, {
      cache: "force-cache",
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as GitHubRelease[];
    const releases = data
      .filter((r) => !r.draft && !r.prerelease)
      .map((r) => {
        const version = (r.tag_name || r.name || "").replace(/^v/i, "").trim();
        return {
          version,
          date: (r.published_at || r.created_at || "").slice(0, 10),
          summary: cleanSummary(r.body ?? null, r.name ?? null, version),
        };
      })
      .filter((r) => r.version)
      .sort((a, b) => compareVersionDesc(a.version, b.version));
    return releases.length ? releases : FALLBACK;
  } catch {
    return FALLBACK;
  }
}

export async function Changelog() {
  const releases = await getReleases();

  return (
    <section id="changelog" className="mt-24 w-full max-w-3xl text-left">
      <h2 className="text-2xl font-semibold tracking-tight">Changelog</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Greyout updates itself automatically. Here&apos;s what&apos;s changed.
      </p>

      {releases.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">No releases yet.</p>
      ) : (
        <ol className="mt-8 space-y-6">
          {releases.map((release) => (
            <li key={release.version} className="border-l border-border pl-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold">v{release.version}</h3>
                {release.date && (
                  <time
                    dateTime={release.date}
                    className="text-xs text-muted-foreground"
                  >
                    {formatDate(release.date)}
                  </time>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{release.summary}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
