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
  // Duplicate for seamless infinite loop
  const items = [...data, ...data];

  return (
    <section id="projekty" className="py-section overflow-hidden">
      <div className="px-6 md:px-10 max-w-layout mx-auto">
        <Divider className="mb-8" />

        <div className="flex items-end justify-between mb-8">
          <FadeIn>
            <SectionLabel>{dict.sectionLabel}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href={`/${locale}/projekty`}
              className="text-body-sm text-muted hover:text-ink transition-colors duration-200 hidden sm:block"
            >
              {dict.viewAll} &rarr;
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Scrolling strip */}
      <div className="border-y border-subtle py-5 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {items.map((project, i) => (
            <MarqueeItem key={`${project.slug}-${i}`} project={project} />
          ))}
        </div>
      </div>

      <div className="px-6 md:px-10 max-w-layout mx-auto mt-6 sm:hidden">
        <Link
          href={`/${locale}/projekty`}
          className="text-body-sm text-muted hover:text-ink transition-colors duration-200"
        >
          {dict.viewAll} &rarr;
        </Link>
      </div>
    </section>
  );
}

function MarqueeItem({ project }: { project: LocalizedProject }) {
  const isLive = project.status === "live";
  const isSoon = project.status === "coming-soon";

  const inner = (
    <span className="group flex items-center gap-3 px-10 cursor-default">
      {/* Status dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
          isLive
            ? "bg-accent group-hover:bg-ink"
            : isSoon
            ? "bg-muted/30"
            : "bg-muted/50"
        }`}
      />

      {/* Name */}
      <span
        className={`font-serif text-display-sm whitespace-nowrap transition-colors duration-200 ${
          isSoon
            ? "text-muted/40"
            : "text-ink group-hover:text-accent"
        }`}
      >
        {project.name}
      </span>

      {/* Separator */}
      <span className="text-subtle/60 font-mono text-label ml-6 select-none">
        /
      </span>
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
