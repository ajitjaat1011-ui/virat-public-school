import { cn } from "@/lib/utils";
type PageHeroProps = { title: string; subtitle?: string; breadcrumb?: string; className?: string };
export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
  return <section className={cn("relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-50", className)}>
    <div className="absolute -right-24 -top-28 size-80 rounded-full bg-sky-300/25 blur-3xl" aria-hidden />
    <div className="container relative mx-auto max-w-7xl px-4 py-14 md:py-24"><div className="max-w-4xl">
      {breadcrumb && <p className="eyebrow mb-6">{breadcrumb}</p>}
      <h1 className="text-4xl font-black leading-[1] tracking-[-.05em] text-blue-950 md:text-7xl">{title}</h1>
      {subtitle && <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{subtitle}</p>}
    </div></div>
  </section>;
}
