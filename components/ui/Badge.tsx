import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "sage" | "lavender" | "coral" | "powder-blue" | "seafoam" | "neutral" | "warning";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "sage",
  size = "md",
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium uppercase tracking-wider rounded-full";

  const variantStyles = {
    sage: "bg-sage/15 text-sage-dark border border-sage/25",
    lavender: "bg-lavender text-ink border border-lavender-dark/40",
    coral: "bg-soft-coral text-ink border border-soft-coral-dark/40",
    "powder-blue": "bg-powder-blue text-ink border border-powder-blue-dark/40",
    seafoam: "bg-seafoam text-ink border border-seafoam-dark/40",
    neutral: "bg-ivory-dark text-ink-muted border border-ink/10",
    warning: "bg-amber-100 text-amber-900 border border-amber-300",
  };

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span
      className={twMerge(clsx(baseStyles, variantStyles[variant], sizeStyles[size], className))}
      {...props}
    >
      {children}
    </span>
  );
};
