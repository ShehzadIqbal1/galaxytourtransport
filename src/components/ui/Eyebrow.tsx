import type { ReactNode } from "react";

export interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.14em] text-gold ${className}`}
    >
      {children}
    </p>
  );
}
