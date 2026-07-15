"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function FeesPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/admissions/process", label: t.admissionsSub.process },
    { href: "/admissions/fees", label: t.admissionsSub.fees },
    { href: "/admissions/apply", label: t.admissionsSub.apply },
    { href: "/admissions/eligibility", label: t.admissionsSub.eligibility },
  ];

  const feeRows = [
    { class: "Class I – V", admission: "₹ 3,000", annual: "₹ 4,000", tuition: "₹ 1,200 / month" },
    { class: "Class VI – VIII", admission: "₹ 3,500", annual: "₹ 4,500", tuition: "₹ 1,400 / month" },
    { class: "Class IX – X", admission: "₹ 4,000", annual: "₹ 5,000", tuition: "₹ 1,600 / month" },
    { class: "Class XI – XII (Science)", admission: "₹ 5,000", annual: "₹ 6,500", tuition: "₹ 2,000 / month" },
    { class: "Class XI – XII (Commerce)", admission: "₹ 4,500", annual: "₹ 5,500", tuition: "₹ 1,800 / month" },
    { class: "Class XI – XII (Arts)", admission: "₹ 4,000", annual: "₹ 5,000", tuition: "₹ 1,600 / month" },
  ];

  const optionalCharges = [
    { item: "Transport (per route, per month)", fee: "₹ 600 – 1,200 (based on distance)" },
    { item: "Hostel (if available, per month)", fee: "₹ 4,000 – 6,000" },
    { item: "Extracurricular specialisation (per month)", fee: "₹ 300 – 800" },
    { item: "Examination fee (per academic year)", fee: "₹ 500 – 1,000" },
    { item: "Library / laboratory deposit (refundable)", fee: "₹ 1,000" },
  ];

  return (
    <>
      <PageHero
        title={t.admissions.feesTitle}
        subtitle={t.admissions.heroBody}
        breadcrumb={`${t.nav.admissions} / ${t.admissionsSub.fees}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.admissions} links={subLinks} />

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--maroon-deep)]">
                  {t.admissions.feesTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.admissions.feesBody}
                </p>
              </div>

              {/* Indicative fees notice */}
              <Card className="border-l-4 border-l-[var(--alert)] bg-[var(--alert)]/5">
                <CardContent className="pt-5 pb-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[var(--alert)] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[var(--ink)] leading-relaxed">
                      {t.admissions.feesNote}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Main fee table */}
              <div className="overflow-x-auto rounded-lg border border-[var(--cream)]">
                <table className="w-full text-sm">
                  <thead className="bg-[var(--maroon)] text-white">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Class</th>
                      <th className="text-left px-4 py-3 font-semibold">Admission Fee (one-time)</th>
                      <th className="text-left px-4 py-3 font-semibold">Annual Charges</th>
                      <th className="text-left px-4 py-3 font-semibold">Tuition Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeRows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[var(--cream)]/50"}>
                        <td className="px-4 py-3 font-medium text-[var(--maroon-deep)]">{row.class}</td>
                        <td className="px-4 py-3 text-[var(--ink)]">{row.admission}</td>
                        <td className="px-4 py-3 text-[var(--ink)]">{row.annual}</td>
                        <td className="px-4 py-3 text-[var(--ink)] font-semibold">{row.tuition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Optional charges */}
              <div>
                <h3 className="text-lg font-bold text-[var(--maroon-deep)] mb-4">
                  Optional Charges
                </h3>
                <div className="space-y-2">
                  {optionalCharges.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 bg-[var(--cream)]/40 rounded-md"
                    >
                      <span className="text-sm text-[var(--ink)]">{row.item}</span>
                      <span className="text-sm font-semibold text-[var(--maroon-deep)]">{row.fee}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concessions */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-[var(--cream)] bg-white">
                  <CardContent className="pt-5">
                    <h4 className="font-semibold text-[var(--maroon-deep)] mb-2">Sibling Concession</h4>
                    <p className="text-sm text-[var(--ink)] leading-relaxed">
                      A 10% concession on tuition fee is offered for the second child (and subsequent children) of the same family enrolled at the school. Please inform the accounts office at the time of admission to claim this concession.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[var(--cream)] bg-white">
                  <CardContent className="pt-5">
                    <h4 className="font-semibold text-[var(--maroon-deep)] mb-2">Need-Based Scholarship</h4>
                    <p className="text-sm text-[var(--ink)] leading-relaxed">
                      Limited need-based scholarships are available for deserving students. Application forms can be collected from the school office. Decisions are made by a committee and are confidential. Please contact the principal&apos;s office for details.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
