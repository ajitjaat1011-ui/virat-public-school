"use client";

import Link from "next/link";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, CalendarClock, ArrowRight } from "lucide-react";

export default function AcademicsPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/academics/curriculum", label: t.academicsSub.curriculum },
    { href: "/academics/classes", label: t.academicsSub.classes },
    { href: "/academics/faculty", label: t.academicsSub.faculty },
    { href: "/academics/examinations", label: t.academicsSub.exams },
  ];

  const linkCards = [
    { href: "/academics/curriculum", icon: BookOpen, title: t.academicsSub.curriculum, body: "Board affiliation, subject offerings at each level, and our pedagogical approach." },
    { href: "/academics/classes", icon: GraduationCap, title: t.academicsSub.classes, body: "Primary, upper primary, secondary, and senior secondary with three streams." },
    { href: "/academics/faculty", icon: Users, title: t.academicsSub.faculty, body: "Our teaching staff organised by department — qualifications and profiles." },
    { href: "/academics/examinations", icon: CalendarClock, title: t.academicsSub.exams, body: "Upcoming assessments and downloadable PDF timetables." },
  ];

  return (
    <>
      <PageHero
        title={t.academics.heroTitle}
        subtitle={t.academics.heroBody}
        breadcrumb={t.nav.academics}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.academics} links={subLinks} />

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--maroon-deep)]">
                  {t.academics.heroTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.academics.overview}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {linkCards.map(({ href, icon: Icon, title, body }) => (
                  <Link key={href} href={href} className="group">
                    <Card className="h-full border-[var(--line)] hover:border-[var(--gold)] transition-colors bg-[var(--surface)]">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 rounded-lg bg-[var(--cream)] flex items-center justify-center group-hover:bg-[var(--maroon)] transition-colors flex-shrink-0">
                            <Icon className="w-5 h-5 text-[var(--maroon)] group-hover:text-white transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-[var(--maroon-deep)] mb-1">{title}</h3>
                            <p className="text-sm text-[var(--ink)] leading-relaxed">{body}</p>
                            <span className="mt-2 inline-flex items-center text-xs font-medium text-[var(--maroon)]">
                              {t.common.learnMore}
                              <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
