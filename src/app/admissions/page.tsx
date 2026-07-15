"use client";

import Link from "next/link";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function AdmissionsPage() {
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
        title={t.admissions.heroTitle}
        subtitle={t.admissions.heroBody}
        breadcrumb={t.nav.admissions}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.admissions} links={subLinks} />

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--maroon-deep)]">
                  {t.admissions.heroTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.admissions.overview}
                </p>
              </div>

              {/* 4-step process */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.admissions.steps.map((step, idx) => (
                  <Card key={idx} className="border-[var(--cream)] bg-white hover:border-[var(--gold)] transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-10 h-10 rounded-full bg-[var(--maroon)] text-white flex items-center justify-center font-bold mb-3">
                        {idx + 1}
                      </div>
                      <h3 className="font-semibold text-[var(--maroon-deep)] mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--ink)] leading-relaxed">
                        {step.body}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sub-page cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { href: "/admissions/process", title: t.admissionsSub.process, body: "Detailed timeline, what to bring, and what to expect at each step." },
                  { href: "/admissions/fees", title: t.admissionsSub.fees, body: "Transparent fee table by class — admission, annual, and tuition." },
                  { href: "/admissions/apply", title: t.admissionsSub.apply, body: "Complete the online application form in 5–10 minutes." },
                  { href: "/admissions/eligibility", title: t.admissionsSub.eligibility, body: "Age criteria by class and the document checklist." },
                ].map(({ href, title, body }) => (
                  <Link key={href} href={href} className="group">
                    <Card className="h-full border-[var(--cream)] hover:border-[var(--gold)] hover:shadow-md transition-all bg-white">
                      <CardContent className="pt-6 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-[var(--maroon-deep)] mb-1">{title}</h3>
                          <p className="text-sm text-[var(--ink)] leading-relaxed">{body}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[var(--maroon)] flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-[var(--maroon)] text-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to apply?</h3>
                <p className="text-white/85 mb-4">
                  The online application takes about 5–10 minutes. Have your documents ready.
                </p>
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--gold)] text-[var(--maroon-deep)] font-semibold hover:bg-[var(--gold)]/90 transition-colors"
                >
                  {t.nav.apply}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
