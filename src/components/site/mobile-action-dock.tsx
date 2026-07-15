"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";

export function MobileActionDock() {
  const pathname = usePathname();
  if (pathname === "/admissions/apply") return null;
  return <nav aria-label="Quick actions" className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/70 bg-[#183A37]/95 text-white shadow-2xl shadow-[#183A37]/30 backdrop-blur-xl lg:hidden">
    <a href="tel:+919636452501" className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-white/15 text-[10px] font-bold"><Phone className="size-4 text-[#F7A88F]" />Call</a>
    <a href="https://wa.me/919636452501" target="_blank" rel="noopener noreferrer" className="flex min-h-14 flex-col items-center justify-center gap-1 border-r border-white/15 text-[10px] font-bold"><MessageCircle className="size-4 text-[#F7A88F]" />WhatsApp</a>
    <Link href="/admissions/apply" className="flex min-h-14 flex-col items-center justify-center gap-1 bg-[#3C8D78] text-[10px] font-bold"><CalendarDays className="size-4" />Apply</Link>
  </nav>;
}
