"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  Trophy,
  Users,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  Instagram,
  Sparkles,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/site/language-context";
import { Reveal } from "@/components/site/reveal";
import { AnimatedCounter } from "@/components/site/animated-counter";
import { SectionHeading } from "@/components/site/section-heading";

export default function HomePage() {
  const { t } = useLanguage();

  const featureIcons = [Users, BookOpen, HeartHandshake];
  const valueChips = [
    { icon: ShieldCheck, label: "RBSE Affiliated" },
    { icon: GraduationCap, label: "Class I–XII" },
    { icon: Trophy, label: "98%+ Results" },
  ];

  const stats = [
    { value: 98.2, decimals: 1, suffix: "%", label: "Top Result 2025-26" },
    { value: 5, suffix: "+", label: "Toppers Above 90%" },
    { value: 12, suffix: "", label: "Classes (I–XII)" },
    { value: 3, suffix: "", label: "Streams (Sci/Com/Arts)" },
  ];

  const newsItems = [
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
  ];

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="bg-maroon-gradient text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-50" aria-hidden />
        <div
          className="absolute top-[-15%] right-[-10%] w-[45%] h-[80%] rounded-full blur-3xl opacity-40 animate-blob"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.5), transparent 70%)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-[-20%] left-[-5%] w-[40%] h-[70%] rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"
          style={{ background: "radial-gradient(circle, rgba(154,24,24,0.8), transparent 70%)" }}
          aria-hidden
        />

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <Reveal variant="up">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-gold uppercase tracking-[0.14em]">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.motto}
                </span>
              </Reveal>

              <Reveal variant="up" delay={80}>
                <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-cream">
                  {t.home.welcomeTitle.split("Virat Public School")[0]}
                  <span className="text-gradient-gold">Virat Public School</span>
                </h1>
              </Reveal>

              <Reveal variant="up" delay={160}>
                <p className="mt-6 text-base md:text-xl text-cream/85 max-w-xl leading-relaxed">
                  {t.home.heroSubtitle}
                </p>
              </Reveal>

              <Reveal variant="up" delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold hover:bg-gold-soft text-maroon-deep font-bold rounded-full px-7 shadow-xl transition-all hover:-translate-y-0.5"
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
                    className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream bg-transparent rounded-full px-7"
                  >
                    <Link href="/academics">{t.home.heroCtaAcademics}</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal variant="up" delay={320}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {valueChips.map((chip) => (
                    <span
                      key={chip.label}
                      className="inline-flex items-center gap-2 text-sm text-cream/80"
                    >
                      <chip.icon className="w-4 h-4 text-gold" />
                      {chip.label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: floating topper card */}
            <div className="lg:col-span-5">
              <Reveal variant="scale" delay={200}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2rem] bg-[var(--gold)]/10 blur-2xl animate-pulse-ring" aria-hidden />
                  <div className="relative rounded-[1.75rem] bg-white/8 backdrop-blur-md border border-white/15 p-7 shadow-2xl animate-float">
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold border border-[var(--gold)]/30">
                        <Trophy className="w-3 h-3" />
                        RBSE 2025-26
                      </span>
                      <Trophy className="w-6 h-6 text-gold" />
                    </div>
                    <p className="text-cream/60 text-sm">District Topper</p>
                    <p className="text-6xl md:text-7xl font-extrabold text-gradient-gold leading-none mt-1">
                      98.20%
                    </p>
                    <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/5 p-3.5">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] flex items-center justify-center font-bold text-maroon-deep">
                        {t.home.toppers[0].name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-cream">{t.home.toppers[0].name}</p>
                        <p className="text-xs text-cream/60">Mathematics · District Topper</p>
                      </div>
                    </div>
                    <Link
                      href="/news-events/announcements"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5 transition-all"
                    >
                      View all results <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============== STATS BAND ============== */}
      <section className="bg-cream border-y border-line">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {stats.map((stat, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 90}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient-maroon tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-1.5 text-xs md:text-sm text-muted-ink font-medium">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURES ============== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow={t.home.featuresTitle}
            title={<>An education that shapes <span className="text-gradient-gold">character</span>, not just marks</>}
            description={t.home.welcomeBody.slice(0, 220) + "…"}
          />

          <div className="mt-12 grid gap-5 md:gap-6 md:grid-cols-3">
            {t.home.features.map((feature, idx) => {
              const Icon = featureIcons[idx];
              return (
                <Reveal key={idx} variant="up" delay={idx * 120}>
                  <div className="card-modern p-7 h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-5 group-hover:bg-maroon transition-colors duration-300">
                      <Icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-maroon mb-2.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-ink leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== RBSE RESULTS PODIUM ============== */}
      <section className="bg-cream-gradient py-16 md:py-24 border-y border-line">
        <div className="container mx-auto px-4">
          <SectionHeading
            align="center"
            eyebrow="RBSE Results 2025-26"
            title={<>Pride of <span className="text-gradient-gold">Virat Public School</span></>}
            description={t.home.resultsBody}
          />

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4">
            {t.home.toppers.map((topper, idx) => {
              const isFirst = idx === 0;
              const isTop3 = idx < 3;
              return (
                <Reveal key={idx} variant="up" delay={idx * 100}>
                  <div
                    className={
                      "card-modern p-6 text-center relative h-full " +
                      (isFirst
                        ? "ring-2 ring-[var(--gold)] bg-gradient-to-b from-[var(--cream)] to-white"
                        : "")
                    }
                  >
                    {isFirst && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-maroon-deep w-8 h-8 rounded-full flex items-center justify-center shadow-lg ring-4 ring-cream">
                        <Trophy className="w-4 h-4" />
                      </div>
                    )}
                    <p className="text-[11px] uppercase tracking-wider text-muted-ink font-bold mb-1.5">
                      Rank #{topper.position}
                    </p>
                    <p
                      className={
                        "font-extrabold tracking-tight text-gradient-maroon " +
                        (isTop3 ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl")
                      }
                    >
                      {topper.percent}
                    </p>
                    <div className="mt-3 h-px bg-line" />
                    <p className="mt-3 text-sm font-bold text-ink leading-tight">
                      {topper.name}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-maroon uppercase tracking-wider">
                      {topper.subject}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal variant="up" className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-maroon text-maroon hover:bg-maroon hover:text-white bg-transparent rounded-full"
            >
              <Link href="/news-events/announcements">
                {t.home.resultsMore}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============== DIRECTOR SPOTLIGHT ============== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal variant="left" className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--gold)]/30 to-[var(--maroon)]/10 blur-xl" aria-hidden />
                <div className="relative rounded-[1.75rem] overflow-hidden ring-1 ring-line shadow-xl aspect-[4/5] bg-cream">
                  <Image
                    src="/images/director-mahander-meena.jpg"
                    alt={t.about.directorName}
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-2 lg:right-4 rounded-2xl bg-maroon text-cream px-5 py-3 shadow-xl">
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Director</p>
                  <p className="text-sm font-bold">{t.about.directorName}</p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal variant="right">
                <Quote className="w-10 h-10 text-gold/50 mb-4" />
                <h2 className="text-2xl md:text-4xl font-extrabold text-maroon tracking-tight">
                  {t.about.directorTitle} · {t.about.directorName}
                </h2>
                <div className="gold-divider mt-4" />
                <p className="mt-6 text-sm md:text-base text-muted-ink leading-relaxed">
                  {t.about.directorBio}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white rounded-full font-semibold hover:opacity-90"
                  >
                    <a
                      href="https://www.instagram.com/mahander_meena_86?igsh=MWYzZm5ocTM4YjJrNA=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="mr-2 w-4 h-4" />
                      {t.about.directorInstagram}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-maroon text-maroon hover:bg-cream rounded-full bg-transparent"
                  >
                    <Link href="/about-us/management">
                      {t.common.learnMore}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============== LATEST NEWS ============== */}
      <section className="bg-cream-gradient py-16 md:py-24 border-y border-line">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10 gap-4">
            <SectionHeading
              eyebrow="What's Happening"
              title={t.home.latestNews}
            />
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex border-maroon text-maroon hover:bg-maroon hover:text-white bg-transparent rounded-full shrink-0"
            >
              <Link href="/news-events">
                {t.common.viewAll}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-3">
            {newsItems.map((item, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 120}>
                <Link href="/news-events/announcements" className="block h-full group">
                  <article className="card-modern overflow-hidden h-full flex flex-col">
                    <div className="relative h-40 bg-gradient-to-br from-[var(--maroon)] to-[var(--maroon-deep)] flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-pattern-dots opacity-40" />
                      <CalendarDays className="w-12 h-12 text-gold/70 relative z-10" />
                      <span className="absolute top-3 left-3 z-10 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream border border-white/20">
                        {item.cat}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-xs text-muted-ink mb-2 font-medium">{item.date}</p>
                      <h3 className="font-bold text-maroon mb-2 leading-snug group-hover:text-maroon-deep transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-ink leading-relaxed flex-1 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-maroon group-hover:gap-2.5 gap-1.5 transition-all">
                        {t.news.readMore}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== VISIT CAMPUS ============== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <SectionHeading
                eyebrow="Plan a Visit"
                title={t.home.quickContactTitle}
                description={t.home.quickContactBody}
              />
              <ul className="mt-8 space-y-5">
                <Reveal as="li" variant="left" className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-ink">Address</p>
                    <p className="text-sm text-ink mt-1">{t.contact.address}</p>
                  </div>
                </Reveal>
                <Reveal as="li" variant="left" delay={100} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-ink">Phone</p>
                    <p className="text-sm text-ink mt-1">{t.contact.phoneOffice}</p>
                  </div>
                </Reveal>
                <Reveal as="li" variant="left" delay={200} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cream flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-ink">Email</p>
                    <p className="text-sm text-ink mt-1 break-all">{t.contact.emailGeneral}</p>
                  </div>
                </Reveal>
              </ul>
              <Reveal variant="up" delay={120}>
                <Button asChild className="mt-8 bg-maroon hover:bg-maroon-deep text-white rounded-full font-semibold">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Viratnagar+Rajasthan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 w-4 h-4" />
                    {t.home.directions}
                  </a>
                </Button>
              </Reveal>
            </div>

            <Reveal variant="right">
              <div className="relative">
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[var(--gold)]/20 to-[var(--maroon)]/10 blur-lg" aria-hidden />
                <div className="relative aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden ring-1 ring-line shadow-xl bg-surface">
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== CTA BANNER ============== */}
      <section className="relative overflow-hidden bg-maroon-gradient text-cream">
        <div className="absolute inset-0 bg-pattern-dots opacity-40" aria-hidden />
        <div className="container mx-auto px-4 py-16 md:py-24 text-center relative">
          <Reveal variant="up">
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-cream tracking-tight max-w-3xl mx-auto">
              Ready to join the Virat Public School family?
            </h2>
            <p className="text-cream/80 max-w-2xl mx-auto mt-5 text-sm md:text-base">
              Take the first step today — our admissions team is here to guide you through every step of the process.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-soft text-maroon-deep font-bold rounded-full px-8 shadow-xl transition-all hover:-translate-y-0.5"
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
                className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream bg-transparent rounded-full px-8"
              >
                <Link href="/contact-us">{t.nav.contact}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
