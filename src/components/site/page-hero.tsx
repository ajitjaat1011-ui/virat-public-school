"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type PageHeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  breadcrumb?: string;
  /** Optional eyebrow line above the title. */
  eyebrow?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * Reusable inner-page hero.
 * Warm maroon gradient with animated gold blobs + subtle pattern.
 */
export function PageHero({
  title,
  subtitle,
  breadcrumb,
  eyebrow,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-maroon-gradient text-cream relative overflow-hidden",
        className
      )}
    >
      {/* Texture + blobs */}
      <div className="absolute inset-0 bg-pattern-dots opacity-60" aria-hidden />
      <div
        className="absolute top-[-25%] right-[-5%] w-[40%] h-[120%] rounded-full blur-3xl opacity-30 animate-blob"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.55), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-[25%] left-[15%] w-[35%] h-[100%] rounded-full blur-3xl opacity-25 animate-blob animation-delay-4000"
        style={{ background: "radial-gradient(circle, rgba(154,24,24,0.7), transparent 70%)" }}
        aria-hidden
      />

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative">
        <Reveal variant="up">
          {(breadcrumb || eyebrow) && (
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold mb-4 font-bold flex items-center gap-2.5">
              <span className="h-px w-6 bg-gold/70" />
              {breadcrumb || eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-cream tracking-tight max-w-4xl">
            {title}
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[var(--gold)] to-transparent mt-5" />
          {subtitle && (
            <p className="mt-6 text-sm md:text-lg text-cream/85 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
