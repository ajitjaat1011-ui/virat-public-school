"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";

export default function FacultyPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/academics/curriculum", label: t.academicsSub.curriculum },
    { href: "/academics/classes", label: t.academicsSub.classes },
    { href: "/academics/faculty", label: t.academicsSub.faculty },
    { href: "/academics/examinations", label: t.academicsSub.exams },
  ];

  const departments = [
    {
      name: "Languages",
      members: [
        { name: "To be announced", qualification: "M.A., B.Ed.", subject: "English" },
        { name: "To be announced", qualification: "M.A., B.Ed.", subject: "Hindi" },
        { name: "To be announced", qualification: "M.A., B.Ed.", subject: "Sanskrit" },
      ],
    },
    {
      name: "Mathematics & Science",
      members: [
        { name: "To be announced", qualification: "M.Sc., B.Ed.", subject: "Mathematics" },
        { name: "To be announced", qualification: "M.Sc., B.Ed.", subject: "Physics" },
        { name: "To be announced", qualification: "M.Sc., B.Ed.", subject: "Chemistry" },
        { name: "To be announced", qualification: "M.Sc., B.Ed.", subject: "Biology" },
      ],
    },
    {
      name: "Social Science",
      members: [
        { name: "To be announced", qualification: "M.A., B.Ed.", subject: "History" },
        { name: "To be announced", qualification: "M.A., B.Ed.", subject: "Geography" },
        { name: "To be announced", qualification: "M.A., B.Ed.", subject: "Civics" },
      ],
    },
    {
      name: "Computer & Co-curricular",
      members: [
        { name: "To be announced", qualification: "B.Tech / MCA, B.Ed.", subject: "Computer Science" },
        { name: "To be announced", qualification: "B.F.A. / M.A.", subject: "Art" },
        { name: "To be announced", qualification: "B.P.Ed.", subject: "Physical Education" },
      ],
    },
  ];

  return (
    <>
      <PageHero
        title={t.academics.facultyTitle}
        subtitle={t.academics.heroBody}
        breadcrumb={`${t.nav.academics} / ${t.academicsSub.faculty}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.academics} links={subLinks} />

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--maroon-deep)]">
                  {t.academics.facultyTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.academics.facultyBody}
                </p>
              </div>

              {departments.map((dept) => (
                <div key={dept.name}>
                  <h3 className="text-lg font-bold text-[var(--maroon-deep)] mb-4 pb-2 border-b border-[var(--line)]">
                    {dept.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dept.members.map((m, idx) => (
                      <Card key={idx} className="border-[var(--line)] bg-[var(--surface)] transition-colors">
                        <CardContent className="pt-5 pb-5">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center flex-shrink-0">
                              <span className="text-base font-bold text-[var(--maroon)]">
                                {m.subject.charAt(0)}
                              </span>
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-sm text-[var(--maroon-deep)] truncate">
                                {m.name}
                              </p>
                              <p className="text-xs text-[var(--maroon)] font-medium">
                                {m.subject}
                              </p>
                              <p className="text-xs text-[var(--muted-ink)]">
                                {m.qualification}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}

              <Card className="bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <p className="text-sm text-[var(--muted-ink)] leading-relaxed">
                    {t.academics.facultyPlaceholder}
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
