import { Project } from "@/types/project";
import { CheckCircle2, AlertCircle, Lightbulb, Cpu } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const hasTechnicalDetails = project.technicalDetails && project.technicalDetails.length > 0;
  const hasChallenges = project.challenges && project.challenges.length > 0;
  const hasSolutions = project.solutions && project.solutions.length > 0;
  const hasLessons = project.lessonsLearned && project.lessonsLearned.length > 0;

  return (
    <div className="space-y-12">
      {/* Long Description / Overview */}
      {project.longDescription && (
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <span>Project Overview</span>
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {project.longDescription}
          </p>
        </section>
      )}

      {/* Technical Details & Implementation */}
      {hasTechnicalDetails && (
        <section className="space-y-4 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>Architecture & Technical Highlights</span>
          </h2>
          <ul className="space-y-3">
            {project.technicalDetails!.map((detail, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed rounded-lg p-3 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/80"
              >
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold shrink-0 mt-0.5">
                  [{String(idx + 1).padStart(2, "0")}]
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Challenges & Solutions */}
      {(hasChallenges || hasSolutions) && (
        <section className="space-y-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Engineering Challenges & Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Challenges */}
            {hasChallenges && (
              <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20 p-5 space-y-3">
                <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-2 font-mono">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  Challenges Encountered
                </h3>
                <ul className="space-y-2.5">
                  {project.challenges!.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solutions */}
            {hasSolutions && (
              <div className="rounded-xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-5 space-y-3">
                <h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Implemented Solutions
                </h3>
                <ul className="space-y-2.5">
                  {project.solutions!.map((solution, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Lessons Learned */}
      {hasLessons && (
        <section className="space-y-4 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-2.5">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>Key Takeaways & Lessons Learned</span>
          </h2>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 p-5 sm:p-6">
            <ul className="space-y-3">
              {project.lessonsLearned!.map((lesson, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
