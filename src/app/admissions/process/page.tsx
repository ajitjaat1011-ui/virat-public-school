"use client";

import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { SubNav } from "@/components/site/sub-nav";
import { Card, CardContent } from "@/components/ui/card";

export default function AdmissionProcessPage() {
  const { t } = useLanguage();

  const subLinks = [
    { href: "/admissions/process", label: t.admissionsSub.process },
    { href: "/admissions/fees", label: t.admissionsSub.fees },
    { href: "/admissions/apply", label: t.admissionsSub.apply },
    { href: "/admissions/eligibility", label: t.admissionsSub.eligibility },
  ];

  const detailedSteps = [
    {
      step: 1,
      title: "Inquiry",
      timeline: "Anytime — we recommend February–March for the next academic session",
      body: "Reach out to our admissions desk by phone, email, or in person. Our team will share the prospectus, answer your questions about the school, the curriculum, and the admission timeline, and guide you on seat availability for the class you are seeking. There is no obligation at this stage — we want you to make an informed choice.",
      whatToBring: "Nothing — just your questions and an open mind.",
    },
    {
      step: 2,
      title: "Form Submission",
      timeline: "Within 7 days of inquiry",
      body: "Complete the online application form on this website or collect and submit a printed form at the school office along with the required documents (see Eligibility & Documents page) and the application processing fee. After submission, you will receive a reference number by email or SMS — please save this for future correspondence.",
      whatToBring: "Completed application form, child's birth certificate, photographs, previous school records (if applicable), address proof, and the processing fee.",
    },
    {
      step: 3,
      title: "Interaction",
      timeline: "Within 2 weeks of form submission",
      body: "The child and parents meet with the principal and a senior teacher for a friendly conversation. This is not a test — it is an opportunity for us to understand the child's background, interests, and any specific needs, and for the family to ask questions about life at Virat Public School. For entry classes, the interaction focuses on the child's general readiness. For higher classes, there may be a brief age-appropriate assessment of foundational skills.",
      whatToBring: "The child, both parents (or guardians), and the original documents for verification.",
    },
    {
      step: 4,
      title: "Confirmation",
      timeline: "Within 5 working days of interaction",
      body: "Upon successful interaction, the school will share an admission offer with details of the fee payment and formalities. Upon payment of the admission fee, first quarter tuition fee, and submission of the transfer certificate (for Class II onwards) and other documents, the seat is confirmed. You will receive a welcome kit with joining instructions, the academic calendar, and details of the parent orientation programme.",
      whatToBring: "Admission fee, first quarter tuition fee, transfer certificate (Class II onwards), and any pending documents.",
    },
  ];

  return (
    <>
      <PageHero
        title={t.admissions.processTitle}
        subtitle={t.admissions.heroBody}
        breadcrumb={`${t.nav.admissions} / ${t.admissionsSub.process}`}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <SubNav title={t.nav.admissions} links={subLinks} />

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                  {t.admissions.processTitle}
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  {t.admissions.processBody}
                </p>
              </div>

              {/* Detailed steps */}
              <div className="space-y-6">
                {detailedSteps.map((s) => (
                  <Card key={s.step} className="border-[var(--line)] bg-[var(--surface)] overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-[var(--maroon)] text-white p-5 md:w-32 flex flex-row md:flex-col items-center justify-center gap-2">
                        <span className="text-4xl font-bold">{s.step}</span>
                        <span className="text-xs uppercase tracking-wider">Step</span>
                      </div>
                      <CardContent className="pt-5 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                          <h3 className="text-xl font-bold text-[var(--accent)]">
                            {s.title}
                          </h3>
                          <span className="text-xs text-[var(--muted-ink)]">
                            <strong className="text-[var(--maroon)]">Timeline:</strong> {s.timeline}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--ink)] leading-relaxed mb-3">
                          {s.body}
                        </p>
                        <div className="pt-3 border-t border-[var(--line)]">
                          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--maroon)] mb-1">
                            What to bring
                          </p>
                          <p className="text-xs text-[var(--ink)] leading-relaxed">
                            {s.whatToBring}
                          </p>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="bg-[var(--cream)] border-0">
                <CardContent className="pt-6">
                  <p className="text-sm text-[var(--ink)] leading-relaxed">
                    <strong className="text-[var(--accent)]">Important:</strong> For mid-session admissions (transfer cases), please contact the school office directly — the standard timeline above may be accelerated based on seat availability. A valid transfer certificate from the previous school is mandatory for such admissions.
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
