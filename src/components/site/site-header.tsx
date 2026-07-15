"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  GraduationCap,
  Languages,
  ChevronDown,
  Phone,
  ArrowRight,
} from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const { t, toggle, locale } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility strip */}
      <div
        className={cn(
          "hidden md:block bg-maroon-deep text-white text-xs transition-all duration-300",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-10 opacity-100"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
          <p className="italic tracking-wide text-gold/90">
            “{t.motto}” — {t.mottoTranslation}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="tel:+919636452501"
              className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              +91 96364 52501
            </a>
            <a
              href="mailto:info@viratpublicschool.in"
              className="hover:text-gold transition-colors"
            >
              info@viratpublicschool.in
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "w-full transition-all duration-300 border-b",
          scrolled
            ? "glass border-line shadow-[0_4px_24px_rgba(80,20,20,0.06)]"
            : "bg-background/90 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-[4.75rem]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-[var(--maroon)] to-[var(--maroon-deep)] flex items-center justify-center ring-1 ring-[var(--gold)]/50 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[var(--gold)] ring-2 ring-background" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-base lg:text-lg text-maroon tracking-tight">
                  {t.schoolName}
                </span>
                <span className="text-[10px] lg:text-[11px] text-muted-ink font-medium tracking-wide">
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
                      className={cn(
                        isActive(group.parent.href) && "text-maroon font-semibold"
                      )}
                    >
                      {group.parent.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[260px] gap-1 p-2.5 bg-surface rounded-xl shadow-lg border border-line">
                        <li>
                          <Link
                            href={group.parent.href}
                            className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-cream font-semibold text-maroon text-sm group"
                          >
                            {group.parent.label}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </li>
                        <li className="my-1 h-px bg-line" />
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block px-3 py-2 rounded-lg hover:bg-cream hover:translate-x-1 transition-all text-sm text-ink"
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
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                onClick={toggle}
                aria-label="Toggle language"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold border border-line hover:border-[var(--gold)] hover:text-maroon transition-all"
              >
                <Languages className="w-4 h-4" />
                {locale === "en" ? "हिंदी" : "EN"}
              </button>
              <Button
                asChild
                className="bg-maroon hover:bg-maroon-deep text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <Link href="/admissions/apply">
                  {t.nav.apply}
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={toggle}
                aria-label="Toggle language"
                className="p-2 text-maroon hover:text-maroon-deep"
              >
                <Languages className="w-5 h-5" />
              </button>
              <button
                className="p-2 -mr-2 text-maroon"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line glass animate-fade-down">
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
                <div
                  key={group.parent.href}
                  className="border-b border-line/60 last:border-0"
                >
                  <button
                    onClick={() =>
                      setOpenGroup(isOpen ? null : group.parent.href)
                    }
                    className="w-full flex items-center justify-between px-3 py-3 text-left text-sm font-medium text-ink"
                  >
                    <span
                      className={cn(
                        parentActive && "text-maroon font-semibold"
                      )}
                    >
                      {group.parent.label}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-muted-ink transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-2 pl-4 space-y-0.5 animate-fade-down">
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

            <div className="pt-4 mt-2 border-t border-line/60">
              <Button
                asChild
                className="bg-maroon hover:bg-maroon-deep text-white w-full rounded-full font-semibold"
              >
                <Link href="/admissions/apply">
                  {t.nav.apply}
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </Button>
              <div className="mt-3 flex items-center justify-center gap-5 text-xs text-muted-ink">
                <a
                  href="tel:+919636452501"
                  className="inline-flex items-center gap-1.5 hover:text-maroon"
                >
                  <Phone className="w-3 h-3" /> +91 96364 52501
                </a>
                <a
                  href="mailto:info@viratpublicschool.in"
                  className="hover:text-maroon"
                >
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
        "block px-3 py-2.5 rounded-xl text-sm transition-colors",
        active
          ? "bg-cream text-maroon font-semibold"
          : "text-ink hover:bg-cream/60"
      )}
    >
      {label}
    </Link>
  );
}
