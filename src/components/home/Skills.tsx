import { skillsData } from "@/data/skills";
import { Wrench } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
          <Wrench className="w-4 h-4" />
          <span>Technical Capabilities</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
              A foundational set of languages, backend frameworks, and engineering tools applied across academic coursework and practical projects.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
          >
            {/* Header */}
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
                <span>{category.category}</span>
                <span className="text-xs font-mono text-neutral-400 font-normal">
                  [{category.skills.length}]
                </span>
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {category.description}
              </p>
            </div>

            {/* Skills List */}
            <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200/50 dark:border-neutral-800/50 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        skill.highlight ? "bg-emerald-500" : "bg-neutral-400"
                      }`}
                    />
                    <span className="font-mono font-medium text-neutral-800 dark:text-neutral-200">
                      {skill.name}
                    </span>
                  </div>
                  {skill.note && (
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate max-w-[180px] sm:max-w-[220px]">
                      {skill.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
