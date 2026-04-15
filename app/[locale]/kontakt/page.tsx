import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { getDictionary } from "@/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { profile } from "@/data/profile";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  return { title: dict.contactPage.heading };
}

export default async function KontaktPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const d = dict.contactPage;

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

      <Divider className="mb-16" />

      <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24">
        <FadeIn className="flex flex-col gap-10">
          <div>
            <p className="text-body-lg text-muted max-w-prose mb-4">{d.description}</p>
            <p className="text-body-sm text-muted/70 max-w-prose">{d.replyTime}</p>
          </div>

          <div className="flex flex-col gap-6">
            <a href={`mailto:${profile.contact.email}`} className="group flex flex-col gap-1">
              <span className="font-mono text-label text-muted uppercase tracking-wider mb-1">{d.emailLabel}</span>
              <span className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200">
                {profile.contact.email}
              </span>
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1"
            >
              <span className="font-mono text-label text-muted uppercase tracking-wider mb-1">{d.linkedinLabel}</span>
              <span className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200">
                Arleta Marczynska
              </span>
            </a>

            <a
              href={profile.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1"
            >
              <span className="font-mono text-label text-muted uppercase tracking-wider mb-1">{d.instagramLabel}</span>
              <span className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200">
                @arleta_marczynska
              </span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form
            action={`mailto:${profile.contact.email}`}
            method="get"
            encType="text/plain"
            className="flex flex-col gap-6"
          >
            {(
              [
                { id: "name",  label: d.formNameLabel,  placeholder: d.formNamePlaceholder,  type: "text",  name: "name"  },
                { id: "email", label: d.formEmailLabel, placeholder: d.formEmailPlaceholder, type: "email", name: "email" },
              ] as const
            ).map((f) => (
              <div key={f.id} className="flex flex-col gap-2">
                <label htmlFor={f.id} className="font-mono text-label text-muted uppercase tracking-wider">{f.label}</label>
                <input
                  id={f.id}
                  name={f.name}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  className="bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/40 transition-colors duration-200"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-label text-muted uppercase tracking-wider">{d.formMessageLabel}</label>
              <textarea
                id="message"
                name="body"
                rows={5}
                required
                placeholder={d.formMessagePlaceholder}
                className="bg-transparent border-b border-subtle focus:border-ink outline-none py-3 text-body-sm text-ink placeholder:text-muted/40 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-start mt-2 inline-flex items-center gap-2 font-medium text-body-sm text-ink border border-ink/20 hover:border-ink px-6 py-3 rounded-sm transition-colors duration-200"
            >
              {d.formSubmitLabel} &rarr;
            </button>
            <p className="text-label text-muted/60">{d.formNote}</p>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
