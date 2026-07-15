"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, GraduationCap, Languages, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-context";

type NavGroup = {
  parent: { href: string; label: string };
  items: { href: string; label: string }[];
};

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { t, toggle, locale } = useLanguage();

  const groups: NavGroup[] = [
    {
      parent: { href: "/about-us", label: t.nav.about },
      items: [
        { href: "/about-us/history", label: t.aboutSub.history },
        { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
        { href: "/about-us/principals-message", label: t.aboutSub.principal },
        { href: "/about-us/management", label: t.aboutSub.management },
      ],
    },
    {
      parent: { href: "/academics", label: t.nav.academics },
      items: [
        { href: "/academics/curriculum", label: t.academicsSub.curriculum },
        { href: "/academics/classes", label: t.academicsSub.classes },
        { href: "/academics/faculty", label: t.academicsSub.faculty },
        { href: "/academics/examinations", label: t.academicsSub.exams },
      ],
    },
    {
      parent: { href: "/admissions", label: t.nav.admissions },
      items: [
        { href: "/admissions/process", label: t.admissionsSub.process },
        { href: "/admissions/fees", label: t.admissionsSub.fees },
        { href: "/admissions/apply", label: t.admissionsSub.apply },
        { href: "/admissions/eligibility", label: t.admissionsSub.eligibility },
      ],
    },
    {
      parent: { href: "/news-events", label: t.nav.news },
      items: [
        { href: "/news-events/announcements", label: t.newsSub.announcements },
        { href: "/news-events/calendar", label: t.newsSub.calendar },
        { href: "/news-events/gallery", label: t.newsSub.gallery },
      ],
    },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 border-b shadow-[0_8px_32px_rgba(16,42,114,.06)] border-[var(--line)]">
      {/* Top utility strip — hidden on mobile, slim on desktop */}
      <div className="hidden md:block bg-[var(--maroon-deep)] text-white text-xs">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
          <p className="italic tracking-wide text-white/70">
            {t.motto} — {t.mottoTranslation}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:+919636452501"
              className="hover:text-[var(--gold)] transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              +91 96364 52501
            </a>
            <a
              href="mailto:info@viratpublicschool.in"
              className="hover:text-[var(--gold)] transition-colors"
            >
              info@viratpublicschool.in
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-[var(--maroon)] flex items-center justify-center transition-transform group-hover:scale-105">
              <GraduationCap className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base lg:text-lg text-[var(--accent)] tracking-tight">
                {t.schoolName}
              </span>
              <span className="text-[10px] lg:text-xs text-[var(--muted-ink)]">
                Viratnagar · Rajasthan
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={isActive("/")}
                  >
                    {t.nav.home}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {groups.map((group) => (
                <NavigationMenuItem key={group.parent.href}>
                  <NavigationMenuTrigger
                    className={cn(isActive(group.parent.href) && "text-[var(--maroon)]")}
                  >
                    {group.parent.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-0.5 p-2">
                      <li>
                        <Link
                          href={group.parent.href}
                          className="block px-3 py-2 rounded-xl hover:bg-[var(--cream)] font-medium text-[var(--accent)] text-sm"
                        >
                          {group.parent.label} — Overview
                        </Link>
                      </li>
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 rounded-xl hover:bg-[var(--cream)] text-sm text-[var(--ink)]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={isActive("/contact-us")}
                  >
                    {t.nav.contact}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right actions (desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium border border-[var(--line)] hover:border-[var(--gold)] hover:text-[var(--maroon)] transition-colors"
            >
              <Languages className="w-4 h-4" />
              {locale === "en" ? "हिंदी" : "EN"}
            </button>
            <Button
              asChild
              className="bg-[var(--maroon)] hover:bg-[#1D4ED8] text-white"
            >
              <Link href="/admissions/apply">{t.nav.apply}</Link>
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="p-2 text-[var(--accent)] hover:text-[var(--maroon)]"
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              className="p-2 -mr-2 text-[var(--accent)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — accordion groups instead of flat 16-link list */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--line)] bg-[var(--background)]">
          <nav className="container mx-auto px-4 py-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileLink
              href="/"
              label={t.nav.home}
              active={isActive("/")}
              onClick={() => setMobileOpen(false)}
            />

            {groups.map((group) => {
              const parentActive = isActive(group.parent.href);
              const isOpen = openGroup === group.parent.href;
              return (
                <div key={group.parent.href} className="border-b border-[var(--line)] last:border-0">
                  <div className="flex items-center">
                    <button
                      onClick={() => setOpenGroup(isOpen ? null : group.parent.href)}
                      className="flex-1 flex items-center justify-between px-3 py-3 text-left text-sm font-medium text-[var(--ink)]"
                    >
                      <span className={cn(parentActive && "text-[var(--maroon)] font-semibold")}>
                        {group.parent.label}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-[var(--muted-ink)] transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                  {isOpen && (
                    <div className="pb-2 pl-4 space-y-0.5">
                      <MobileLink
                        href={group.parent.href}
                        label="Overview"
                        active={false}
                        onClick={() => setMobileOpen(false)}
                      />
                      {group.items.map((item) => (
                        <MobileLink
                          key={item.href}
                          href={item.href}
                          label={item.label}
                          active={false}
                          onClick={() => setMobileOpen(false)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <MobileLink
              href="/contact-us"
              label={t.nav.contact}
              active={isActive("/contact-us")}
              onClick={() => setMobileOpen(false)}
            />

            <div className="pt-4 mt-2 border-t border-[var(--line)]">
              <Button
                asChild
                className="bg-[var(--maroon)] hover:bg-[#1D4ED8] text-white w-full"
                onClick={() => setMobileOpen(false)}
              >
                <Link href="/admissions/apply">{t.nav.apply}</Link>
              </Button>
              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-[var(--muted-ink)]">
                <a href="tel:+919636452501" className="inline-flex items-center gap-1.5 hover:text-[var(--maroon)]">
                  <Phone className="w-3 h-3" /> +91 96364 52501
                </a>
                <a href="mailto:info@viratpublicschool.in" className="hover:text-[var(--maroon)]">
                  Email
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block px-3 py-2.5 rounded-full text-sm transition-colors",
        active
          ? "bg-[var(--cream)] text-[var(--maroon)] font-semibold"
          : "text-[var(--ink)] hover:bg-[var(--cream)]"
      )}
    >
      {label}
    </Link>
  );
}
