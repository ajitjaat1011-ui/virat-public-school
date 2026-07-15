"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

export default function AnnouncementsPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/news-events/announcements", label: t.newsSub.announcements },
    { href: "/news-events/calendar", label: t.newsSub.calendar },
    { href: "/news-events/gallery", label: t.newsSub.gallery },
  ];

  const announcements = [
    {
      date: "15 Jul 2026",
      title: "Admissions Open for Academic Year 2026–27",
      type: "Admissions",
      body: "Applications are now being accepted for all classes from I to XII (subject to seat availability). Visit the Admissions page to apply online or contact the school office between 8:00 AM and 3:00 PM on working days. Early application is recommended for entry classes.",
      attachment: true,
    },
    {
      date: "10 Jul 2026",
      title: "Parent-Teacher Meeting — Classes IX to XII",
      type: "Notice",
      body: "A parent-teacher meeting for parents of students in Classes IX to XII will be held on Saturday, 26 July 2026 from 9:00 AM to 12:00 noon in the respective classrooms. Parents are requested to be present to discuss their child's academic progress.",
      attachment: true,
    },
    {
      date: "1 Jul 2026",
      title: "Reopening of School After Summer Vacation",
      type: "Notice",
      body: "The school reopens on Tuesday, 1 July 2026 after the summer vacation. Regular school timings (8:00 AM to 2:30 PM) will resume. Parents are requested to ensure their ward reaches school on time and in proper uniform.",
      attachment: false,
    },
    {
      date: "20 Jun 2026",
      title: "Fee Payment Reminder — Q1 2026–27",
      type: "Fee Reminder",
      body: "This is a reminder that the Q1 tuition fee for the academic year 2026–27 is due by 30 June 2026. Payments can be made at the school accounts office by cash, cheque, or UPI. Late fee will apply after the due date.",
      attachment: true,
    },
    {
      date: "5 Jun 2026",
      title: "Investiture Ceremony — Student Council 2026–27",
      type: "Event",
      body: "The investiture ceremony for the newly elected student council will be held on Saturday, 15 June 2026 at 10:00 AM in the school auditorium. Parents of council members are cordially invited to attend.",
      attachment: false,
    },
    {
      date: "15 May 2026",
      title: "Summer Vacation Notice",
      type: "Holiday",
      body: "The school will remain closed for summer vacation from 15 May 2026 to 30 June 2026. Classes will resume on 1 July 2026. Holiday homework has been assigned and is available on the school notice board. Wishing all our students and families a restful and safe summer.",
      attachment: true,
    },
  ];

  return (
    <>
      <PageHero
        title={t.news.announcementsTitle}
        subtitle={t.news.announcementsBody}
        breadcrumb={`${t.nav.news} / ${t.newsSub.announcements}`}
      />

      <section className="inner-page-section py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.news} links={subLinks} />

            <div className="space-y-5">
              <p className="text-base text-[var(--ink)] leading-relaxed">
                {t.news.announcementsBody}
              </p>

              {announcements.map((item, idx) => (
                <Card key={idx} className="border-[var(--line)] bg-[var(--surface)] transition-colors">
                  <CardContent className="pt-5">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Date block */}
                      <div className="sm:w-24 flex-shrink-0">
                        <div className="bg-[var(--maroon)] text-white rounded-md p-3 text-center">
                          <p className="text-xs uppercase tracking-wider">
                            {item.date.split(" ")[1]}
                          </p>
                          <p className="text-2xl font-bold leading-tight">
                            {item.date.split(" ")[0]}
                          </p>
                          <p className="text-xs uppercase tracking-wider">
                            {item.date.split(" ")[2]}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--maroon)] bg-[var(--cream)] px-2 py-0.5 rounded">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="font-semibold text-[var(--accent)] mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[var(--ink)] leading-relaxed">
                          {item.body}
                        </p>
                        {item.attachment && (
                          <button
                            disabled
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--maroon)] hover:text-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed"
                            title="PDF attachment will be available soon"
                          >
                            <Download className="w-3.5 h-3.5" />
                            Download PDF (soon)
                          </button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[var(--maroon)] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[var(--muted-ink)] leading-relaxed">
                      Announcements are published by the school office. To receive announcements by email, please share your email address with the school office — we are setting up an email subscription service for parents and community members.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
