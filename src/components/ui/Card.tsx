import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  elevated?: boolean;
  tone?: "dark" | "light";
}

export function Card({
  children,
  elevated = false,
  tone = "dark",
  className = "",
  ...props
}: CardProps) {
  const toneClasses =
    tone === "light"
      ? "border-sand/80 bg-paper text-ink shadow-soft"
      : "border-ivory/10 bg-charcoal text-ivory";

  return (
    <div
      className={`card-motion rounded-md border ${toneClasses} ${
        elevated ? "shadow-card" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
