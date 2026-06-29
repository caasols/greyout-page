import { Button } from "@/components/ui/button";
import { Cloud, Download } from "lucide-react";
import { DOWNLOAD_URL, APP_VERSION, APP_SIZE } from "@/lib/site";
import { m } from "@/lib/messages";

export function Hero() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border bg-muted/40">
        <Cloud className="size-8 text-muted-foreground" strokeWidth={1.75} />
      </div>

      <h1 className="text-balance text-5xl font-bold tracking-tight font-heading sm:text-6xl">
        {m.hero.title}
      </h1>
      <p className="mt-3 text-xl text-muted-foreground">{m.hero.tagline}</p>
      <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
        {m.hero.body}
      </p>

      <div className="mt-9 flex flex-col items-center gap-3">
        <Button asChild size="lg" className="h-12 px-7 text-base">
          <a href={DOWNLOAD_URL}>
            <Download className="size-5" />
            {m.hero.download}
            {APP_VERSION ? ` · v${APP_VERSION}` : ""}
            {APP_SIZE ? ` · ${APP_SIZE}` : ""}
          </a>
        </Button>
        <p className="text-xs text-muted-foreground">{m.hero.warn}</p>
        <span className="text-sm text-muted-foreground">{m.hero.requirements}</span>
        <p className="text-sm text-muted-foreground">
          {m.hero.freePre}{" "}
          <a href="#faq" className="underline-offset-4 hover:underline">
            {m.hero.freeLink}
          </a>{" "}
          {m.hero.freePost}
        </p>
      </div>
    </div>
  );
}
