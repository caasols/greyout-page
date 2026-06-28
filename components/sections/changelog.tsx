import { RELEASES } from "@/lib/changelog";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Changelog() {
  return (
    <section id="changelog" className="mt-24 w-full max-w-3xl text-left">
      <h2 className="text-2xl font-semibold tracking-tight">Changelog</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Greyout updates itself automatically. Here&apos;s what&apos;s changed.
      </p>

      <ol className="mt-8 space-y-6">
        {RELEASES.map((release) => (
          <li key={release.version} className="border-l border-border pl-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold">v{release.version}</h3>
              <time
                dateTime={release.date}
                className="text-xs text-muted-foreground"
              >
                {formatDate(release.date)}
              </time>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{release.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
