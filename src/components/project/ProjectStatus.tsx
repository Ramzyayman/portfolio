import { ProjectStatus as StatusType } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectStatusProps {
  status: StatusType;
  size?: "sm" | "md";
  className?: string;
}

export function ProjectStatus({ status, size = "md", className }: ProjectStatusProps) {
  const config = {
    completed: {
      label: "Completed",
      dotClass: "bg-emerald-500",
      pingClass: "bg-emerald-400",
      containerClass:
        "bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
      ping: false,
    },
    "in-progress": {
      label: "In Progress",
      dotClass: "bg-amber-500",
      pingClass: "bg-amber-400",
      containerClass:
        "bg-amber-50/80 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60",
      ping: true,
    },
    archived: {
      label: "Archived",
      dotClass: "bg-neutral-400",
      pingClass: "bg-neutral-300",
      containerClass:
        "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800",
      ping: false,
    },
  };

  const current = config[status] || config.completed;
  const sizeClasses =
    size === "sm"
      ? "text-[11px] px-2 py-0.5 gap-1.5"
      : "text-xs px-2.5 py-1 gap-1.5";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-mono font-medium border select-none",
        current.containerClass,
        sizeClasses,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {current.ping && (
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              current.pingClass
            )}
          />
        )}
        <span
          className={cn("relative inline-flex rounded-full h-2 w-2", current.dotClass)}
        />
      </span>
      <span>{current.label}</span>
    </span>
  );
}
