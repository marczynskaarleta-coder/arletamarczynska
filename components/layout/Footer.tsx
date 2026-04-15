import Link from "next/link";
import { Divider } from "@/components/ui/Divider";
import { links } from "@/data/links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <Divider />
      <div className="max-w-layout mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <span className="font-serif text-[1rem] text-ink">
              Arleta Marczynska
            </span>
            <span className="font-mono text-label text-muted">
              Founder &amp; Operator
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {links.footer.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-sm text-muted hover:text-ink transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social + copyright */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-5">
              {links.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label text-muted hover:text-ink transition-colors duration-200 uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <p className="font-mono text-label text-muted/60">
              &copy; {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
