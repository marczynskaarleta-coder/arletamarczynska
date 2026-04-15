import Link from "next/link";
import { Divider } from "@/components/ui/Divider";
import { profile } from "@/data/profile";
import type { Dict } from "@/dictionaries/pl";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale; nav: Dict["nav"]; footer: Dict["footer"] };

const NAV_HREFS = [
  { key: "projects" as const, href: "/projekty" },
  { key: "blog"     as const, href: "/blog"     },
  { key: "contact"  as const, href: "/kontakt"  },
];

export function Footer({ locale, nav, footer }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <Divider />
      <div className="max-w-layout mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-serif text-[1rem] text-ink">{profile.name}</span>
            <span className="font-mono text-label text-muted">{footer.role}</span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {NAV_HREFS.map(({ key, href }) => (
              <Link
                key={href}
                href={`/${locale}${href}`}
                className="text-body-sm text-muted hover:text-ink transition-colors duration-200"
              >
                {nav[key]}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-5">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label text-muted hover:text-ink transition-colors duration-200 uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label text-muted hover:text-ink transition-colors duration-200 uppercase tracking-wider"
              >
                Instagram
              </a>
            </div>
            <div className="flex gap-4">
              <Link href={`/${locale}/polityka-prywatnosci`} className="font-mono text-label text-muted/50 hover:text-muted transition-colors duration-200">
                {locale === "pl" ? "Polityka prywatności" : "Privacy policy"}
              </Link>
              <Link href={`/${locale}/regulamin`} className="font-mono text-label text-muted/50 hover:text-muted transition-colors duration-200">
                {locale === "pl" ? "Regulamin" : "Terms"}
              </Link>
            </div>
            <p className="font-mono text-label text-muted/50">
              &copy; {year} {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
