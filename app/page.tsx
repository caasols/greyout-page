import { Button } from "@/components/ui/button";
import { Cloud, AppWindow, CalendarClock, Keyboard, Download } from "lucide-react";

const DOWNLOAD_URL =
  "https://github.com/caasols/greyout-page/releases/latest/download/Greyout-macOS.zip";

const features = [
  { icon: AppWindow, title: "Per-app rules", body: "Auto-grey distracting apps; keep colour where you need it." },
  { icon: CalendarClock, title: "On a schedule", body: "Wind down into greyscale toward the evening, automatically." },
  { icon: Keyboard, title: "One keypress", body: "Toggle from the menu bar — or any tool via the greyout:// scheme." },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border bg-muted/40">
          <Cloud className="size-8 text-muted-foreground" strokeWidth={1.75} />
        </div>

        <h1 className="text-balance text-5xl font-bold tracking-tight font-heading sm:text-6xl">
          Greyout
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Grey out your screen. Kill the distraction.
        </p>
        <p className="mx-auto mt-5 max-w-md text-pretty text-muted-foreground">
          A tiny macOS menu-bar app that desaturates your screen to reduce the pull of
          colour and notifications — automatically per app, on a schedule, or with one keypress.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <Button asChild size="lg" className="h-12 px-7 text-base">
            <a href={DOWNLOAD_URL}>
              <Download className="size-5" />
              Download for macOS
            </a>
          </Button>
          <span className="text-sm text-muted-foreground">
            Requires macOS 14+ · free · self-updating
          </span>
        </div>

        <div className="mt-20 grid gap-6 text-left sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-5">
              <f.icon className="size-5 text-muted-foreground" strokeWidth={1.75} />
              <h3 className="mt-3 font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-24 text-sm text-muted-foreground">
        Made with <Cloud className="inline size-3.5 align-[-2px]" /> ·{" "}
        <a href="https://github.com/caasols" className="underline-offset-4 hover:underline">
          caasols
        </a>
      </footer>
    </main>
  );
}
