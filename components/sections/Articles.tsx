"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

export function Articles() {
  const featured = articles.filter((a) => a.featured && a.published).slice(0, 3);

  return (
    <section id="artykuly" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-16" />

      <div className="flex items-end justify-between mb-14">
        <FadeIn>
          <SectionLabel>Publikacje</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Link
            href="/blog"
            className="text-body-sm text-muted hover:text-ink transition-colors duration-200 hidden sm:block"
          >
            Wszystkie artykuły &rarr;
          </Link>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.1}>
            <ArticleCard article={article} index={i} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[number];
  index: number;
}) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col h-full"
    >
      {/* Category + date bar */}
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-label text-accent uppercase tracking-wider">
          {article.category}
        </span>
        <span className="w-px h-3 bg-subtle" />
        <time className="font-mono text-label text-muted">
          {formatDate(article.date)}
        </time>
      </div>

      {/* Index + title */}
      <div className="flex gap-4 mb-4">
        <span className="font-mono text-label text-muted/40 pt-1 shrink-0 w-6">
          0{index + 1}
        </span>
        <h3 className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200 leading-snug">
          {article.externalUrl ? (
            <a
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          ) : (
            <Link href={`/blog/${article.slug}`}>{article.title}</Link>
          )}
        </h3>
      </div>

      {/* Excerpt */}
      <p className="text-body-sm text-muted ml-10 leading-relaxed flex-1 mb-6">
        {article.excerpt}
      </p>

      {/* Read more */}
      <div className="ml-10">
        {article.externalUrl ? (
          <a
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-label text-muted hover:text-ink transition-colors duration-200 uppercase tracking-wider"
          >
            Czytaj
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
        ) : (
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-2 font-mono text-label text-muted hover:text-ink transition-colors duration-200 uppercase tracking-wider"
          >
            Czytaj
            <span aria-hidden>&rarr;</span>
          </Link>
        )}
      </div>
    </motion.article>
  );
}
