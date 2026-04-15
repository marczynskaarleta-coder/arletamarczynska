import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import type { Dict } from "@/dictionaries/pl";

type Props = { dict: Dict["about"] };

export function About({ dict }: Props) {
  return (
    <section id="about" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-8" />

      {/* Top: photo + text */}
      <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-14 mb-10">
        {/* Photo */}
        <FadeIn>
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-subtle">
            <Image
              src="/3.png"
              alt="Arleta Marczynska"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-top"
              priority
            />
          </div>
        </FadeIn>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <FadeIn delay={0.05}>
            <SectionLabel className="mb-4 block">{dict.sectionLabel}</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-display-md font-serif text-ink text-balance leading-snug mb-3">
              {dict.statement}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg text-muted max-w-prose">{dict.bio}</p>
          </FadeIn>
        </div>
      </div>

      {/* Focus areas */}
      <FadeIn delay={0.05}>
        <p className="font-mono text-label text-muted uppercase tracking-widest mb-5">
          {dict.areasLabel}
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle">
        {dict.areas.map((area, i) => (
          <FadeIn key={area.id} delay={i * 0.07}>
            <div className="bg-canvas p-6 h-full flex flex-col gap-2 group hover:bg-surface transition-colors duration-300">
              <span className="font-mono text-label text-muted/50 uppercase tracking-widest">
                0{i + 1}
              </span>
              <h3 className="text-body-lg font-medium text-ink group-hover:text-accent transition-colors duration-200">
                {area.label}
              </h3>
              <p className="text-body-sm text-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
