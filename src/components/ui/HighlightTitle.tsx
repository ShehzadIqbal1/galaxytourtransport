import type { ReactNode } from "react";

export interface HighlightTitleProps {
  before: string;
  highlight: string;
  after?: string;
  as?: "h1" | "h2";
  className?: string;
}

export function HighlightTitle({
  before,
  highlight,
  after = "",
  as: Tag = "h1",
  className = "",
}: HighlightTitleProps) {
  return (
    <Tag className={`font-display tracking-tight ${className}`}>
      {before}{" "}
      <span className="text-gold">{highlight}</span>
      {after ? ` ${after}` : null}
    </Tag>
  );
}

export interface SectionIntroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionIntroProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const muted = tone === "light" ? "text-ink-muted" : "text-ivory/70";
  const titleColor = tone === "light" ? "text-ink" : "text-ivory";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        {eyebrow}
      </p>
      <div className={`mt-4 text-3xl md:text-4xl ${titleColor}`}>{title}</div>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${muted}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
