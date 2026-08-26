import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "mono";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700/60",
    secondary:
      "bg-neutral-50 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800",
    outline:
      "bg-transparent text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700",
    success:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
    warning:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60",
    mono: "bg-neutral-100/80 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-300 font-mono border-neutral-200 dark:border-neutral-800",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 rounded",
    md: "text-xs px-2.5 py-1 rounded-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium border transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
