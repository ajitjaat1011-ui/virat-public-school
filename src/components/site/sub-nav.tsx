"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type SubNavProps = { title: string; links: { href: string; label: string }[] };

export function SubNav({ title, links }: SubNavProps) {
  const pathname = usePathname();
  return (
    <aside className="glass-panel w-full min-w-0 max-w-full rounded-2xl p-4 lg:sticky lg:top-28 lg:self-start">
      <p className="mb-3 px-1 text-xs font-bold uppercase tracking-[.16em] text-[var(--accent)]">{title}</p>
      <nav className="grid w-full min-w-0 grid-cols-2 gap-2 lg:grid-cols-1" aria-label={`${title} section navigation`}>
        {links.map((link) => {
          const active = pathname === link.href;
          return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={cn(
            "flex min-h-12 min-w-0 items-center rounded-xl border px-3 py-2 text-sm leading-snug transition-colors",
            active ? "border-[var(--maroon)] bg-[var(--maroon)] font-semibold text-white shadow-sm" : "border-[var(--line)] bg-white/60 text-[var(--ink)] hover:border-[var(--gold)] hover:bg-white"
          )}>{link.label}</Link>;
        })}
      </nav>
    </aside>
  );
}
