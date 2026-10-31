import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline" | "outline-primary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  id?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  id,
  target,
  rel,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variantClasses = {
    primary: "btn btn-primary",
    accent: "btn btn-accent",
    outline: "btn btn-outline",
    "outline-primary": "btn btn-outline-primary",
    ghost: "btn bg-transparent text-primary hover:bg-primary/10",
  };

  const classes = cn(
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-60 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        id={id}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
}
