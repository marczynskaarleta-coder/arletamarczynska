import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-16" />

      {/* Positioning statement */}
      <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20 mb-20">
        <FadeIn>
          <SectionLabel>Kim jestem</SectionLabel>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p className="text-display-md font-serif text-ink text-balance leading-snug mb-6">
              Łączę myślenie systemowe z egzekucją operacyjną. Działam tam, gdzie
              procesy muszą być niezawodne, a błędy kosztują realnie.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body-lg text-muted max-w-prose">{profile.bio}</p>
          </FadeIn>
        </div>
      </div>

      {/* Focus areas grid */}
      <FadeIn delay={0.05}>
        <p className="font-mono text-label text-muted uppercase tracking-widest mb-8">
          Obszary działania
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle">
        {profile.focusAreas.map((area, i) => (
          <FadeIn key={area.id} delay={i * 0.07}>
            <div className="bg-canvas p-8 h-full flex flex-col gap-3 group hover:bg-[#F2EFE9] transition-colors duration-300">
              <span className="font-mono text-label text-muted/60 uppercase tracking-widest">
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
