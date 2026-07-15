"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type SubNavLink = {
  href: string;
  label: string;
};

type SubNavProps = {
  title: string;
  links: SubNavLink[];
};

/**
 * Sidebar sub-navigation for second-level pages.
 * Renders as a sidebar on desktop and a horizontal scroll strip on mobile.
 */
export function SubNav({ title, links }: SubNavProps) {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      {/* Mobile label */}
      <p className="lg:hidden text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2 px-1">
        {title}
      </p>
      <nav className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm whitespace-nowrap lg:whitespace-normal transition-colors border",
                active
                  ? "bg-[var(--maroon)] text-white font-medium border-[var(--maroon)]"
                  : "text-[var(--ink)] hover:bg-[var(--cream)] hover:text-[var(--maroon)] border-transparent"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="hidden lg:block mt-4 pt-4 border-t border-[var(--line)]" />
    </aside>
  );
}
