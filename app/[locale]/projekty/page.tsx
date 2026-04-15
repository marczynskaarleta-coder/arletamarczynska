import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { localizePillars, type LocalizedPillar, type LocalizedProject } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.projectsPage.heading,
    description: dict.meta.homeDescription,
    alternates: { canonical: `${siteConfig.url}/${locale}/projekty` },
  };
}

// ─── Project row ─────────────────────────────────────────────────

function ProjectRow({
  project,
  visitLabel,
  badges,
}: {
  project: LocalizedProject;
  visitLabel: string;
  badges: { live: string; inProgress: string; concept: string; comingSoon: string };
}) {
  const badgeLabel =
    project.status === "live"
      ? badges.live
      : project.status === "in-progress"
      ? badges.inProgress
      : project.status === "coming-soon"
      ? badges.comingSoon
      : badges.concept;

  const isDimmed = project.status === "coming-soon";

  return (
    <div
      className={`group grid sm:grid-cols-[180px_1fr_auto] sm:items-center gap-3 sm:gap-6 py-5 border-b border-subtle last:border-b-0 ${
        isDimmed ? "opacity-60" : ""
      }`}
    >
      {/* Status + name */}
      <div className="flex items-center gap-3">
        <StatusBadge status={project.status} label={badgeLabel} />
      </div>

      {/* Name + description */}
      <div>
        <p
          className={`text-body-sm font-medium mb-0.5 transition-colors duration-200 ${
            isDimmed
              ? "text-muted/60"
              : "text-ink group-hover:text-accent"
          }`}
        >
          {project.name}
        </p>
        <p className="text-body-sm text-muted/70 leading-snug">
          {project.description}
        </p>
      </div>

      {/* Action */}
      <div className="sm:text-right">
        {project.externalUrl && project.status === "live" ? (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-label text-muted hover:text-ink border border-subtle hover:border-ink/30 px-3 py-1.5 rounded-sm transition-colors duration-200"
          >
            {visitLabel}
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : isDimmed ? (
          <span className="font-mono text-label text-muted/30 italic">
            {badges.comingSoon}
          </span>
        ) : null}
      </div>
    </div>
  );
}

// ─── Pillar section ──────────────────────────────────────────────

function PillarSection({
  pillar,
  visitLabel,
  badges,
  index,
}: {
  pillar: LocalizedPillar;
  visitLabel: string;
  badges: { live: string; inProgress: string; concept: string; comingSoon: string };
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-20 py-14 md:py-16 border-b border-subtle last:border-b-0">
        {/* Left: pillar info */}
        <div className="md:pt-1">
          <span className="font-mono text-label text-accent block mb-4">
            {pillar.number}
          </span>
          <h2 className="font-serif text-display-md text-ink leading-tight mb-4">
            {pillar.title}
          </h2>
          <p className="text-body-sm text-muted leading-relaxed">
            {pillar.intro}
          </p>
        </div>

        {/* Right: project list */}
        <div>
          {pillar.projects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              visitLabel={visitLabel}
              badges={badges}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

// ─── Page ────────────────────────────────────────────────────────

export default async function ProjektyPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const l = locale as Locale;
  const dict = getDictionary(l);
  const pillars = localizePillars(l);
  const d = dict.projectsPage;

  const badges = {
    live: dict.badges.live,
    inProgress: dict.badges.inProgress,
    concept: dict.badges.concept,
    comingSoon: dict.badges.comingSoon,
  };

  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
      {/* Header */}
      <div className="mb-20">
        <FadeIn>
          <SectionLabel className="mb-6 block">{d.breadcrumb}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="font-serif text-display-lg text-ink text-balance max-w-[22ch] mb-4">
            {d.heading}
          </h1>
        </FadeIn>
        <FadeIn delay={0.14}>
          <p className="font-mono text-label text-muted uppercase tracking-widest">
            {d.subheading}
          </p>
        </FadeIn>
      </div>

      <Divider />

      {/* Pillar sections */}
      <div>
        {pillars.map((pillar, i) => (
          <PillarSection
            key={pillar.id}
            pillar={pillar}
            visitLabel={d.visitLabel}
            badges={badges}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
