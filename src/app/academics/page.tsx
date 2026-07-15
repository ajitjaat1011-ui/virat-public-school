"use client";

import Link from "next/link";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { AnimatedCounter } from "@/components/site/animated-counter";
import {
  BookOpen,
  GraduationCap,
  Users,
  CalendarClock,
  ArrowRight,
  FlaskConical,
  Calculator,
  Landmark,
} from "lucide-react";

export default function AcademicsPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/academics/curriculum", label: t.academicsSub.curriculum },
    { href: "/academics/classes", label: t.academicsSub.classes },
    { href: "/academics/faculty", label: t.academicsSub.faculty },
    { href: "/academics/examinations", label: t.academicsSub.exams },
  ];

  const linkCards = [
    {
      href: "/academics/curriculum",
      icon: BookOpen,
      title: t.academicsSub.curriculum,
      body: "Board affiliation, subject offerings at each level, and our pedagogical approach.",
    },
    {
      href: "/academics/classes",
      icon: GraduationCap,
      title: t.academicsSub.classes,
      body: "Primary, upper primary, secondary, and senior secondary with three streams.",
    },
    {
      href: "/academics/faculty",
      icon: Users,
      title: t.academicsSub.faculty,
      body: "Our teaching staff organised by department — qualifications and profiles.",
    },
    {
      href: "/academics/examinations",
      icon: CalendarClock,
      title: t.academicsSub.exams,
      body: "Upcoming assessments and downloadable PDF timetables.",
    },
  ];

  const streams = [
    { icon: FlaskConical, name: t.academics.streams[0].name, color: "from-[#800000] to-[#5c0000]" },
    { icon: Calculator, name: t.academics.streams[1].name, color: "from-[#d4af37] to-[#b8860b]" },
    { icon: Landmark, name: t.academics.streams[2].name, color: "from-[#2e7d32] to-[#1b5e20]" },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.nav.academics}
        title={t.academics.heroTitle}
        subtitle={t.academics.heroBody}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            <SubNav title={t.nav.academics} links={subLinks} />

            <div className="space-y-14">
              <Reveal>
                <SectionHeading
                  eyebrow="Overview"
                  title={t.academics.heroTitle}
                  description={t.academics.overview}
                />
              </Reveal>

              {/* Quick academic stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: 12, label: "Classes (I–XII)" },
                  { value: 3, label: "Streams" },
                  { value: 98, suffix: "%+", label: "Top Result" },
                  { value: 4, label: "Stages" },
                ].map((s, idx) => (
                  <Reveal key={idx} variant="up" delay={idx * 90}>
                    <div className="card-flat p-5 text-center">
                      <p className="text-3xl font-extrabold text-gradient-maroon">
                        <AnimatedCounter value={s.value} suffix={s.suffix ?? ""} />
                      </p>
                      <p className="text-xs text-muted-ink mt-1 font-medium">{s.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Streams */}
              <div>
                <Reveal>
                  <SectionHeading eyebrow="Senior Secondary" title="Three streams to choose from" />
                </Reveal>
                <div className="mt-8 grid sm:grid-cols-3 gap-5">
                  {streams.map((s, idx) => (
                    <Reveal key={s.name} variant="up" delay={idx * 110}>
                      <div className={"rounded-[1.5rem] bg-gradient-to-br text-white p-7 shadow-lg " + s.color}>
                        <s.icon className="w-9 h-9 mb-4 opacity-90" />
                        <h3 className="text-xl font-bold mb-1">{s.name}</h3>
                        <p className="text-xs text-white/80 mt-2">
                          {t.academics.streams[idx].subjects}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Section cards */}
              <div>
                <Reveal>
                  <SectionHeading eyebrow="Explore" title="Academic programs" />
                </Reveal>
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {linkCards.map(({ href, icon: Icon, title, body }, idx) => (
                    <Reveal key={href} variant="up" delay={idx * 100}>
                      <Link href={href} className="group block h-full">
                        <div className="card-modern p-6 h-full flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center group-hover:bg-maroon transition-colors duration-300 shrink-0">
                            <Icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-maroon mb-1.5">{title}</h3>
                            <p className="text-sm text-muted-ink leading-relaxed">{body}</p>
                            <span className="mt-3 inline-flex items-center text-sm font-semibold text-maroon gap-1.5 group-hover:gap-2.5 transition-all">
                              {t.common.learnMore}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
