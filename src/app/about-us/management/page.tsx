"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export default function ManagementPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/principals-message", label: t.aboutSub.principal },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];

  // Placeholder committee members (apart from the director, who is featured above)
  const committee = [
    { name: "To be announced", designation: "Chairman", bio: "Profile to be supplied by the management office." },
    { name: "To be announced", designation: "Secretary", bio: "Profile to be supplied by the management office." },
    { name: "To be announced", designation: "Treasurer", bio: "Profile to be supplied by the management office." },
    { name: "To be announced", designation: "Principal (Ex-Officio)", bio: "Profile to be supplied by the management office." },
    { name: "To be announced", designation: "Member", bio: "Profile to be supplied by the management office." },
    { name: "To be announced", designation: "Member", bio: "Profile to be supplied by the management office." },
  ];

  return (
    <>
      <PageHero
        title={t.about.managementTitle}
        subtitle={t.about.heroBody}
        breadcrumb={`${t.nav.about} / ${t.aboutSub.management}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.about} links={subLinks} />

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                {t.about.managementTitle}
              </h2>
              <div className="gold-divider mt-3" />
              <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                {t.about.managementBody}
              </p>

              {/* Director — featured */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-[var(--accent)] mb-5">
                  {t.about.directorTitle}
                </h3>
                <Card className="border-[var(--gold)] bg-[var(--surface)] overflow-hidden shadow-md">
                  <div className="h-1.5 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)]" />
                  <CardContent className="pt-8 pb-8">
                    <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
                      {/* Photo */}
                      <div className="mx-auto md:mx-0">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden ring-4 ring-[var(--cream)] shadow-md">
                          {/* Using next/image would require remote optimisation; we use a plain
                              img tag since the site is statically exported with unoptimized images. */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/images/director-mahander-meena.jpg"
                            alt={`${t.about.directorName} — ${t.about.directorTitle}, Virat Public School`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-xs text-[var(--muted-ink)] text-center mt-2 italic">
                          {t.about.directorName}
                        </p>
                      </div>

                      {/* Bio */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--maroon)] mb-1">
                          {t.about.directorTitle}
                        </p>
                        <h4 className="text-2xl font-bold text-[var(--accent)] mb-3">
                          {t.about.directorName}
                        </h4>
                        <p className="text-sm text-[var(--ink)] leading-relaxed mb-5">
                          {t.about.directorBio}
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="border-[var(--maroon)] text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-white"
                        >
                          <a
                            href="https://www.instagram.com/mahander_meena_86?igsh=MWYzZm5ocTM4YjJrNA=="
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Instagram className="mr-2 w-4 h-4" />
                            {t.about.directorInstagram}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Other committee members */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-[var(--accent)] mb-5">
                  Committee Members
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {committee.map((member, idx) => (
                    <Card key={idx} className="border-[var(--line)] hover:border-[var(--gold)] transition-colors bg-[var(--surface)] text-center">
                      <CardContent className="pt-6">
                        <div className="w-20 h-20 rounded-full bg-[var(--cream)] mx-auto flex items-center justify-center mb-3">
                          <span className="text-2xl font-bold text-[var(--maroon)]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h4 className="font-semibold text-[var(--accent)] text-sm">
                          {member.name}
                        </h4>
                        <p className="text-xs text-[var(--maroon)] font-medium mt-1 uppercase tracking-wide">
                          {member.designation}
                        </p>
                        <p className="text-xs text-[var(--muted-ink)] mt-2 leading-relaxed">
                          {member.bio}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-[var(--cream)] rounded-lg">
                <p className="text-xs text-[var(--muted-ink)] leading-relaxed">
                  The profiles, photographs, and designations of other committee members are placeholders pending final confirmation from the management committee. Updated information will be published as soon as it becomes available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
