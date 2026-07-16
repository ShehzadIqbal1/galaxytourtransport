import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { Float } from "@/components/motion/Float";
import { StatRow } from "@/components/sections/StatRow";
import { CtaGroup } from "@/components/ui/CtaGroup";
import type { StatItem } from "@/lib/types";

export interface HeroProps {
  eyebrow: string;
  headlineBefore: string;
  headlineHighlight: string;
  headlineAfter: string;
  subcopy: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  whatsappMessage: string;
  stats: StatItem[];
  imageSrc: string;
  imageAlt: string;
}

export function Hero({
  eyebrow,
  headlineBefore,
  headlineHighlight,
  headlineAfter,
  subcopy,
  primaryCta,
  secondaryCta,
  secondaryHref,
  whatsappMessage,
  stats,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ivory/10 bg-onyx">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(198,161,91,0.14),transparent_55%)]" />

      <div className="container-content relative py-10 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <FadeIn delay={0.05}>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inset-0 animate-live-ping rounded-full bg-gold/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {eyebrow}
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h1 className="mt-5 font-display text-3xl leading-[1.12] text-ivory sm:text-4xl md:text-5xl lg:text-[3.35rem]">
                {headlineBefore}{" "}
                <span className="text-gold">{headlineHighlight}</span>{" "}
                {headlineAfter}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/75 md:text-lg">
                {subcopy}
              </p>
            </FadeIn>

            <FadeIn delay={0.28}>
              <CtaGroup
                className="mt-8"
                size="lg"
                tone="dark"
                whatsappLabel={primaryCta}
                whatsappMessage={whatsappMessage}
                secondaryLabel={secondaryCta}
                secondaryHref={secondaryHref}
                secondaryVariant="call"
                showPhoneMeta
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.18} className="relative">
            <Float distance={8} duration={5.5} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ivory/10 shadow-card md:aspect-[5/4]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover animate-hero-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-md border border-gold/25 bg-onyx/75 px-4 py-3 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    UAE corridors · Tours · Airport
                  </p>
                  <p className="mt-1 text-sm text-ivory/85">
                    Licensed chauffeur & shared car lift coverage
                  </p>
                </div>
              </div>
            </Float>
          </FadeIn>
        </div>
      </div>

      <div className="relative border-t border-sand bg-sand">
        <div className="container-content py-10 md:py-12">
          <FadeIn delay={0.1}>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-ink/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Why travellers choose Galaxy
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Clear coverage, fast replies, daily corridor runs.
                </p>
              </div>
            </div>
            <StatRow stats={stats} tone="dark" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
