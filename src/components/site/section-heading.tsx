"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  /** Small uppercase eyebrow label. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Whether to wrap in a Reveal animation. */
  reveal?: boolean;
  className?: string;
};

/**
 * Consistent section heading: gold eyebrow + bold title + gold divider + description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  reveal = true,
  className,
}: SectionHeadingProps) {
  const inner = (
    <div
      className={cn(
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-maroon mb-3">
          <span className="h-px w-5 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-extrabold text-maroon tracking-tight">
        {title}
      </h2>
      <div className={cn("gold-divider mt-4", align === "center" && "mx-auto")} />
      {description && (
        <p className="mt-5 text-sm md:text-base text-muted-ink leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );

  if (!reveal) return inner;
  return (
    <Reveal variant={align === "center" ? "up" : "left"}>{inner}</Reveal>
  );
}
