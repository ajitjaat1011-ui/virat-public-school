"use client";

import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "./language-context";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const exploreLinks = [
    { href: "/about-us", label: t.nav.about },
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];
  const programLinks = [
    { href: "/academics", label: t.nav.academics },
    { href: "/academics/curriculum", label: t.academicsSub.curriculum },
    { href: "/academics/faculty", label: t.academicsSub.faculty },
    { href: "/news-events", label: t.nav.news },
  ];
  const joinLinks = [
    { href: "/admissions", label: t.nav.admissions },
    { href: "/admissions/apply", label: t.admissionsSub.apply },
    { href: "/admissions/fees", label: t.admissionsSub.fees },
    { href: "/contact-us", label: t.nav.contact },
  ];

  return (
    <footer className="bg-maroon-deep text-cream mt-auto relative overflow-hidden">
      {/* Decorative gold glow */}
      <div
        className="absolute -top-32 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container mx-auto px-4 pt-14 md:pt-16 pb-8 relative">
        <div className="grid gap-10 md:gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--maroon)] to-black flex items-center justify-center ring-1 ring-[var(--gold)]/40">
                <GraduationCap className="w-6 h-6 text-cream" />
              </div>
              <div>
                <p className="font-extrabold text-lg leading-tight">{t.schoolName}</p>
                <p className="text-xs text-cream/60">Viratnagar · Rajasthan</p>
              </div>
            </div>
            <p className="text-sm text-cream/75 leading-relaxed max-w-sm">
              {t.footer.about}
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-black/20 border border-[var(--gold)]/20 px-4 py-3">
              <span className="w-1.5 h-10 rounded-full bg-gradient-to-b from-[var(--gold-soft)] to-[var(--gold)]" />
              <div>
                <p className="text-gold text-sm italic font-medium">
                  “{t.motto}”
                </p>
                <p className="text-[11px] text-cream/55 mt-0.5">{t.mottoTranslation}</p>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold mb-4">
              {t.nav.about}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold mb-4">
              {t.nav.academics}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/75">{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+919636452501" className="text-cream/75 hover:text-gold">
                  {t.contact.phoneOffice}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@viratpublicschool.in"
                  className="text-cream/75 hover:text-gold break-all"
                >
                  {t.contact.emailGeneral}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/75">{t.contact.hours}</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/mahander_meena_86?igsh=MWYzZm5ocTM4YjJrNA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Director on Instagram"
                title="Director on Instagram"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold hover:text-maroon-deep text-cream flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold hover:text-maroon-deep text-cream flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-gold hover:text-maroon-deep text-cream flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <Link
                href="/admissions/apply"
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-gold text-maroon-deep text-xs font-bold px-4 py-2.5 hover:bg-gold-soft transition-colors"
              >
                {t.nav.apply}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick links row */}
        <div className="mt-10 pt-6 border-t border-cream/10">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream/55">
            {joinLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>{t.footer.rights.replace("{year}", String(year))}</p>
          <p className="italic">RBSE Affiliated · {t.footer.developedBy}</p>
        </div>
      </div>
    </footer>
  );
}
