"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["hero", "about", "projekty", "artykuly", "newsletter"];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 60], [0.7, 0.95]);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(isHome ? SECTION_IDS : []);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  function isNavActive(href: string) {
    if (!isHome) {
      return pathname === href || pathname.startsWith(href + "/");
    }
    const sectionMap: Record<string, string> = {
      "/projekty": "projekty",
      "/blog": "artykuly",
      "/kontakt": "kontakt",
    };
    return sectionMap[href] === activeSection;
  }

  return (
    <>
      {/* Scroll progress — 1.5px accent line at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          borderColor: useTransform(borderOpacity, (v) => `rgba(216,212,204,${v})`),
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(247,245,240,${v})`),
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-layout mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-[1.05rem] tracking-tight text-ink hover:text-accent transition-colors duration-200"
          >
            Arleta Marczynska
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => {
              const active = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-body-sm font-medium transition-colors duration-200 py-1",
                    active ? "text-ink" : "text-muted hover:text-ink"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-1 w-8 h-8"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="block w-5 h-px bg-ink origin-center"
            />
            <motion.span
              animate={menuOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.18 }}
              className="block w-5 h-px bg-ink"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="block w-5 h-px bg-ink origin-center"
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden border-t border-subtle"
        >
          <nav className="px-6 py-7 flex flex-col gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-body-lg font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
}
