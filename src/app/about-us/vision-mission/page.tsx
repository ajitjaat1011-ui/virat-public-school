"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
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
        eyebrow={`${t.nav.about} / ${t.aboutSub.visionMission}`}
        title={t.about.visionTitle}
        subtitle={t.about.heroBody}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            <SubNav title={t.nav.about} links={subLinks} />

            <div className="space-y-14">
              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-6">
                <Reveal variant="left">
                  <div className="relative overflow-hidden rounded-[1.75rem] bg-maroon-gradient text-cream p-8 h-full shadow-xl">
                    <div className="absolute inset-0 bg-pattern-dots opacity-40" aria-hidden />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/20 flex items-center justify-center mb-4 border border-[var(--gold)]/30">
                        <Compass className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-extrabold text-cream mb-3">Our Vision</h3>
                      <p className="text-base text-cream/90 leading-relaxed italic">
                        “{t.about.vision}”
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal variant="right">
                  <div className="card-modern p-8 h-full">
                    <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-maroon" />
                    </div>
                    <h3 className="text-xl font-extrabold text-maroon mb-3">Our Mission</h3>
                    <p className="text-base text-muted-ink leading-relaxed">
                      {t.about.mission}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Values */}
              <div>
                <Reveal>
                  <SectionHeading
                    eyebrow="Our Core Values"
                    title={
                      <span className="inline-flex items-center gap-3">
                        <Heart className="w-7 h-7 text-maroon" />
                        What we stand for
                      </span>
                    }
                    description="Our values are not slogans on a wall — they are the lived commitments of our teachers, our students, and our community. Every decision, from the design of a lesson to the choice of a textbook, is measured against these principles."
                  />
                </Reveal>

                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {t.about.values.map((value, idx) => (
                    <Reveal key={idx} variant="up" delay={(idx % 3) * 100}>
                      <div className="card-modern p-6 h-full group">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-3xl font-extrabold text-gradient-gold leading-none">
                            0{idx + 1}
                          </span>
                          <span className="w-8 h-px bg-line group-hover:w-12 group-hover:bg-gold transition-all" />
                        </div>
                        <h3 className="font-bold text-maroon mb-1.5">{value.title}</h3>
                        <p className="text-sm text-muted-ink leading-relaxed">{value.body}</p>
                      </div>
                    </Reveal>
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
