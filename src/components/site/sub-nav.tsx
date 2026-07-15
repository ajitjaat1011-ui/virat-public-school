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
 * Sidebar on desktop, horizontal scroll strip on mobile.
 */
export function SubNav({ title, links }: SubNavProps) {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <p className="lg:hidden text-xs font-bold uppercase tracking-[0.16em] text-maroon mb-2.5 px-1">
        {title}
      </p>
      <nav className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 scrollbar-none">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2.5 rounded-xl text-sm whitespace-nowrap lg:whitespace-normal transition-all border font-medium",
                active
                  ? "bg-maroon text-white border-maroon shadow-md"
                  : "text-ink hover:bg-cream hover:text-maroon border-transparent hover:border-line"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="hidden lg:block mt-6 pt-6 border-t border-line">
        <p className="text-xs text-muted-ink leading-relaxed">
          Need help choosing?{" "}
          <Link href="/contact-us" className="text-maroon font-semibold hover:underline">
            Contact us →
          </Link>
        </p>
      </div>
    </aside>
  );
}
