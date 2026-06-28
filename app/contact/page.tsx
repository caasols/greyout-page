import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORT_EMAIL, GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Greyout",
  description:
    "Get in touch about Greyout — support, Premium licences, bugs, and feedback.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Greyout is a small, independent project — email is the best way to reach
        me, and I read every message.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-semibold">Email</h2>
          <p className="text-muted-foreground">
            Write to{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {SUPPORT_EMAIL}
            </a>
            . I usually reply within a couple of working days. There&apos;s no
            ticket system and no chatbot — just me.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">
            Reporting a bug or something not working?
          </h2>
          <p className="text-muted-foreground">
            A few details help me fix things faster. Where you can, include:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              Your <span className="font-medium text-foreground">Greyout version</span>{" "}
              (Settings → About) and your{" "}
              <span className="font-medium text-foreground">macOS version</span>.
            </li>
            <li>What you did, what you expected, and what happened instead.</li>
            <li>
              A screenshot if it&apos;s something visual, or the steps to
              reproduce it.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Premium &amp; licences</h2>
          <p className="text-muted-foreground">
            Your Premium licence key is in your Polar purchase email, and you can
            recover it from{" "}
            <a
              href="https://polar.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Polar
            </a>{" "}
            using the email you bought with. Polar handles payments, VAT, and
            refunds as merchant of record — but if anything goes wrong, email me
            and I&apos;ll help sort it out.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">Before you write</h2>
          <p className="text-muted-foreground">
            Many common questions — permissions, the &lsquo;unidentified
            developer&rsquo; prompt, per-app rules, refunds — are answered in the{" "}
            <Link
              href="/#faq"
              className="underline underline-offset-4 hover:text-foreground"
            >
              FAQ
            </Link>
            . The code and issues live on{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              GitHub
            </a>{" "}
            too.
          </p>
        </section>
      </div>
    </main>
  );
}
