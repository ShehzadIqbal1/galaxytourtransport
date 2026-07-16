import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";
import { MapBand } from "@/components/sections/MapBand";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { HighlightTitle, SectionIntro } from "@/components/ui/HighlightTitle";
import { JsonLd } from "@/components/ui/JsonLd";
import { servicesPageContent } from "@/content/contact";
import { homeCta } from "@/content/home";
import { servicesTrustBarItems } from "@/content/trust";
import { CtaButton } from "@/components/ui/CtaButton";
import { buildServicesMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = buildServicesMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesPage() {
  const cards = servicesPageContent.cards;
  const standard = cards.slice(0, -1);
  const special = cards[cards.length - 1];

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow="Licensed UAE tours & transport"
        titleBefore="Our Car Lift"
        titleHighlight="Services"
        description={servicesPageContent.description}
        breadcrumbs={breadcrumbs}
        whatsappLabel="WhatsApp for Booking"
      />
      <TrustBar items={servicesTrustBarItems} />

      <section className="bg-paper section-padding">
        <div className="container-content">
          <SectionIntro
            eyebrow="What we offer"
            title={
              <HighlightTitle
                as="h2"
                before="Types of Services"
                highlight="We Offer"
                className="text-3xl md:text-4xl text-ink"
              />
            }
            description="Flexible formats for daily commuting, private transfers, airports, corporate runs, and curated tours."
          />

          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {standard.map((card) => (
              <StaggerItem key={card.id}>
                <Card className="card-motion flex h-full flex-col bg-onyx p-7 text-ivory">
                  <span
                    className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gold/15 text-lg text-gold"
                    aria-hidden="true"
                  >
                    ◆
                  </span>
                  <h2 className="font-display text-2xl">
                    <Link
                      href={card.href}
                      className="transition-default hover:text-gold-bright"
                    >
                      {card.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-ivory/70 leading-relaxed">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-gold transition-default hover:text-gold-bright"
                  >
                    Explore →
                  </Link>
                </Card>
              </StaggerItem>
            ))}
            {special ? (
              <StaggerItem>
                <Card
                  tone="light"
                  className="flex h-full flex-col border-gold/30 bg-sand p-7"
                >
                  <span
                    className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gold/25 text-lg text-onyx"
                    aria-hidden="true"
                  >
                    ?
                  </span>
                  <h2 className="font-display text-2xl text-ink">{special.title}</h2>
                  <p className="mt-3 flex-1 text-ink-muted leading-relaxed">
                    {special.description}
                  </p>
                  <CtaButton
                    href={buildWhatsAppLink(
                      "Hello Galaxy — I'm not sure which service fits. Can you help?",
                    )}
                    variant="whatsapp"
                    size="sm"
                    external
                    className="mt-6 self-start"
                    icon={<WhatsAppIcon className="h-4 w-4" />}
                  >
                    Ask on WhatsApp
                  </CtaButton>
                </Card>
              </StaggerItem>
            ) : null}
          </Stagger>
        </div>
      </section>

      <CTABand
        content={{
          ...homeCta,
          headline: "Need help choosing the right service?",
          secondaryLabel: "Contact Us",
        }}
        secondaryHref="/contact"
      />
      <MapBand />
    </>
  );
}
