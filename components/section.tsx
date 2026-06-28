import { cn } from "@/lib/utils";

// Shared wrapper for the home-page content sections so their width, spacing,
// and heading styles stay consistent. Horizontal padding is owned by the page
// <main>, so sections don't add their own.
export function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("mt-24 w-full max-w-5xl text-left", className)}>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      ) : null}
      {children}
    </section>
  );
}
