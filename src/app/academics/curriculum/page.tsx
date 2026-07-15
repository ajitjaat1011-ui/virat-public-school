"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CurriculumPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/academics/curriculum", label: t.academicsSub.curriculum },
    { href: "/academics/classes", label: t.academicsSub.classes },
    { href: "/academics/faculty", label: t.academicsSub.faculty },
    { href: "/academics/examinations", label: t.academicsSub.exams },
  ];

  const stages = [
    {
      stage: "Primary (Classes I–V)",
      focus: "Foundational Literacy & Numeracy",
      subjects: ["English", "Hindi", "Mathematics", "Environmental Studies (EVS)", "Art & Craft", "Music", "Physical Education"],
      pedagogy: "Story-based learning, hands-on activities, observation-based EVS, and play-led numeracy. Continuous formative assessment through observation and oral work — no formal examinations in Classes I and II.",
    },
    {
      stage: "Upper Primary (Classes VI–VIII)",
      focus: "Disciplinary Foundations",
      subjects: ["English", "Hindi / Sanskrit", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science (History, Civics, Geography)", "Computer Science", "Art", "Physical Education"],
      pedagogy: "Subject-specialist teachers, laboratory-based science, project-based social science, and introduction to formal examinations. Emphasis on reading comprehension, analytical writing, and mathematical reasoning.",
    },
    {
      stage: "Secondary (Classes IX–X)",
      focus: "Board Examination Preparation",
      subjects: ["English (Language & Literature)", "Hindi / Sanskrit (Course A/B)", "Mathematics (Standard / Basic)", "Science (Theory + Practical)", "Social Science", "Computer Applications / Information Technology", "Art", "Physical & Health Education"],
      pedagogy: "Strict alignment with board syllabus, structured chapter-wise assessments, full-length mock examinations, and dedicated doubt-clearing sessions. Practical laboratory work in Science and Computer Applications.",
    },
    {
      stage: "Senior Secondary (Classes XI–XII)",
      focus: "Stream Specialisation & Career Readiness",
      subjects: ["Science: Physics, Chemistry, Mathematics / Biology, English, Optional", "Commerce: Accountancy, Business Studies, Economics, Mathematics, English", "Arts: History, Political Science, Geography, Hindi / English, Optional"],
      pedagogy: "Stream-specific subject specialisation, project work, internal assessment, and pre-board examinations. Career counselling, competitive-exam awareness (JEE, NEET, CLAT), and guest lectures from professionals.",
    },
  ];

  return (
    <>
      <PageHero
        title={t.academics.curriculumTitle}
        subtitle={t.academics.heroBody}
        breadcrumb={`${t.nav.academics} / ${t.academicsSub.curriculum}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.academics} links={subLinks} />

            <article className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                  {t.academics.curriculumTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.academics.curriculumBody}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--cream)] rounded-md text-sm">
                  <Badge className="bg-[var(--maroon)] text-white hover:bg-[var(--maroon-deep)]">
                    Board Affiliation
                  </Badge>
                  <span className="text-[var(--ink)]">
                    Rajasthan Board of Secondary Education (RBSE)
                  </span>
                </div>
              </div>

              {/* Stage-by-stage */}
              <div className="space-y-6">
                {stages.map((s, idx) => (
                  <Card key={idx} className="border-[var(--line)] bg-[var(--surface)] overflow-hidden">
                    <div className="h-1 bg-[var(--gold)]" />
                    <CardContent className="pt-6">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-[var(--accent)]">
                          {s.stage}
                        </h3>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--maroon)]">
                          {s.focus}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-ink)] mb-2">
                          Subjects Offered
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {s.subjects.map((subj) => (
                            <span
                              key={subj}
                              className="px-2.5 py-1 text-xs rounded bg-[var(--cream)] text-[var(--accent)] font-medium"
                            >
                              {subj}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-ink)] mb-2">
                          Pedagogical Approach
                        </p>
                        <p className="text-sm text-[var(--ink)] leading-relaxed">
                          {s.pedagogy}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
