import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { posts } from "@/data/posts";
import { siteConfig } from "@/data/siteConfig";

const base = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/projekty", "/kontakt"];

  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1.0 : route === "/blog" ? 0.8 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${base}/${l}${route}`])
        ),
      },
    }))
  );

  const publishedPosts = posts.filter((p) => p.published);
  const postEntries = locales.flatMap((locale) =>
    publishedPosts.map((post) => ({
      url: `${base}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${base}/${l}/blog/${post.slug}`])
        ),
      },
    }))
  );

  return [...staticEntries, ...postEntries];
}
