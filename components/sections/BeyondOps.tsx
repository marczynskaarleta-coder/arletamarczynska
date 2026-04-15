import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import type { Dict } from "@/dictionaries/pl";

type Props = { dict: Dict["beyondOps"] };

export function BeyondOps({ dict }: Props) {
  return (
    <section id="poza-operacja" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-16" />

      <FadeIn className="mb-14">
        <SectionLabel>{dict.sectionLabel}</SectionLabel>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-px bg-subtle">
        {/* Podcast */}
        <FadeIn delay={0.07}>
          <div className="bg-canvas p-8 md:p-10 flex flex-col gap-4 h-full group">
            <span className="font-mono text-label text-muted uppercase tracking-widest">
              {dict.podcastLabel}
            </span>
            <h3 className="font-serif text-display-md text-ink leading-tight">
              {dict.podcastTitle}
            </h3>
            <p className="text-body-sm text-muted leading-relaxed flex-1">
              {dict.podcastDescription}
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-label text-muted/50 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted/30" />
              {dict.podcastStatus}
            </span>
          </div>
        </FadeIn>

        {/* Motorcycle meetups */}
        <FadeIn delay={0.14}>
          <div className="bg-canvas p-8 md:p-10 flex flex-col gap-4 h-full group">
            <span className="font-mono text-label text-muted uppercase tracking-widest">
              {dict.motoLabel}
            </span>
            <h3 className="font-serif text-display-md text-ink leading-tight">
              {dict.motoTitle}
            </h3>
            <p className="text-body-sm text-muted leading-relaxed flex-1">
              {dict.motoDescription}
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-label text-accent mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {dict.motoStatus}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
