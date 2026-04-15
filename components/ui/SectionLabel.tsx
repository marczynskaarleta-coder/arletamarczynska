import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-label uppercase tracking-widest text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
