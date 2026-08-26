import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  featuredVariant?: boolean;
  className?: string;
}

export function ProjectGrid({
  projects,
  featuredVariant = false,
  className,
}: ProjectGridProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-8 text-center">
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          No projects listed in this category yet.
        </p>
      </div>
    );
  }

  // If featuredVariant is true and there is 1 or 2 projects, render wide cards
  if (featuredVariant) {
    return (
      <div className={cn("flex flex-col gap-6", className)}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} featured={true} />
        ))}
      </div>
    );
  }

  // Standard responsive multi-column grid
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6",
        projects.length === 1 && "md:grid-cols-1 max-w-2xl",
        className
      )}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} featured={false} />
      ))}
    </div>
  );
}
