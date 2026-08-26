import { cn } from "@/lib/utils";

interface TechnologyTagsProps {
  technologies: string[];
  limit?: number;
  size?: "sm" | "md";
  className?: string;
}

export function TechnologyTags({
  technologies,
  limit,
  size = "md",
  className,
}: TechnologyTagsProps) {
  const visibleTech = limit ? technologies.slice(0, limit) : technologies;
  const remaining = limit && technologies.length > limit ? technologies.length - limit : 0;

  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-0.5",
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {visibleTech.map((tech) => (
        <span
          key={tech}
          className={cn(
            "font-mono rounded bg-neutral-100 dark:bg-neutral-850 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700",
            sizeClasses[size]
          )}
        >
          {tech}
        </span>
      ))}
      {remaining > 0 && (
        <span
          className={cn(
            "font-mono rounded bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800",
            sizeClasses[size]
          )}
        >
          +{remaining}
        </span>
      )}
    </div>
  );
}
