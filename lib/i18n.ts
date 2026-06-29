import { en, type Messages } from "@/lib/messages/en";
import { de } from "@/lib/messages/de";
import { es } from "@/lib/messages/es";
import { it } from "@/lib/messages/it";
import { pt } from "@/lib/messages/pt";

export type { Messages };

// Listed alphabetically by label (also the order shown in the selector).
export const locales = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
] as const;

export type LocaleCode = (typeof locales)[number]["code"];

export const defaultLocale: LocaleCode = "en";

export const dictionaries: Record<LocaleCode, Messages> = { de, en, es, it, pt };

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
