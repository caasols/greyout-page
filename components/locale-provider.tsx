"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  dictionaries,
  defaultLocale,
  resolveLocale,
  LOCALE_STORAGE_KEY,
  type LocaleCode,
  type Messages,
} from "@/lib/i18n";

type LocaleContextValue = {
  locale: LocaleCode;
  messages: Messages;
  setLocale: (locale: LocaleCode) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Start at the default so the prerendered (static) HTML is the default locale
  // and there's no hydration mismatch. Detect the real preference on mount.
  const [locale, setLocaleState] = useState<LocaleCode>(defaultLocale);

  useEffect(() => {
    // localStorage / navigator are client-only, so detection has to run after
    // hydration. Starting from the default keeps the static HTML consistent.
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    const resolved = resolveLocale(stored, navigator.languages);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState((current) => (resolved === current ? current : resolved));
  }, []);

  const setLocale = (next: LocaleCode) => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    setLocaleState(next);
  };

  return (
    <LocaleContext.Provider
      value={{ locale, messages: dictionaries[locale], setLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

// Copy for client components. Falls back to the default dictionary if used
// outside the provider (e.g. in isolation), so it never throws.
export function useMessages(): Messages {
  const ctx = useContext(LocaleContext);
  return ctx ? ctx.messages : dictionaries[defaultLocale];
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    return { locale: defaultLocale, setLocale: () => {} };
  }
  return { locale: ctx.locale, setLocale: ctx.setLocale };
}
