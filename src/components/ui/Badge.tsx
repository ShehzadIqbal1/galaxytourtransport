import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  tone?: "gold" | "sand" | "muted" | "solid";
  className?: string;
}

const toneClasses = {
  gold: "bg-gold/20 text-sand border-gold/40",
  sand: "bg-sand/15 text-sand border-sand/30",
  muted: "bg-charcoal2 text-ivory border-ivory/15",
  solid: "bg-gold text-onyx border-gold",
} as const;

export function Badge({
  children,
  tone = "gold",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
