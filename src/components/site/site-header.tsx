"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, GraduationCap, Languages } from "lucide-react";
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

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggle, locale } = useLanguage();

  const aboutItems = [
    { href: "/about-us/history", label: t.aboutSub.history },
    { href: "/about-us/vision-mission", label: t.aboutSub.visionMission },
    { href: "/about-us/principals-message", label: t.aboutSub.principal },
    { href: "/about-us/management", label: t.aboutSub.management },
  ];

  const academicsItems = [
    { href: "/academics/curriculum", label: t.academicsSub.curriculum },
    { href: "/academics/classes", label: t.academicsSub.classes },
    { href: "/academics/faculty", label: t.academicsSub.faculty },
    { href: "/academics/examinations", label: t.academicsSub.exams },
  ];

  const admissionsItems = [
    { href: "/admissions/process", label: t.admissionsSub.process },
    { href: "/admissions/fees", label: t.admissionsSub.fees },
    { href: "/admissions/apply", label: t.admissionsSub.apply },
    { href: "/admissions/eligibility", label: t.admissionsSub.eligibility },
  ];

  const newsItems = [
    { href: "/news-events/announcements", label: t.newsSub.announcements },
    { href: "/news-events/calendar", label: t.newsSub.calendar },
    { href: "/news-events/gallery", label: t.newsSub.gallery },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-[var(--cream)]">
      {/* Top utility strip */}
      <div className="bg-[var(--maroon-deep)] text-white text-xs">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
          <p className="hidden sm:block italic tracking-wide">
            {t.motto} — {t.mottoTranslation}
          </p>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="tel:+919636452501"
              className="hover:text-[var(--gold)] transition-colors"
            >
              +91 96364 52501
            </a>
            <span className="text-white/30">|</span>
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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[var(--maroon)] flex items-center justify-center ring-2 ring-[var(--gold)] group-hover:ring-[var(--gold)] transition-all">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-[var(--maroon-deep)] tracking-tight">
                {t.schoolName}
              </span>
              <span className="text-xs text-[var(--muted-ink)]">
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

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(isActive("/about-us") && "text-[var(--maroon)]")}
                >
                  {t.nav.about}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[260px] gap-1 p-2">
                    <li>
                      <Link
                        href="/about-us"
                        className="block px-3 py-2 rounded-md hover:bg-[var(--cream)] font-medium text-[var(--maroon-deep)]"
                      >
                        {t.about.heroTitle}
                      </Link>
                    </li>
                    {aboutItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 rounded-md hover:bg-[var(--cream)] text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(isActive("/academics") && "text-[var(--maroon)]")}
                >
                  {t.nav.academics}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[260px] gap-1 p-2">
                    <li>
                      <Link
                        href="/academics"
                        className="block px-3 py-2 rounded-md hover:bg-[var(--cream)] font-medium text-[var(--maroon-deep)]"
                      >
                        {t.academics.heroTitle}
                      </Link>
                    </li>
                    {academicsItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 rounded-md hover:bg-[var(--cream)] text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(isActive("/admissions") && "text-[var(--maroon)]")}
                >
                  {t.nav.admissions}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-2">
                    <li>
                      <Link
                        href="/admissions"
                        className="block px-3 py-2 rounded-md hover:bg-[var(--cream)] font-medium text-[var(--maroon-deep)]"
                      >
                        {t.admissions.heroTitle}
                      </Link>
                    </li>
                    {admissionsItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 rounded-md hover:bg-[var(--cream)] text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(isActive("/news-events") && "text-[var(--maroon)]")}
                >
                  {t.nav.news}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[260px] gap-1 p-2">
                    <li>
                      <Link
                        href="/news-events"
                        className="block px-3 py-2 rounded-md hover:bg-[var(--cream)] font-medium text-[var(--maroon-deep)]"
                      >
                        {t.news.heroTitle}
                      </Link>
                    </li>
                    {newsItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 rounded-md hover:bg-[var(--cream)] text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

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

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium border border-[var(--cream)] hover:border-[var(--gold)] hover:text-[var(--maroon)] transition-colors"
            >
              <Languages className="w-4 h-4" />
              {t.language.toggle}
            </button>
            <Button
              asChild
              className="bg-[var(--maroon)] hover:bg-[var(--maroon-deep)] text-white"
            >
              <Link href="/admissions/apply">{t.nav.apply}</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-[var(--maroon-deep)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--cream)] bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <MobileLink href="/" label={t.nav.home} active={isActive("/")} onClick={() => setMobileOpen(false)} />
            <MobileLink href="/about-us" label={t.nav.about} active={isActive("/about-us")} onClick={() => setMobileOpen(false)} />
            {aboutItems.map((item) => (
              <MobileLink key={item.href} href={item.href} label={`  · ${item.label}`} active={false} onClick={() => setMobileOpen(false)} />
            ))}
            <MobileLink href="/academics" label={t.nav.academics} active={isActive("/academics")} onClick={() => setMobileOpen(false)} />
            {academicsItems.map((item) => (
              <MobileLink key={item.href} href={item.href} label={`  · ${item.label}`} active={false} onClick={() => setMobileOpen(false)} />
            ))}
            <MobileLink href="/admissions" label={t.nav.admissions} active={isActive("/admissions")} onClick={() => setMobileOpen(false)} />
            {admissionsItems.map((item) => (
              <MobileLink key={item.href} href={item.href} label={`  · ${item.label}`} active={false} onClick={() => setMobileOpen(false)} />
            ))}
            <MobileLink href="/news-events" label={t.nav.news} active={isActive("/news-events")} onClick={() => setMobileOpen(false)} />
            {newsItems.map((item) => (
              <MobileLink key={item.href} href={item.href} label={`  · ${item.label}`} active={false} onClick={() => setMobileOpen(false)} />
            ))}
            <MobileLink href="/contact-us" label={t.nav.contact} active={isActive("/contact-us")} onClick={() => setMobileOpen(false)} />

            <div className="pt-4 mt-2 border-t border-[var(--cream)] flex flex-col gap-2">
              <button
                onClick={toggle}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium border border-[var(--cream)] hover:border-[var(--gold)]"
              >
                <Languages className="w-4 h-4" />
                {locale === "en" ? "हिंदी" : "English"}
              </button>
              <Button
                asChild
                className="bg-[var(--maroon)] hover:bg-[var(--maroon-deep)] text-white w-full"
                onClick={() => setMobileOpen(false)}
              >
                <Link href="/admissions/apply">{t.nav.apply}</Link>
              </Button>
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
        "block px-3 py-2 rounded-md text-sm transition-colors",
        active
          ? "bg-[var(--cream)] text-[var(--maroon)] font-semibold"
          : "hover:bg-[var(--cream)] text-[var(--ink)]"
      )}
    >
      {label}
    </Link>
  );
}
