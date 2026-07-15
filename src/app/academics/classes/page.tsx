"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";

export default function ClassesPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/academics/curriculum", label: t.academicsSub.curriculum },
    { href: "/academics/classes", label: t.academicsSub.classes },
    { href: "/academics/faculty", label: t.academicsSub.faculty },
    { href: "/academics/examinations", label: t.academicsSub.exams },
  ];

  return (
    <>
      <PageHero
        title={t.academics.classesTitle}
        subtitle={t.academics.heroBody}
        breadcrumb={`${t.nav.academics} / ${t.academicsSub.classes}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.academics} links={subLinks} />

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                  {t.academics.classesTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.academics.classesIntro}
                </p>
              </div>

              {/* Classes grid */}
              <div className="grid sm:grid-cols-2 gap-5">
                {t.academics.classes.map((cls, idx) => (
                  <Card key={idx} className="border-[var(--line)] bg-[var(--surface)] hover:border-[var(--gold)] transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-3xl font-bold text-[var(--gold)]">
                          0{idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-[var(--accent)]">
                          {cls.stage}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-[var(--maroon)] mb-2">
                        {cls.range}
                      </p>
                      <p className="text-sm text-[var(--ink)] leading-relaxed">
                        {cls.focus}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Senior secondary streams */}
              <div>
                <h3 className="text-xl font-bold text-[var(--accent)] mb-2">
                  Senior Secondary Streams
                </h3>
                <div className="gold-divider mb-5" />
                <p className="text-base text-[var(--ink)] leading-relaxed mb-6 max-w-3xl">
                  At the senior secondary level (Classes XI and XII), students choose one of three streams based on their aptitude, interest, and career aspirations. Each stream is taught by subject-specialist teachers and includes project work, internal assessment, and pre-board preparation.
                </p>

                <div className="grid md:grid-cols-3 gap-5">
                  {t.academics.streams.map((stream, idx) => {
                    const colors = [
                      "from-[var(--maroon)] to-[var(--maroon-deep)]",
                      "from-[var(--gold)] to-[var(--success)]",
                      "from-[var(--success)] to-[#1B5E20]",
                    ];
                    return (
                      <Card key={idx} className="overflow-hidden border-0 shadow-md">
                        <div className={`bg-gradient-to-br ${colors[idx]} p-5 text-white`}>
                          <h4 className="text-xl font-bold">{stream.name}</h4>
                        </div>
                        <CardContent className="pt-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-ink)] mb-2">
                            Subjects
                          </p>
                          <p className="text-sm text-[var(--ink)] leading-relaxed">
                            {stream.subjects}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Note */}
              <Card className="bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <p className="text-sm text-[var(--ink)] leading-relaxed">
                    <strong className="text-[var(--accent)]">Note:</strong> The availability of optional subjects within each stream depends on the number of students opting for them and the staffing for the academic year. Final subject combinations will be confirmed at the time of admission to Class XI.
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
