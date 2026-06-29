"use client";

import Link from "next/link";
import { Cloud } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { MobileNav } from "@/components/mobile-nav";
import { NAV } from "@/lib/site";
import { useMessages } from "@/components/locale-provider";

export function SiteHeader() {
  const m = useMessages();

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur border-b">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4 sm:px-6">
        {/* Logo / wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          <Cloud className="size-5" aria-hidden="true" />
          <span>{m.hero.title}</span>
        </Link>

        {/* Nav links — hidden on small screens */}
        <nav className="hidden sm:flex items-center gap-1 ml-2" aria-label="Site navigation">
          {NAV.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm"
            >
              {m.nav[key]}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right controls */}
        <LanguageSelector />
        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  );
}
