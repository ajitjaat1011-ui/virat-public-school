"use client";

import Link from "next/link";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  History,
  Eye,
  MessageSquare,
  Users,
  ArrowRight,
  Quote,
  GraduationCap,
  Heart,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/principals-message", label: t.aboutSub.principal },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];

  const linkCards = [
    {
      href: "/about-us/history",
      icon: History,
      title: t.aboutSub.history,
      body: "From a small neighbourhood institution to a trusted centre of learning — the milestones that mark our journey.",
    },
    {
      href: "/about-us/vision-mission",
      icon: Eye,
      title: t.aboutSub.visionMission,
      body: "The vision, mission, and core values that guide every decision we make for our students.",
    },
    {
      href: "/about-us/principals-message",
      icon: MessageSquare,
      title: t.aboutSub.principal,
      body: "A warm welcome from our principal — on education, character, and what we promise every child.",
    },
    {
      href: "/about-us/management",
      icon: Users,
      title: t.aboutSub.management,
      body: "The educators, community leaders, and professionals who steward our school's mission.",
    },
  ];

  const pillars = [
    { icon: GraduationCap, title: "Academic Excellence", body: "Consistent RBSE board results with multiple toppers above 95%." },
    { icon: Heart, title: "Value-Based Learning", body: "Rooted in humility, discipline, and respect — our motto in practice." },
    { icon: Sparkles, title: "Holistic Growth", body: "Academics balanced with arts, sports, and cultural programs." },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.nav.about}
        title={t.about.heroTitle}
        subtitle={t.about.heroBody}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            <SubNav title={t.nav.about} links={subLinks} />

            <div className="space-y-14">
              {/* Overview */}
              <Reveal>
                <SectionHeading
                  eyebrow="Our Story"
                  title={t.about.heroTitle}
                  description={t.about.overview}
                />
              </Reveal>

              {/* Pillars */}
              <div className="grid sm:grid-cols-3 gap-5">
                {pillars.map((p, idx) => (
                  <Reveal key={p.title} variant="up" delay={idx * 110}>
                    <div className="card-modern p-6 h-full">
                      <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4">
                        <p.icon className="w-5 h-5 text-maroon" />
                      </div>
                      <h3 className="font-bold text-maroon mb-1.5">{p.title}</h3>
                      <p className="text-sm text-muted-ink leading-relaxed">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Motto quote */}
              <Reveal variant="up">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-maroon-gradient text-cream p-8 md:p-12">
                  <div className="absolute inset-0 bg-pattern-dots opacity-40" aria-hidden />
                  <div className="relative">
                    <Quote className="w-9 h-9 text-gold mb-4" />
                    <p className="text-2xl md:text-3xl font-bold text-cream italic">
                      “{t.motto}”
                    </p>
                    <p className="mt-2 text-gold/90">{t.mottoTranslation}</p>
                  </div>
                </div>
              </Reveal>

              {/* Section cards */}
              <div>
                <Reveal>
                  <SectionHeading eyebrow="Explore Further" title="Learn more about us" />
                </Reveal>
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {linkCards.map(({ href, icon: Icon, title, body }, idx) => (
                    <Reveal key={href} variant="up" delay={idx * 100}>
                      <Link href={href} className="group block h-full">
                        <div className="card-modern p-6 h-full flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center group-hover:bg-maroon transition-colors duration-300 shrink-0">
                            <Icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-maroon mb-1.5">{title}</h3>
                            <p className="text-sm text-muted-ink leading-relaxed">{body}</p>
                            <span className="mt-3 inline-flex items-center text-sm font-semibold text-maroon gap-1.5 group-hover:gap-2.5 transition-all">
                              {t.common.learnMore}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
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
