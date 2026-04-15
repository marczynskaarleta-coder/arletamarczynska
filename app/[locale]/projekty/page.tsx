import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { localizeProjects } from "@/data/projects";
import { ProjectsClient } from "./ProjectsClient";
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

export default async function ProjektyPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const l = locale as Locale;
  const dict = getDictionary(l);
  const data = localizeProjects(l);
  const d = dict.projectsPage;

  const filterDict = {
    filterAll: d.filterAll,
    filterStatus: d.filterStatus,
    filterCategory: d.filterCategory,
    whyItMattersLabel: d.whyItMattersLabel,
    visitLabel: d.visitLabel,
    soonLabel: d.soonLabel,
    badges: dict.badges,
  };

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

      <Divider className="mb-10" />

      <FadeIn>
        <ProjectsClient projects={data} dict={filterDict} />
      </FadeIn>
    </div>
  );
}
