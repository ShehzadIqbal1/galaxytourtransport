"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProcessStep } from "@/lib/types";

/** Hand-drawn wave between step centers (viewBox 0–400, midline y=20) */
const PROCESS_WAVE_PATH =
  "M0 20 C40 4 70 36 100 16 C125 4 145 36 170 22 C185 12 195 28 200 20 C210 8 235 36 265 16 C290 2 320 38 350 22 C370 12 385 28 400 20";

export interface ProcessStepsProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
}: ProcessStepsProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = steps[active];

  useEffect(() => {
    if (reduceMotion || steps.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % steps.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [reduceMotion, steps.length]);

  function goTo(index: number) {
    setActive((index + steps.length) % steps.length);
  }

  if (!current) return null;

  return (
    <section className="section-padding bg-onyx" aria-labelledby="process-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="process-heading"
          description={description}
        />

        <Reveal>
          <nav
            className="relative mx-auto mb-12 max-w-xl"
            aria-label="Booking steps progress"
          >
            {/*
              Organic wave path (hand-drawn feel) — track + gold progress.
              Circles sit on the midline; the path weaves between them.
            */}
            <svg
              className="pointer-events-none absolute left-5 right-5 top-0 h-10"
              viewBox="0 0 400 40"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d={PROCESS_WAVE_PATH}
                stroke="rgba(245,240,232,0.2)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={PROCESS_WAVE_PATH}
                stroke="var(--color-gold)"
                strokeWidth="1.85"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                strokeDasharray={1}
                strokeDashoffset={
                  steps.length > 1 ? 1 - active / (steps.length - 1) : 0
                }
                className="transition-[stroke-dashoffset] duration-500 ease-out"
              />
            </svg>
            <ol className="relative flex items-start justify-between">
              {steps.map((step, index) => {
                const isActive = index === active;
                const isDone = index < active;
                return (
                  <li key={step.id} className="flex flex-col items-center gap-3">
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`Step ${step.step}: ${step.title}`}
                      aria-current={isActive ? "step" : undefined}
                      className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition-default ${
                        isActive
                          ? "border-gold bg-gold text-onyx shadow-soft"
                          : isDone
                            ? "border-gold/60 bg-charcoal text-gold"
                            : "border-ivory/25 bg-onyx text-ivory/55 hover:border-gold/40 hover:text-ivory"
                      }`}
                    >
                      {String(step.step).padStart(2, "0")}
                    </button>
                    <span
                      className={`max-w-20 text-center text-[10px] font-medium leading-snug sm:max-w-24 sm:text-[11px] ${
                        isActive ? "text-ivory" : "text-ivory/45"
                      }`}
                    >
                      {step.title}
                    </span>
                  </li>
                );
              })}
            </ol>
          </nav>
        </Reveal>

        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -12, filter: "blur(4px)" }
                }
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg border border-gold/20 bg-gradient-to-br from-charcoal to-charcoal2 p-5 shadow-card md:p-6"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {current.preview.label}
                  </p>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-live-ping rounded-full bg-gold/60" />
                    <span className="relative h-2 w-2 rounded-full bg-gold" />
                  </span>
                </div>
                <p className="font-display text-2xl text-ivory">
                  {current.preview.title}
                </p>
                <ul className="mt-5 space-y-3" role="list">
                  {current.preview.lines.map((line) => (
                    <li
                      key={line}
                      className="rounded-md border border-ivory/10 bg-onyx/50 px-4 py-3 text-sm text-ivory/80"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2 rounded-md border border-gold/25 bg-gold/10 px-4 py-3">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-onyx"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <p className="text-sm font-medium text-gold-bright">
                    {current.preview.status}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${current.id}-copy`}
                initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Phase {String(current.step).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-3xl text-ivory md:text-4xl">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/70 md:text-lg">
                  {current.description}
                </p>
                <p className="mt-6 inline-flex rounded-md border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                  {current.badge}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => goTo(active - 1)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-default hover:border-gold hover:text-gold"
                    aria-label="Previous step"
                  >
                    <ChevronIcon direction="left" className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(active + 1)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-default hover:border-gold hover:text-gold"
                    aria-label="Next step"
                  >
                    <ChevronIcon direction="right" className="h-5 w-5" />
                  </button>
                  <div className="flex items-center gap-1" aria-hidden="true">
                    {steps.map((step, index) => (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => goTo(index)}
                        aria-label={`Go to step ${step.step}`}
                        className="inline-flex h-11 w-11 items-center justify-center"
                      >
                        <span
                          className={`rounded-full transition-default ${
                            index === active
                              ? "h-2 w-7 bg-gold"
                              : "h-2 w-2 bg-ivory/25"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="ml-auto text-xs font-semibold uppercase tracking-[0.14em] text-ivory/40">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(steps.length).padStart(2, "0")}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
