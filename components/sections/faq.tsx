import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { BUY_URL, SUPPORT_EMAIL } from "@/lib/site";

// Shared style for inline links inside answers so they read as links.
const link = "underline underline-offset-4 hover:text-foreground";

const faqs = [
  {
    id: "free",
    question: "Is Greyout free?",
    answer: (
      <p>
        Yes. Greyout is free, with no account and no ads. There&apos;s an
        optional one-time Premium unlock (pay what you want, from €3) if
        you&apos;d like to support development. See below.
      </p>
    ),
  },
  {
    id: "premium",
    question: "What does Premium unlock, and how does it work?",
    answer: (
      <div className="space-y-4">
        <p>
          Premium adds Export, Import, and Backup of your rules and settings.
          It&apos;s a one-time, pay-what-you-want purchase (from €3) through{" "}
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className={link}>
            Polar
          </a>
          , which acts as merchant of record and handles VAT. Your licence key
          works on up to 3 Macs and never expires. Everything else in Greyout is
          free. Already have a key? Activate it in Greyout → Preferences →
          Premium.
        </p>
        <Button asChild size="sm">
          <a href={BUY_URL} target="_blank" rel="noopener noreferrer">
            Get Premium
          </a>
        </Button>
      </div>
    ),
  },
  {
    id: "difference",
    question: "Why use Greyout instead of the greyscale built into macOS?",
    answer: (
      <p>
        macOS can turn on greyscale, but it&apos;s a static, all-or-nothing
        Accessibility toggle buried in System Settings. Greyout drives that same
        system-level effect, so it greys every app and display, while adding the
        control that makes it usable day to day: per-app rules, schedules, a
        global hotkey, a one-click menu-bar toggle, and the{" "}
        <code>greyout://</code> URL scheme for automation. It also saves and
        restores any Color Filters setting you already use.
      </p>
    ),
  },
  {
    id: "displays",
    question: "Does Greyout grey out all my displays, including external monitors?",
    answer: (
      <p>
        Yes. Greyout applies greyscale across every connected display, including
        external monitors, not just the built-in screen.
      </p>
    ),
  },
  {
    id: "performance",
    question: "Will Greyout slow down my Mac or drain the battery?",
    answer: (
      <p>
        No. Greyout is a tiny, native menu-bar app that uses the system&apos;s
        own colour-filter mechanism, so the greyscale effect adds essentially no
        CPU or battery cost.
      </p>
    ),
  },
  {
    id: "per-app",
    question: "Can Greyout grey only my distracting apps and leave the rest in colour?",
    answer: (
      <p>
        Yes, that&apos;s the core idea. Set per-app rules so distracting apps (or
        any apps you choose) switch to greyscale automatically when they&apos;re
        in front, while everything else stays in colour.
      </p>
    ),
  },
  {
    id: "schedule",
    question: "Can I schedule greyscale?",
    answer: (
      <p>
        Yes. You can have Greyout switch to greyscale on a schedule, for example
        every evening, and back to colour automatically.
      </p>
    ),
  },
  {
    id: "shortcut",
    question: "Can I toggle greyscale with a keyboard shortcut?",
    answer: (
      <p>
        Yes. Assign a global hotkey to flip greyscale on and off instantly, from
        any app.
      </p>
    ),
  },
  {
    id: "automation",
    question: "Can I control Greyout from scripts or other apps?",
    answer: (
      <p>
        Yes. Greyout registers a <code>greyout://</code> URL scheme, so you can
        toggle it from the Terminal (<code>open greyout://toggle</code>), shell
        scripts, or automation tools. A Raycast extension is in testing, with
        Shortcuts and Alfred planned.
      </p>
    ),
  },
  {
    id: "transparency",
    question: "What data does Greyout collect?",
    answer: (
      <p>
        None. Greyout has no analytics, no telemetry, and no tracking. Your
        rules and settings stay on your Mac. The app only reaches the network
        for two things: to check for updates, and (only if you buy Premium) to
        activate your licence with Polar. That&apos;s it.
      </p>
    ),
  },
  {
    id: "licence-recovery",
    question: "How do I recover my Premium licence key if I lose it?",
    answer: (
      <p>
        Your key is in your Polar purchase email. You can also retrieve it from{" "}
        <a href="https://polar.sh" target="_blank" rel="noopener noreferrer" className={link}>
          Polar
        </a>{" "}
        using the email address you bought with. Still stuck? Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={link}>
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    ),
  },
  {
    id: "refund",
    question: "What's the refund policy for Premium?",
    answer: (
      <p>
        Premium is sold through Polar, our merchant of record, so refunds are
        handled under Polar&apos;s policy. If something&apos;s wrong with your
        purchase, reach out at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={link}>
          {SUPPORT_EMAIL}
        </a>{" "}
        and we&apos;ll help sort it out.
      </p>
    ),
  },
  {
    id: "commercial",
    question: "Can I use Greyout — and Premium — at work or commercially?",
    answer: (
      <p>
        Yes. Greyout is free for any use, including at work. Premium is purely an
        optional way to support development and unlock backup of your settings;
        it&apos;s never required, for commercial use or otherwise.
      </p>
    ),
  },
  {
    id: "permissions",
    question: "What permissions does Greyout need?",
    answer: (
      <p>
        Just Accessibility, which macOS requires for Greyout to apply the
        greyscale effect across all your apps. Greyout asks for nothing else: no
        Screen Recording, nothing.
      </p>
    ),
  },
  {
    id: "requirements",
    question: "What are the system requirements?",
    answer: (
      <p>
        macOS 14 (Sonoma) or later, on an Apple-silicon Mac (M-series). Greyout
        is built natively for Apple silicon; Intel Macs aren&apos;t supported.
      </p>
    ),
  },
  {
    id: "updates",
    question: "How do updates work?",
    answer: (
      <p>
        Greyout updates itself in the background using Sparkle. Each update is
        EdDSA-signed and verified before installing, so you always get an
        authentic build.
      </p>
    ),
  },
  {
    id: "menu-bar-missing",
    question: "My menu-bar icon disappeared. How do I get it back?",
    answer: (
      <p>
        It&apos;s almost always a menu-bar manager (Bartender, Ice, the notch on
        newer MacBooks, and so on) hiding the icon rather than Greyout quitting.
        Check your menu-bar manager&apos;s hidden items, or temporarily disable
        it to confirm Greyout is still running.
      </p>
    ),
  },
  {
    id: "accessibility-regrant",
    question:
      "Greyscale stopped working or macOS keeps asking for Accessibility. How do I fix it?",
    answer: (
      <p>
        This usually happens after an update leaves a stale Accessibility
        permission. Open System Settings → Privacy &amp; Security →
        Accessibility, remove Greyout from the list, then add it back and toggle
        it on. That re-grants the permission Greyout needs to apply greyscale.
      </p>
    ),
  },
];

export function Faq() {
  return (
    <Section id="faq" title="Questions">
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-sm font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
