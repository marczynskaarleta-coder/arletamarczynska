import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

const config: Record<
  ProjectStatus,
  { label: string; dot: string; chip: string }
> = {
  live: {
    label: "Live",
    dot: "bg-[#3A7D55]",
    chip: "bg-[#E6F2EC] text-[#2D5A3D]",
  },
  "in-progress": {
    label: "W trakcie",
    dot: "bg-[#C8963E]",
    chip: "bg-[#F5EDDC] text-[#7A4A1E]",
  },
  concept: {
    label: "Koncepcja",
    dot: "bg-[#A8A49C]",
    chip: "bg-subtle text-muted",
  },
};

type Props = {
  status: ProjectStatus;
  className?: string;
};

export function StatusBadge({ status, className }: Props) {
  const { label, dot, chip } = config[status];
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
