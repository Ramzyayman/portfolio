import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white shadow-sm border border-neutral-800 dark:border-neutral-200",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700",
    outline:
      "bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700",
    ghost:
      "bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-950 dark:hover:text-white border border-transparent",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-4 py-2 rounded-lg gap-2",
    lg: "text-base px-5 py-2.5 rounded-lg gap-2.5",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props as ButtonAsLink;
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
          {...linkProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...(props as ButtonAsButton)}
    >
      {content}
    </button>
  );
}
