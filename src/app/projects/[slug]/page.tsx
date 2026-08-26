import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectMetadata } from "@/components/project/ProjectMetadata";
import { ProjectDetails } from "@/components/project/ProjectDetails";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/** Pre-render all project routes at build time for instant loading and 100% static hosting */
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/** Dynamic SEO metadata based on project data */
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Technical Project Overview`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Ramzy Ayman`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Project Header */}
      <ProjectHero project={project} />

      {/* Main Grid: Details + Sidebar Specification */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
        {/* Left / Deep Dive Content */}
        <div className="lg:col-span-8">
          <ProjectDetails project={project} />
          <ProjectGallery images={project.galleryImages} projectTitle={project.title} />
        </div>

        {/* Right / Technical Specification Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <ProjectMetadata project={project} />
          </div>
        </div>
      </div>

      {/* Project Pagination Navigation */}
      <nav
        aria-label="Project navigation"
        className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase">Previous Project</span>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/#work"
          className="text-xs font-mono px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
        >
          All Projects
        </Link>

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase">Next Project</span>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
