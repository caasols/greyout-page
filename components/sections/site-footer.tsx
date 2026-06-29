"use client";

import { Cloud } from "lucide-react";
import { useMessages } from "@/components/locale-provider";

export function SiteFooter() {
  const m = useMessages();
  const footerLinks = [
    { href: "/privacy", label: m.footer.privacy },
    { href: "/terms", label: m.footer.terms },
    { href: "/#changelog", label: m.footer.changelog },
    { href: "/contact", label: m.footer.contact },
  ];

  return (
    <footer className="mt-24 pb-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p>
          {m.footer.madeWith}{" "}
          <Cloud className="inline size-3.5 align-[-2px]" /> · {m.footer.author}
        </p>
      </div>
    </footer>
  );
}
