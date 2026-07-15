"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Compass, Heart } from "lucide-react";

export default function VisionMissionPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/principals-message", label: t.aboutSub.principal },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];

  return (
    <>
      <PageHero
        title={t.about.visionTitle}
        subtitle={t.about.heroBody}
        breadcrumb={`${t.nav.about} / ${t.aboutSub.visionMission}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.about} links={subLinks} />

            <div className="space-y-10">
              {/* Vision & Mission cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-[var(--line)] bg-[var(--surface)]">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[var(--maroon)] flex items-center justify-center mb-2">
                      <Compass className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[var(--maroon-deep)]">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-[var(--ink)] leading-relaxed italic">
                      &ldquo;{t.about.vision}&rdquo;
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[var(--line)] bg-[var(--surface)]">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[var(--maroon)] flex items-center justify-center mb-2">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[var(--maroon-deep)]">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-[var(--ink)] leading-relaxed">
                      {t.about.mission}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Values grid */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-7 h-7 text-[var(--maroon)]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--maroon-deep)]">
                    Our Core Values
                  </h2>
                </div>
                <div className="gold-divider mb-6" />
                <p className="text-base text-[var(--ink)] leading-relaxed mb-8 max-w-3xl">
                  Our values are not slogans on a wall — they are the lived commitments of our teachers, our students, and our community. Every decision, from the design of a lesson to the choice of a textbook, is measured against these principles.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {t.about.values.map((value, idx) => (
                    <Card key={idx} className="border-[var(--line)] hover:border-[var(--gold)] transition-colors bg-[var(--surface)]">
                      <CardContent className="pt-6">
                        <div className="text-3xl font-bold text-[var(--gold)] mb-2">
                          0{idx + 1}
                        </div>
                        <h3 className="font-semibold text-[var(--maroon-deep)] mb-1.5">
                          {value.title}
                        </h3>
                        <p className="text-sm text-[var(--ink)] leading-relaxed">
                          {value.body}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
