import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { SetHtmlLang } from "@/components/ui/SetHtmlLang";
import { getDictionary } from "@/dictionaries";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/data/siteConfig";
import { profile } from "@/data/profile";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  const ogLocale = locale === "pl" ? "pl_PL" : "en_US";
  const altLocale = locale === "pl" ? "en_US" : "pl_PL";
  return {
    title: { default: dict.meta.homeTitle, template: `%s | Arleta Marczynska` },
    description: dict.meta.homeDescription,
    authors: [{ name: profile.name, url: siteConfig.url }],
    creator: profile.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        pl: `${siteConfig.url}/pl`,
        en: `${siteConfig.url}/en`,
        "x-default": `${siteConfig.url}/pl`,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: [altLocale],
      url: `${siteConfig.url}/${locale}`,
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      siteName: "Arleta Marczynska",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      creator: "@arletamarczynska",
      site: "@arletamarczynska",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);

  return (
    <>
      <SetHtmlLang locale={locale} />
      <Header locale={locale as Locale} nav={dict.nav} />
      <main>{children}</main>
      <Footer locale={locale as Locale} nav={dict.nav} footer={dict.footer} />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
