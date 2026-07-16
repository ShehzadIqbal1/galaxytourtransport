"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export interface FloatProps {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px */
  distance?: number;
  duration?: number;
  delay?: number;
}

/** Gentle continuous float — FrontDesk-style floating cards. */
export function Float({
  children,
  className = "",
  distance = 10,
  duration = 4.5,
  delay = 0,
}: FloatProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
