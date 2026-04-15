import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projekty",
  description: "Wybrane projekty i produkty, nad którymi pracuję.",
};

export default function ProjektyPage() {
  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
      <div className="mb-20">
        <FadeIn>
          <SectionLabel className="mb-6 block">Portfolio</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-display-lg text-ink text-balance max-w-[20ch]">
            Projekty, które buduję.
          </h1>
        </FadeIn>
      </div>

      <Divider />

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.07}>
            <article className="group border-b border-subtle py-10 grid md:grid-cols-[auto_1fr_auto] md:items-start gap-6 md:gap-12">
              <span className="font-mono text-label text-muted/60 pt-1 w-12">
                {project.year}
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <StatusBadge status={project.status} />
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-label bg-subtle text-muted px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-display-md text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-body-sm text-muted max-w-prose mb-3">
                  {project.shortDescription}
                </p>
                {project.longDescription && (
                  <p className="text-body-sm text-muted/70 max-w-prose">
                    {project.longDescription}
                  </p>
                )}
              </div>

              {project.externalUrl && (
                <div className="pt-1">
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm font-medium text-muted hover:text-ink border border-subtle hover:border-ink/30 px-4 py-2 rounded-sm transition-colors duration-200"
                  >
                    Odwiedź
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path
                        d="M2 10L10 2M10 2H4M10 2V8"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
