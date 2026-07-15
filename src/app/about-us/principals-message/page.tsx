"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
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
        title={t.about.principalTitle}
        subtitle={t.about.heroBody}
        breadcrumb={`${t.nav.about} / ${t.aboutSub.principal}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.about} links={subLinks} />

            <article>
              <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
                {/* Portrait placeholder */}
                <div className="space-y-3">
                  <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-[var(--cream)] to-[var(--maroon)]/10 flex items-center justify-center ring-1 ring-[var(--cream)]">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 rounded-full bg-[var(--maroon)] mx-auto flex items-center justify-center text-white text-3xl font-bold mb-3">
                        P
                      </div>
                      <p className="text-sm font-semibold text-[var(--accent)]">
                        {t.about.principalName}
                      </p>
                      <p className="text-xs text-[var(--muted-ink)] mt-1">
                        Virat Public School
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--muted-ink)] text-center italic">
                    Portrait photograph will be supplied by the principal&apos;s office.
                  </p>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="w-8 h-8 text-[var(--gold)] flex-shrink-0 mt-1" />
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                      {t.about.principalTitle}
                    </h2>
                  </div>
                  <div className="gold-divider mb-6" />

                  <div className="prose prose-lg max-w-none">
                    <p className="text-base text-[var(--ink)] leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-[var(--maroon)] first-letter:mr-1 first-letter:float-left first-letter:leading-none">
                      {t.about.principalBody}
                    </p>
                  </div>

                  <Card className="mt-8 bg-[var(--cream)] border-0">
                    <CardContent className="pt-6">
                      <p className="text-sm text-[var(--accent)] font-semibold mb-1">
                        {t.about.principalName}
                      </p>
                      <p className="text-xs text-[var(--muted-ink)]">
                        Virat Public School, Viratnagar
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
