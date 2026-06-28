import { Cloud } from "lucide-react";
import { SUPPORT_EMAIL, GITHUB_URL } from "@/lib/site";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/#changelog", label: "Changelog" },
  { href: `mailto:${SUPPORT_EMAIL}`, label: "Contact" },
  { href: GITHUB_URL, label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-col items-center gap-4 pb-10 text-sm text-muted-foreground">
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
        Made with <Cloud className="inline size-3.5 align-[-2px]" /> ·{" "}
        <a href={GITHUB_URL} className="underline-offset-4 hover:underline">
          caasols
        </a>
      </p>
    </footer>
  );
}
