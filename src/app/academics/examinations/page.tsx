"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

export default function ExaminationsPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/academics/curriculum", label: t.academicsSub.curriculum },
    { href: "/academics/classes", label: t.academicsSub.classes },
    { href: "/academics/faculty", label: t.academicsSub.faculty },
    { href: "/academics/examinations", label: t.academicsSub.exams },
  ];

  const schedule = [
    { exam: "Formative Assessment 1", classes: "I – XII", dates: "April 2026", status: "Scheduled" },
    { exam: "Formative Assessment 2", classes: "I – XII", dates: "July 2026", status: "Scheduled" },
    { exam: "Half-Yearly Examination", classes: "I – XII", dates: "September 2026", status: "Scheduled" },
    { exam: "Formative Assessment 3", classes: "I – XII", dates: "November 2026", status: "Scheduled" },
    { exam: "Formative Assessment 4", classes: "I – XII", dates: "January 2027", status: "Scheduled" },
    { exam: "Pre-Board Examination", classes: "X & XII", dates: "January 2027", status: "Scheduled" },
    { exam: "Annual Examination", classes: "I – IX & XI", dates: "March 2027", status: "Scheduled" },
    { exam: "Board Examination", classes: "X & XII", dates: "March – April 2027", status: "Tentative" },
  ];

  return (
    <>
      <PageHero
        title={t.academics.examsTitle}
        subtitle={t.academics.heroBody}
        breadcrumb={`${t.nav.academics} / ${t.academicsSub.exams}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.academics} links={subLinks} />

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--maroon-deep)]">
                  {t.academics.examsTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.academics.examsBody}
                </p>
              </div>

              {/* Schedule table */}
              <div className="overflow-x-auto rounded-lg border border-[var(--line)]">
                <table className="w-full text-sm">
                  <thead className="bg-[var(--maroon)] text-white">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Examination</th>
                      <th className="text-left px-4 py-3 font-semibold">Classes</th>
                      <th className="text-left px-4 py-3 font-semibold">Tentative Dates</th>
                      <th className="text-left px-4 py-3 font-semibold">Timetable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-[var(--surface)]" : "bg-[var(--cream)]/50"}
                      >
                        <td className="px-4 py-3 font-medium text-[var(--maroon-deep)]">
                          {row.exam}
                        </td>
                        <td className="px-4 py-3 text-[var(--ink)]">{row.classes}</td>
                        <td className="px-4 py-3 text-[var(--ink)]">{row.dates}</td>
                        <td className="px-4 py-3">
                          <button
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--maroon)] hover:text-[var(--maroon-deep)] disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled
                            title="PDF timetable will be available closer to the examination date"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            PDF (soon)
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Card className="bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Download className="w-5 h-5 text-[var(--maroon)] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[var(--ink)] leading-relaxed">
                      {t.academics.examsPlaceholder} Detailed PDF timetables — including subject-wise dates, examination timings, and seating arrangements — will be published here approximately two weeks before each examination. Parents will also receive a notification through the school office.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
