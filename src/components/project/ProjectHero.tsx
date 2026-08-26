import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import { ProjectStatus } from "./ProjectStatus";
import { Button } from "@/components/ui/Button";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="pt-8 pb-10 border-b border-neutral-200 dark:border-neutral-800">
      {/* Breadcrumb / Back Link */}
      <nav className="mb-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5" />
          <span>Back to Selected Work</span>
        </Link>
      </nav>

      {/* Status & Year Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <ProjectStatus status={project.status} />
        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">•</span>
        <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
          {project.year}
        </span>
        {project.role && (
          <>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">•</span>
            <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
              {project.role}
            </span>
          </>
        )}
      </div>

      {/* Project Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
        {project.title}
      </h1>

      {/* Short Summary */}
      <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
        {project.shortDescription}
      </p>

      {/* Action Buttons (Only render if URLs exist) */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="primary"
              size="sm"
              icon={<Github className="w-4 h-4" />}
              iconPosition="left"
              external
            >
              Source Code on GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="outline"
              size="sm"
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
              external
            >
              Live Demo
            </Button>
          )}
        </div>
      )}
    </header>
  );
}
