"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/useActiveSection";
import { LangSwitcher } from "@/components/ui/LangSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";
import type { Dict } from "@/dictionaries/pl";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale; nav: Dict["nav"] };

const SECTION_IDS = ["hero", "about", "projekty", "artykuly", "newsletter"];

const NAV_HREFS = [
  { key: "projects" as const, href: "/projekty" },
  { key: "blog"     as const, href: "/blog"     },
  { key: "contact"  as const, href: "/kontakt"  },
];

export function Header({ locale, nav }: Props) {
  const pathname = usePathname();
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);
  const bgOpacity     = useTransform(scrollY, [0, 60], [0.7, 0.96]);
  const scaleX        = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(isHome ? SECTION_IDS : []);

  function isNavActive(href: string) {
    const full = `/${locale}${href}`;
    if (!isHome) return pathname === full || pathname.startsWith(full + "/");
    const sectionMap: Record<string, string> = {
      "/projekty": "projekty",
      "/blog":     "artykuly",
      "/kontakt":  "kontakt",
    };
    return sectionMap[href] === activeSection;
  }

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          borderColor: useTransform(borderOpacity, (v) => `rgba(var(--subtle-rgb,216,212,204),${v})`),
          backgroundColor: useTransform(bgOpacity, (v) => `color-mix(in srgb, var(--color-bg) ${v * 100}%, transparent)`),
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div className="max-w-layout mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="font-serif text-[1.05rem] tracking-tight text-ink hover:text-accent transition-colors duration-200 shrink-0"
          >
            {profile.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_HREFS.map(({ key, href }) => {
              const active = isNavActive(href);
              return (
                <Link
                  key={href}
                  href={`/${locale}${href}`}
                  className={cn(
                    "relative text-body-sm font-medium transition-colors duration-200 py-1",
                    active ? "text-ink" : "text-muted hover:text-ink group"
                  )}
                >
                  {nav[key]}
                  <span className={cn(
                    "absolute bottom-0 left-0 right-0 h-px bg-ink transition-transform duration-200 origin-left",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-5">
            <ThemeToggle />
            <LangSwitcher locale={locale} label={nav.switchTo} />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-1 w-8 h-8"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }} className="block w-5 h-px bg-ink origin-center" />
            <motion.span animate={menuOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }} transition={{ duration: 0.18 }} className="block w-5 h-px bg-ink" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }} className="block w-5 h-px bg-ink origin-center" />
          </button>
        </div>

        {/* Mobile drawer */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden border-t border-subtle bg-canvas"
        >
          <nav className="px-6 py-7 flex flex-col gap-6">
            {NAV_HREFS.map(({ key, href }) => (
              <Link
                key={href}
                href={`/${locale}${href}`}
                onClick={() => setMenuOpen(false)}
                className="text-body-lg font-medium text-ink"
              >
                {nav[key]}
              </Link>
            ))}
            <div className="flex items-center gap-5 pt-2 border-t border-subtle">
              <ThemeToggle />
              <LangSwitcher locale={locale} label={nav.switchTo} />
            </div>
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
}
