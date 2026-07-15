"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Locale, type Dictionary } from "@/lib/i18n/translations";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
  toggle: () => void;
  setLocale: (l: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "vps-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "hi" : "en");
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider
      value={{ locale, t: translations[locale], toggle, setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
