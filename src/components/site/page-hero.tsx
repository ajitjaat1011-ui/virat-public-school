import { cn } from "@/lib/utils";

type PageHeroProps = { title: string; subtitle?: string; breadcrumb?: string; className?: string };

export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-[var(--line)] bg-[var(--cream)]", className)}>
      <div className="absolute inset-0 bg-pattern-subtle opacity-50" aria-hidden />
      <div className="absolute -right-20 -top-24 size-72 rounded-full bg-[var(--gold)]/35 blur-3xl" aria-hidden />
      <div className="absolute right-[18%] -bottom-24 size-56 rounded-full bg-[var(--maroon)]/15 blur-3xl" aria-hidden />
      <div className="container relative mx-auto px-4 py-14 md:py-20 lg:py-24">
        {breadcrumb && <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--maroon)]">{breadcrumb}</p>}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.04] md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted-ink)] md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
