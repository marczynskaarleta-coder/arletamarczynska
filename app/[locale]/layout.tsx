import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SetHtmlLang } from "@/components/ui/SetHtmlLang";
import { getDictionary } from "@/dictionaries";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/data/siteConfig";

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
  return {
    title: { default: dict.meta.homeTitle, template: `%s | Arleta Marczynska` },
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        pl: `${siteConfig.url}/pl`,
        en: `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pl" ? "pl_PL" : "en_US",
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
    </>
  );
}
