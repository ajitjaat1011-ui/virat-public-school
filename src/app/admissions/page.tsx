"use client";

import Link from "next/link";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  FileText,
  Handshake,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  Phone,
} from "lucide-react";

export default function AdmissionsPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/admissions/process", label: t.admissionsSub.process },
    { href: "/admissions/fees", label: t.admissionsSub.fees },
    { href: "/admissions/apply", label: t.admissionsSub.apply },
    { href: "/admissions/eligibility", label: t.admissionsSub.eligibility },
  ];

  const stepIcons = [ClipboardList, FileText, Handshake, CheckCircle2];

  const linkCards = [
    { href: "/admissions/process", title: t.admissionsSub.process, body: "A detailed walkthrough of each step, timeline, and what to bring." },
    { href: "/admissions/fees", title: t.admissionsSub.fees, body: "Transparent fee structure by class, with concessions and scholarships." },
    { href: "/admissions/eligibility", title: t.admissionsSub.eligibility, body: "Age criteria by class and the documents you'll need to submit." },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.nav.admissions}
        title={t.admissions.heroTitle}
        subtitle={t.admissions.heroBody}
      >
        <Reveal variant="up" delay={200}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-soft text-maroon-deep font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5"
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
              className="border-cream/30 text-cream hover:bg-cream/10 bg-transparent rounded-full"
            >
              <Link href="/admissions/fees">{t.admissionsSub.fees}</Link>
            </Button>
          </div>
        </Reveal>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            <SubNav title={t.nav.admissions} links={subLinks} />

            <div className="space-y-16">
              <Reveal>
                <SectionHeading
                  eyebrow="Overview"
                  title={t.admissions.heroTitle}
                  description={t.admissions.overview}
                />
              </Reveal>

              {/* 4-step process */}
              <div>
                <Reveal>
                  <SectionHeading eyebrow="How It Works" title="Admission in 4 simple steps" />
                </Reveal>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {t.admissions.steps.map((step, idx) => {
                    const Icon = stepIcons[idx];
                    return (
                      <Reveal key={idx} variant="up" delay={idx * 120}>
                        <div className="card-modern p-6 h-full relative">
                          <span className="absolute top-4 right-5 text-5xl font-extrabold text-cream leading-none select-none">
                            {idx + 1}
                          </span>
                          <div className="w-12 h-12 rounded-xl bg-maroon flex items-center justify-center mb-4 relative z-10">
                            <Icon className="w-6 h-6 text-cream" />
                          </div>
                          <h3 className="font-bold text-maroon mb-1.5">{step.title}</h3>
                          <p className="text-sm text-muted-ink leading-relaxed">{step.body}</p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              {/* Info cards */}
              <div className="grid sm:grid-cols-3 gap-5">
                {linkCards.map(({ href, title, body }, idx) => (
                  <Reveal key={href} variant="up" delay={idx * 100}>
                    <Link href={href} className="group block h-full">
                      <div className="card-modern p-6 h-full">
                        <h3 className="font-bold text-maroon mb-1.5">{title}</h3>
                        <p className="text-sm text-muted-ink leading-relaxed">{body}</p>
                        <span className="mt-3 inline-flex items-center text-sm font-semibold text-maroon gap-1.5 group-hover:gap-2.5 transition-all">
                          {t.common.learnMore}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>

              {/* Contact strip */}
              <Reveal variant="up">
                <div className="rounded-[1.5rem] bg-cream border border-line p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-maroon flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-cream" />
                    </div>
                    <div>
                      <h3 className="font-bold text-maroon text-lg">Questions about admissions?</h3>
                      <p className="text-sm text-muted-ink mt-1">
                        {t.contact.phoneOffice} · {t.contact.hours}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-maroon hover:bg-maroon-deep text-white rounded-full font-semibold shrink-0"
                  >
                    <Link href="/contact-us">
                      {t.nav.contact}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
