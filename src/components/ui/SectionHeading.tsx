import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
  tone?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  className = "",
  children,
  tone = "dark",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";
  const titleClass = tone === "light" ? "text-ink" : "text-ivory";
  const descClass =
    tone === "light" ? "text-ink-muted" : "text-ivory/75";

  return (
    <Reveal
      className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={titleId} className={`text-3xl md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed md:text-lg ${descClass}`}>
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
