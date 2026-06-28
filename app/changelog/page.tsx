import type { Metadata } from "next";
import Link from "next/link";
import { readAppcast } from "@/lib/appcast";

export const metadata: Metadata = {
  title: "Changelog — Greyout",
};

function formatDate(pubDate: string): string {
  if (!pubDate) return "";
  try {
    const d = new Date(pubDate);
    if (isNaN(d.getTime())) return pubDate;
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return pubDate;
  }
}

export default function ChangelogPage() {
  const releases = readAppcast();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Changelog</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Release history for Greyout.
      </p>

      <div className="mt-10 space-y-10">
        {releases.length === 0 ? (
          <p className="text-sm text-muted-foreground">No releases yet.</p>
        ) : (
          releases.map((release) => (
            <section key={release.version} className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-base font-semibold">{release.title}</h2>
                {release.pubDate && (
                  <time
                    dateTime={new Date(release.pubDate).toISOString().slice(0, 10)}
                    className="text-xs text-muted-foreground"
                  >
                    {formatDate(release.pubDate)}
                  </time>
                )}
              </div>
              {release.notesHtml ? (
                <div
                  className="text-sm text-muted-foreground space-y-2 [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1"
                  dangerouslySetInnerHTML={{ __html: release.notesHtml }}
                />
              ) : (
                <p className="text-sm text-muted-foreground">
                  Initial release.
                </p>
              )}
            </section>
          ))
        )}
      </div>

      <p className="mt-16 text-sm text-muted-foreground">
        <Link
          href="/"
          className="underline underline-offset-4 hover:text-foreground"
        >
          ← Back to home
        </Link>
      </p>
    </main>
  );
}
