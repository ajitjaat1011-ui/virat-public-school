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
        "bg-[#F8FAFC] text-[var(--accent)] border-b border-[var(--line)] relative overflow-hidden",
        className
      )}
    >
      
      <div className="absolute top-[-20%] right-[-5%] w-[35%] h-[120%] bg-red-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" aria-hidden />
      <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[100%] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" aria-hidden />
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
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-600 mb-3 font-semibold">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--accent)] tracking-tight">
          {title}
        </h1>
        <div className="h-1 w-12 bg-[var(--maroon)] rounded-full mt-4" />
        {subtitle && (
          <p className="mt-5 text-sm md:text-lg text-[var(--muted-ink)] max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
