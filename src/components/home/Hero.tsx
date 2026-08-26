import { profileData } from "@/data/profile";
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowDown, Mail, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-8 pb-16 sm:pt-16 sm:pb-24 border-b border-neutral-200/70 dark:border-neutral-800/70">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
        {/* Left Column: Introduction & CTAs */}
        <div className="flex-1 space-y-6">
          {/* Location & Status Meta */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>{profileData.location}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs font-mono text-emerald-700 dark:text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>CS Graduating {profileData.education.expectedGraduation}</span>
            </div>
          </div>

          {/* Name & Role Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {profileData.name}
            </h1>
            <p className="text-lg sm:text-xl font-mono text-neutral-600 dark:text-neutral-400 font-medium">
              Software Engineer & Backend Systems Enthusiast
            </p>
          </div>

          {/* Core Grounded Narrative */}
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl">
            I build practical software with a strong focus on backend architecture, clean APIs, and solid fundamentals. Comfortable diving into unfamiliar frameworks and tools to solve problems efficiently.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href="#work"
              variant="primary"
              size="md"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              View Selected Work
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="md"
              icon={<Mail className="w-4 h-4" />}
            >
              Get in Touch
            </Button>
          </div>

          {/* Focus Areas Ticker */}
          <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="text-neutral-400 dark:text-neutral-600 flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5" />
              Core Interests:
            </span>
            <span>API Architecture</span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span>.NET & Python</span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span>MEAN Stack</span>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span>Continuous Learning</span>
          </div>
        </div>

        {/* Right Column: Profile Photo Placeholder */}
        <div className="flex flex-col items-start lg:items-end justify-center shrink-0">
          <AvatarPlaceholder
            src={profileData.avatarUrl}
            alt={profileData.name}
            size="xl"
          />
        </div>
      </div>
    </section>
  );
}
