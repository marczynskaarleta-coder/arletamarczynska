"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dict } from "@/dictionaries/pl";
import type { Locale } from "@/lib/i18n";

type Props = { dict: Dict["hero"]; about: Dict["about"]; locale: Locale };

export function Hero({ dict, about }: Props) {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: [
            "linear-gradient(var(--grid-line) 1px, transparent 1px)",
            "linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 100% 90% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-10 max-w-layout mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_290px] gap-12 md:gap-20 items-center">

          {/* LEFT — name + description */}
          <div className="flex flex-col order-2 md:order-1">
            <FadeIn>
              <SectionLabel className="mb-6 block">{about.sectionLabel}</SectionLabel>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] text-ink leading-[1.05] tracking-tight mb-8">
                Arleta<br />Marczynska
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-body-lg text-muted leading-relaxed max-w-[44ch]">
                {about.bio}
              </p>
            </FadeIn>

            {/* Scroll arrow */}
            <FadeIn delay={0.5}>
              <motion.button
                onClick={() =>
                  document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Przewiń w dół"
                className="mt-14 self-start flex items-center justify-center w-9 h-9 rounded-full border border-subtle text-muted/50 hover:text-ink hover:border-ink/30 transition-colors duration-200"
              >
                <motion.svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                >
                  <path
                    d="M7 3v8M3.5 7.5L7 11l3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.button>
            </FadeIn>
          </div>

          {/* RIGHT — photo */}
          <div className="flex flex-col order-1 md:order-2">
            <FadeIn delay={0.05}>
              <span className="font-mono text-label text-muted uppercase tracking-widest mb-4 block">
                {dict.roleLabel}
              </span>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="relative">
                {/* Decorative offset line */}
                <span
                  aria-hidden
                  className="absolute -left-3 top-6 bottom-6 w-px bg-accent/20"
                />

                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-subtle">
                  <Image
                    src="/3.png"
                    alt="Arleta Marczynska"
                    fill
                    sizes="(max-width: 768px) 90vw, 440px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle gradient fade at bottom */}
                  <div
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canvas/40 to-transparent pointer-events-none"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
