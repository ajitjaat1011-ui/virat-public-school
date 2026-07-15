"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";

export default function HistoryPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/principals-message", label: t.aboutSub.principal },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];

  const milestones = [
    { year: "Founding", title: "The Beginning", body: "Virat Public School opened its doors with a small batch of students, founded by community-minded educators committed to bringing quality education to rural Rajasthan." },
    { year: "Early Years", title: "Building Foundations", body: "The early years focused on establishing a strong primary program, recruiting caring teachers, and building trust with the families of Viratnagar." },
    { year: "Growth Phase", title: "Expanding the Campus", body: "Responding to growing demand, the school expanded its campus with new classrooms, a dedicated science laboratory, and a library stocked with age-appropriate reading material." },
    { year: "Digital Era", title: "Modernising the Classroom", body: "Digital classrooms, a computer lab, and project-based learning were introduced to ensure students are prepared for a connected, technology-driven world." },
    { year: "Today", title: "A Trusted Institution", body: "Today, Virat Public School serves families across Viratnagar and the wider Kotputli-Behror region, with a track record of academic and co-curricular achievement." },
  ];

  return (
    <>
      <PageHero
        title={t.about.historyTitle}
        subtitle={t.about.heroBody}
        breadcrumb={`${t.nav.about} / ${t.aboutSub.history}`}
      />

      <section className="inner-page-section py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.about} links={subLinks} />

            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                {t.about.historyTitle}
              </h2>
              <div className="gold-divider mt-3" />
              <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                {t.about.historyBody}
              </p>

              {/* Timeline */}
              <h3 className="text-xl font-bold text-[var(--accent)] mt-12 mb-6">
                Our Journey — Key Milestones
              </h3>
              <ol className="relative border-l-2 border-[var(--line)] ml-3 space-y-8">
                {milestones.map((m, idx) => (
                  <li key={idx} className="ml-6">
                    <span className="absolute -left-[11px] w-5 h-5 rounded-full bg-[var(--gold)] ring-1 ring-[var(--line)]" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <span className="text-sm font-bold text-[var(--maroon)] uppercase tracking-wide">
                        {m.year}
                      </span>
                      <h4 className="text-lg font-semibold text-[var(--accent)]">
                        {m.title}
                      </h4>
                    </div>
                    <p className="mt-1.5 text-sm text-[var(--ink)] leading-relaxed max-w-2xl">
                      {m.body}
                    </p>
                  </li>
                ))}
              </ol>

              {/* Archival photos placeholder */}
              <Card className="mt-12 bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-[var(--accent)] mb-2">
                    Archival Photographs
                  </h4>
                  <p className="text-sm text-[var(--muted-ink)] leading-relaxed">
                    Archival photographs — first batch graduations, annual day celebrations, inter-school achievements — will be displayed here once shared by the school office. These images form the living memory of the institution and remind us of the journey we have travelled together.
                  </p>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
