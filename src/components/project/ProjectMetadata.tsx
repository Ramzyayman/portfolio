import { Project } from "@/types/project";
import { ProjectStatus } from "./ProjectStatus";
import { TechnologyTags } from "./TechnologyTags";
import { Github, ExternalLink, Calendar, UserCheck } from "lucide-react";

interface ProjectMetadataProps {
  project: Project;
}

export function ProjectMetadata({ project }: ProjectMetadataProps) {
  return (
    <aside className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 p-5 sm:p-6 space-y-5">
      <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold">
        Project Specification
      </h2>

      {/* Status */}
      <div className="space-y-1.5">
        <span className="text-xs text-neutral-500 dark:text-neutral-400 block">Status</span>
        <ProjectStatus status={project.status} size="sm" />
      </div>

      {/* Role (if present) */}
      {project.role && (
        <div className="space-y-1.5 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/80">
          <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5" />
            Role
          </span>
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            {project.role}
          </p>
        </div>
      )}

      {/* Timeline */}
      <div className="space-y-1.5 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/80">
        <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          Timeline
        </span>
        <p className="text-sm font-mono text-neutral-800 dark:text-neutral-200">
          {project.year}
        </p>
      </div>

      {/* Technology Stack */}
      <div className="space-y-2 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/80">
        <span className="text-xs text-neutral-500 dark:text-neutral-400 block">
          Technology Stack
        </span>
        <TechnologyTags technologies={project.technologies} size="sm" />
      </div>

      {/* Links (if present) */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="space-y-2 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/80">
          <span className="text-xs text-neutral-500 dark:text-neutral-400 block">
            Repository & Links
          </span>
          <div className="flex flex-col gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">GitHub Repository</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Live Deployment</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
              </a>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
