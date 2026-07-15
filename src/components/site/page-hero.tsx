import { cn } from "@/lib/utils";

type PageHeroProps = { title: string; subtitle?: string; breadcrumb?: string; className?: string };

export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b-2 border-[var(--accent)] bg-white", className)}>
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            {breadcrumb && <p className="mb-6 text-[11px] font-black uppercase tracking-[.28em] text-[var(--maroon)]">{breadcrumb}</p>}
            <h1 className="editorial-display text-5xl leading-[.92] md:text-7xl lg:text-8xl">{title}</h1>
          </div>
          {subtitle && <div className="border-t border-[var(--accent)] pt-5 md:col-span-4"><p className="text-sm leading-7 text-[var(--muted-ink)] md:text-base">{subtitle}</p></div>}
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-[var(--maroon-deep)] via-[var(--maroon)] to-[var(--gold)]" />
    </section>
  );
}
