"use client";

import Link from "next/link";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Megaphone, CalendarRange, Images } from "lucide-react";

export default function NewsEventsPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/news-events/announcements", label: t.newsSub.announcements },
    { href: "/news-events/calendar", label: t.newsSub.calendar },
    { href: "/news-events/gallery", label: t.newsSub.gallery },
  ];

  const featured = {
    date: "Jul 2026",
    cat: "Announcement",
    title: "Admissions Open for Academic Year 2026–27",
    excerpt:
      "Applications are now being accepted for all classes. Visit our Admissions page to apply online or contact the school office for assistance.",
  };

  const recent = [
    { date: "Jul 2026", cat: "Event", title: "Annual Day Celebration — Save the Date", excerpt: "Our annual cultural evening will be held in the school auditorium. Parents and community members are cordially invited to attend." },
    { date: "Jun 2026", cat: "Academic", title: "New Computer Lab Inaugurated", excerpt: "A newly equipped computer lab with modern workstations has been inaugurated, expanding digital learning opportunities for our students." },
    { date: "Jun 2026", cat: "Sports", title: "Inter-House Cricket Tournament Concludes", excerpt: "After two weeks of spirited competition, the Mangalam House emerged victorious in the annual inter-house cricket tournament." },
    { date: "May 2026", cat: "Cultural", title: "Investiture Ceremony — Student Council 2026–27", excerpt: "The newly elected student council took the oath of office in a solemn investiture ceremony attended by parents and staff." },
  ];

  const linkCards = [
    { href: "/news-events/announcements", icon: Megaphone, title: t.newsSub.announcements, body: "Formal notices, results, and circulars from the school office." },
    { href: "/news-events/calendar", icon: CalendarRange, title: t.newsSub.calendar, body: "Month-at-a-glance view of academic, cultural, and sports events." },
    { href: "/news-events/gallery", icon: Images, title: t.newsSub.gallery, body: "Photo albums capturing the spirit and life of our school." },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.nav.news}
        title={t.news.heroTitle}
        subtitle={t.news.heroBody}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            <SubNav title={t.nav.news} links={subLinks} />

            <div className="space-y-12">
              {/* Featured */}
              <Reveal variant="up">
                <Link href="/news-events/announcements" className="group block">
                  <article className="relative overflow-hidden rounded-[1.75rem] bg-maroon-gradient text-cream shadow-xl">
                    <div className="absolute inset-0 bg-pattern-dots opacity-40" aria-hidden />
                    <div className="relative grid md:grid-cols-2">
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold mb-4">
                          <Megaphone className="w-3 h-3" /> Featured · {featured.cat}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-cream leading-tight">
                          {featured.title}
                        </h3>
                        <p className="mt-3 text-sm text-cream/80 leading-relaxed">
                          {featured.excerpt}
                        </p>
                        <span className="mt-5 inline-flex items-center text-sm font-semibold text-gold gap-1.5 group-hover:gap-2.5 transition-all">
                          {t.news.readMore} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                      <div className="hidden md:flex items-center justify-center p-10 bg-black/10">
                        <CalendarDays className="w-32 h-32 text-gold/40" />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>

              {/* Recent grid */}
              <div>
                <Reveal>
                  <SectionHeading eyebrow="Recent Updates" title="What's happening at Virat" />
                </Reveal>
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  {recent.map((item, idx) => (
                    <Reveal key={idx} variant="up" delay={(idx % 2) * 100}>
                      <Link href="/news-events/announcements" className="group block h-full">
                        <article className="card-modern p-6 h-full flex flex-col">
                          <div className="flex items-center gap-2 text-xs text-muted-ink mb-3">
                            <span>{item.date}</span>
                            <span className="text-gold">·</span>
                            <span className="font-bold uppercase tracking-wide text-maroon">{item.cat}</span>
                          </div>
                          <h4 className="font-bold text-maroon mb-2 leading-snug group-hover:text-maroon-deep transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-ink leading-relaxed flex-1">{item.excerpt}</p>
                          <span className="mt-4 inline-flex items-center text-sm font-semibold text-maroon gap-1.5 group-hover:gap-2.5 transition-all">
                            {t.news.readMore} <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </article>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Sub-section cards */}
              <div>
                <Reveal>
                  <SectionHeading eyebrow="Explore" title="Browse by category" />
                </Reveal>
                <div className="mt-8 grid sm:grid-cols-3 gap-5">
                  {linkCards.map(({ href, icon: Icon, title, body }, idx) => (
                    <Reveal key={href} variant="up" delay={idx * 100}>
                      <Link href={href} className="group block h-full">
                        <div className="card-modern p-6 h-full">
                          <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-4 group-hover:bg-maroon transition-colors duration-300">
                            <Icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-bold text-maroon mb-1.5">{title}</h4>
                          <p className="text-sm text-muted-ink leading-relaxed">{body}</p>
                          <span className="mt-3 inline-flex items-center text-sm font-semibold text-maroon gap-1.5 group-hover:gap-2.5 transition-all">
                            {t.common.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal variant="up">
                <div className="text-center">
                  <Button asChild className="bg-maroon hover:bg-maroon-deep text-white rounded-full font-semibold">
                    <Link href="/admissions/apply">
                      {t.nav.apply} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
