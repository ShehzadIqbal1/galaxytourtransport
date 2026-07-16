"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import type { CoveredCorridor } from "@/content/coveredCorridors";
import type { RouteDetail } from "@/lib/types";

type CorridorItem = CoveredCorridor & { route: RouteDetail };

export interface AllRoutesCoveredProps {
  corridors: CorridorItem[];
}

function LiveRoutePath({
  from,
  to,
  distance,
  pathKey,
}: {
  from: string;
  to: string;
  distance: string;
  pathKey: string;
}) {
  return (
    <div className="mt-5">
      <div className="mb-3 flex items-center justify-between gap-3 text-sm font-semibold text-ivory">
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-live-ping rounded-full bg-gold/70" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-gold" />
          </span>
          {from}
        </span>
        <span className="inline-flex items-center gap-2">
          {to}
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
        </span>
      </div>

      <div className="relative h-1 w-full overflow-hidden rounded-full bg-ivory/10">
        <span
          key={pathKey}
          className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gold animate-route-draw"
          aria-hidden="true"
        />
      </div>

      <p className="mt-2 text-xs text-ivory/50">{distance}</p>
    </div>
  );
}

export function AllRoutesCovered({ corridors }: AllRoutesCoveredProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = corridors[active];

  useEffect(() => {
    if (reduceMotion || corridors.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % corridors.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [corridors.length, reduceMotion]);

  if (!current) return null;

  // Only show the main interactive corridor board + CTAs.
  // (No extra “4 corridor cards” grid under it.)

  return (
    <section
      id="routes"
      className="section-padding bg-onyx text-ivory"
      aria-labelledby="routes-covered-heading"
    >
      <div className="container-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            All Routes Covered
          </p>
          <h2
            id="routes-covered-heading"
            className="mt-4 font-display text-3xl text-ivory md:text-4xl lg:text-5xl"
          >
            Car Lift Routes from Dubai
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ivory/70 md:text-lg">
            Dubai is the hub. Galaxy covers daily corridors to every northern
            emirate and the capital — with live WhatsApp confirmations from
            enquiry to curb.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-live-ping rounded-full bg-gold/70" />
              <span className="relative h-2 w-2 rounded-full bg-gold" />
            </span>
            Live corridor board
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div
            className="flex flex-wrap justify-center gap-2"
            aria-label="Select a corridor"
          >
            {corridors.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.slug}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(index)}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold transition-default ${
                    selected
                      ? "border-gold bg-gold text-onyx"
                      : "border-ivory/20 bg-charcoal/60 text-ivory/70 hover:border-gold/40 hover:text-ivory"
                  }`}
                >
                  {item.to}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <AnimatePresence mode="wait">
            <motion.article
              key={current.slug}
              initial={
                reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, filter: "blur(4px)" }
              }
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-lg border border-gold/20 bg-gradient-to-br from-charcoal via-charcoal2 to-onyx shadow-card"
            >
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={current.route.heroImage}
                  alt={current.route.heroImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1180px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex max-w-[min(100%,16rem)] items-center gap-2 rounded-md border border-gold/35 bg-onyx/80 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-gold backdrop-blur-sm sm:left-4 sm:top-4 sm:max-w-none sm:px-3 sm:text-[11px] sm:tracking-[0.12em] md:left-6 md:top-6">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inset-0 animate-live-ping rounded-full bg-gold/70" />
                    <span className="relative h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <span className="line-clamp-2 sm:line-clamp-none">{current.badge}</span>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div>
                    <h3 className="font-display text-2xl text-ivory md:text-3xl">
                      Car Lift {current.from} To {current.to}
                    </h3>
                    <LiveRoutePath
                      from={current.from}
                      to={current.to}
                      distance={`${current.route.distanceKm} · ${current.route.duration}`}
                      pathKey={current.slug}
                    />
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/75">
                      {current.summary}
                    </p>
                    <div className="mt-5 rounded-md border-l-2 border-gold bg-onyx/50 px-4 py-3 text-sm leading-relaxed text-ivory/70">
                      <p className="font-semibold text-gold">Route note</p>
                      <p className="mt-1">{current.tip}</p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-ivory/10 bg-onyx/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      Common drop zones
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2" role="list">
                      {current.highlights.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-ivory/15 bg-charcoal px-3 py-1.5 text-xs font-medium text-ivory/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 space-y-3">
                      <CtaButton
                        href={`/routes/${current.slug}`}
                        variant="gold"
                        size="md"
                        className="w-full"
                      >
                        View {current.to} route
                      </CtaButton>
                      <CtaButton
                        href="/routes"
                        variant="secondary"
                        size="md"
                        className="w-full"
                      >
                        Browse all routes
                      </CtaButton>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </Reveal>

      </div>
    </section>
  );
}
