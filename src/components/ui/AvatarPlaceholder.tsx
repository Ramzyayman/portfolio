import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarPlaceholderProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

/**
 * Avatar / Profile Photo Component
 * 
 * NOTE FOR RAMZY:
 * To use your real photo:
 * 1. Place your photo image file (e.g. `profile.jpg` or `profile.png`) into `/public/images/`
 * 2. Update `avatarUrl` in `src/data/profile.ts` to `"/images/profile.jpg"`
 * 
 * The component will automatically render your image with optimized Next.js Image handling!
 */
export function AvatarPlaceholder({
  src = "/images/avatar-placeholder.svg",
  alt = "Ramzy Ayman",
  size = "lg",
  className,
}: AvatarPlaceholderProps) {
  const isCustomPhoto = src !== "/images/avatar-placeholder.svg" && !src.includes("placeholder");

  const sizeClasses = {
    sm: "w-12 h-12 text-xs",
    md: "w-16 h-16 text-sm",
    lg: "w-24 h-24 sm:w-28 sm:h-28 text-base",
    xl: "w-32 h-32 sm:w-36 sm:h-36 text-lg",
  };

  const pixelDimensions = {
    sm: 48,
    md: 64,
    lg: 112,
    xl: 144,
  };

  return (
    <div className={cn("relative inline-block group", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm transition-all duration-300 group-hover:border-neutral-400 dark:group-hover:border-neutral-700",
          sizeClasses[size]
        )}
      >
        {isCustomPhoto ? (
          <Image
            src={src}
            alt={alt}
            width={pixelDimensions[size]}
            height={pixelDimensions[size]}
            className="w-full h-full object-cover"
            priority
          />
        ) : (
          /* Technical SVG Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center p-2 relative select-none">
            {/* Subtle background grid pattern */}
            <svg
              className="absolute inset-0 w-full h-full text-neutral-300/40 dark:text-neutral-700/40"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="avatar-grid" width="12" height="12" patternUnits="userSpaceOnUse">
                  <path d="M 12 0 L 0 0 0 12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#avatar-grid)" />
            </svg>

            {/* Corner alignment marks */}
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-neutral-400 dark:border-neutral-600" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-neutral-400 dark:border-neutral-600" />
            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-neutral-400 dark:border-neutral-600" />
            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-neutral-400 dark:border-neutral-600" />

            {/* Monogram */}
            <div className="relative z-10 font-mono font-bold tracking-tight text-neutral-800 dark:text-neutral-200">
              RA
            </div>

            {/* Engineering tag */}
            <span className="relative z-10 text-[9px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-0.5">
              DEV.01
            </span>
          </div>
        )}
      </div>

      {/* Online/Active status indicator */}
      <div
        className="absolute -bottom-1 -right-1 flex items-center justify-center bg-white dark:bg-neutral-950 p-0.5 rounded-full border border-neutral-200 dark:border-neutral-800"
        title="Open for opportunities"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
      </div>
    </div>
  );
}
