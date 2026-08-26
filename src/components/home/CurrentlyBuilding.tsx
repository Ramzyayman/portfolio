import { getInProgressProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Construction } from "lucide-react";

export function CurrentlyBuilding() {
  const inProgressProjects = getInProgressProjects();

  return (
    <section id="building" className="py-16 sm:py-20 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
          <Construction className="w-4 h-4" />
          <span>Active Development</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Currently Building
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
              Works-in-progress, backend experiments, and prototypes under active development. Exploring new architectural patterns and framework capabilities.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
            [{inProgressProjects.length} Active Project{inProgressProjects.length === 1 ? "" : "s"}]
          </span>
        </div>
      </div>

      {inProgressProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgressProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured={false} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-8 text-center bg-neutral-50/50 dark:bg-neutral-900/30">
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
            No active experiments listed at the moment. All focus is on main projects.
          </p>
        </div>
      )}
    </section>
  );
}
