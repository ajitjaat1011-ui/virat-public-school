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
 * Renders both as a sidebar on desktop and a horizontal scroll on mobile.
 */
export function SubNav({ title, links }: SubNavProps) {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-32 lg:self-start">
      <div className="bg-[var(--cream)] rounded-lg p-4 border border-[var(--cream)]">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--maroon-deep)] mb-3">
          {title}
        </h3>
        <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm whitespace-nowrap lg:whitespace-normal transition-colors",
                  active
                    ? "bg-[var(--maroon)] text-white font-semibold"
                    : "text-[var(--ink)] hover:bg-white hover:text-[var(--maroon)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
