"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Reveal } from "@/components/site/reveal";
import { Quote } from "lucide-react";

export default function PrincipalMessagePage() {
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
        eyebrow={`${t.nav.about} / ${t.aboutSub.principal}`}
        title={t.about.principalTitle}
        subtitle={t.about.heroBody}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            <SubNav title={t.nav.about} links={subLinks} />

            <article>
              <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
                {/* Portrait */}
                <Reveal variant="left" className="space-y-3">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-[var(--gold)]/25 to-[var(--maroon)]/10 blur-md" aria-hidden />
                    <div className="relative aspect-[3/4] rounded-[1.5rem] bg-maroon-gradient flex items-center justify-center ring-1 ring-cream shadow-xl overflow-hidden">
                      <div className="absolute inset-0 bg-pattern-dots opacity-40" />
                      <div className="relative text-center p-6">
                        <div className="w-24 h-24 rounded-full bg-[var(--gold)]/20 border-2 border-[var(--gold)]/40 mx-auto flex items-center justify-center text-cream text-4xl font-extrabold mb-3">
                          P
                        </div>
                        <p className="text-sm font-bold text-cream">
                          {t.about.principalName}
                        </p>
                        <p className="text-xs text-cream/70 mt-1">
                          Virat Public School
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-ink text-center italic">
                    Portrait photograph will be supplied by the principal&apos;s office.
                  </p>
                </Reveal>

                {/* Message */}
                <div>
                  <Reveal variant="right">
                    <div className="flex items-start gap-3 mb-4">
                      <Quote className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                      <h2 className="text-2xl md:text-3xl font-extrabold text-maroon">
                        {t.about.principalTitle}
                      </h2>
                    </div>
                    <div className="gold-divider mb-6" />

                    <p className="text-base text-ink leading-relaxed first-letter:text-5xl first-letter:font-extrabold first-letter:text-maroon first-letter:mr-2 first-letter:float-left first-letter:leading-[0.85] first-letter:mt-1">
                      {t.about.principalBody}
                    </p>

                    <div className="mt-8 inline-flex flex-col rounded-2xl bg-cream border border-line px-6 py-4">
                      <p className="text-sm font-bold text-maroon">{t.about.principalName}</p>
                      <p className="text-xs text-muted-ink mt-0.5">
                        Virat Public School, Viratnagar
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
