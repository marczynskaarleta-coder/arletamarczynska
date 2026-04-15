import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import type { LocalizedPillar } from "@/data/projects";
import type { Dict } from "@/dictionaries/pl";
import type { Locale } from "@/lib/i18n";

type Props = {
  dict: Dict["projects"] & { badges: Dict["badges"] };
  locale: Locale;
  data: LocalizedPillar[];
};

const STATUS_DOT: Record<string, string> = {
  live:          "bg-[#7b8d5b]",
  "in-progress": "bg-[#b36f3c]",
  concept:       "bg-muted/35",
  "coming-soon": "bg-muted/20",
};

export function Projects({ dict, locale, data }: Props) {
  return (
    <section id="projekty" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-16" />

      <div className="flex items-end justify-between mb-14">
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

      {/* 3-column pillar overview */}
      <div className="grid md:grid-cols-3 gap-px bg-subtle">
        {data.map((pillar, i) => (
          <FadeIn key={pillar.id} delay={i * 0.08}>
            <div className="bg-canvas p-7 md:p-8 flex flex-col gap-5 h-full">
              {/* Pillar header */}
              <div>
                <span className="font-mono text-label text-accent block mb-3">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-display-md text-ink leading-tight">
                  {pillar.title}
                </h3>
              </div>

              {/* Project list */}
              <ul className="flex flex-col gap-2.5 mt-1">
                {pillar.projects.map((project) => (
                  <li key={project.slug} className="flex items-center gap-2.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[project.status] ?? "bg-muted/30"}`}
                    />
                    <span
                      className={`text-body-sm ${
                        project.status === "coming-soon"
                          ? "text-muted/40"
                          : "text-muted"
                      }`}
                    >
                      {project.name}
                    </span>
                    {project.status === "live" && project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-label text-accent hover:text-ink transition-colors duration-150 ml-auto shrink-0"
                        aria-label={`${project.name} — ${dict.visitLabel}`}
                      >
                        ↗
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
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
