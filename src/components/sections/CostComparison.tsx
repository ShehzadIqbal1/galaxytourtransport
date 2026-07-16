"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CarIcon,
  DriverIcon,
  ShieldIcon,
} from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ComparisonItem } from "@/lib/types";

export interface CostComparisonProps {
  eyebrow: string;
  title: string;
  description: string;
  comparisons: ComparisonItem[];
}

function ToneIcon({ tone }: { tone: ComparisonItem["tone"] }) {
  const className = "h-6 w-6";
  if (tone === "shared") return <CarIcon className={className} />;
  if (tone === "private") return <DriverIcon className={className} />;
  return <ShieldIcon className={className} />;
}

export function CostComparison({
  eyebrow,
  title,
  description,
  comparisons,
}: CostComparisonProps) {
  const reduceMotion = useReducedMotion();
  const defaultActive =
    comparisons.find((item) => item.highlighted)?.id ??
    comparisons[0]?.id ??
    "";
  const [activeId, setActiveId] = useState(defaultActive);
  const active =
    comparisons.find((item) => item.id === activeId) ?? comparisons[0];

  return (
    <section
      className="section-padding bg-sand text-ink"
      aria-labelledby="cost-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="cost-heading"
          description={description}
          tone="light"
        />

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {comparisons.map((item, index) => {
            const selected = item.id === activeId;
            const recommended = Boolean(item.highlighted);

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                aria-pressed={selected}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`card-motion group relative flex min-h-[22rem] flex-col rounded-lg border p-7 text-left transition-default md:min-h-[24rem] md:p-8 ${
                  selected
                    ? "border-gold bg-paper shadow-card ring-2 ring-gold/40 md:scale-[1.02]"
                    : "border-sand bg-paper/90 shadow-soft hover:border-gold/40"
                }`}
              >
                {recommended ? (
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-onyx lg:absolute lg:right-5 lg:top-5 lg:mb-0">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-live-ping rounded-full bg-onyx/50" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-onyx" />
                    </span>
                    Recommended
                  </span>
                ) : null}

                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-md transition-default ${
                    selected
                      ? "bg-gold text-onyx"
                      : "bg-gold/15 text-gold group-hover:bg-gold/25"
                  }`}
                >
                  <ToneIcon tone={item.tone} />
                </span>

                <h3 className="mt-6 font-display text-2xl leading-tight text-ink md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3.5" role="list">
                  {item.points.map((point, pointIndex) => (
                    <motion.li
                      key={point}
                      initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + index * 0.08 + pointIndex * 0.06,
                        duration: 0.35,
                      }}
                      className="flex items-start gap-3 text-sm font-medium text-ink md:text-[0.95rem]"
                    >
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                          item.tone === "risk"
                            ? "bg-ink/10 text-ink-muted"
                            : "bg-gold/20 text-gold"
                        }`}
                        aria-hidden="true"
                      >
                        {item.tone === "risk" ? "!" : "✓"}
                      </span>
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <span
                  className={`mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.14em] ${
                    selected ? "text-gold" : "text-ink-muted/60"
                  }`}
                >
                  {selected ? "Selected option" : "Tap to compare"}
                </span>
              </motion.button>
            );
          })}
        </div>

        {active ? (
          <Reveal className="mt-10">
            <div className="rounded-lg border border-gold/25 bg-paper p-6 shadow-soft md:flex md:items-center md:justify-between md:gap-8 md:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Live quote path
                </p>
                <p className="mt-2 font-display text-2xl text-ink md:text-3xl">
                  {active.title}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
                  {active.tone === "risk"
                    ? "Skip informal offers — message Galaxy for a licensed shared or private quote instead."
                    : "Tell us your corridor and passenger count on WhatsApp and we’ll confirm the fare in chat."}
                </p>
              </div>
              <CtaGroup
                className="mt-6 shrink-0 md:mt-0"
                tone="light"
                size="md"
                align="start"
                whatsappLabel={
                  active.tone === "risk"
                    ? "Get a licensed quote"
                    : `Ask about ${active.title}`
                }
                whatsappMessage={`Hello Galaxy — I'm comparing options and interested in ${active.title}. Route/date/passengers:`}
                secondaryVariant="call"
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
