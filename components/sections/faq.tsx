"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { Transparency } from "@/components/transparency";
import { BUY_URL, SUPPORT_EMAIL } from "@/lib/site";
import { useMessages } from "@/components/locale-provider";

// Shared style for inline links inside answers so they read as links.
const link = "underline underline-offset-4 hover:text-foreground";

export function Faq() {
  const m = useMessages();
  const f = m.faq;

  const faqs = [
    { id: "free", question: f.free.q, answer: <p>{f.free.a}</p> },
    { id: "why-pay", question: f.whyPay.q, answer: <Transparency /> },
    {
      id: "premium",
      question: f.premium.q,
      answer: (
        <div className="space-y-4">
          <p>
            {f.premium.a1}
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className={link}>
              {f.premium.polar}
            </a>
            {f.premium.a2}
          </p>
          <Button asChild size="sm">
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer">
              {f.premium.cta}
            </a>
          </Button>
        </div>
      ),
    },
    {
      id: "difference",
      question: f.difference.q,
      answer: (
        <p>
          {f.difference.a1}
          <code>{f.difference.code}</code>
          {f.difference.a2}
        </p>
      ),
    },
    { id: "displays", question: f.displays.q, answer: <p>{f.displays.a}</p> },
    { id: "performance", question: f.performance.q, answer: <p>{f.performance.a}</p> },
    { id: "per-app", question: f.perApp.q, answer: <p>{f.perApp.a}</p> },
    { id: "schedule", question: f.schedule.q, answer: <p>{f.schedule.a}</p> },
    { id: "shortcut", question: f.shortcut.q, answer: <p>{f.shortcut.a}</p> },
    {
      id: "automation",
      question: f.automation.q,
      answer: (
        <p>
          {f.automation.a1}
          <code>{f.automation.code1}</code>
          {f.automation.a2}
          <code>{f.automation.code2}</code>
          {f.automation.a3}
        </p>
      ),
    },
    {
      id: "transparency",
      question: f.transparencyData.q,
      answer: <p>{f.transparencyData.a}</p>,
    },
    {
      id: "licence-recovery",
      question: f.licenceRecovery.q,
      answer: (
        <p>
          {f.licenceRecovery.a1}
          <a href="https://polar.sh" target="_blank" rel="noopener noreferrer" className={link}>
            {f.licenceRecovery.polar}
          </a>
          {f.licenceRecovery.a2}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={link}>
            {SUPPORT_EMAIL}
          </a>
          {f.licenceRecovery.a3}
        </p>
      ),
    },
    {
      id: "refund",
      question: f.refund.q,
      answer: (
        <p>
          {f.refund.a1}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={link}>
            {SUPPORT_EMAIL}
          </a>
          {f.refund.a2}
        </p>
      ),
    },
    { id: "commercial", question: f.commercial.q, answer: <p>{f.commercial.a}</p> },
    { id: "permissions", question: f.permissions.q, answer: <p>{f.permissions.a}</p> },
    { id: "requirements", question: f.requirements.q, answer: <p>{f.requirements.a}</p> },
    { id: "updates", question: f.updates.q, answer: <p>{f.updates.a}</p> },
    {
      id: "menu-bar-missing",
      question: f.menuBarMissing.q,
      answer: <p>{f.menuBarMissing.a}</p>,
    },
    {
      id: "accessibility-regrant",
      question: f.accessibilityRegrant.q,
      answer: <p>{f.accessibilityRegrant.a}</p>,
    },
  ];

  return (
    <Section id="faq" title={f.title}>
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
