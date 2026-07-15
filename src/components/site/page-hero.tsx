import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  className?: string;
};

/**
 * Reusable page header for inner pages.
 * Solid deep maroon with a subtle dot pattern — no busy gradients.
 */
export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-[var(--accent)] text-white relative overflow-hidden",
        className
      )}
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-50 pointer-events-none" aria-hidden />
      {/* Subtle gold corner accent */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative">
        {breadcrumb && (
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200 mb-3 font-semibold">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {title}
        </h1>
        <div className="h-1 w-12 bg-[var(--maroon)] rounded-full mt-4" />
        {subtitle && (
          <p className="mt-5 text-sm md:text-lg text-white/80 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
