/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  cloneElement,
} from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      asChild,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
      secondary:
        "bg-secondary-200 text-secondary-900 hover:bg-secondary-300 focus:ring-secondary-500",
      outline:
        "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-primary-500",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const classes = twMerge(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && children) {
      const child = children as React.ReactElement;
      return cloneElement(child, {
        // @ts-ignore
        className: twMerge(classes, child.props.className),
        ref,
        ...props,
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
