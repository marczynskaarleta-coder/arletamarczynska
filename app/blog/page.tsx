import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Artykuły",
  description: "Notatki o logistyce, energetyce, AI i budowaniu produktów.",
};

export default function BlogPage() {
  const published = articles.filter((a) => a.published);

  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
      <div className="mb-20">
        <FadeIn>
          <SectionLabel className="mb-6 block">Piszę o tym, co buduję</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-display-lg text-ink text-balance max-w-[20ch]">
            Artykuły i notatki.
          </h1>
        </FadeIn>
      </div>

      <Divider />

      <div className="flex flex-col">
        {published.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.07}>
            <article className="group border-b border-subtle py-8 grid md:grid-cols-[160px_1fr_70px] md:items-baseline gap-3 md:gap-10">
              <div className="flex items-center gap-3">
                <time className="font-mono text-label text-muted">
                  {formatDate(article.date)}
                </time>
              </div>

              <div>
                <div className="flex flex-wrap gap-x-3 mb-2">
                  <span className="font-mono text-label text-accent">{article.category}</span>
                  {article.tags.map((tag) => (
                    <span key={tag} className="font-mono text-label text-muted/60">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200 mb-2">
                  {article.externalUrl ? (
                    <a href={article.externalUrl} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  ) : (
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  )}
                </h2>
                <p className="text-body-sm text-muted">{article.excerpt}</p>
              </div>

              <span className="font-mono text-label text-muted text-right hidden md:block">
                {article.readingTime}min
              </span>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
