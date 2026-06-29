"use client";

import { Section } from "@/components/section";
import { useMessages } from "@/components/locale-provider";

export function SeeIt() {
  const m = useMessages();
  return (
    <Section id="see-it" title={m.seeIt.title} subtitle={m.seeIt.subtitle}>
      {/* Primary demo placeholder, 16:9 */}
      {/* TODO(asset): replace with <video>/<Image> of the toggle demo */}
      <div className="mt-8 w-full aspect-video rounded-xl border border-dashed border-border bg-muted/30 flex items-center justify-center">
        <span className="text-sm text-muted-foreground select-none">
          {m.seeIt.demo}
        </span>
      </div>
    </Section>
  );
}
