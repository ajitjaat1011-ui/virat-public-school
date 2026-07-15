"use client";

import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/site/language-context";

export default function HomePage() {
  const { t } = useLanguage();

  const featureIcons = [Users, BookOpen, Trophy];

  return (
    <>
      {/* BENTO GRID HERO */}
      <section className="bg-[#F8FAFC] border-b border-[var(--line)] pt-8 pb-12 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[500px]">
            
            {/* Main Hero Box (2x2) */}
            <div className="bg-gradient-to-br from-white to-blue-50/50 border border-[var(--line)] rounded-[2rem] p-8 md:p-12 md:col-span-2 md:row-span-2 flex flex-col justify-center shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl group-hover:bg-blue-200/40 transition-colors duration-700" aria-hidden />
              <span className="text-[var(--accent)] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                {t.motto}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent)] mb-6 leading-[1.1] tracking-tight">
                {t.home.welcomeTitle}
              </h1>
              <p className="text-[var(--muted-ink)] mb-8 text-base md:text-lg leading-relaxed">
                {t.home.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-[var(--maroon)] hover:bg-[var(--maroon)]/90 text-white font-semibold rounded-full px-8">
                  <Link href="/admissions/apply">
                    {t.home.heroCtaApply}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border border-[var(--line)] text-[var(--accent)] hover:bg-slate-50 rounded-full px-8">
                  <Link href="/academics">{t.home.heroCtaAcademics}</Link>
                </Button>
              </div>
            </div>

            {/* Quick Stats Box (1x1) */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#172554] text-white rounded-[2rem] p-8 md:col-span-1 md:row-span-1 flex flex-col justify-center shadow-md relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" aria-hidden />
              <div className="relative z-10 flex items-center justify-between mb-4">
                <span className="text-blue-200 text-xs font-bold uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">RBSE 2025-26</span>
                <Trophy className="w-5 h-5 text-yellow-400" />
              </div>
              <h4 className="text-4xl md:text-5xl font-extrabold mb-2 relative z-10 tracking-tight drop-shadow-sm text-white">
                98.20%
              </h4>
              <p className="text-lg md:text-xl font-bold text-white relative z-10 mt-1">{t.home.toppers[0].name}</p>
              <p className="text-xs text-blue-300 relative z-10 font-bold uppercase tracking-widest mt-1">District Topper</p>
            </div>

            {/* Quick Contact Box (1x1) */}
            <div className="bg-gradient-to-br from-[#800000] to-[#5c0000] text-white rounded-[2rem] p-8 md:col-span-1 md:row-span-1 flex flex-col justify-center shadow-md relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-black/10 rounded-full group-hover:scale-150 transition-transform duration-700" aria-hidden />
              <Phone className="w-7 h-7 mb-4 relative z-10 text-white/90" />
              <span className="text-red-200 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Quick Contact</span>
              <a href="tel:+919636452501" className="text-xl md:text-2xl font-bold relative z-10 hover:text-red-100 transition-colors">
                {t.contact.phoneOffice}
              </a>
            </div>

            {/* Announcements Box (2x1) */}
            <div className="bg-white border border-[var(--line)] rounded-[2rem] p-8 md:col-span-2 md:row-span-1 flex flex-col justify-center shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[var(--accent)] text-xs font-bold tracking-widest uppercase">{t.home.latestNews}</span>
                <Link href="/news-events/announcements" className="text-[var(--maroon)] text-sm font-semibold hover:underline flex items-center">
                  {t.common.viewAll} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[var(--accent)] mb-2 leading-tight">Admissions Open for 2026-27</h4>
              <p className="text-sm md:text-base text-[var(--muted-ink)] line-clamp-2">
                Applications are now being accepted for all classes. Visit our Admissions page to apply online or contact the school office.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES — three flat cards, no heavy borders */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {t.home.features.map((feature, idx) => {
              const Icon = featureIcons[idx];
              return (
                <div key={idx} className="card-flat p-6">
                  <div className="w-11 h-11 rounded-lg bg-[var(--cream)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--maroon)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--accent)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)] leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RBSE RESULTS 2025-26 — on cream surface, simplified topper cards */}
      <section className="bg-[var(--cream)] py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-[var(--maroon)] text-white text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full mb-3">
              <Trophy className="w-3 h-3" />
              RBSE 2025-26
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[var(--accent)]">
              {t.home.resultsTitle}
            </h2>
            <div className="gold-divider-center mt-4" />
            <p className="mt-5 text-sm md:text-base text-[var(--ink)] leading-relaxed">
              {t.home.resultsBody}
            </p>
          </div>

          {/* Topper cards — single accent style (gold border for #1 only) */}
          <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-5">
            {t.home.toppers.map((topper, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={idx}
                  className={
                    "card-flat p-5 text-center relative " +
                    (isFirst ? "ring-1 ring-[var(--accent)] border-[var(--accent)] shadow-md bg-blue-50/20" : "")
                  }
                >
                  {isFirst && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center shadow-sm ring-2 ring-white">
                      <Trophy className="w-3 h-3" />
                    </div>
                  )}
                  <p className="text-[11px] uppercase tracking-wider text-[var(--muted-ink)] font-semibold mb-1">
                    Rank #{topper.position}
                  </p>
                  <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--accent)]">
                    {topper.percent}
                  </p>
                  <p className="mt-2 text-xs md:text-sm font-bold text-[var(--ink)] leading-tight">
                    {topper.name}
                  </p>
                  <p className="mt-1 text-[10px] md:text-xs font-semibold text-[var(--maroon)] uppercase tracking-wider">
                    ({topper.subject})
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-[var(--maroon)] text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-white bg-transparent"
            >
              <Link href="/news-events/announcements">
                {t.home.resultsMore}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LATEST NEWS STRIP — back to off-white, single hairline accent on cards */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-5 md:mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[var(--accent)] flex items-center gap-3">
                <Newspaper className="w-6 h-6 md:w-8 md:h-8 text-[var(--maroon)]" />
                {t.home.latestNews}
              </h2>
              <div className="gold-divider mt-4" />
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex border-[var(--line)] text-[var(--maroon)] hover:border-[var(--maroon)] hover:bg-[var(--cream)] bg-transparent"
            >
              <Link href="/news-events">
                {t.common.viewAll}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {[
              {
                date: "Jul 2026",
                cat: "Announcement",
                title: "Admissions Open for Academic Year 2026–27",
                excerpt:
                  "Applications are now being accepted for all classes. Visit our Admissions page to apply online or contact the school office for assistance.",
              },
              {
                date: "Jul 2026",
                cat: "Event",
                title: "Annual Day Celebration — Save the Date",
                excerpt:
                  "Our annual cultural evening will be held in the school auditorium. Parents and community members are cordially invited to attend.",
              },
              {
                date: "Jun 2026",
                cat: "Academic",
                title: "New Computer Lab Inaugurated",
                excerpt:
                  "A newly equipped computer lab with modern workstations has been inaugurated, expanding digital learning opportunities for our students.",
              },
            ].map((item, idx) => (
              <article key={idx} className="card-flat overflow-hidden flex flex-col">
                {/* Slim top accent line */}
                <div className="h-0.5 bg-[var(--gold)]" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-[var(--muted-ink)] mb-3">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                    <span className="text-blue-100">·</span>
                    <span className="font-semibold uppercase tracking-wide text-[var(--maroon)]">
                      {item.cat}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[var(--accent)] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)] leading-relaxed flex-1">
                    {item.excerpt}
                  </p>
                  <Link
                    href="/news-events/announcements"
                    className="mt-4 text-sm font-medium text-[var(--maroon)] hover:text-[var(--accent)] inline-flex items-center"
                  >
                    {t.news.readMore}
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button
              asChild
              variant="outline"
              className="border-[var(--maroon)] text-[var(--maroon)] bg-transparent"
            >
              <Link href="/news-events">{t.common.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT / VISIT US — off-white section, map on side */}
      <section className="py-10 md:py-16 bg-[var(--cream)]">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[var(--accent)]">
                {t.home.quickContactTitle}
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-6 text-sm md:text-base text-[var(--ink)] leading-relaxed">
                {t.home.quickContactBody}
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--maroon)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-ink)]">Address</p>
                    <p className="text-sm text-[var(--ink)] mt-0.5">{t.contact.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[var(--maroon)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-ink)]">Phone</p>
                    <p className="text-sm text-[var(--ink)] mt-0.5">{t.contact.phoneOffice}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--maroon)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-ink)]">Email</p>
                    <p className="text-sm text-[var(--ink)] mt-0.5 break-all">{t.contact.emailGeneral}</p>
                  </div>
                </li>
              </ul>

              <Button
                asChild
                className="mt-6 bg-[var(--maroon)] hover:bg-[var(--maroon)] text-white"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Viratnagar+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 w-4 h-4" />
                  {t.home.directions}
                </a>
              </Button>
            </div>

            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden ring-1 ring-[var(--line)] bg-[var(--surface)]">
              <iframe
                title="Virat Public School location on Google Maps"
                src="https://www.google.com/maps?q=Viratnagar,Kotputli-Behror,Rajasthan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER — slim maroon strip */}
      <section className="bg-[#F8FAFC] py-10 md:py-20 border-t border-[var(--line)]">
        
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[var(--accent)] mb-3 ">
            Ready to join the Virat Public School family?
          </h2>
          <p className="text-[var(--muted-ink)] max-w-2xl mx-auto mb-6 text-sm md:text-base ">
            Take the first step today — our admissions team is here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center ">
            <Button
              asChild
              size="lg"
              className="bg-[var(--maroon)] hover:bg-[var(--maroon)]/90 text-white font-semibold rounded-full"
            >
              <Link href="/admissions/apply">
                {t.nav.apply}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-[var(--line)] text-[var(--accent)] hover:bg-[var(--line)] hover:text-[var(--accent)] bg-white transition-colors rounded-full"
            >
              <Link href="/contact-us">{t.nav.contact}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
