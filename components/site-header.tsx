import Link from "next/link";
import { Cloud } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur border-b">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4 sm:px-6">
        {/* Logo / wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          <Cloud className="size-5" aria-hidden="true" />
          <span>Greyout</span>
        </Link>

        {/* Nav links — hidden on small screens */}
        <nav className="hidden sm:flex items-center gap-1 ml-2" aria-label="Site navigation">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right controls */}
        <ThemeToggle />
      </div>
    </header>
  );
}
