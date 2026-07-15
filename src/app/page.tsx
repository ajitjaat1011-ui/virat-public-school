"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, GraduationCap, MapPin, Phone, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/site/language-context";

const stories = [
  { no: "01", tag: "Admissions", date: "15 July 2026", title: "Admissions open for the 2026–27 academic year", text: "A clear, supportive application process for students and families across Viratnagar." },
  { no: "02", tag: "Campus", date: "10 July 2026", title: "Annual Day: an evening made by our students", text: "Culture, confidence and creativity come together in our school’s annual celebration." },
  { no: "03", tag: "Learning", date: "28 June 2026", title: "A new computer lab for practical digital learning", text: "Modern workstations expand hands-on opportunities and prepare students for tomorrow." },
];

export default function HomePage() {
  const { t } = useLanguage();
  return <>
    <section className="border-b-2 border-[var(--accent)] bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-4 text-[11px] font-black uppercase tracking-[.22em] text-[var(--maroon)]"><span>Viratnagar · Rajasthan</span><span>RBSE Affiliated</span></div>
        <div className="grid gap-10 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-8">
            <p className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[var(--muted-ink)]"><GraduationCap className="size-4 text-[var(--maroon)]" /> Education with purpose</p>
            <h1 className="editorial-display text-6xl leading-[.88] md:text-8xl lg:text-[7.6rem]">Knowledge.<br /><span className="text-[var(--maroon)]">Character.</span><br />Confidence.</h1>
          </div>
          <div className="flex flex-col justify-end border-t-2 border-[var(--accent)] pt-6 md:col-span-4">
            <p className="text-lg leading-8 text-[var(--ink)]">{t.home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-none bg-[var(--maroon)]"><Link href="/admissions/apply">Apply now <ArrowRight className="ml-2 size-4" /></Link></Button><Button asChild size="lg" variant="outline" className="rounded-none border-[var(--accent)]"><Link href="/academics">Explore academics</Link></Button></div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[var(--maroon-deep)] text-white">
      <div className="container mx-auto grid max-w-7xl md:grid-cols-12">
        <div className="border-white/20 p-8 md:col-span-7 md:border-r md:p-12"><p className="text-xs font-black uppercase tracking-[.25em] text-[var(--gold)]">The Virat approach</p><h2 className="editorial-display mt-6 text-5xl text-white md:text-7xl">Rooted in values.<br />Ready for tomorrow.</h2></div>
        <div className="grid grid-cols-2 md:col-span-5"><div className="border-r border-t border-white/20 p-7 md:border-t-0"><p className="text-5xl font-black text-white">98.2<span className="text-[var(--gold)]">%</span></p><p className="mt-3 text-xs uppercase tracking-wider text-white/60">District topper</p></div><div className="border-t border-white/20 p-7 md:border-t-0"><p className="text-5xl font-black text-white">I–XII</p><p className="mt-3 text-xs uppercase tracking-wider text-white/60">Classes offered</p></div><div className="col-span-2 border-t border-white/20 p-7"><a href="tel:+919636452501" className="flex items-center justify-between"><span><small className="block uppercase tracking-wider text-white/50">Admissions desk</small><strong className="mt-1 block text-xl">+91 96364 52501</strong></span><Phone className="size-6 text-[var(--gold)]" /></a></div></div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container mx-auto max-w-7xl px-4"><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="editorial-kicker">Why Virat</p><h2 className="editorial-display mt-5 text-5xl md:text-6xl">A school built around the learner.</h2></div><div className="divide-y divide-[var(--line)] border-y border-[var(--line)] lg:col-span-8">{t.home.features.map((item,i)=><article key={item.title} className="grid gap-4 py-8 sm:grid-cols-[70px_1fr_1.4fr]"><span className="text-sm font-black text-[var(--maroon)]">0{i+1}</span><h3 className="text-xl">{item.title}</h3><p className="text-sm leading-7 text-[var(--muted-ink)]">{item.body}</p></article>)}</div></div></div></section>

    <section className="border-y border-[var(--line)] bg-[var(--cream)] py-20 md:py-24"><div className="container mx-auto max-w-7xl px-4"><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="editorial-kicker">RBSE 2025–26</p><h2 className="editorial-display mt-4 text-5xl md:text-7xl">Results worth celebrating.</h2></div><Trophy className="size-12 text-[var(--maroon)]" /></div><div className="mt-12 grid border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">{t.home.toppers.map((x,i)=><article key={x.name} className={`border-b border-r border-[var(--line)] p-6 ${i===0?'bg-[var(--maroon)] text-white':''}`}><p className={`text-xs font-black uppercase tracking-widest ${i===0?'text-white/70':'text-[var(--maroon)]'}`}>Rank {x.position}</p><p className={`mt-8 text-4xl font-black ${i===0?'text-white':'text-[var(--accent)]'}`}>{x.percent}</p><p className="mt-4 font-bold">{x.name}</p><p className={`text-xs ${i===0?'text-white/60':'text-[var(--muted-ink)]'}`}>{x.subject}</p></article>)}</div></div></section>

    <section className="py-20 md:py-28"><div className="container mx-auto max-w-7xl px-4"><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-3"><p className="editorial-kicker">The bulletin</p><h2 className="editorial-display mt-4 text-5xl">Latest from campus.</h2><Link href="/news-events" className="mt-8 inline-flex items-center gap-2 font-bold text-[var(--maroon)]">All stories <ArrowRight className="size-4" /></Link></div><div className="divide-y-2 divide-[var(--accent)] border-y-2 border-[var(--accent)] lg:col-span-9">{stories.map(s=><article key={s.no} className="grid gap-5 py-8 md:grid-cols-[60px_1fr_1.5fr]"><span className="text-3xl font-black text-[var(--gold)]">{s.no}</span><div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--maroon)]"><CalendarDays className="size-3" />{s.date}</p><p className="mt-2 text-xs text-[var(--muted-ink)]">{s.tag}</p></div><div><h3 className="text-2xl leading-tight">{s.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted-ink)]">{s.text}</p></div></article>)}</div></div></div></section>

    <section className="bg-[var(--maroon)] text-white"><div className="container mx-auto grid max-w-7xl md:grid-cols-2"><div className="p-8 md:p-14"><MapPin className="size-7"/><h2 className="editorial-display mt-8 text-5xl text-white md:text-6xl">Come and see the difference.</h2><p className="mt-5 max-w-lg text-white/75">Visit our Viratnagar campus, meet our educators and understand how your child can thrive here.</p><Button asChild className="mt-8 rounded-none bg-white text-[var(--accent)] hover:bg-[var(--cream)]"><Link href="/contact-us">Plan your visit</Link></Button></div><iframe title="Virat Public School location" src="https://www.google.com/maps?q=Viratnagar,Kotputli-Behror,Rajasthan&output=embed" className="min-h-80 w-full" loading="lazy" /></div></section>
  </>;
}
