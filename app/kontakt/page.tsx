import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Napisz do mnie w sprawie współpracy lub projektu.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-dvh pt-32 pb-section px-6 md:px-10 max-w-layout mx-auto">
      {/* Page header */}
      <div className="mb-20">
        <FadeIn>
          <SectionLabel className="mb-6 block">Kontakt</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-serif text-display-lg text-ink text-balance max-w-[22ch]">
            Porozmawiajmy o tym, co chcesz zbudowac.
          </h1>
        </FadeIn>
      </div>

      <Divider className="mb-16" />

      <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24">
        {/* Contact details */}
        <FadeIn className="flex flex-col gap-10">
          <div>
            <p className="text-body-lg text-muted max-w-prose mb-8">
              Jestem dostępna w sprawach współpracy produktowej, konsultacji
              operacyjnych oraz ciekawych projektów na styku technologii i
              biznesu.
            </p>
            <p className="text-body-sm text-muted max-w-prose">
              Odpowiadam zwykle w ciagu 24--48 godzin.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="group flex flex-col gap-1"
            >
              <span className="font-mono text-label text-muted uppercase tracking-wider">
                Email
              </span>
              <span className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors">
                {siteConfig.author.email}
              </span>
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1"
            >
              <span className="font-mono text-label text-muted uppercase tracking-wider">
                LinkedIn
              </span>
              <span className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors">
                Arleta Marczynska
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Simple contact form */}
        <FadeIn delay={0.15}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      action={`mailto:${siteConfig.author.email}`}
      method="get"
      encType="text/plain"
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-mono text-label text-muted uppercase tracking-wider"
        >
          Imie i nazwisko
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jan Kowalski"
          className="bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/50 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-label text-muted uppercase tracking-wider"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jan@firma.pl"
          className="bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/50 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-label text-muted uppercase tracking-wider"
        >
          Wiadomosc
        </label>
        <textarea
          id="message"
          name="body"
          rows={5}
          required
          placeholder="Opisz krotko, czym sie zajmujesz i czego szukasz..."
          className="bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="self-start mt-2 inline-flex items-center gap-2 font-medium text-body-sm text-ink border border-ink/20 hover:border-ink px-6 py-3 rounded-sm transition-colors"
      >
        Wyslij wiadomosc
        <span aria-hidden>&rarr;</span>
      </button>

      <p className="text-label text-muted">
        Formularz otwiera domyslnego klienta pocztowego. Mozesz tez napisac
        bezposrednio na adres powyzej.
      </p>
    </form>
  );
}
