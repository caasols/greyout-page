import { Section } from "@/components/section";

export function SeeIt() {
  return (
    <Section
      id="see-it"
      title="How it works"
      subtitle="See what it does in two seconds."
    >
      {/* Primary demo placeholder, 16:9 */}
      {/* TODO(asset): replace with <video>/<Image> of the toggle demo */}
      <div className="mt-8 w-full aspect-video rounded-xl border border-dashed border-border bg-muted/30 flex items-center justify-center">
        <span className="text-sm text-muted-foreground select-none">
          ▶ Demo coming soon: one keypress toggles greyscale
        </span>
      </div>
    </Section>
  );
}
