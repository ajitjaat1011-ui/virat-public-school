"use client";

import Image from "next/image";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Instagram, Quote } from "lucide-react";

export default function ManagementPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/principals-message", label: t.aboutSub.principal },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];

  const committee = [
    { designation: "Chairman" },
    { designation: "Secretary" },
    { designation: "Treasurer" },
    { designation: "Principal (Ex-Officio)" },
    { designation: "Member" },
    { designation: "Member" },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${t.nav.about} / ${t.aboutSub.management}`}
        title={t.about.managementTitle}
        subtitle={t.about.managementBody}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            <SubNav title={t.nav.about} links={subLinks} />

            <div className="space-y-14">
              {/* Director — featured */}
              <div>
                <Reveal>
                  <SectionHeading eyebrow={t.about.directorTitle} title={t.about.directorName} />
                </Reveal>

                <Reveal variant="up" delay={100}>
                  <div className="mt-8 relative overflow-hidden rounded-[2rem] bg-maroon-gradient text-cream shadow-2xl">
                    <div className="absolute inset-0 bg-pattern-dots opacity-40" aria-hidden />
                    <div className="relative grid md:grid-cols-[300px_1fr] gap-8 p-8 md:p-10 items-center">
                      {/* Photo */}
                      <div className="relative mx-auto md:mx-0">
                        <div className="absolute -inset-2 rounded-[1.5rem] bg-[var(--gold)]/30 blur-lg" aria-hidden />
                        <div className="relative w-52 h-64 md:w-60 md:h-72 rounded-[1.5rem] overflow-hidden ring-4 ring-cream/20 shadow-xl">
                          <Image
                            src="/images/director-mahander-meena.jpg"
                            alt={`${t.about.directorName} — ${t.about.directorTitle}, Virat Public School`}
                            fill
                            sizes="(max-width: 768px) 60vw, 240px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                      {/* Bio */}
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold mb-4">
                          {t.about.directorTitle}
                        </span>
                        <Quote className="w-8 h-8 text-gold/60 mb-3" />
                        <p className="text-sm md:text-base text-cream/90 leading-relaxed">
                          {t.about.directorBio}
                        </p>
                        <Button
                          asChild
                          className="mt-6 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white rounded-full font-semibold hover:opacity-90"
                        >
                          <a
                            href="https://www.instagram.com/mahander_meena_86?igsh=MWYzZm5ocTM4YjJrNA=="
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Instagram className="mr-2 w-4 h-4" />
                            {t.about.directorInstagram}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Committee members */}
              <div>
                <Reveal>
                  <SectionHeading eyebrow="Leadership" title="Management Committee" />
                </Reveal>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {committee.map((member, idx) => (
                    <Reveal key={idx} variant="up" delay={idx * 80}>
                      <div className="card-modern p-6 text-center h-full">
                        <div className="w-16 h-16 rounded-2xl bg-cream mx-auto flex items-center justify-center mb-4">
                          <span className="text-xl font-extrabold text-maroon">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h4 className="font-bold text-maroon text-sm">{member.designation}</h4>
                        <p className="text-xs text-muted-ink mt-2 leading-relaxed">
                          Profile to be supplied by the management office.
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal variant="up">
                  <div className="mt-8 p-5 rounded-2xl bg-cream border border-line">
                    <p className="text-xs text-muted-ink leading-relaxed">
                      The profiles, photographs, and designations of other committee members are placeholders pending final confirmation from the management committee. Updated information will be published as soon as it becomes available.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
