import type { Metadata } from "next";
import Link from "next/link";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you — Greyout Premium",
  // Order pages shouldn't be indexed.
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-6 py-24 text-center">
      <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border bg-muted/40">
        <Check className="size-7 text-foreground" strokeWidth={2} aria-hidden="true" />
      </div>

      <h1 className="text-3xl font-semibold tracking-tight">
        Thank you for supporting Greyout
      </h1>
      <p className="mt-3 text-pretty text-muted-foreground">
        Your payment went through and your Premium licence is on its way. Polar
        (our merchant of record) is emailing your licence key now — check your
        inbox, and your spam folder if it doesn&apos;t arrive in a few minutes.
      </p>

      <div className="mt-8 w-full rounded-xl border bg-card p-6 text-left">
        <h2 className="text-base font-semibold">Activate your licence</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
          <li>Open the licence email from Polar and copy your key.</li>
          <li>
            In Greyout, go to{" "}
            <span className="font-medium text-foreground">
              Preferences → Premium
            </span>
            .
          </li>
          <li>Paste your key and activate — that&apos;s it.</li>
        </ol>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <Button asChild size="lg" className="h-12 px-7 text-base">
          <a href={DOWNLOAD_URL}>
            <Download className="size-5" />
            Download for macOS
          </a>
        </Button>
        <Link
          href="/"
          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          Back to greyout.cc
        </Link>
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        Trouble with your key or didn&apos;t get the email? Reach out at{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="underline underline-offset-4 hover:text-foreground"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </main>
  );
}
