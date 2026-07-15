"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Fixed scroll progress bar (top) + floating back-to-top button.
 * Pure, dependency-free, respects reduced-motion via CSS.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const height =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
        setShowTop(scrollTop > 600);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[var(--gold)] via-[var(--gold-soft)] to-[var(--gold)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center",
          "bg-maroon text-white shadow-lg border border-[var(--gold)]/40",
          "transition-all duration-300 hover:bg-maroon-deep hover:-translate-y-1",
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
