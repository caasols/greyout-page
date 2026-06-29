import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/lib/site";
import { m } from "@/lib/messages";

export const metadata: Metadata = {
  title: m.meta.privacyTitle,
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: 2026-06-28</p>
      <p className="mt-1 text-sm text-muted-foreground">Available only in English.</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-semibold">The short version</h2>
          <p className="text-muted-foreground">
            Greyout is local-first. It collects no analytics, no telemetry, and
            does no tracking. Your settings and rules never leave your Mac.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">What data Greyout collects</h2>
          <p className="text-muted-foreground">
            None. Greyout stores your preferences and per-app rules exclusively
            on your device. No account is required, and nothing is transmitted
            to any server operated by Greyout. The app does make two
            third-party network requests — for update checks and (only if you
            buy Premium) licence validation — described in &lsquo;Network
            requests&rsquo; below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Network requests</h2>
          <p className="text-muted-foreground">
            The app contacts the network for exactly two purposes:
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Update checks.</span>{" "}
              Greyout periodically checks for new versions by fetching the
              app&apos;s update feed (appcast), hosted on GitHub. Only a
              version-check request is made; no personal information is
              included.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Premium licence activation.
              </span>{" "}
              If and only if you purchase a Premium licence, Greyout contacts
              Polar to validate your licence key. This request is only ever
              made at your direction.
            </li>
          </ol>
          <p className="text-muted-foreground">
            These are the only two network calls the app makes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Third-party processors</h2>
          <p className="text-muted-foreground">
            Two third-party services are involved in delivering Greyout:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">GitHub</span> —
              hosts the app download and the update feed. GitHub&apos;s
              infrastructure handles the file transfer when you download Greyout
              or when the app checks for an update.
            </li>
            <li>
              <span className="font-medium text-foreground">Polar.sh</span> —
              processes payments and issues licence keys for Premium buyers
              only. Polar acts as merchant of record and handles VAT. If you do
              not purchase Premium, Polar is never involved.{" "}
              <a
                href="https://polar.sh/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Polar&apos;s Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Cookies and tracking</h2>
          <p className="text-muted-foreground">
            Greyout the app sets no cookies and uses no tracking technologies.
            This website (greyout.cc) likewise uses no analytics or tracking
            scripts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            Questions about this policy? Get in touch at{" "}
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
