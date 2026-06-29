"use client";

import { ChevronDown } from "lucide-react";
import { Section } from "@/components/section";
import { useMessages } from "@/components/locale-provider";
import { type Release } from "@/lib/changelog";

// How many recent releases to show before the "show all" expander.
const VISIBLE_COUNT = 3;

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ReleaseItem({ release }: { release: Release }) {
  return (
    <li className="border-l border-border pl-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-base font-semibold">v{release.version}</h3>
        {release.date && (
          <time dateTime={release.date} className="text-xs text-muted-foreground">
            {formatDate(release.date)}
          </time>
        )}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{release.summary}</p>
    </li>
  );
}

// Release data is fetched at build time by the server <Changelog> and passed in;
// this client view localizes the surrounding labels (the notes themselves are
// authored in English upstream).
export function ChangelogView({ releases }: { releases: Release[] }) {
  const m = useMessages();
  const visible = releases.slice(0, VISIBLE_COUNT);
  const hidden = releases.slice(VISIBLE_COUNT);

  return (
    <Section
      id="changelog"
      title={m.changelog.title}
      subtitle={m.changelog.subtitle}
    >
      {releases.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">
          {m.changelog.noReleases}
        </p>
      ) : (
        <>
          <ol className="mt-8 space-y-6">
            {visible.map((release) => (
              <ReleaseItem key={release.version} release={release} />
            ))}
          </ol>

          {hidden.length > 0 && (
            <details className="group mt-6">
              <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline [&::-webkit-details-marker]:hidden">
                <ChevronDown
                  className="size-4 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
                <span className="group-open:hidden">
                  {(hidden.length > 1
                    ? m.changelog.showEarlierMany
                    : m.changelog.showEarlierOne
                  ).replace("{count}", String(hidden.length))}
                </span>
                <span className="hidden group-open:inline">
                  {m.changelog.showFewer}
                </span>
              </summary>
              <ol className="mt-6 space-y-6">
                {hidden.map((release) => (
                  <ReleaseItem key={release.version} release={release} />
                ))}
              </ol>
            </details>
          )}
        </>
      )}
    </Section>
  );
}
