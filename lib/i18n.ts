import { en } from "@/lib/messages/en";

// The shape every locale dictionary must match. Add a locale by creating a file
// the same shape as en.ts, importing it here, and adding it to `locales` +
// `dictionaries` below — the selector and detection pick it up automatically.
export type Messages = typeof en;

export const locales = [{ code: "en", label: "English" }] as const;

export type LocaleCode = (typeof locales)[number]["code"];

export const defaultLocale: LocaleCode = "en";

export const dictionaries: Record<LocaleCode, Messages> = { en };

export function isLocale(value: string): value is LocaleCode {
  return locales.some((l) => l.code === value);
}

// Pick the best locale: an explicit saved choice wins; otherwise the first
// browser language whose base (e.g. "es" from "es-MX") we support; else default.
export function resolveLocale(
  stored: string | null | undefined,
  preferred: readonly string[] = [],
): LocaleCode {
  if (stored && isLocale(stored)) return stored;
  for (const lang of preferred) {
    const base = lang.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export const LOCALE_STORAGE_KEY = "greyout-locale";
