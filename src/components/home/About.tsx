import { profileData } from "@/data/profile";
import { User, GraduationCap, Cpu, Layers, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-neutral-200/70 dark:border-neutral-800/70 scroll-mt-20">
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
          <User className="w-4 h-4" />
          <span>Background</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Grounded Bio Narrative */}
        <div className="lg:col-span-7 space-y-5 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
          {profileData.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Academic & Career Philosophy Highlight Card */}
          <div className="mt-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-900 dark:text-neutral-100 font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Engineering Mindset</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">
              &quot;{profileData.learningPhilosophy}&quot;
            </p>
          </div>
        </div>

        {/* Right: Key Facts & Structural Details */}
        <div className="lg:col-span-5 space-y-4">
          {/* Education Card */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Background</span>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                {profileData.education.degree} in {profileData.education.field}
              </h3>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                Expected Graduation: {profileData.education.expectedGraduation}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                {profileData.education.description}
              </p>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
              <Cpu className="w-4 h-4" />
              <span>Technical Focus</span>
            </div>
            <ul className="space-y-2">
              {profileData.focusAreas.map((area, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Relocation */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 space-y-2">
            <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
              <Layers className="w-4 h-4" />
              <span>Location & Availability</span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Based in <strong>{profileData.location}</strong>. Available for remote freelance assignments, software projects, and post-graduation engineering roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
