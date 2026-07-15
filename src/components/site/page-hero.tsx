import { cn } from "@/lib/utils";
type PageHeroProps = { title: string; subtitle?: string; breadcrumb?: string; className?: string };
export function PageHero({ title, subtitle, breadcrumb, className }: PageHeroProps) {
  return <section className={cn("relative overflow-hidden border-b border-[#D6E4DE] bg-[#E6F1EC]", className)}>
    <div className="absolute -right-20 -top-28 size-80 rounded-full bg-[#F06B45]/20 blur-3xl" aria-hidden />
    <div className="absolute -bottom-32 left-[48%] size-80 rounded-full bg-[#9CCBB9]/40 blur-3xl" aria-hidden />
    <div className="container relative mx-auto max-w-7xl px-4 py-14 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
        <div>{breadcrumb && <p className="eyebrow mb-6">{breadcrumb}</p>}<h1 className="max-w-4xl text-4xl font-bold leading-[.98] tracking-[-.05em] text-[#183A37] md:text-7xl">{title}</h1></div>
        {subtitle && <div className="border-l-2 border-[#F06B45] pl-5"><p className="max-w-xl text-base leading-7 text-[#637572] md:text-lg">{subtitle}</p></div>}
      </div>
    </div>
  </section>;
}
