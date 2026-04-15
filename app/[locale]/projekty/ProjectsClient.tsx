"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { LocalizedProject } from "@/data/projects";
import type { ProjectStatus, ProjectCategory } from "@/data/projects";

type FilterDict = {
  filterAll: string;
  filterStatus: string;
  filterCategory: string;
  whyItMattersLabel: string;
  visitLabel: string;
  soonLabel: string;
  badges: { live: string; inProgress: string; concept: string };
};

type Props = {
  projects: LocalizedProject[];
  dict: FilterDict;
};

const STATUS_ORDER: ProjectStatus[] = ["live", "in-progress", "concept"];

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "font-mono text-label px-3 py-1.5 rounded-sm border transition-colors duration-150",
        active
          ? "bg-ink text-canvas border-ink"
          : "bg-transparent text-muted border-subtle hover:border-ink/40 hover:text-ink"
      )}
    >
      {children}
    </button>
  );
}

export function ProjectsClient({ projects, dict }: Props) {
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory | "all">("all");

  const categories = Array.from(
    new Set(projects.map((p) => p.category))
  ) as ProjectCategory[];

  const filtered = projects.filter((p) => {
    const statusOk = statusFilter === "all" || p.status === statusFilter;
    const categoryOk = categoryFilter === "all" || p.category === categoryFilter;
    return statusOk && categoryOk;
  });

  function badgeLabel(status: ProjectStatus) {
    if (status === "live") return dict.badges.live;
    if (status === "in-progress") return dict.badges.inProgress;
    return dict.badges.concept;
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-12">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-mono text-label text-muted/50 uppercase tracking-wider mr-1">
            {dict.filterStatus}
          </span>
          <FilterButton
            active={statusFilter === "all"}
            onClick={() => setStatusFilter("all")}
          >
            {dict.filterAll}
          </FilterButton>
          {STATUS_ORDER.filter((s) => projects.some((p) => p.status === s)).map((s) => (
            <FilterButton
              key={s}
              active={statusFilter === s}
              onClick={() => setStatusFilter(s)}
            >
              {badgeLabel(s)}
            </FilterButton>
          ))}
        </div>

        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-mono text-label text-muted/50 uppercase tracking-wider mr-1">
              {dict.filterCategory}
            </span>
            <FilterButton
              active={categoryFilter === "all"}
              onClick={() => setCategoryFilter("all")}
            >
              {dict.filterAll}
            </FilterButton>
            {categories.map((c) => (
              <FilterButton
                key={c}
                active={categoryFilter === c}
                onClick={() => setCategoryFilter(c)}
              >
                {c}
              </FilterButton>
            ))}
          </div>
        )}
      </div>

      {/* Project list */}
      <div className="flex flex-col">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="group border-b border-subtle py-10 grid md:grid-cols-[auto_1fr_auto] md:items-start gap-6 md:gap-12"
            >
              <span className="font-mono text-label text-muted/50 pt-1 w-12">
                {project.year}
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <StatusBadge
                    status={project.status}
                    label={badgeLabel(project.status)}
                  />
                  <span className="font-mono text-label bg-subtle text-muted px-2 py-0.5 rounded-sm">
                    {project.category}
                  </span>
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-label text-muted/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-serif text-display-md text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h2>

                <p className="text-body-sm text-muted max-w-prose mb-3">
                  {project.shortDescription}
                </p>

                <p className="text-body-sm text-muted/60 max-w-prose mb-5">
                  {project.longDescription}
                </p>

                {project.whyItMatters && (
                  <div className="flex gap-3 mt-4 pt-4 border-t border-subtle max-w-prose">
                    <span className="font-mono text-label text-accent shrink-0 pt-0.5 uppercase tracking-wider">
                      {dict.whyItMattersLabel}
                    </span>
                    <p className="text-body-sm text-muted/80 italic">
                      {project.whyItMatters}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-1 shrink-0">
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm font-medium text-muted hover:text-ink border border-subtle hover:border-ink/30 px-4 py-2 rounded-sm transition-colors duration-200"
                  >
                    {dict.visitLabel}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                    >
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
                  <span className="font-mono text-label text-muted/40">
                    {dict.soonLabel}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-body-sm text-muted/60 py-12 text-center">
            {dict.filterAll} — brak wyników
          </p>
        )}
      </div>
    </div>
  );
}
