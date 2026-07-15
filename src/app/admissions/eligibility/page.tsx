"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, CalendarClock } from "lucide-react";

export default function EligibilityPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/admissions/process", label: t.admissionsSub.process },
    { href: "/admissions/fees", label: t.admissionsSub.fees },
    { href: "/admissions/apply", label: t.admissionsSub.apply },
    { href: "/admissions/eligibility", label: t.admissionsSub.eligibility },
  ];

  return (
    <>
      <PageHero
        title={t.admissions.eligibilityTitle}
        subtitle={t.admissions.heroBody}
        breadcrumb={`${t.nav.admissions} / ${t.admissionsSub.eligibility}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.admissions} links={subLinks} />

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                  {t.admissions.eligibilityTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.admissions.eligibilityBody}
                </p>
              </div>

              {/* Age criteria */}
              <div>
                <h3 className="text-lg font-bold text-[var(--accent)] mb-1 flex items-center gap-2">
                  <CalendarClock className="w-5 h-5 text-[var(--maroon)]" />
                  Age Criteria (as on 31 March)
                </h3>
                <p className="text-xs text-[var(--muted-ink)] mb-4">
                  Minimum age required for admission to each class. Children must have completed the stated age by 31 March of the academic year for which admission is sought.
                </p>
                <div className="overflow-x-auto rounded-lg border border-[var(--line)]">
                  <table className="w-full text-sm">
                    <thead className="bg-[var(--maroon)] text-white">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold">Class</th>
                        <th className="text-left px-4 py-3 font-semibold">Minimum Age</th>
                        <th className="text-left px-4 py-3 font-semibold">Maximum Age (relaxed)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.admissions.ageCriteria.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-[var(--surface)]" : "bg-[var(--cream)]/50"}>
                          <td className="px-4 py-3 font-medium text-[var(--accent)]">{row.class}</td>
                          <td className="px-4 py-3 text-[var(--ink)]">{row.age}</td>
                          <td className="px-4 py-3 text-[var(--ink)]">
                            {parseInt(row.age) + 2} years (with principal&apos;s discretion)
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-[var(--muted-ink)]">
                  Note: Age criteria for Classes VII–XII follow the same pattern (11, 12, 13, 14, 15, 16 years respectively). For higher classes, previous class completion certificate is required.
                </p>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-bold text-[var(--accent)] mb-1 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[var(--maroon)]" />
                  Documents Required at Submission
                </h3>
                <p className="text-xs text-[var(--muted-ink)] mb-4">
                  The following documents must be submitted along with the application form. Incomplete applications will not be processed.
                </p>
                <Card className="border-[var(--line)] bg-[var(--surface)]">
                  <CardContent className="pt-5">
                    <ul className="space-y-2.5">
                      {t.admissions.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <span className="w-6 h-6 rounded-full bg-[var(--cream)] text-[var(--maroon)] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-[var(--ink)] leading-relaxed">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Transfer cases note */}
              <Card className="bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-[var(--accent)] mb-2">
                    Transfer Cases (Mid-Session Admissions)
                  </h4>
                  <p className="text-sm text-[var(--ink)] leading-relaxed">
                    For families relocating mid-session, admissions are subject to seat availability. A valid transfer certificate (TC) from the previous school is mandatory. The principal may relax the age criteria by up to 6 months in genuine transfer cases, at their discretion. Please contact the school office directly for such admissions — the standard online process may not apply.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
