import { PREMIUM_RAISED_EUR, RUNNING_COSTS } from "@/lib/site";

// Transparency-report answer for the "If Greyout is free, why ask for money?" FAQ.
export function Transparency() {
  const total = RUNNING_COSTS.reduce((sum, c) => sum + c.amount, 0);
  const pct =
    total > 0 ? Math.min(100, Math.round((PREMIUM_RAISED_EUR / total) * 100)) : 0;

  return (
    <div className="space-y-4">
      <p>
        Greyout is free, and it stays free. But keeping it running still costs
        real money out of my own pocket, so in the spirit of the transparency
        reports some newsrooms and research groups publish, here are the running
        costs for 2026 and exactly where the money goes. (This ignores the time
        I spend building, researching, and maintaining it, which I give for
        free.)
      </p>

      <ul className="space-y-1.5">
        {RUNNING_COSTS.map((c) => (
          <li key={c.label} className="flex items-baseline justify-between gap-4">
            <span className="text-foreground">
              {c.label}{" "}
              <span className="text-muted-foreground">({c.detail})</span>
            </span>
            <span className="shrink-0 tabular-nums text-foreground">
              €{c.amount}{" "}
              <span className="font-normal text-muted-foreground">{c.cadence}</span>
            </span>
          </li>
        ))}
        <li className="flex items-baseline justify-between gap-4 border-t border-border pt-1.5">
          <span className="font-medium text-foreground">Total for 2026</span>
          <span className="shrink-0 font-medium tabular-nums text-foreground">
            €{total}
          </span>
        </li>
      </ul>

      <div>
        <div className="flex items-baseline justify-between text-xs">
          <span>Optional Premium has covered</span>
          <span className="font-medium text-foreground tabular-nums">
            €{PREMIUM_RAISED_EUR} of €{total} · {pct}%
          </span>
        </div>
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Share of running costs covered by Premium"
        >
          <div
            className="h-full rounded-full bg-foreground transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <p>
        Premium is how I try to cover this without putting Greyout behind a
        paywall. Anything beyond the running costs goes straight back into
        building it. I&apos;ll update these numbers as Premium comes in.
      </p>
    </div>
  );
}
