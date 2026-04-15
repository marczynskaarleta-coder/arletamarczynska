"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import type { LocalizedProject } from "@/data/projects";
import type { Dict } from "@/dictionaries/pl";
import type { Locale } from "@/lib/i18n";

type Props = {
  dict: Dict["projects"] & { badges: Dict["badges"] };
  locale: Locale;
  data: LocalizedProject[];
};

export function Projects({ dict, locale, data }: Props) {
  const items = [...data, ...data];

  return (
    <section id="projekty" className="py-section overflow-hidden">
      <div className="px-6 md:px-10 max-w-layout mx-auto">
        <Divider className="mb-8" />

        <FadeIn>
          <SectionLabel>{dict.sectionLabel}</SectionLabel>
        </FadeIn>
      </div>

      {/* Scrolling strip */}
      <div className="border-y border-subtle py-5 overflow-hidden">
        <div className="flex items-center w-max animate-marquee">
          {items.map((project, i) => (
            <MarqueeItem key={`${project.slug}-${i}`} project={project} />
          ))}
        </div>
      </div>

      <div className="px-6 md:px-10 max-w-layout mx-auto mt-8">
        <FadeIn delay={0.1}>
          <Link
            href={`/${locale}/projekty`}
            className="inline-flex items-center gap-2 text-body-sm font-medium text-ink border border-ink/20 hover:border-ink/60 hover:bg-ink/[0.03] px-5 py-2.5 rounded-sm transition-all duration-200"
          >
            {dict.viewAll}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeItem({ project }: { project: LocalizedProject }) {
  const isLive = project.status === "live";
  const isSoon = project.status === "coming-soon";

  const inner = (
    <span className="group flex items-center gap-4 px-6 md:px-10">
      {project.logo ? (
        <span className={`flex items-center transition-opacity duration-200 ${isSoon ? "opacity-30" : "opacity-60 group-hover:opacity-100"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.logo}
            alt={project.name}
            style={{
              height: project.slug === "excore" ? "36px" : "26px",
              width: "auto",
              maxWidth: "140px",
            }}
            className="object-contain brightness-0 dark:invert"
          />
        </span>
      ) : (
        <span className="flex items-center gap-2.5">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSoon ? "bg-muted/30" : "bg-accent"}`} />
          <span className={`font-serif text-display-md whitespace-nowrap transition-colors duration-200 ${isSoon ? "text-muted/40" : "text-ink group-hover:text-accent"}`}>
            {project.name}
          </span>
        </span>
      )}

      {/* Separator */}
      <span className="text-subtle font-mono text-label select-none">/</span>
    </span>
  );

  if (isLive && project.externalUrl) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={project.name}
      >
        {inner}
      </a>
    );
  }

  return <span>{inner}</span>;
}
