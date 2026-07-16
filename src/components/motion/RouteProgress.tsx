"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

export function RouteProgress() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        key={pathname}
        className="h-full bg-gold"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{
          duration: 0.65,
          times: [0, 0.75, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}
