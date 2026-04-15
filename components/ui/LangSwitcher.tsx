"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  label: string; // dict.nav.switchTo
  className?: string;
};

export function LangSwitcher({ locale, label, className }: Props) {
  const pathname = usePathname();
  const targetLocale = locale === "pl" ? "en" : "pl";
  // Strip current locale prefix and prepend target locale
  const pathWithoutLocale = pathname.replace(/^\/(pl|en)/, "") || "/";
  const targetPath = `/${targetLocale}${pathWithoutLocale}`;

  return (
    <Link
      href={targetPath}
      className={cn(
        "font-mono text-label uppercase tracking-widest text-muted hover:text-ink transition-colors duration-200",
        className
      )}
    >
      {label}
    </Link>
  );
}
