"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { History, Eye, MessageSquare, Users } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/principals-message", label: t.aboutSub.principal },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];

  const linkCards = [
    { href: "/about-us/history", icon: History, title: t.aboutSub.history, body: "From a small neighbourhood institution to a trusted centre of learning — the milestones that mark our journey." },
    { href: "/about-us/vision-mission", icon: Eye, title: t.aboutSub.visionMission, body: "The vision, mission, and core values that guide every decision we make for our students." },
    { href: "/about-us/principals-message", icon: MessageSquare, title: t.aboutSub.principal, body: "A warm welcome from our principal — on education, character, and what we promise every child." },
    { href: "/about-us/management", icon: Users, title: t.aboutSub.management, body: "The educators, community leaders, and professionals who steward our school's mission." },
  ];

  return (
    <>
      <PageHero
        title={t.about.heroTitle}
        subtitle={t.about.heroBody}
        breadcrumb={t.nav.about}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.about} links={subLinks} />

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--maroon-deep)]">
                  {t.about.heroTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.about.overview}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {linkCards.map(({ href, icon: Icon, title, body }) => (
                  <a
                    key={href}
                    href={href}
                    className="group"
                  >
                    <Card className="h-full border-[var(--cream)] hover:border-[var(--gold)] hover:shadow-lg transition-all bg-white">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 rounded-lg bg-[var(--cream)] flex items-center justify-center mb-3 group-hover:bg-[var(--maroon)] transition-colors">
                          <Icon className="w-6 h-6 text-[var(--maroon)] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-semibold text-[var(--maroon-deep)] mb-2">{title}</h3>
                        <p className="text-sm text-[var(--ink)] leading-relaxed">{body}</p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
