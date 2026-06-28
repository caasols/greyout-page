import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms — Greyout",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: 2026-06-28</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-semibold">Plain-English summary</h2>
          <p className="text-muted-foreground">
            This page explains the terms under which you can use Greyout. It is
            written in plain English and is not a substitute for legal advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">No warranty</h2>
          <p className="text-muted-foreground">
            Greyout (the free app) is provided &ldquo;as is&rdquo;, without
            warranty of any kind, express or implied. You use it at your own
            risk. To the maximum extent permitted by applicable law, the authors
            of Greyout exclude all liability for any loss or damage arising from
            your use of the app.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Premium licence</h2>
          <p className="text-muted-foreground">
            Greyout Premium is sold by{" "}
            <a
              href="https://polar.sh/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Polar.sh
            </a>{" "}
            as merchant of record. When you purchase Premium, you agree to
            Polar&apos;s terms in addition to these. The licence is:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Per-user</span> —
              one licence is for one person only and is non-transferable.
            </li>
            <li>
              <span className="font-medium text-foreground">Up to 3 devices</span>{" "}
              — you may activate the licence on up to three Macs that you own or
              control.
            </li>
            <li>
              <span className="font-medium text-foreground">No expiry</span> —
              a licence is a one-time purchase with no recurring fee.
            </li>
            <li>
              <span className="font-medium text-foreground">Refunds</span> —
              handled by Polar in accordance with their{" "}
              <a
                href="https://polar.sh/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Terms of Service
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Permitted use</h2>
          <p className="text-muted-foreground">
            You may use Greyout for personal or professional purposes on devices
            you own or control. You may not redistribute, sublicense, or resell
            the app or your licence key.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            Questions about these terms? Get in touch at{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
