"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const CATEGORY_COLORS: Record<string, string> = {
  Academic: "bg-blue-100 text-blue-800 border-blue-300",
  Cultural: "bg-[var(--gold)]/20 text-[var(--accent)] border-[var(--gold)]",
  Sports: "bg-green-100 text-green-800 border-green-300",
  Holiday: "bg-red-100 text-red-800 border-red-300",
};

export default function CalendarPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/news-events/announcements", label: t.newsSub.announcements },
    { href: "/news-events/calendar", label: t.newsSub.calendar },
    { href: "/news-events/gallery", label: t.newsSub.gallery },
  ];

  const events = [
    { date: "2026-07-26", title: "Parent-Teacher Meeting (IX–XII)", category: "Academic" },
    { date: "2026-08-15", title: "Independence Day Celebration", category: "Cultural" },
    { date: "2026-08-29", title: "Inter-House Sports Day", category: "Sports" },
    { date: "2026-09-05", title: "Teachers' Day", category: "Cultural" },
    { date: "2026-09-15", title: "Half-Yearly Examinations Begin", category: "Academic" },
    { date: "2026-09-30", title: "Half-Yearly Examinations End", category: "Academic" },
    { date: "2026-10-02", title: "Gandhi Jayanti (Holiday)", category: "Holiday" },
    { date: "2026-10-10", title: "Dussehra Break Begins", category: "Holiday" },
    { date: "2026-10-20", title: "School Reopens After Dussehra", category: "Academic" },
    { date: "2026-11-01", title: "Diwali Break Begins", category: "Holiday" },
    { date: "2026-11-10", title: "School Reopens After Diwali", category: "Academic" },
    { date: "2026-11-14", title: "Children's Day Celebration", category: "Cultural" },
    { date: "2026-12-20", title: "Winter Break Begins", category: "Holiday" },
    { date: "2027-01-05", title: "School Reopens After Winter Break", category: "Academic" },
    { date: "2027-01-26", title: "Republic Day", category: "Holiday" },
    { date: "2027-02-15", title: "Pre-Board Examinations (X & XII)", category: "Academic" },
    { date: "2027-03-01", title: "Annual Examinations Begin (I–IX, XI)", category: "Academic" },
    { date: "2027-03-05", title: "Board Examinations Begin (X & XII)", category: "Academic" },
    { date: "2027-03-30", title: "Annual Day Celebration", category: "Cultural" },
  ];

  // Group by month
  const byMonth: Record<string, typeof events> = {};
  events.forEach((e) => {
    const monthKey = e.date.slice(0, 7); // YYYY-MM
    if (!byMonth[monthKey]) byMonth[monthKey] = [];
    byMonth[monthKey].push(e);
  });

  return (
    <>
      <PageHero
        title={t.news.calendarTitle}
        subtitle={t.news.calendarBody}
        breadcrumb={`${t.nav.news} / ${t.newsSub.calendar}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.news} links={subLinks} />

            <div className="space-y-6">
              {/* Legend & ICS export */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-[var(--muted-ink)] uppercase tracking-wider">Legend:</span>
                  {Object.keys(CATEGORY_COLORS).map((cat) => (
                    <span
                      key={cat}
                      className={`px-2 py-0.5 text-xs rounded border ${CATEGORY_COLORS[cat]}`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <button
                  disabled
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--maroon)] hover:text-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed"
                  title="ICS export coming soon"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export to Calendar (ICS)
                </button>
              </div>

              {/* Month-by-month */}
              {Object.entries(byMonth).map(([monthKey, monthEvents]) => {
                const [year, month] = monthKey.split("-");
                const monthName = MONTHS[parseInt(month) - 1];
                return (
                  <Card key={monthKey} className="border-[var(--line)] bg-[var(--surface)] overflow-hidden">
                    <div className="bg-[var(--maroon)] text-white px-5 py-3 flex items-center justify-between">
                      <h3 className="font-bold">{monthName} {year}</h3>
                      <span className="text-xs text-white/80">{monthEvents.length} event{monthEvents.length !== 1 ? "s" : ""}</span>
                    </div>
                    <CardContent className="p-0">
                      <ul className="divide-y divide-[var(--cream)]">
                        {monthEvents.map((e, idx) => {
                          const day = parseInt(e.date.split("-")[2]);
                          return (
                            <li key={idx} className="flex items-center gap-4 p-4 hover:bg-[var(--cream)]/30 transition-colors">
                              <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex flex-col items-center justify-center flex-shrink-0">
                                <span className="text-lg font-bold text-[var(--maroon)] leading-none">{day}</span>
                                <span className="text-[10px] uppercase text-[var(--muted-ink)] mt-0.5">
                                  {monthName.slice(0, 3)}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-[var(--accent)]">{e.title}</p>
                              </div>
                              <span className={`px-2 py-0.5 text-xs rounded border ${CATEGORY_COLORS[e.category]}`}>
                                {e.category}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}

              <Card className="bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <p className="text-sm text-[var(--muted-ink)] leading-relaxed">
                    The calendar above is indicative — exact dates for some events may be revised closer to the date. Please check the Announcements page for the latest updates, or follow the school office&apos;s notifications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
