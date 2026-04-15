import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { localizeProjects } from "@/data/projects";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return { title: dict.projectsPage.heading };
}

export default async function ProjektyPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const l = locale as Locale;
  const dict = getDictionary(l);
  const data = localizeProjects(l);
  const d = dict.projectsPage;
  const badges = dict.badges;

  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
      <div className="mb-20">
        <FadeIn>
          <SectionLabel className="mb-6 block">{d.breadcrumb}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-display-lg text-ink text-balance max-w-[20ch]">
            {d.heading}
          </h1>
        </FadeIn>
      </div>

      <Divider />

      <div className="flex flex-col">
        {data.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.07}>
            <article className="group border-b border-subtle py-10 grid md:grid-cols-[auto_1fr_auto] md:items-start gap-6 md:gap-12">
              <span className="font-mono text-label text-muted/60 pt-1 w-12">
                {project.year}
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <StatusBadge
                    status={project.status}
                    label={
                      project.status === "live"
                        ? badges.live
                        : project.status === "in-progress"
                        ? badges.inProgress
                        : badges.concept
                    }
                  />
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="font-mono text-label bg-subtle text-muted px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-serif text-display-md text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-body-sm text-muted max-w-prose mb-2">
                  {project.shortDescription}
                </p>
                <p className="text-body-sm text-muted/60 max-w-prose">
                  {project.longDescription}
                </p>
              </div>

              {project.externalUrl && (
                <div className="pt-1">
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm font-medium text-muted hover:text-ink border border-subtle hover:border-ink/30 px-4 py-2 rounded-sm transition-colors duration-200"
                  >
                    {d.visitLabel}
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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
