"use client";

import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "./language-context";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--maroon-deep)] text-white mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand — spans 4 cols on desktop */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-[var(--maroon)] flex items-center justify-center ring-1 ring-[var(--gold)]">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-base leading-tight">{t.schoolName}</p>
                <p className="text-xs text-white/60">Viratnagar · Rajasthan</p>
              </div>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              {t.footer.about}
            </p>
            <p className="mt-4 text-sm text-[var(--gold)] italic">
              &ldquo;{t.motto}&rdquo;
            </p>
            <p className="text-xs text-white/55 mt-1">
              {t.mottoTranslation}
            </p>
          </div>

          {/* Quick links — 3 cols */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)] mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/about-us", label: t.nav.about },
                { href: "/academics", label: t.nav.academics },
                { href: "/admissions", label: t.nav.admissions },
                { href: "/news-events", label: t.nav.news },
                { href: "/contact-us", label: t.nav.contact },
                { href: "/admissions/apply", label: t.nav.apply },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 5 cols */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)] mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                <span className="text-white/75">{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                <a href="tel:+919636452501" className="text-white/75 hover:text-[var(--gold)]">
                  {t.contact.phoneOffice}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                <a href="mailto:info@viratpublicschool.in" className="text-white/75 hover:text-[var(--gold)] break-all">
                  {t.contact.emailGeneral}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                <span className="text-white/75">{t.contact.hours}</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-5 flex items-center gap-2.5 flex-wrap">
              <span className="text-xs text-white/55 mr-1">{t.contact.social}:</span>
              <a
                href="https://www.instagram.com/mahander_meena_86?igsh=MWYzZm5ocTM4YjJrNA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Director on Instagram"
                title="Director on Instagram"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-[var(--gold)] hover:text-[var(--maroon-deep)] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-[var(--gold)] hover:text-[var(--maroon-deep)] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-[var(--gold)] hover:text-[var(--maroon-deep)] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
          <p>{t.footer.rights.replace("{year}", String(year))}</p>
          <p className="italic">{t.footer.developedBy}</p>
        </div>
      </div>
    </footer>
  );
}
