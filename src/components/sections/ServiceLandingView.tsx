import Image from "next/image";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";
import { FAQSection } from "@/components/sections/FAQSection";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Chip } from "@/components/ui/Chip";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { SectionIntro } from "@/components/ui/HighlightTitle";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeCta } from "@/content/home";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/schema";
import type { ServiceLandingPage } from "@/lib/types";

export interface ServiceLandingViewProps {
  page: ServiceLandingPage;
}

export function ServiceLandingView({ page }: ServiceLandingViewProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: page.h1, href: page.path },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
          buildServiceSchema({
            h1: page.h1,
            description: page.description,
            path: page.path,
            serviceType: page.serviceType,
          }),
          buildFaqPageSchema(page.faqs),
        ]}
      />

      <section className="relative bg-onyx text-ivory">
        <div className="relative h-56 w-full sm:h-72 md:h-[22rem]">
          <Image
            src={page.heroImage}
            alt={page.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/55 to-onyx/20" />
        </div>

        <div className="container-content relative -mt-24 pb-10 sm:-mt-28 sm:pb-12 md:-mt-32 md:pb-14">
          <div className="mx-auto max-w-5xl rounded-lg border border-ivory/10 bg-charcoal/95 p-6 shadow-card backdrop-blur-sm md:p-8">
            <FadeIn delay={0.02} direction="none">
              <Breadcrumbs items={breadcrumbs} className="mb-6" />
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-sm uppercase tracking-[0.16em] text-gold">
                {page.eyebrow}
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <h1 className="mt-3 font-display text-3xl text-ivory md:text-5xl">
                {page.h1}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ivory/75">
                {page.intro}
              </p>
            </FadeIn>
            <FadeIn delay={0.28}>
              <CtaGroup
                className="mt-8"
                size="lg"
                tone="dark"
                primaryOpensQuote
                whatsappLabel="Book on WhatsApp"
                whatsappMessage={page.whatsappMessage}
                secondaryVariant="call"
                showPhoneMeta
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-paper section-padding">
        <div className="container-content">
          <SectionIntro
            eyebrow="Fares"
            title={
              <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                {page.pricing.title}
              </h2>
            }
            description={page.pricing.description}
            align="left"
          />
          <ul className="mt-2 grid gap-4 md:grid-cols-2" role="list">
            {page.pricing.points.map((point) => (
              <li
                key={point}
                className="rounded-md border border-sand bg-ivory px-5 py-4 text-ink-muted leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-sand bg-sand/30 section-padding">
        <div className="container-content">
          <SectionIntro
            eyebrow="Booking flow"
            title={
              <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                {page.howItWorks.title}
              </h2>
            }
            align="left"
          />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {page.howItWorks.steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <article className="h-full rounded-md border border-sand bg-paper p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">
                    {step.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-paper section-padding">
        <div className="container-content">
          <SectionIntro
            eyebrow="Coverage"
            title={
              <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                {page.serviceAreas.title}
              </h2>
            }
            description={page.serviceAreas.description}
            align="left"
          />
          <ul className="flex flex-wrap gap-3" role="list">
            {page.serviceAreas.areas.map((area) => (
              <li key={area}>
                <Chip tone="light">{area}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Quick answers before you message Galaxy on WhatsApp."
        items={page.faqs}
      />

      <section className="border-t border-sand bg-sand/20 section-padding">
        <div className="container-content">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Related services
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">
            Explore connected Galaxy corridors and airport transfers across
            Dubai and Abu Dhabi.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
            {page.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-base font-semibold text-gold transition-default hover:text-gold-bright"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        content={{
          ...homeCta,
          headline: `Book ${page.h1}`,
          description: `${page.intro.slice(0, 140)}…`,
          whatsappMessage: page.whatsappMessage,
          secondaryLabel: "Contact Us",
        }}
        secondaryHref="/contact"
      />
    </>
  );
}
