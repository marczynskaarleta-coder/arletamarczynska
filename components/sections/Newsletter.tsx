import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import type { Dict } from "@/dictionaries/pl";

type Props = { dict: Dict["newsletter"] };

export function Newsletter({ dict }: Props) {
  return (
    <section id="newsletter" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-16" />

      <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-start">
        <div>
          <FadeIn>
            <SectionLabel className="mb-6 block">{dict.sectionLabel}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-display-lg text-ink text-balance mb-6 leading-tight">
              {dict.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-sm text-muted max-w-prose">{dict.body}</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="pt-2 md:pt-10">
          <NewsletterForm dict={dict} />
        </FadeIn>
      </div>
    </section>
  );
}
