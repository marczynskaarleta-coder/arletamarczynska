export type Locale = "pl" | "en";
export const locales: Locale[] = ["pl", "en"];
export const defaultLocale: Locale = "pl";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
