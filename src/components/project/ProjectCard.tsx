import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import { ProjectStatus } from "./ProjectStatus";
import { TechnologyTags } from "./TechnologyTags";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 backdrop-blur-sm overflow-hidden transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-md dark:hover:shadow-neutral-950/40",
        featured ? "md:grid md:grid-cols-12 md:gap-6" : "",
        className
      )}
    >
      {/* Project Visual / Cover */}
      <div
        className={cn(
          "relative overflow-hidden bg-neutral-100 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800",
          featured
            ? "md:col-span-6 md:border-b-0 md:border-r h-56 sm:h-64 md:h-full min-h-[220px]"
            : "h-48 sm:h-52"
        )}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="block w-full h-full relative focus-visible:outline-none"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={project.coverImage}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
        </Link>
      </div>

      {/* Project Content */}
      <div
        className={cn(
          "flex flex-col justify-between p-5 sm:p-6",
          featured ? "md:col-span-6 md:py-6 md:pr-6 md:pl-2" : ""
        )}
      >
        <div>
          {/* Status & Metadata Bar */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <ProjectStatus status={project.status} size="sm" />
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              {project.year}
            </span>
          </div>

          {/* Title with Route Link */}
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 shrink-0 text-emerald-600 dark:text-emerald-400" />
            </Link>
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer: Tech Tags & External Links */}
        <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <TechnologyTags technologies={project.technologies} limit={featured ? 5 : 3} size="sm" />

          {/* External action buttons if available */}
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label={`View ${project.title} on GitHub`}
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label={`Open live demo for ${project.title}`}
                title="Open Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
