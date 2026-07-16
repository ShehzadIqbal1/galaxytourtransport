import type { ReactNode } from "react";

export interface ChipProps {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

export function Chip({
  children,
  className = "",
  tone = "dark",
}: ChipProps) {
  const textClass = tone === "light" ? "text-ink" : "text-ivory/90";
  const iconClass =
    tone === "light"
      ? "bg-gold/20 text-gold"
      : "bg-gold/20 text-gold-bright";

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm leading-snug ${textClass} ${className}`}
    >
      <span
        className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
          <path
            d="M3.5 8.5 6.5 11.5 12.5 4.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </span>
  );
}
