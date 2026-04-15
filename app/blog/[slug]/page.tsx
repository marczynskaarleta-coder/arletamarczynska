import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";
import { Divider } from "@/components/ui/Divider";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles
    .filter((a) => a.published && !a.externalUrl)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug && a.published);
  if (!article) notFound();

  // Redirect external articles
  if (article.externalUrl) notFound();

  return (
    <article className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-ink transition-colors duration-200 mb-12"
      >
        &larr; Artykuły
      </Link>

      <header className="mb-12 max-w-prose">
        <div className="flex items-center gap-4 mb-5">
          <span className="font-mono text-label text-accent">{article.category}</span>
          <span className="w-px h-3 bg-subtle" />
          <time className="font-mono text-label text-muted">
            {formatDate(article.date)}
          </time>
          <span className="w-px h-3 bg-subtle" />
          <span className="font-mono text-label text-muted">
            {article.readingTime} min czytania
          </span>
        </div>
        <h1 className="font-serif text-display-lg text-ink text-balance leading-tight mb-5">
          {article.title}
        </h1>
        <p className="text-body-lg text-muted">{article.excerpt}</p>
      </header>

      <Divider className="mb-12" />

      <div className="max-w-prose space-y-6">
        <p className="text-body-lg text-muted">
          Treść artykułu będzie dostępna wkrótce. Ten widok jest gotowy na
          integrację z MDX lub headless CMS (Contentful, Sanity, Notion API).
        </p>
        <code className="font-mono text-label text-muted bg-subtle inline-block px-3 py-2 rounded-sm">
          TODO: dodać treść — MDX lub CMS
        </code>
      </div>
    </article>
  );
}
