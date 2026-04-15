import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { localizePosts } from "@/data/posts";
import { localizeArticles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.blogPage.heading,
    description: dict.meta.homeDescription,
    alternates: { canonical: `https://arletamarczynska.pl/${locale}/blog` },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const l = locale as Locale;
  const dict = getDictionary(l);
  const d = dict.blogPage;

  const posts = localizePosts(l)
    .filter((p) => p.published)
    .map((p) => ({ ...p, kind: "post" as const, href: `/${locale}/blog/${p.slug}`, external: false }));

  const articles = localizeArticles(l)
    .filter((a) => a.published)
    .map((a) => ({ ...a, kind: "article" as const, href: a.externalUrl, external: true }));

  const all = [...posts, ...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const isPdf = (url: string) => url.toLowerCase().endsWith(".pdf");

  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
      <div className="mb-20">
        <FadeIn>
          <SectionLabel className="mb-6 block">{d.breadcrumb}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-display-lg text-ink text-balance max-w-[22ch]">
            {d.heading}
          </h1>
        </FadeIn>
      </div>

      <Divider />

      <div className="flex flex-col">
        {all.map((item, i) => (
          <FadeIn key={`${item.kind}-${item.slug}`} delay={i * 0.04}>
            <article className="group border-b border-subtle py-8 grid md:grid-cols-[160px_1fr_auto] md:items-baseline gap-3 md:gap-10">
              <time className="font-mono text-label text-muted pt-0.5">
                {formatDate(item.date)}
              </time>

              <div>
                <div className="flex flex-wrap gap-x-3 mb-2.5">
                  <span className="font-mono text-label text-accent">{item.category}</span>
                  {item.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="font-mono text-label text-muted/50">
                      #{tag}
                    </span>
                  ))}
                  {item.external && (
                    <span className="font-mono text-label text-muted/40 uppercase tracking-wider">
                      {"source" in item ? item.source : ""}
                    </span>
                  )}
                </div>
                <h2 className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200 mb-2">
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    <Link href={item.href}>{item.title}</Link>
                  )}
                </h2>
                <p className="text-body-sm text-muted">{item.excerpt}</p>
              </div>

              <div className="flex items-start gap-3 md:flex-col md:items-end">
                {"readingTime" in item && item.readingTime ? (
                  <span className="font-mono text-label text-muted whitespace-nowrap">
                    {item.readingTime}min
                  </span>
                ) : null}
                {item.external && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-label text-muted hover:text-ink transition-colors duration-200 uppercase tracking-wider whitespace-nowrap"
                  >
                    {isPdf(item.href) ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <rect x="1.5" y="0.5" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.1"/>
                          <path d="M3.5 6.5h5M3.5 8.5h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                          <path d="M3.5 3.5h2.5v2H3.5z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
                        </svg>
                        PDF
                      </>
                    ) : (
                      <>
                        Czytaj
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </a>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
