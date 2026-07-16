"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

export interface CountUpProps {
  value: string;
  className?: string;
  durationMs?: number;
}

function parseValue(value: string): {
  kind: "number" | "text";
  target: number;
  prefix: string;
  suffix: string;
} {
  const trimmed = value.trim();
  const match = trimmed.match(/^(<)?(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { kind: "text", target: 0, prefix: "", suffix: "" };
  }

  const [, lessThan = "", digits, rest = ""] = match;
  return {
    kind: "number",
    target: Number(digits),
    prefix: lessThan,
    suffix: rest,
  };
}

export function CountUp({
  value,
  className = "",
  durationMs = 1200,
}: CountUpProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const parsed = useMemo(() => parseValue(value), [value]);
  const shouldAnimate = parsed.kind === "number" && !reduceMotion;
  const [animated, setAnimated] = useState(
    `${parsed.prefix}0${parsed.suffix}`,
  );

  useEffect(() => {
    if (!shouldAnimate || !inView) return;

    const { target, prefix, suffix } = parsed;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setAnimated(`${prefix}${current}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setAnimated(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [durationMs, inView, parsed, shouldAnimate, value]);

  return (
    <span ref={ref} className={className}>
      {shouldAnimate ? animated : value}
    </span>
  );
}
