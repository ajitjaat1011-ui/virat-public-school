"use client";

import Link from "next/link";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NewsEventsPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/news-events/announcements", label: t.newsSub.announcements },
    { href: "/news-events/calendar", label: t.newsSub.calendar },
    { href: "/news-events/gallery", label: t.newsSub.gallery },
  ];

  const recent = [
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
    {
      date: "Jun 2026",
      cat: "Sports",
      title: "Inter-House Cricket Tournament Concludes",
      excerpt:
        "After two weeks of spirited competition, the Mangalam House emerged victorious in the annual inter-house cricket tournament.",
    },
    {
      date: "May 2026",
      cat: "Cultural",
      title: "Investiture Ceremony — Student Council 2026–27",
      excerpt:
        "The newly elected student council took the oath of office in a solemn investiture ceremony attended by parents and staff.",
    },
    {
      date: "May 2026",
      cat: "Announcement",
      title: "Summer Vacation Notice",
      excerpt:
        "The school will remain closed for summer vacation from 15 May to 30 June 2026. Classes will resume on 1 July 2026.",
    },
  ];

  const linkCards = [
    { href: "/news-events/announcements", title: t.newsSub.announcements, body: t.news.announcementsBody },
    { href: "/news-events/calendar", title: t.newsSub.calendar, body: t.news.calendarBody },
    { href: "/news-events/gallery", title: t.newsSub.gallery, body: t.news.galleryBody },
  ];

  return (
    <>
      <PageHero
        title={t.news.heroTitle}
        subtitle={t.news.heroBody}
        breadcrumb={t.nav.news}
      />

      <section className="inner-page-section py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.news} links={subLinks} />

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                  {t.news.heroTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.news.heroBody}
                </p>
              </div>

              {/* Recent news grid */}
              <div>
                <h3 className="text-lg font-bold text-[var(--accent)] mb-4">Recent Updates</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {recent.map((item, idx) => (
                    <Card key={idx} className="border-[var(--line)] bg-[var(--surface)] transition-colors flex flex-col">
                      <div className="h-1.5 bg-[var(--gold)] rounded-t-lg" />
                      <CardContent className="pt-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-xs text-[var(--muted-ink)] mb-2">
                          <span>{item.date}</span>
                          <span className="text-[var(--gold)]">·</span>
                          <span className="font-semibold uppercase tracking-wide text-[var(--maroon)]">
                            {item.cat}
                          </span>
                        </div>
                        <h4 className="font-semibold text-[var(--accent)] mb-2 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[var(--ink)] leading-relaxed flex-1">
                          {item.excerpt}
                        </p>
                        <Link
                          href="/news-events/announcements"
                          className="mt-3 text-sm font-medium text-[var(--maroon)] hover:text-[var(--accent)] inline-flex items-center"
                        >
                          {t.news.readMore}
                          <ArrowRight className="ml-1 w-3.5 h-3.5" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sub-page cards */}
              <div className="grid sm:grid-cols-3 gap-5">
                {linkCards.map(({ href, title, body }) => (
                  <Link key={href} href={href} className="group">
                    <Card className="h-full border-[var(--line)] hover:border-[var(--gold)] hover:shadow-md transition-all bg-[var(--surface)]">
                      <CardContent className="pt-5">
                        <h4 className="font-semibold text-[var(--accent)] mb-2 group-hover:text-[var(--maroon)] transition-colors">
                          {title}
                        </h4>
                        <p className="text-xs text-[var(--ink)] leading-relaxed line-clamp-3">{body}</p>
                        <span className="mt-3 inline-flex items-center text-xs font-medium text-[var(--maroon)]">
                          {t.common.learnMore}
                          <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
