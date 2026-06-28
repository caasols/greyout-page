export function SeeIt() {
  return (
    <section id="see-it" className="mt-24 w-full max-w-3xl text-left">
      <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
      <p className="mt-2 text-muted-foreground">
        See what it does in two seconds.
      </p>

      {/* Primary demo placeholder — 16:9 */}
      {/* TODO(asset): replace with <video>/<Image> of the toggle demo */}
      <div className="mt-8 w-full aspect-video rounded-xl border border-dashed border-border bg-muted/30 flex items-center justify-center">
        <span className="text-sm text-muted-foreground select-none">
          ▶ Demo GIF coming — keypress toggles greyscale
        </span>
      </div>

      {/* Before / after pair */}
      {/* TODO(asset): real screenshots */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="aspect-video rounded-xl border border-dashed border-border bg-muted/30 flex items-center justify-center">
          <span className="text-sm text-muted-foreground select-none">
            Before (colour)
          </span>
        </div>
        <div className="aspect-video rounded-xl border border-dashed border-border bg-muted/30 flex items-center justify-center">
          <span className="text-sm text-muted-foreground select-none">
            After (greyscale)
          </span>
        </div>
      </div>

      {/* Menu-bar shot placeholder */}
      {/* TODO(asset) */}
      <div className="mt-4 w-full max-w-xs aspect-video rounded-xl border border-dashed border-border bg-muted/30 flex items-center justify-center">
        <span className="text-sm text-muted-foreground select-none">
          Menu-bar dropdown
        </span>
      </div>
    </section>
  );
}
