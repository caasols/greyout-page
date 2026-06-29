"use client";

import Link from "next/link";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL, SUPPORT_EMAIL } from "@/lib/site";
import { useMessages } from "@/components/locale-provider";

const linkCls = "underline underline-offset-4 hover:text-foreground";

export function SuccessBody() {
  const s = useMessages().success;

  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-6 py-24 text-center">
      <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border bg-muted/40">
        <Check className="size-7 text-foreground" strokeWidth={2} aria-hidden="true" />
      </div>

      <h1 className="text-3xl font-semibold tracking-tight">{s.heading}</h1>
      <p className="mt-3 text-pretty text-muted-foreground">{s.body}</p>

      <div className="mt-8 w-full rounded-xl border bg-card p-6 text-left">
        <h2 className="text-base font-semibold">{s.activateHeading}</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
          <li>{s.step1}</li>
          <li>
            {s.step2Pre}
            <span className="font-medium text-foreground">{s.step2Strong}</span>
            {s.step2Post}
          </li>
          <li>{s.step3}</li>
        </ol>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <Button asChild size="lg" className="h-12 px-7 text-base">
          <a href={DOWNLOAD_URL}>
            <Download className="size-5" />
            {s.download}
          </a>
        </Button>
        <Link
          href="/"
          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          {s.back}
        </Link>
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        {s.troublePre}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={linkCls}>
          {SUPPORT_EMAIL}
        </a>
        {s.troublePost}
      </p>
    </main>
  );
}
