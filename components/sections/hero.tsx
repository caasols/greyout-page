import { Button } from "@/components/ui/button";
import { Cloud, Download } from "lucide-react";
import { DOWNLOAD_URL, APP_VERSION, APP_SIZE } from "@/lib/site";

export function Hero() {
  const version = APP_VERSION;
  const size = APP_SIZE;
  return (
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
            Download for macOS{version ? ` · v${version}` : ""}{size ? ` · ${size}` : ""}
          </a>
        </Button>
        <p className="text-xs text-muted-foreground">
          macOS may warn on first open —{" "}
          <a href="#faq" className="underline-offset-4 hover:underline">
            here&apos;s why &amp; how
          </a>
        </p>
        <span className="text-sm text-muted-foreground">
          Requires macOS 14+ · free · self-updating
        </span>
        <p className="text-sm text-muted-foreground">
          Free forever —{" "}
          <a href="#faq" className="underline-offset-4 hover:underline">
            optional Premium
          </a>{" "}
          to support development
        </p>
      </div>
    </div>
  );
}
