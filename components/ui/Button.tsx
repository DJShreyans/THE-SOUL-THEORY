import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "coral" | "lavender";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none";

    const variantStyles = {
      primary:
        "bg-sage text-ivory hover:bg-sage-dark shadow-subtle hover:shadow-soft active:bg-sage-deep",
      secondary:
        "bg-ivory text-ink border border-sage/20 hover:border-sage/40 hover:bg-ivory-dark",
      outline:
        "border border-sage text-sage bg-transparent hover:bg-sage hover:text-ivory",
      ghost:
        "text-ink hover:bg-sage/10 bg-transparent",
      coral:
        "bg-soft-coral text-ink hover:bg-soft-coral-dark shadow-subtle",
      lavender:
        "bg-lavender text-ink hover:bg-lavender-dark shadow-subtle",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 sm:py-1.5 rounded-full gap-1.5 min-h-[40px] sm:min-h-[36px]",
      md: "text-sm px-5 py-2.5 rounded-full gap-2 min-h-[44px]", // thumb-friendly 44px
      lg: "text-base px-7 py-3.5 rounded-full gap-2.5 min-h-[52px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(
          clsx(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className
          )
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
