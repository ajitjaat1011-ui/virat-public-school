"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/site/language-context";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Youtube, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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

  return (
    <>
      <PageHero
        title={t.contact.heroTitle}
        subtitle={t.contact.heroBody}
        breadcrumb={t.nav.contact}
      />

      <section className="inner-page-section py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                  Get in Touch
                </h2>
                <div className="gold-divider mt-3" />
                <p className="mt-5 text-base text-[var(--ink)] leading-relaxed">
                  Whether you are a prospective parent, a current parent, an alumna, or a community member — we are always happy to hear from you. Use the contact form on this page, or reach out through any of the channels below. Our office hours are Monday to Saturday, 8:00 AM to 3:00 PM (second Saturday holiday).
                </p>
              </div>

              {/* Info cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-[var(--line)] bg-[var(--surface)]">
                  <CardContent className="pt-5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--cream)] flex items-center justify-center mb-3">
                      <MapPin className="w-5 h-5 text-[var(--maroon)]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--accent)] mb-1">{t.contact.addressTitle}</h3>
                    <p className="text-xs text-[var(--ink)] leading-relaxed">{t.contact.address}</p>
                  </CardContent>
                </Card>
                <Card className="border-[var(--line)] bg-[var(--surface)]">
                  <CardContent className="pt-5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--cream)] flex items-center justify-center mb-3">
                      <Phone className="w-5 h-5 text-[var(--maroon)]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--accent)] mb-1">{t.contact.phoneTitle}</h3>
                    <p className="text-xs text-[var(--ink)]">{t.contact.phoneOffice}</p>
                    <p className="text-xs text-[var(--ink)]">{t.contact.phoneAdmissions}</p>
                  </CardContent>
                </Card>
                <Card className="border-[var(--line)] bg-[var(--surface)]">
                  <CardContent className="pt-5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--cream)] flex items-center justify-center mb-3">
                      <Mail className="w-5 h-5 text-[var(--maroon)]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--accent)] mb-1">{t.contact.emailTitle}</h3>
                    <a href={`mailto:${t.contact.emailGeneral}`} className="text-xs text-[var(--maroon)] hover:underline block">
                      {t.contact.emailGeneral}
                    </a>
                    <a href={`mailto:${t.contact.emailAdmissions}`} className="text-xs text-[var(--maroon)] hover:underline block">
                      {t.contact.emailAdmissions}
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-[var(--line)] bg-[var(--surface)]">
                  <CardContent className="pt-5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--cream)] flex items-center justify-center mb-3">
                      <Clock className="w-5 h-5 text-[var(--maroon)]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--accent)] mb-1">{t.contact.hoursTitle}</h3>
                    <p className="text-xs text-[var(--ink)] leading-relaxed">{t.contact.hours}</p>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp & Social */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-[#25D366] hover:bg-[#1DA851] text-white"
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
              </div>

              <div>
                <p className="text-xs font-semibold text-[var(--muted-ink)] uppercase tracking-wider mb-2">{t.contact.social}</p>
                <div className="flex items-center gap-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[var(--cream)] hover:bg-[var(--maroon)] hover:text-white flex items-center justify-center transition-colors">
                    <Facebook className="w-4 h-4 text-[var(--maroon)]" />
                  </a>
                  <a href="https://www.instagram.com/mahander_meena_86?igsh=MWYzZm5ocTM4YjJrNA==" target="_blank" rel="noopener noreferrer" aria-label="Director on Instagram" title="Director on Instagram" className="w-10 h-10 rounded-full bg-[var(--cream)] hover:bg-[var(--maroon)] hover:text-white flex items-center justify-center transition-colors">
                    <Instagram className="w-4 h-4 text-[var(--maroon)]" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-[var(--cream)] hover:bg-[var(--maroon)] hover:text-white flex items-center justify-center transition-colors">
                    <Youtube className="w-4 h-4 text-[var(--maroon)]" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md ring-1 ring-[var(--cream)]">
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

            {/* Contact form */}
            <div>
              <Card className="border-[var(--line)] bg-[var(--surface)]">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-[var(--accent)] mb-1">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-sm text-[var(--muted-ink)] mb-5">
                    {t.contact.formBody}
                  </p>

                  {status === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-9 h-9 text-[var(--success)]" />
                      </div>
                      <p className="text-base font-semibold text-[var(--accent)] mb-1">
                        Message Sent
                      </p>
                      <p className="text-sm text-[var(--ink)] mb-5">
                        {t.contact.submitSuccess}
                      </p>
                      <Button
                        onClick={() => setStatus("idle")}
                        variant="outline"
                        className="border-[var(--maroon)] text-[var(--maroon)]"
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
                        className="bg-[var(--maroon)] hover:bg-[var(--maroon-deep)] text-white w-full sm:w-auto"
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

                      <p className="text-xs text-[var(--muted-ink)] leading-relaxed">
                        Your information is used solely to respond to your enquiry. We do not share contact details with third parties.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
