"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";

export default function ManagementPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/principals-message", label: t.aboutSub.principal },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];

  // Placeholder committee members — to be replaced with real data from school office
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
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--maroon-deep)]">
                {t.about.managementTitle}
              </h2>
              <div className="gold-divider mt-3" />
              <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                {t.about.managementBody}
              </p>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {committee.map((member, idx) => (
                  <Card key={idx} className="border-[var(--cream)] hover:border-[var(--gold)] hover:shadow-lg transition-all bg-white text-center">
                    <CardContent className="pt-6">
                      <div className="w-20 h-20 rounded-full bg-[var(--cream)] mx-auto flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-[var(--maroon)]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-semibold text-[var(--maroon-deep)] text-sm">
                        {member.name}
                      </h3>
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

              <div className="mt-8 p-4 bg-[var(--cream)] rounded-lg">
                <p className="text-xs text-[var(--muted-ink)] leading-relaxed">
                  The profiles, photographs, and designations shown here are placeholders pending final confirmation from the management committee. Updated information will be published as soon as it becomes available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
