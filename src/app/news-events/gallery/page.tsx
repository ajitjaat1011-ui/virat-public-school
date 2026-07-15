"use client";

import { useState } from "react";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Album = {
  title: string;
  date: string;
  count: number;
  gradient: string;
  emoji: string;
};

export default function GalleryPage() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<Album | null>(null);

  const subLinks = [
    { href: "/news-events/announcements", label: t.newsSub.announcements },
    { href: "/news-events/calendar", label: t.newsSub.calendar },
    { href: "/news-events/gallery", label: t.newsSub.gallery },
  ];

  const albums: Album[] = [
    { title: "Annual Day 2026", date: "March 2026", count: 32, gradient: "from-[var(--maroon)] to-[var(--maroon-deep)]", emoji: "🎭" },
    { title: "Sports Day 2026", date: "February 2026", count: 28, gradient: "from-[var(--success)] to-[#0369A1]", emoji: "🏆" },
    { title: "Independence Day 2025", date: "August 2025", count: 18, gradient: "from-[var(--gold)] to-[var(--success)]", emoji: "🇮🇳" },
    { title: "Science Exhibition", date: "November 2025", count: 24, gradient: "from-[var(--maroon-deep)] to-[var(--success)]", emoji: "🔬" },
    { title: "Diwali Celebration", date: "November 2025", count: 15, gradient: "from-[var(--maroon-deep)] to-[var(--maroon)]", emoji: "🪔" },
    { title: "Inter-House Cricket", date: "June 2025", count: 21, gradient: "from-[var(--success)] to-[#0369A1]", emoji: "🏏" },
    { title: "Children's Day", date: "November 2024", count: 19, gradient: "from-purple-700 to-purple-900", emoji: "🎈" },
    { title: "Teachers' Day", date: "September 2024", count: 16, gradient: "from-[var(--gold)] to-[var(--success)]", emoji: "📚" },
    { title: "Investiture Ceremony", date: "June 2024", count: 22, gradient: "from-[var(--maroon)] to-[var(--maroon-deep)]", emoji: "🎖️" },
  ];

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setLightbox(null);
  };

  return (
    <>
      <PageHero
        title={t.news.galleryTitle}
        subtitle={t.news.galleryBody}
        breadcrumb={`${t.nav.news} / ${t.newsSub.gallery}`}
      />

      <section className="inner-page-section py-12 md:py-20" onKeyDown={handleKey}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.news} links={subLinks} />

            <div className="space-y-6">
              <p className="text-base text-[var(--ink)] leading-relaxed">
                {t.news.galleryBody}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {albums.map((album, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox(album)}
                    className="group text-left focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded-lg overflow-hidden"
                  >
                    <Card className="border-[var(--line)] hover:border-[var(--gold)] transition-colors bg-[var(--surface)] overflow-hidden h-full">
                      {/* Thumbnail */}
                      <div className={`aspect-[4/3] bg-gradient-to-br ${album.gradient} relative flex items-center justify-center`}>
                        <span className="text-5xl opacity-50">{album.emoji}</span>
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/40 text-white text-xs rounded">
                          {album.count} photos
                        </div>
                      </div>
                      <CardContent className="pt-3 pb-3">
                        <h3 className="font-semibold text-[var(--accent)] text-sm group-hover:text-[var(--maroon)] transition-colors">
                          {album.title}
                        </h3>
                        <p className="text-xs text-[var(--muted-ink)] mt-0.5">
                          {album.date}
                        </p>
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>

              <Card className="bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <p className="text-sm text-[var(--muted-ink)] leading-relaxed">
                    {t.news.galleryPlaceholder}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title} album preview`}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-3xl w-full bg-[var(--maroon-deep)] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-video bg-gradient-to-br ${lightbox.gradient} flex items-center justify-center`}>
              <span className="text-8xl opacity-50">{lightbox.emoji}</span>
            </div>
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-1">{lightbox.title}</h3>
              <p className="text-white/70 text-sm mb-4">{lightbox.date} · {lightbox.count} photos</p>
              <p className="text-sm text-white/80 leading-relaxed mb-5">
                Photographs from this event will be displayed here once published by the school office. The lightbox view supports keyboard navigation (arrow keys to move between photos, Esc to close).
              </p>
              <Button
                onClick={() => setLightbox(null)}
                variant="outline"
                className="border-white text-white hover:bg-[var(--surface)] hover:text-[var(--accent)]"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
