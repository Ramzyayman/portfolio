"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { socialsData } from "@/data/socials";
import { Button } from "@/components/ui/Button";
import { Mail, Copy, Check, Send, Sparkles } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-20">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-8 sm:p-12 relative overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs font-mono text-emerald-700 dark:text-emerald-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Opportunities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Let&apos;s build something practical together.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            I am currently open for freelance projects, technical collaborations, and software engineering opportunities. Whether you need backend systems, API integration, or full-stack web applications, feel free to reach out.
          </p>

          {/* Email Container & Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              href={`mailto:${profileData.email}`}
              variant="primary"
              size="lg"
              icon={<Send className="w-4 h-4" />}
            >
              Send an Email
            </Button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/80 text-sm font-mono text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 active:scale-[0.98]"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    Copied to Clipboard!
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-500" />
                  <span>{profileData.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
              Direct Channels
            </span>
            <div className="flex flex-wrap gap-4">
              {socialsData.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 opacity-60" />
                  <span>{social.label}</span>
                  {social.isPlaceholder && (
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                      (Configurable)
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
