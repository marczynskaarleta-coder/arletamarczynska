import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { posts, localizePosts, type LocalizedPost } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { Divider } from "@/components/ui/Divider";
import { siteConfig } from "@/data/siteConfig";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    posts
      .filter((p) => p.published)
      .map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const l = locale as Locale;
  const post = localizePosts(l).find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/${locale}/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Arleta Marczynska"],
      tags: post.tags,
    },
  };
}

function RelatedCard({ post, locale }: { post: LocalizedPost; locale: string }) {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group flex flex-col gap-2 border border-subtle hover:border-ink/30 rounded-sm p-5 transition-colors duration-200"
    >
      <span className="font-mono text-label text-accent">{post.category}</span>
      <h3 className="text-body-sm font-medium text-ink group-hover:text-accent transition-colors duration-200 leading-snug">
        {post.title}
      </h3>
      <span className="font-mono text-label text-muted">{post.readingTime}min</span>
    </Link>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  const allPosts = localizePosts(l).filter((p) => p.published);
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Related posts: use relatedSlugs if defined, else same category
  const rawPost = posts.find((p) => p.slug === slug);
  const relatedSlugs = rawPost?.relatedSlugs ?? [];
  const related = relatedSlugs.length
    ? allPosts.filter((p) => relatedSlugs.includes(p.slug))
    : allPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  // JSON-LD for BlogPosting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Arleta Marczynska",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "Arleta Marczynska",
    },
    keywords: post.tags.join(", "),
    url: `${siteConfig.url}/${locale}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
        {/* Back */}
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-body-sm text-muted hover:text-ink transition-colors duration-200 mb-14"
        >
          {dict.common.backToBlog}
        </Link>

        {/* Header */}
        <header className="mb-12 max-w-[52ch]">
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="font-mono text-label text-accent">{post.category}</span>
            <span className="w-px h-3 bg-subtle" />
            <time className="font-mono text-label text-muted" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span className="w-px h-3 bg-subtle" />
            <span className="font-mono text-label text-muted">
              {post.readingTime} {dict.common.minutesRead}
            </span>
          </div>
          <h1 className="font-serif text-display-lg text-ink text-balance leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-body-lg text-muted leading-relaxed">{post.excerpt}</p>
        </header>

        <Divider className="mb-12" />

        {/* Article body */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-subtle">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-label text-muted bg-subtle px-2.5 py-1 rounded-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related posts */}
        {related.length > 0 && (
          <aside className="mt-20 pt-12 border-t border-subtle">
            <p className="font-mono text-label text-muted uppercase tracking-widest mb-8">
              {dict.blogPostPage.relatedLabel}
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <RelatedCard key={r.slug} post={r} locale={locale} />
              ))}
            </div>
          </aside>
        )}
      </article>
    </>
  );
}
