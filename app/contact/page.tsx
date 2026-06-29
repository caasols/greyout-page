import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/site";
import { m } from "@/lib/messages";

const c = m.contact;
const linkCls = "underline underline-offset-4 hover:text-foreground";

export const metadata: Metadata = {
  title: m.meta.contactTitle,
  description: m.meta.contactDescription,
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">{c.heading}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{c.intro}</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-semibold">{c.emailHeading}</h2>
          <p className="text-muted-foreground">
            {c.emailPre}
            <a href={`mailto:${SUPPORT_EMAIL}`} className={linkCls}>
              {SUPPORT_EMAIL}
            </a>
            {c.emailPost}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">{c.bugHeading}</h2>
          <p className="text-muted-foreground">{c.bugIntro}</p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              {c.bugItem1Pre}
              <span className="font-medium text-foreground">{c.bugItem1Strong1}</span>
              {c.bugItem1Mid}
              <span className="font-medium text-foreground">{c.bugItem1Strong2}</span>
              {c.bugItem1Post}
            </li>
            <li>{c.bugItem2}</li>
            <li>{c.bugItem3}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">{c.premiumHeading}</h2>
          <p className="text-muted-foreground">
            {c.premiumPre}
            <a
              href="https://polar.sh"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              {c.premiumLink}
            </a>
            {c.premiumPost}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold">{c.beforeHeading}</h2>
          <p className="text-muted-foreground">
            {c.beforePre}
            <Link href="/#faq" className={linkCls}>
              {c.beforeLink}
            </Link>
            {c.beforePost}
          </p>
        </section>
      </div>
    </main>
  );
}
