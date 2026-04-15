import type { Metadata } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/data/siteConfig";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteConfig.url,
  email: profile.contact.email,
  jobTitle: "Founder & Operator",
  sameAs: [profile.social.linkedin, profile.social.instagram],
  knowsAbout: ["Logistics", "Freight Forwarding", "AI", "SaaS", "Digital Products", "B2B"],
  worksFor: {
    "@type": "Organization",
    name: "eXportsy",
    url: "https://exportsy.pl",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arleta Marczynska",
  url: siteConfig.url,
  description:
    "Operator, founder i strateg. Buduję systemy i produkty cyfrowe dla logistyki, technologii i rynków regulowanych.",
  author: { "@type": "Person", name: profile.name },
  inLanguage: ["pl", "en"],
};

const fontVars = `${inter.variable} ${dmSerif.variable} ${jetbrains.variable}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className={fontVars}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-canvas text-ink antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
