import { AppWindow, CalendarClock, Keyboard } from "lucide-react";

const features = [
  { icon: AppWindow, title: "Per-app rules", body: "Auto-grey distracting apps; keep colour where you need it." },
  { icon: CalendarClock, title: "On a schedule", body: "Wind down into greyscale toward the evening, automatically." },
  { icon: Keyboard, title: "One keypress", body: "Toggle from the menu bar — or any tool via the greyout:// scheme." },
];

export function Features() {
  return (
    <section
      id="features"
      className="mt-20 grid w-full max-w-5xl gap-6 px-6 text-left sm:grid-cols-3"
    >
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border bg-card p-5">
          <f.icon className="size-5 text-muted-foreground" strokeWidth={1.75} />
          <h3 className="mt-3 font-medium">{f.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
        </div>
      ))}
    </section>
  );
}
