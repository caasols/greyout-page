import {
  AppWindow,
  CalendarClock,
  Keyboard,
  Command,
  Terminal,
  Workflow,
  Search,
} from "lucide-react";
import { m } from "@/lib/messages";

// Icons stay here (not copy); they map to the message arrays by index.
const featureIcons = [AppWindow, CalendarClock, Keyboard];
const integrationIcons = [Command, Terminal, Workflow, Search];

export function Features() {
  return (
    <section id="features" className="mt-24 w-full max-w-5xl text-left">
      <div className="grid gap-6 sm:grid-cols-3">
        {m.features.items.map((f, i) => {
          const Icon = featureIcons[i];
          return (
            <div key={f.title} className="rounded-xl border bg-card p-5">
              <Icon className="size-5 text-muted-foreground" strokeWidth={1.75} />
              <h3 className="mt-3 font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {m.features.integrations.map((f, i) => {
          const Icon = integrationIcons[i];
          return (
            <div key={f.title} className="rounded-xl border bg-card p-5">
              <Icon className="size-5 text-muted-foreground" strokeWidth={1.75} />
              <div className="mt-3 flex items-center gap-2">
                <h3 className="font-medium">{f.title}</h3>
                {f.status && (
                  <span className="rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    {f.status}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
