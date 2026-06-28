import {
  AppWindow,
  CalendarClock,
  Keyboard,
  Command,
  Terminal,
  Workflow,
  Search,
} from "lucide-react";

const features = [
  { icon: AppWindow, title: "Per-app rules", body: "Auto-grey distracting apps; keep colour where you need it." },
  { icon: CalendarClock, title: "On a schedule", body: "Wind down into greyscale toward the evening, automatically." },
  { icon: Keyboard, title: "One keypress", body: "Toggle from the menu bar — or any tool via the greyout:// scheme." },
];

const integrations = [
  {
    icon: Command,
    title: "Raycast",
    body: "Toggle, activate, or deactivate Greyout without leaving Raycast.",
    status: "In testing",
  },
  {
    icon: Terminal,
    title: "Command line",
    body: "Script it from the terminal: open greyout://toggle.",
  },
  {
    icon: Workflow,
    title: "Shortcuts",
    body: "Drive Greyout from your macOS Shortcuts automations.",
    status: "Soon",
  },
  {
    icon: Search,
    title: "Alfred",
    body: "Fire Greyout from an Alfred workflow.",
    status: "Soon",
  },
];

export function Features() {
  return (
    <section id="features" className="mt-20 w-full max-w-5xl px-6 text-left">
      <div className="grid gap-6 sm:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border bg-card p-5">
            <f.icon className="size-5 text-muted-foreground" strokeWidth={1.75} />
            <h3 className="mt-3 font-medium">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-12 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Integrations
      </h3>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {integrations.map((f) => (
          <div key={f.title} className="rounded-xl border bg-card p-5">
            <f.icon className="size-5 text-muted-foreground" strokeWidth={1.75} />
            <div className="mt-3 flex items-center gap-2">
              <h4 className="font-medium">{f.title}</h4>
              {f.status && (
                <span className="rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {f.status}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
