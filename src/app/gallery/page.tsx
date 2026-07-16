import type { Metadata } from "next";
import { CTABand } from "@/components/sections/CTABand";
import { FleetShowcase } from "@/components/sections/FleetShowcase";
import { MapBand } from "@/components/sections/MapBand";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { JsonLd } from "@/components/ui/JsonLd";
import { getFleetByCategory } from "@/content/fleet";
import { galleryIntro } from "@/content/gallery";
import { homeCta } from "@/content/home";
import { buildGalleryMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildGalleryMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow="Licensed UAE transport & tourism"
        titleBefore="Our Fleet"
        titleHighlight="Gallery"
        description={galleryIntro.description}
        breadcrumbs={breadcrumbs}
        whatsappMessage="Hello Galaxy — I'd like to ask about a vehicle from your fleet."
      />

      <FleetShowcase
        eyebrow="Vehicles available"
        title="Choose the right Galaxy vehicle"
        description="From business sedans to seven-seat SUVs and premium electric options — every assignment is confirmed on WhatsApp."
        groups={getFleetByCategory()}
      />

      <section className="bg-paper pb-16 md:pb-20">
        <div className="container-content">
          <Reveal className="rounded-lg bg-onyx px-6 py-8 text-center md:px-10">
            <p className="font-display text-2xl text-ivory md:text-3xl">
              Don&apos;t see the vehicle you need?
            </p>
            <p className="mx-auto mt-3 max-w-xl text-ivory/70">
              Message us with passenger count and corridor — we&apos;ll recommend
              the right assignment.
            </p>
            <CtaGroup
              className="mt-6"
              align="center"
              tone="dark"
              size="md"
              whatsappLabel="Ask on WhatsApp"
              whatsappMessage="Hello Galaxy — I don't see the exact vehicle I need. Can you recommend one?"
              secondaryVariant="call"
            />
          </Reveal>
        </div>
      </section>

      <CTABand
        content={{
          ...homeCta,
          headline: "Comfort, safety, and a smooth ride — every time",
          secondaryLabel: "Contact Us",
          whatsappMessage:
            "Hello Galaxy — can you recommend a vehicle for my trip? Details:",
        }}
        secondaryHref="/contact"
      />
      <MapBand />
    </>
  );
}
