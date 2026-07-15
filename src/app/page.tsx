"use client";

import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/site/language-context";

export default function HomePage() {
  const { t } = useLanguage();

  const featureIcons = [Users, BookOpen, Trophy];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--maroon-deep)] text-white overflow-hidden">
        {/* Hero background image — gradient fallback if no image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(92,0,0,0.92) 0%, rgba(128,0,0,0.85) 50%, rgba(92,0,0,0.92) 100%), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative">
          <div className="max-w-3xl">
            <p className="text-[var(--gold)] uppercase tracking-widest text-xs md:text-sm font-semibold mb-4">
              {t.motto} — {t.mottoTranslation}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {t.schoolName}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-[var(--gold)] font-semibold">
              {t.tagline}
            </p>
            <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--maroon-deep)] font-semibold"
              >
                <Link href="/academics">
                  {t.home.heroCtaAcademics}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--maroon-deep)]"
              >
                <Link href="/admissions/apply">
                  {t.home.heroCtaApply}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Bottom wave divider */}
        <svg
          className="absolute bottom-0 left-0 w-full text-[var(--cream)]"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0 60 L1440 60 L1440 30 Q720 0 0 30 Z"
          />
        </svg>
      </section>

      {/* WELCOME */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--maroon)] ring-4 ring-white shadow-lg mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon-deep)]">
              {t.home.welcomeTitle}
            </h2>
            <div className="gold-divider-center mt-4" />
            <p className="mt-6 text-base md:text-lg text-[var(--ink)] leading-relaxed">
              {t.home.welcomeBody}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon-deep)]">
              {t.home.featuresTitle}
            </h2>
            <div className="gold-divider-center mt-4" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.home.features.map((feature, idx) => {
              const Icon = featureIcons[idx];
              return (
                <Card
                  key={idx}
                  className="border-[var(--cream)] hover:border-[var(--gold)] hover:shadow-lg transition-all bg-white"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[var(--cream)] flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-[var(--maroon)]" />
                    </div>
                    <CardTitle className="text-xl text-[var(--maroon-deep)]">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--ink)] leading-relaxed">
                      {feature.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* RBSE RESULTS 2025-26 */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-[var(--maroon)] text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
              <Trophy className="w-3.5 h-3.5" />
              RBSE 2025-26
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon-deep)]">
              {t.home.resultsTitle}
            </h2>
            <div className="gold-divider-center mt-4" />
            <p className="mt-5 text-base text-[var(--ink)] leading-relaxed max-w-3xl mx-auto">
              {t.home.resultsBody}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.home.toppers.map((topper, idx) => {
              const positionStyles = [
                "from-[var(--gold)] to-[#B8941E] text-[var(--maroon-deep)]",       // 1st — gold
                "from-gray-300 to-gray-500 text-[var(--maroon-deep)]",              // 2nd — silver
                "from-amber-600 to-amber-800 text-white",                           // 3rd — bronze
                "from-[var(--maroon)] to-[var(--maroon-deep)] text-white",          // 4th — maroon
                "from-[var(--maroon)] to-[var(--maroon-deep)] text-white",          // 5th — maroon
              ];
              return (
                <Card
                  key={idx}
                  className="border-0 shadow-md hover:shadow-xl transition-shadow overflow-hidden bg-white"
                >
                  <div className={`bg-gradient-to-br ${positionStyles[idx]} p-5 text-center`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-2">
                      <span className="text-2xl font-bold">#{topper.position}</span>
                    </div>
                    <p className="text-3xl font-extrabold tracking-tight">
                      {topper.percent}
                    </p>
                  </div>
                  <CardContent className="pt-4 pb-4 text-center">
                    <p className="font-semibold text-[var(--maroon-deep)] text-sm">
                      {topper.name}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-[var(--maroon)] text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-white"
            >
              <Link href="/news-events/announcements">
                {t.home.resultsMore}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LATEST NEWS STRIP */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon-deep)] flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-[var(--maroon)]" />
                {t.home.latestNews}
              </h2>
              <div className="gold-divider mt-4" />
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex border-[var(--maroon)] text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-white"
            >
              <Link href="/news-events">
                {t.common.viewAll}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Static placeholder news cards (real ones come from CMS) */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                date: "Jul 2026",
                cat: "Announcement",
                title: "Admissions Open for Academic Year 2026–27",
                excerpt:
                  "Applications are now being accepted for all classes. Visit our Admissions page to apply online or contact the school office for assistance.",
              },
              {
                date: "Jul 2026",
                cat: "Event",
                title: "Annual Day Celebration — Save the Date",
                excerpt:
                  "Our annual cultural evening will be held in the school auditorium. Parents and community members are cordially invited to attend.",
              },
              {
                date: "Jun 2026",
                cat: "Academic",
                title: "New Computer Lab Inaugurated",
                excerpt:
                  "A newly equipped computer lab with modern workstations has been inaugurated, expanding digital learning opportunities for our students.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-white border-[var(--cream)] hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="h-2 bg-[var(--gold)] rounded-t-lg" />
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-[var(--muted-ink)] mb-3">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                    <span className="text-[var(--gold)]">·</span>
                    <span className="font-semibold uppercase tracking-wide text-[var(--maroon)]">
                      {item.cat}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[var(--maroon-deep)] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)] leading-relaxed flex-1">
                    {item.excerpt}
                  </p>
                  <Link
                    href="/news-events/announcements"
                    className="mt-4 text-sm font-medium text-[var(--maroon)] hover:text-[var(--maroon-deep)] inline-flex items-center"
                  >
                    {t.news.readMore}
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button
              asChild
              variant="outline"
              className="border-[var(--maroon)] text-[var(--maroon)]"
            >
              <Link href="/news-events">{t.common.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT / VISIT US */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon-deep)]">
                {t.home.quickContactTitle}
              </h2>
              <div className="gold-divider mt-4" />
              <p className="mt-6 text-base text-[var(--ink)] leading-relaxed">
                {t.home.quickContactBody}
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--maroon)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--maroon-deep)]">Address</p>
                    <p className="text-sm text-[var(--ink)]">{t.contact.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[var(--maroon)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--maroon-deep)]">Phone</p>
                    <p className="text-sm text-[var(--ink)]">{t.contact.phoneOffice}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--maroon)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--maroon-deep)]">Email</p>
                    <p className="text-sm text-[var(--ink)]">{t.contact.emailGeneral}</p>
                  </div>
                </li>
              </ul>

              <Button
                asChild
                className="mt-6 bg-[var(--maroon)] hover:bg-[var(--maroon-deep)] text-white"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Viratnagar+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 w-4 h-4" />
                  {t.home.directions}
                </a>
              </Button>
            </div>

            {/* Map embed */}
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-[var(--cream)]">
              <iframe
                title="Virat Public School location on Google Maps"
                src="https://www.google.com/maps?q=Viratnagar,Kotputli-Behror,Rajasthan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[var(--maroon)] py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to join the Virat Public School family?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Take the first step today — our admissions team is here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--maroon-deep)] font-semibold"
            >
              <Link href="/admissions/apply">
                {t.nav.apply}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--maroon)]"
            >
              <Link href="/contact-us">{t.nav.contact}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
