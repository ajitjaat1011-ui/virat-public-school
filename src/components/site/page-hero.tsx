import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  className?: string;
};

/**
 * Reusable page header for inner pages.
 * Deep maroon background with gold accent line.
 */
export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-[var(--maroon-deep)] text-white relative overflow-hidden",
        className
      )}
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(212,175,55,0.2) 0%, transparent 40%)",
        }}
        aria-hidden
      />
      <div className="container mx-auto px-4 py-14 md:py-20 relative">
        {breadcrumb && (
          <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {title}
        </h1>
        <div className="gold-divider mt-4" />
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
