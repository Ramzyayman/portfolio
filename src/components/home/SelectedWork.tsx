import { getFeaturedProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { FolderGit2 } from "lucide-react";

export function SelectedWork() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="work" className="py-16 sm:py-20 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
          <FolderGit2 className="w-4 h-4" />
          <span>Selected Work</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
              Engineered web applications and systems. Each project is built to explore architectural patterns and solve real practical requirements.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
            [{featuredProjects.length} Highlighted]
          </span>
        </div>
      </div>

      <ProjectGrid projects={featuredProjects} featuredVariant={true} />
    </section>
  );
}
