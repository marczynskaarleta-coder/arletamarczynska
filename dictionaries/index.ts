import { dict as pl } from "./pl";
import { dict as en } from "./en";
import type { Dict } from "./pl";
import type { Locale } from "@/lib/i18n";

export type { Dict };

const dicts = { pl, en } as const;

export function getDictionary(locale: Locale): Dict {
  return dicts[locale];
}
