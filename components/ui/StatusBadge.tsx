import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, { dot: string; chip: string }> = {
  live:          { dot: "bg-[#3A7D55]", chip: "bg-[#E6F2EC] text-[#2D5A3D] dark:bg-[#1A3326] dark:text-[#7BC49A]" },
  "in-progress": { dot: "bg-accent",    chip: "bg-[#F5EDDC] text-[#7A4A1E] dark:bg-[#2E2010] dark:text-[#D4A855]" },
  concept:       { dot: "bg-muted/50",  chip: "bg-subtle text-muted" },
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
