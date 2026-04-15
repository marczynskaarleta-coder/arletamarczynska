"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/HeroBackground";
import type { Dict } from "@/dictionaries/pl";
import type { Locale } from "@/lib/i18n";

type Props = { dict: Dict["hero"]; locale: Locale };

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ dict, locale }: Props) {
  const words = dict.headline.split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-[80dvh] flex flex-col justify-end pb-10 md:pb-16 pt-24 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 px-6 md:px-10 max-w-layout mx-auto w-full">
        {/* Role label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="font-mono text-label uppercase tracking-widest text-muted mb-4 block"
        >
          {dict.roleLabel}
        </motion.span>

        {/* Headline — word-by-word */}
        <h1 className="font-serif text-[clamp(2.2rem,8vw,7rem)] text-ink leading-none tracking-tight mb-6 max-w-[16ch]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 36, skewY: 1 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.07 }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub-copy + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.82 }}
            className="text-body-lg text-muted max-w-[52ch]"
          >
            {dict.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.98 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0"
          >
            <Link
              href={`/${locale}/projekty`}
              className="inline-flex items-center gap-2 text-body-sm font-medium text-ink bg-ink/[0.06] hover:bg-ink/[0.1] border border-ink/[0.14] hover:border-ink/30 px-6 py-3 rounded-sm transition-all duration-200"
            >
              {dict.ctaProjects}
              <ArrowRight />
            </Link>
            <Link
              href="#kontakt"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-accent border border-accent/30 hover:border-accent/70 hover:bg-accent/[0.04] px-6 py-3 rounded-sm transition-all duration-200"
            >
              {dict.ctaContact}
            </Link>
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Przewiń w dół"
          className="mt-10 flex items-center justify-center w-9 h-9 rounded-full border border-subtle text-muted/50 hover:text-ink hover:border-ink/30 transition-colors duration-200"
        >
          <motion.svg
            width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <path d="M7 3v8M3.5 7.5L7 11l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.button>

      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
