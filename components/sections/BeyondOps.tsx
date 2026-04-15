import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import type { Dict } from "@/dictionaries/pl";

type Props = { dict: Dict["beyondOps"] };

export function BeyondOps({ dict }: Props) {
  return (
    <section id="poza-operacja" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-8" />

      <FadeIn className="mb-8">
        <SectionLabel>{dict.sectionLabel}</SectionLabel>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-px bg-subtle">
        {/* Motorcycle meetups */}
        <FadeIn delay={0.05}>
          <div className="bg-canvas p-6 flex flex-col gap-3 h-full">
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

        {/* Industry expert */}
        <FadeIn delay={0.1}>
          <div className="bg-canvas p-6 flex flex-col gap-3 h-full">
            <span className="font-mono text-label text-muted uppercase tracking-widest">
              {dict.expertLabel}
            </span>
            <h3 className="font-serif text-display-md text-ink leading-tight">
              {dict.expertTitle}
            </h3>
            <p className="text-body-sm text-muted leading-relaxed flex-1">
              {dict.expertDescription}
            </p>
            <div className="flex gap-4 mt-2">
              {dict.expertLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label text-muted hover:text-ink border-b border-subtle hover:border-ink/40 pb-0.5 transition-colors duration-200"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
