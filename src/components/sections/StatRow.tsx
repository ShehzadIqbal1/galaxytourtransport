"use client";

import {
  CalendarIcon,
  CarIcon,
  ClockIcon,
  PinIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/icons";
import { CountUp } from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { StatIcon, StatItem } from "@/lib/types";

export interface StatRowProps {
  stats: StatItem[];
  className?: string;
  tone?: "dark" | "light";
}

function StatGlyph({ icon }: { icon: StatIcon }) {
  const className = "h-5 w-5";
  switch (icon) {
    case "pin":
      return <PinIcon className={className} />;
    case "car":
      return <CarIcon className={className} />;
    case "clock":
      return <ClockIcon className={className} />;
    case "calendar":
      return <CalendarIcon className={className} />;
    case "shield":
      return <ShieldIcon className={className} />;
    case "users":
      return <UsersIcon className={className} />;
  }
}

export function StatRow({
  stats,
  className = "",
  tone = "dark",
}: StatRowProps) {
  const light = tone === "light";

  return (
    <Stagger
      className={`grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 ${className}`}
      stagger={0.1}
    >
      {stats.map((stat) => (
        <StaggerItem key={stat.id}>
          <article
            className={`card-motion group relative flex h-full flex-col overflow-hidden rounded-lg border p-4 sm:p-5 ${
              light
                ? "border-sand bg-paper shadow-soft"
                : "border-gold/20 bg-gradient-to-br from-charcoal2 via-charcoal to-onyx"
            }`}
          >
            <div
              className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl transition-default ${
                light
                  ? "bg-gold/15 group-hover:bg-gold/25"
                  : "bg-gold/10 group-hover:bg-gold/20"
              }`}
              aria-hidden="true"
            />

            {stat.icon ? (
              <span
                className={`relative inline-flex h-10 w-10 items-center justify-center rounded-md border transition-default ${
                  light
                    ? "border-gold/40 bg-gold/10 text-gold group-hover:border-gold group-hover:bg-gold/15"
                    : "border-gold/35 bg-gold/10 text-gold group-hover:border-gold/60 group-hover:bg-gold/15 group-hover:text-gold-bright"
                }`}
              >
                <StatGlyph icon={stat.icon} />
              </span>
            ) : null}

            <p
              className={`relative mt-4 font-display text-3xl leading-none tracking-tight sm:text-4xl md:text-[2.5rem] ${
                light ? "text-ink" : "text-gold-bright"
              }`}
            >
              <CountUp value={stat.value} />
            </p>

            <p
              className={`relative mt-2.5 text-sm font-medium leading-snug sm:text-[0.9375rem] ${
                light ? "text-ink-muted" : "text-ivory/80"
              }`}
            >
              {stat.label}
            </p>

            <span
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-bright to-gold transition-default group-hover:scale-x-100"
              aria-hidden="true"
            />
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
