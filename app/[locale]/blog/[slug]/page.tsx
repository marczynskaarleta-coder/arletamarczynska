import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { articles, localizeArticles } from "@/data/articles";
import { formatDate } from "@/lib/utils";
import { Divider } from "@/components/ui/Divider";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    articles
      .filter((a) => a.published)
      .map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const l = locale as Locale;
  const article = localizeArticles(l).find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const article = localizeArticles(l).find((a) => a.slug === slug && a.published);
  if (!article) notFound();

  // All articles are external — redirect via meta or show a bridge page
  return (
    <article className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-ink transition-colors duration-200 mb-12"
      >
        {dict.common.backToBlog}
      </Link>

      <header className="mb-12 max-w-prose">
        <div className="flex items-center gap-4 mb-5">
          <span className="font-mono text-label text-accent">{article.category}</span>
          <span className="w-px h-3 bg-subtle" />
          <time className="font-mono text-label text-muted">{formatDate(article.date)}</time>
          <span className="w-px h-3 bg-subtle" />
          <span className="font-mono text-label text-muted">{article.readingTime} {dict.common.minutesRead}</span>
        </div>
        <h1 className="font-serif text-display-lg text-ink text-balance leading-tight mb-5">
          {article.title}
        </h1>
        <p className="text-body-lg text-muted">{article.excerpt}</p>
      </header>

      <Divider className="mb-10" />

      <a
        href={article.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-medium text-body-sm text-canvas bg-ink hover:bg-ink/80 px-6 py-3 rounded-sm transition-colors duration-200"
      >
        {dict.articles.readLabel} — {article.source === "linkedin" ? "LinkedIn" : article.source === "exportsy" ? "Exportsy" : "TruckBiznes"}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </article>
  );
}
