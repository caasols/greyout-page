import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUY_URL, DOWNLOAD_URL } from "@/lib/site";

const free = [
  "Per-app rules, schedules, and one-keypress toggle",
  "Global hotkeys + the greyout:// URL scheme",
  "Free forever — no account, no ads, no tracking",
];

const premium = [
  "Export, Import & Backup of your rules and settings",
  "Works on up to 3 Macs · never expires",
  "Sold via Polar (merchant of record — handles VAT)",
];

export function Premium() {
  return (
    <section id="premium" className="mt-24 w-full max-w-5xl px-6 text-left">
      <h2 className="text-2xl font-semibold tracking-tight">Premium</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Greyout is free. Premium is an optional, one-time way to support
        development — and it unlocks backup for your setup.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {/* Free */}
        <div className="flex flex-col rounded-xl border bg-card p-6">
          <h3 className="font-medium">Free</h3>
          <p className="mt-1 text-2xl font-semibold tracking-tight">€0</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {free.map((f) => (
              <li key={f} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-6 w-full">
            <a href={DOWNLOAD_URL}>Download Greyout</a>
          </Button>
        </div>

        {/* Premium */}
        <div className="flex flex-col rounded-xl border bg-card p-6 ring-1 ring-foreground/10">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Premium</h3>
            <span className="rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Pay what you want
            </span>
          </div>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            from €3{" "}
            <span className="text-sm font-normal text-muted-foreground">
              · one-time
            </span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {premium.map((f) => (
              <li key={f} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 w-full">
            <a href={BUY_URL} target="_blank" rel="noopener noreferrer">
              Get Premium
            </a>
          </Button>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Secure checkout via Polar. Already have a key? Activate it in Greyout →
        Preferences → Premium.
      </p>
    </section>
  );
}
