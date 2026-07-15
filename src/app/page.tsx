"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, GraduationCap, MapPin, Newspaper, Phone, Sparkles, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/site/language-context";

export default function HomePage() {
  const { t } = useLanguage();
  const featureIcons = [Users, BookOpen, Sparkles];
  const news = [
    { date: "15 Jul 2026", type: "Admissions", title: "Admissions open for academic year 2026–27", body: "Applications are now being accepted for all classes. Our admissions team is ready to guide every family." },
    { date: "10 Jul 2026", type: "Campus", title: "Annual Day celebration — save the date", body: "Students, families and our wider community are invited to an evening of culture, creativity and celebration." },
    { date: "28 Jun 2026", type: "Learning", title: "New computer lab inaugurated", body: "Modern workstations and an updated learning environment expand hands-on digital opportunities for students." },
  ];

  return <>
    <section className="relative overflow-hidden bg-[var(--maroon-deep)] text-white">
      <div className="absolute inset-0 bg-pattern-dots" aria-hidden />
      <div className="absolute -right-24 top-10 size-96 rounded-full bg-[var(--gold)]/20 blur-3xl" aria-hidden />
      <div className="container relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[var(--gold)] backdrop-blur">
            <GraduationCap className="size-4" /> RBSE affiliated · Viratnagar
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-.055em] text-white md:text-7xl lg:text-[5.4rem]">
            Learning that shapes <span className="text-[var(--gold)]">confident lives.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">{t.home.heroSubtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-13 rounded-full bg-[var(--maroon)] px-7 text-white hover:bg-[#d94a3d]">
              <Link href="/admissions/apply">{t.home.heroCtaApply}<ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-white/30 bg-white/5 px-7 text-white hover:bg-white hover:text-[var(--accent)]">
              <Link href="/academics">{t.home.heroCtaAcademics}</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:rotate-1">
          <div className="rounded-[2rem] bg-[var(--gold)] p-7 text-[var(--accent)] sm:col-span-2">
            <div className="flex items-center justify-between"><span className="text-xs font-black uppercase tracking-[.18em]">RBSE 2025–26</span><Trophy className="size-6" /></div>
            <div className="mt-8 flex items-end justify-between gap-4"><div><p className="text-6xl font-black tracking-[-.06em]">98.20%</p><p className="mt-2 font-bold">Rohit Yadav · District Topper</p></div><span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-white">#1</span></div>
          </div>
          <a href="tel:+919636452501" className="rounded-[2rem] bg-white p-6 text-[var(--accent)] transition-transform hover:-translate-y-1"><Phone className="size-6 text-[var(--maroon)]" /><p className="mt-8 text-xs font-bold uppercase tracking-widest text-[var(--muted-ink)]">Talk to us</p><p className="mt-1 text-xl font-extrabold">+91 96364 52501</p></a>
          <Link href="/news-events/announcements" className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur transition-transform hover:-translate-y-1"><Newspaper className="size-6 text-[var(--gold)]" /><p className="mt-8 text-xs font-bold uppercase tracking-widest text-white/55">Latest</p><p className="mt-1 font-bold text-white">Admissions open 2026–27</p></Link>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--maroon)]">Why Virat</p><h2 className="mt-4 text-4xl font-extrabold md:text-5xl">A place to learn, belong and become.</h2><p className="mt-5 leading-7 text-[var(--muted-ink)]">We pair strong RBSE academics with attentive teaching and meaningful opportunities beyond the classroom.</p></div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.home.features.map((item, i) => { const Icon = featureIcons[i]; return <article key={item.title} className="card-flat p-6 md:p-7"><span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--cream)]"><Icon className="size-5 text-[var(--maroon)]" /></span><h3 className="mt-8 text-xl">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted-ink)]">{item.body}</p></article>; })}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[var(--cream)] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--maroon)]">Achievement, earned</p><h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Our RBSE toppers</h2></div><p className="max-w-xl text-sm leading-6 text-[var(--muted-ink)]">{t.home.resultsBody}</p></div>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {t.home.toppers.map((topper, i) => <article key={topper.name} className={`rounded-[1.5rem] p-5 ${i === 0 ? "bg-[var(--maroon-deep)] text-white" : "border border-[var(--line)] bg-white"}`}><p className={`text-xs font-black uppercase tracking-widest ${i === 0 ? "text-[var(--gold)]" : "text-[var(--maroon)]"}`}>Rank {topper.position}</p><p className={`mt-6 text-3xl font-black ${i === 0 ? "text-white" : "text-[var(--accent)]"}`}>{topper.percent}</p><p className="mt-2 text-sm font-bold">{topper.name}</p><p className={`text-xs ${i === 0 ? "text-white/60" : "text-[var(--muted-ink)]"}`}>{topper.subject}</p></article>)}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[var(--maroon)]">Stay connected</p><h2 className="mt-4 text-4xl font-extrabold md:text-5xl">School updates</h2></div><Link href="/news-events" className="hidden items-center gap-2 font-bold text-[var(--maroon)] md:flex">View all <ArrowRight className="size-4" /></Link></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">{news.map(item => <article key={item.title} className="group rounded-[1.75rem] border border-[var(--line)] bg-white p-7"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--muted-ink)]"><CalendarDays className="size-4 text-[var(--maroon)]" />{item.date} · {item.type}</div><h3 className="mt-8 text-2xl leading-tight group-hover:text-[var(--maroon)]">{item.title}</h3><p className="mt-4 text-sm leading-6 text-[var(--muted-ink)]">{item.body}</p><Link href="/news-events/announcements" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--maroon)]">Read update <ArrowRight className="size-4" /></Link></article>)}</div>
      </div>
    </section>

    <section className="px-4 pb-20 md:pb-28"><div className="container mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--maroon)] text-white"><div className="grid lg:grid-cols-[1.15fr_.85fr]"><div className="p-8 md:p-14"><MapPin className="size-7" /><h2 className="mt-8 text-4xl font-extrabold text-white md:text-5xl">Come see learning in action.</h2><p className="mt-5 max-w-xl text-white/75">Visit our Viratnagar campus, meet the team and find the right path for your child.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="rounded-full bg-[var(--maroon-deep)] text-white"><Link href="/contact-us">Plan a visit</Link></Button><Button asChild variant="outline" className="rounded-full border-white/35 bg-transparent text-white hover:bg-white hover:text-[var(--accent)]"><Link href="/admissions/apply">Apply online</Link></Button></div></div><div className="min-h-72 bg-[var(--maroon-deep)]"><iframe title="Virat Public School location" src="https://www.google.com/maps?q=Viratnagar,Kotputli-Behror,Rajasthan&output=embed" width="100%" height="100%" className="min-h-72 grayscale-[20%]" loading="lazy" /></div></div></div></section>
  </>;
}
