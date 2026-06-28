import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUY_URL } from "@/lib/site";

const faqs = [
  {
    id: "free",
    question: "Is Greyout free?",
    answer: (
      <p>
        Yes. Greyout is free, with no account and no ads. There&apos;s an
        optional one-time Premium unlock (pay what you want, from €3) if
        you&apos;d like to support development — see below.
      </p>
    ),
  },
  {
    id: "premium",
    question: "What does Premium unlock, and how does it work?",
    answer: (
      <p>
        Premium adds Export, Import, and Backup of your rules and settings.
        It&apos;s a one-time, pay-what-you-want purchase (from €3) through{" "}
        <a href={BUY_URL} target="_blank" rel="noopener noreferrer">
          Polar
        </a>
        , which acts as merchant of record and handles VAT. Your licence key
        works on up to 3 Macs and never expires. Everything else in Greyout is
        free.
      </p>
    ),
  },
  {
    id: "transparency",
    question: "What data does Greyout collect? (Transparency)",
    answer: (
      <p>
        None. Greyout has no analytics, no telemetry, and no tracking. Your
        rules and settings stay on your Mac. The app only reaches the network
        for two things: to check for updates, and — only if you buy Premium —
        to activate your licence with Polar. That&apos;s it.
      </p>
    ),
  },
  {
    id: "notarization",
    question: "Why does macOS say Greyout is from an unidentified developer?",
    answer: (
      <p>
        Greyout isn&apos;t notarized by Apple yet (notarization requires a paid
        Apple Developer account — it&apos;s on the roadmap), so macOS shows a
        caution on first launch. To open it: right-click (or Control-click)
        Greyout → Open → Open; or go to System Settings → Privacy &amp;
        Security and click &lsquo;Open Anyway&rsquo;. You only do this once.
        Updates stay safe regardless: every update is cryptographically signed
        and verified before it installs.
      </p>
    ),
  },
  {
    id: "permissions",
    question: "What permissions does Greyout need?",
    answer: (
      <p>
        Just Accessibility, which macOS requires for Greyout to apply the
        greyscale effect across all your apps. Greyout asks for nothing else.
      </p>
    ),
  },
  {
    id: "macos",
    question: "Which macOS versions are supported?",
    answer: <p>macOS 14 (Sonoma) and later.</p>,
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
];

export function Faq() {
  return (
    <section id="faq" className="mt-24 w-full max-w-3xl text-left">
      <h2 className="text-2xl font-semibold tracking-tight">Questions</h2>
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
    </section>
  );
}
