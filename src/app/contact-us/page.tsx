"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      subject: formData.get("subject"),
      message: formData.get("message"),
      honeypot: formData.get("website"), // honeypot — should be empty
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
      setStatus("error");
    }
  };

  const infoCards = [
    { icon: MapPin, title: t.contact.addressTitle, body: t.contact.address },
    { icon: Phone, title: t.contact.phoneTitle, body: `${t.contact.phoneOffice} · ${t.contact.phoneAdmissions}` },
    { icon: Mail, title: t.contact.emailTitle, body: t.contact.emailGeneral, link: `mailto:${t.contact.emailGeneral}` },
    { icon: Clock, title: t.contact.hoursTitle, body: t.contact.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.nav.contact}
        title={t.contact.heroTitle}
        subtitle={t.contact.heroBody}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Contact info */}
            <div className="space-y-8">
              <Reveal>
                <SectionHeading
                  eyebrow="Reach Out"
                  title="Get in touch"
                  description="Whether you are a prospective parent, a current parent, an alumna, or a community member — we are always happy to hear from you. Our office hours are Monday to Saturday, 8:00 AM to 3:00 PM (second Saturday holiday)."
                />
              </Reveal>

              {/* Info cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {infoCards.map((card, idx) => (
                  <Reveal key={idx} variant="up" delay={idx * 90}>
                    <div className="card-modern p-5 h-full">
                      <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center mb-3">
                        <card.icon className="w-5 h-5 text-maroon" />
                      </div>
                      <h3 className="text-sm font-bold text-maroon mb-1">{card.title}</h3>
                      {card.link ? (
                        <a href={card.link} className="text-xs text-maroon hover:underline">{card.body}</a>
                      ) : (
                        <p className="text-xs text-muted-ink leading-relaxed">{card.body}</p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal variant="up">
                <div className="flex flex-col sm:flex-row gap-3 items-start">
                  <Button
                    asChild
                    className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full"
                  >
                    <a
                      href="https://wa.me/919636452501?text=Hello%2C%20I%20have%20an%20enquiry%20about%20Virat%20Public%20School."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      {t.contact.whatsapp}
                    </a>
                  </Button>
                  <div className="flex items-center gap-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-cream hover:bg-maroon hover:text-white flex items-center justify-center transition-colors">
                      <Facebook className="w-4 h-4 text-maroon" />
                    </a>
                    <a href="https://www.instagram.com/mahander_meena_86?igsh=MWYzZm5ocTM4YjJrNA==" target="_blank" rel="noopener noreferrer" aria-label="Director on Instagram" title="Director on Instagram" className="w-10 h-10 rounded-full bg-cream hover:bg-maroon hover:text-white flex items-center justify-center transition-colors">
                      <Instagram className="w-4 h-4 text-maroon" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-cream hover:bg-maroon hover:text-white flex items-center justify-center transition-colors">
                      <Youtube className="w-4 h-4 text-maroon" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-[1.5rem] bg-gradient-to-br from-[var(--gold)]/15 to-[var(--maroon)]/10 blur-md" aria-hidden />
                  <div className="relative aspect-[4/3] w-full rounded-[1.25rem] overflow-hidden shadow-lg ring-1 ring-line bg-surface">
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
              </Reveal>
            </div>

            {/* Contact form */}
            <Reveal variant="right">
              <Card className="border-line bg-surface rounded-[1.5rem] shadow-[var(--shadow-lift)]">
                <CardContent className="pt-7">
                  <h3 className="text-xl font-bold text-maroon mb-1">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-sm text-muted-ink mb-6">
                    {t.contact.formBody}
                  </p>

                  {status === "success" ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-9 h-9 text-[var(--success)]" />
                      </div>
                      <p className="text-base font-bold text-maroon mb-1">Message Sent</p>
                      <p className="text-sm text-muted-ink mb-5">
                        {t.contact.submitSuccess}
                      </p>
                      <Button
                        onClick={() => setStatus("idle")}
                        variant="outline"
                        className="border-maroon text-maroon rounded-full"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-4">
                      {/* Honeypot */}
                      <div className="hidden" aria-hidden>
                        <label htmlFor="website">Website (leave empty)</label>
                        <input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Your Name *</Label>
                          <Input id="name" name="name" required className="mt-1.5" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" required className="mt-1.5" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" name="phone" type="tel" className="mt-1.5" placeholder="+91 ..." />
                        </div>
                        <div>
                          <Label htmlFor="subject">Subject *</Label>
                          <Input id="subject" name="subject" required className="mt-1.5" placeholder="How can we help?" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          className="mt-1.5"
                          rows={6}
                          placeholder="Write your message here..."
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-sm text-[var(--alert)] flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4" />
                          {errorMsg || t.contact.submitError}
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={status === "submitting"}
                        className="bg-maroon hover:bg-maroon-deep text-white w-full sm:w-auto rounded-full font-semibold"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-ink leading-relaxed">
                        Your information is used solely to respond to your enquiry. We do not share contact details with third parties.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
