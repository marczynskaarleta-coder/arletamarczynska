import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, { dot: string; chip: string }> = {
  live:           { dot: "bg-[#7b8d5b]", chip: "bg-[#eaf0e2] text-[#4a5e32] dark:bg-[#1e2a14] dark:text-[#a3b87c]" },
  "in-progress":  { dot: "bg-[#b36f3c]", chip: "bg-[#f5ede3] text-[#7a3a1a] dark:bg-[#2e1c0c] dark:text-[#d4956a]" },
  concept:        { dot: "bg-muted/40",   chip: "bg-subtle text-muted" },
  "coming-soon":  { dot: "bg-muted/30",   chip: "bg-subtle/60 text-muted/60 border border-dashed border-subtle" },
};

type Props = { status: ProjectStatus; label: string; className?: string };

export function StatusBadge({ status, label, className }: Props) {
  const { dot, chip } = styles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-label px-2.5 py-1 rounded-sm",
        chip,
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dot)} />
      {label}
    </span>
  );
}
