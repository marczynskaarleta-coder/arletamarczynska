"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projekty" className="px-6 md:px-10 max-w-layout mx-auto py-section">
      <Divider className="mb-16" />

      <div className="flex items-end justify-between mb-14">
        <FadeIn>
          <SectionLabel>Projekty</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Link
            href="/projekty"
            className="text-body-sm text-muted hover:text-ink transition-colors duration-200 hidden sm:block"
          >
            Wszystkie projekty &rarr;
          </Link>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.07}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 sm:hidden">
        <Link
          href="/projekty"
          className="text-body-sm text-muted hover:text-ink transition-colors duration-200"
        >
          Wszystkie projekty &rarr;
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-canvas border border-subtle hover:border-ink/20 rounded-sm p-7 h-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(13,13,13,0.07)]"
    >
      {/* Tags row */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="font-mono text-label text-muted bg-subtle px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
        <span className="font-mono text-label text-muted/50 ml-auto self-center">
          {project.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-display-md text-ink mb-3 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-body-sm text-muted leading-relaxed flex-1 mb-6">
        {project.shortDescription}
      </p>

      {/* Footer: status + link */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-subtle/70">
        <StatusBadge status={project.status} />

        {project.externalUrl ? (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-label text-muted hover:text-ink transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            Odwiedź
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : (
          <span className="font-mono text-label text-muted/40">Wkrótce</span>
        )}
      </div>
    </motion.article>
  );
}
