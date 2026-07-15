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
      {/* HERO — solid maroon + subtle dot pattern, no busy image overlay */}
      <section className="relative bg-[var(--maroon-deep)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-60 pointer-events-none" aria-hidden />
        {/* Subtle gold radial accent in corner */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative">
          <div className="max-w-3xl">
            <p className="text-[var(--gold)] uppercase tracking-[0.2em] text-[11px] md:text-xs font-semibold mb-4">
              {t.motto} — {t.mottoTranslation}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              {t.schoolName}
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-[var(--gold)] font-medium">
              {t.tagline}
            </p>
            <p className="mt-5 text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--maroon-deep)] font-semibold"
              >
                <Link href="/admissions/apply">
                  {t.home.heroCtaApply}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-[var(--surface)] hover:text-[var(--maroon-deep)] bg-transparent"
              >
                <Link href="/academics">
                  {t.home.heroCtaAcademics}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME — single clean section, off-white base */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--cream)] mb-5">
              <GraduationCap className="w-7 h-7 text-[var(--maroon)]" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[var(--maroon-deep)]">
              {t.home.welcomeTitle}
            </h2>
            <div className="gold-divider-center mt-4" />
            <p className="mt-6 text-sm md:text-lg text-[var(--ink)] leading-relaxed">
              {t.home.welcomeBody}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES — three flat cards, no heavy borders */}
      <section className="pb-14 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 md:grid-cols-3">
            {t.home.features.map((feature, idx) => {
              const Icon = featureIcons[idx];
              return (
                <div key={idx} className="card-flat p-6">
                  <div className="w-11 h-11 rounded-lg bg-[var(--cream)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[var(--maroon)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--maroon-deep)] mb-2">
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
      <section className="bg-[var(--cream)] py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-[var(--maroon)] text-white text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full mb-3">
              <Trophy className="w-3 h-3" />
              RBSE 2025-26
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[var(--maroon-deep)]">
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
                    "card-flat p-5 text-center " +
                    (isFirst ? "ring-1 ring-[var(--gold)] border-[var(--gold)]" : "")
                  }
                >
                  <p className="text-[11px] uppercase tracking-wider text-[var(--muted-ink)] font-semibold mb-1">
                    Rank #{topper.position}
                  </p>
                  <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--maroon-deep)]">
                    {topper.percent}
                  </p>
                  <p className="mt-2 text-xs md:text-sm font-medium text-[var(--ink)] leading-tight">
                    {topper.name}
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
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[var(--maroon-deep)] flex items-center gap-3">
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

          <div className="grid gap-5 md:grid-cols-3">
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
                    <span className="text-[var(--gold)]">·</span>
                    <span className="font-semibold uppercase tracking-wide text-[var(--maroon)]">
                      {item.cat}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[var(--maroon-deep)] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)] leading-relaxed flex-1">
                    {item.excerpt}
                  </p>
                  <Link
                    href="/news-events/announcements"
                    className="mt-4 text-sm font-medium text-[var(--maroon)] hover:text-[var(--maroon-deep)] inline-flex items-center"
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
      <section className="py-14 md:py-20 bg-[var(--cream)]">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[var(--maroon-deep)]">
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
                className="mt-6 bg-[var(--maroon)] hover:bg-[var(--maroon-deep)] text-white"
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
      <section className="bg-[var(--maroon)] py-12 md:py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
            Ready to join the Virat Public School family?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Take the first step today — our admissions team is here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--maroon-deep)] font-semibold"
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
              className="border-white/30 text-white hover:bg-[var(--surface)] hover:text-[var(--maroon)] bg-transparent"
            >
              <Link href="/contact-us">{t.nav.contact}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
