import { Cloud } from "lucide-react";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/#changelog", label: "Changelog" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 pb-10 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p>
          Made with <Cloud className="inline size-3.5 align-[-2px]" /> · caasols
        </p>
      </div>
    </footer>
  );
}
