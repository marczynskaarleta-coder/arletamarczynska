import { FadeIn } from "@/components/ui/FadeIn";
import { Divider } from "@/components/ui/Divider";
import type { Dict } from "@/dictionaries/pl";

type Props = { dict: Dict["about"] };

export function About({ dict }: Props) {
  return (
    <section id="areas" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-8" />

      <FadeIn className="mb-6">
        <p className="font-mono text-label text-muted uppercase tracking-widest">
          {dict.areasLabel}
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-subtle">
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
