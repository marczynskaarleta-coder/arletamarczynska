import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Articles } from "@/components/sections/Articles";
import { BeyondOps } from "@/components/sections/BeyondOps";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { localizeProjects } from "@/data/projects";
import { localizeArticles } from "@/data/articles";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return { title: { absolute: dict.meta.homeTitle }, description: dict.meta.homeDescription };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const l = locale as Locale;
  const dict = getDictionary(l);
  const projectsData = localizeProjects(l);
  const articlesData = localizeArticles(l).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Hero dict={dict.hero} locale={l} />
      <About dict={dict.about} />
      <Projects
        dict={{ ...dict.projects, badges: dict.badges }}
        locale={l}
        data={projectsData}
      />
      <Articles dict={dict.articles} locale={l} data={articlesData} />
      <BeyondOps dict={dict.beyondOps} />
      <ContactCTA dict={dict.contact} />
    </>
  );
}
