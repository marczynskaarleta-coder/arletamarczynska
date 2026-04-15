"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import type { LocalizedArticle } from "@/data/articles";
import type { Dict } from "@/dictionaries/pl";
import type { Locale } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";

type Props = {
  dict: Dict["articles"];
  locale: Locale;
  data: LocalizedArticle[];
};

export function Articles({ dict, locale, data }: Props) {
  const featured = data.filter((a) => a.featured && a.published).slice(0, 3);

  return (
    <section id="artykuly" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-8" />

      <div className="flex items-end justify-between mb-8">
        <FadeIn>
          <SectionLabel>{dict.sectionLabel}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Link
            href={`/${locale}/blog`}
            className="text-body-sm text-muted hover:text-ink transition-colors duration-200 hidden sm:block"
          >
            {dict.viewAll} &rarr;
          </Link>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.1}>
            <ArticleCard article={article} dict={dict} index={i} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  dict,
  index,
}: {
  article: LocalizedArticle;
  dict: Props["dict"];
  index: number;
}) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-label text-accent uppercase tracking-wider">
          {article.category}
        </span>
        <span className="w-px h-3 bg-subtle" />
        <time className="font-mono text-label text-muted">
          {formatDate(article.date)}
        </time>
      </div>

      <div className="flex gap-4 mb-4">
        <span className="font-mono text-label text-muted/40 pt-1 shrink-0 w-6">
          0{index + 1}
        </span>
        <h3 className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200 leading-snug">
          <a href={article.externalUrl} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
      </div>

      <p className="text-body-sm text-muted ml-10 leading-relaxed flex-1 mb-6">
        {article.excerpt}
      </p>

      <div className="ml-10">
        <a
          href={article.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-label text-muted hover:text-ink transition-colors duration-200 uppercase tracking-wider"
        >
          {dict.readLabel}
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}
