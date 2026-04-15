import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { localizePosts } from "@/data/posts";
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
  const data = localizePosts(l).filter((p) => p.published);
  const d = dict.blogPage;

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
        {data.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.07}>
            <article className="group border-b border-subtle py-8 grid md:grid-cols-[160px_1fr_80px] md:items-baseline gap-3 md:gap-10">
              <time className="font-mono text-label text-muted pt-0.5">
                {formatDate(post.date)}
              </time>

              <div>
                <div className="flex flex-wrap gap-x-3 mb-2.5">
                  <span className="font-mono text-label text-accent">{post.category}</span>
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="font-mono text-label text-muted/50">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200 mb-2">
                  <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-body-sm text-muted">{post.excerpt}</p>
              </div>

              <span className="font-mono text-label text-muted text-right hidden md:block">
                {post.readingTime}min
              </span>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
