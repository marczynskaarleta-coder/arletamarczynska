import { FadeIn } from "@/components/ui/FadeIn";
import { Divider } from "@/components/ui/Divider";
import { profile } from "@/data/profile";
import type { Dict } from "@/dictionaries/pl";

type Props = { dict: Dict["contact"] };

export function ContactCTA({ dict }: Props) {
  return (
    <section id="kontakt" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-16" />

      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <h2 className="font-serif text-display-lg text-ink text-balance max-w-[20ch] leading-tight">
            {dict.heading}
          </h2>

          <div className="flex flex-col gap-5 shrink-0">
            <a
              href={`mailto:${profile.contact.email}`}
              className="group inline-flex flex-col gap-0.5"
            >
              <span className="font-mono text-label text-muted uppercase tracking-wider mb-1">
                {dict.emailLabel}
              </span>
              <span className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200 underline decoration-subtle underline-offset-4 group-hover:decoration-accent">
                {profile.contact.email}
              </span>
            </a>

            <div className="flex items-center gap-6">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-muted hover:text-ink transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-muted hover:text-ink transition-colors duration-200"
              >
                Twitter / X
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
