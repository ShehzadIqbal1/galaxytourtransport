import { FadeIn } from "@/components/motion/FadeIn";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { HighlightTitle } from "@/components/ui/HighlightTitle";
import type { BreadcrumbItem } from "@/lib/types";

export interface PageHeroProps {
  eyebrow: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  whatsappLabel?: string;
  whatsappMessage?: string;
  showCall?: boolean;
}

export function PageHero({
  eyebrow,
  titleBefore,
  titleHighlight,
  titleAfter = "",
  description,
  breadcrumbs,
  whatsappLabel = "Contact on WhatsApp",
  whatsappMessage,
  showCall = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ivory/10 bg-onyx text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,161,91,0.16),transparent_42%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,transparent,rgba(33,28,21,0.65))] lg:block" />
      <div className="container-content relative py-12 md:py-16">
        <FadeIn delay={0.02} direction="none">
          <Breadcrumbs
            items={breadcrumbs}
            className="text-ivory/55 [&_a:hover]:text-gold-bright [&_span[aria-current]]:text-ivory"
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.14}>
          <HighlightTitle
            before={titleBefore}
            highlight={titleHighlight}
            after={titleAfter}
            className="mt-5 max-w-4xl text-3xl text-ivory md:text-5xl lg:text-6xl"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg">
            {description}
          </p>
        </FadeIn>
        <FadeIn delay={0.28}>
          {showCall ? (
            <CtaGroup
              className="mt-8"
              size="lg"
              tone="dark"
              whatsappLabel={whatsappLabel}
              {...(whatsappMessage ? { whatsappMessage } : {})}
              secondaryVariant="call"
            />
          ) : (
            <CtaGroup
              className="mt-8"
              size="lg"
              tone="dark"
              whatsappLabel={whatsappLabel}
              {...(whatsappMessage ? { whatsappMessage } : {})}
              secondaryLabel="Contact Us"
              secondaryHref="/contact"
              secondaryVariant="link"
            />
          )}
        </FadeIn>
      </div>
    </section>
  );
}
