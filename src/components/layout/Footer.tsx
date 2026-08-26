import { socialsData } from "@/data/socials";
import { profileData } from "@/data/profile";
import { ArrowUp, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/80">
          {/* Bio & Details */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                {profileData.name}
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                {profileData.role}
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-neutral-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>{profileData.location}</span>
              <span className="text-neutral-300 dark:text-neutral-700">|</span>
              <span>CS Graduating {profileData.education.expectedGraduation}</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-4">
            {socialsData.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          
          <a
            href="#"
            className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
