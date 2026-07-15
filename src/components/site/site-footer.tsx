"use client";

import Link from "next/link";
import { ArrowUpRight, GraduationCap, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./language-context";

export function SiteFooter() {
  const { t } = useLanguage();
  return <footer className="mt-auto bg-[#071847] pb-20 text-white lg:pb-0">
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl bg-blue-600"><GraduationCap className="size-6" /></span><div><p className="font-extrabold text-white">{t.schoolName}</p><p className="text-xs text-white/50">Viratnagar · Rajasthan</p></div></div><p className="mt-6 max-w-md text-sm leading-7 text-white/65">{t.footer.about}</p><p className="mt-5 text-sm font-bold text-sky-300">“{t.motto}”</p></div>
        <div><p className="mb-5 text-xs font-black uppercase tracking-[.2em] text-sky-300">Explore</p><ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">{[{href:"/about-us",label:t.nav.about},{href:"/academics",label:t.nav.academics},{href:"/admissions",label:t.nav.admissions},{href:"/news-events",label:t.nav.news},{href:"/contact-us",label:t.nav.contact},{href:"/admissions/apply",label:t.nav.apply}].map(x=><li key={x.href}><Link href={x.href} className="inline-flex items-center gap-1 text-white/65 hover:text-white">{x.label}<ArrowUpRight className="size-3" /></Link></li>)}</ul></div>
        <div><p className="mb-5 text-xs font-black uppercase tracking-[.2em] text-sky-300">Contact</p><ul className="space-y-4 text-sm text-white/65"><li className="flex gap-3"><MapPin className="mt-1 size-4 shrink-0 text-sky-300"/><span>{t.contact.address}</span></li><li><a href="tel:+919636452501" className="flex items-center gap-3 hover:text-white"><Phone className="size-4 text-sky-300"/>{t.contact.phoneOffice}</a></li><li><a href="mailto:info@viratpublicschool.in" className="flex items-center gap-3 break-all hover:text-white"><Mail className="size-4 shrink-0 text-sky-300"/>info@viratpublicschool.in</a></li></ul><a href="https://www.instagram.com/mahander_meena_86" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600" aria-label="Instagram"><Instagram className="size-4" /></a></div>
      </div>
      <div className="flex flex-col gap-2 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between"><p>{t.footer.rights.replace("{year}",String(new Date().getFullYear()))}</p><p>RBSE affiliated · Built for accessibility and speed</p></div>
    </div>
  </footer>;
}
