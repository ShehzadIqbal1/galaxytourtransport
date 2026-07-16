import { Reveal } from "@/components/motion/Reveal";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { siteConfig } from "@/content/siteConfig";
import type { CtaContent } from "@/lib/types";

export interface CTABandProps {
  content: CtaContent;
  secondaryHref?: string;
  secondaryVariant?: "call" | "link";
}

export function CTABand({
  content,
  secondaryHref = "/contact",
  secondaryVariant = "link",
}: CTABandProps) {
  return (
    <section
      className="section-padding border-b border-ivory/10 bg-onyx text-ivory"
      aria-labelledby="cta-band-heading"
    >
      <Reveal className="container-content">
        <div className="relative overflow-hidden rounded-lg border border-gold/20 bg-gradient-to-br from-charcoal via-charcoal2 to-onyx p-6 sm:p-8 md:p-12">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-gold/8 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {content.eyebrow ?? "Ready when you are"}
            </p>

            <h2
              id="cta-band-heading"
              className="mt-4 font-display text-2xl leading-tight text-ivory sm:text-3xl md:text-4xl"
            >
              {content.headline}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/70 md:text-lg">
              {content.description}
            </p>

            <CtaGroup
              className="mt-8 w-full"
              align="center"
              size="lg"
              tone="dark"
              whatsappLabel={content.primaryLabel}
              whatsappMessage={content.whatsappMessage}
              {...(content.secondaryLabel
                ? { secondaryLabel: content.secondaryLabel }
                : {})}
              secondaryHref={secondaryHref}
              secondaryVariant={secondaryVariant}
              showPhoneMeta
            />

            <ul
              className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-ivory/10 pt-6 text-xs font-medium uppercase tracking-[0.12em] text-ivory/45"
              role="list"
            >
              <li>Licensed UAE operator</li>
              <li aria-hidden="true" className="text-gold/50">
                ·
              </li>
              <li>WhatsApp-first booking</li>
              <li aria-hidden="true" className="text-gold/50">
                ·
              </li>
              <li>{siteConfig.address.streetAddress}, Dubai</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
