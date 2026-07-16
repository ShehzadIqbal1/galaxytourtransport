import type { Metadata } from "next";
import Link from "next/link";
import { PinIcon } from "@/components/icons";
import { CTABand } from "@/components/sections/CTABand";
import { MapBand } from "@/components/sections/MapBand";
import { PageHero } from "@/components/sections/PageHero";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { HighlightTitle, SectionIntro } from "@/components/ui/HighlightTitle";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeCta } from "@/content/home";
import { locations } from "@/content/locations";
import { buildLocationsIndexMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildLocationsIndexMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
];

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow="Licensed UAE transport coverage"
        titleBefore="Popular Car Lift"
        titleHighlight="Service Cities"
        titleAfter="Across the UAE"
        description="Choose your emirate to explore car lift corridors, tour pickups, and airport coverage from Galaxy."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-paper section-padding">
        <div className="container-content">
          <SectionIntro
            eyebrow="Choose your city"
            title={
              <HighlightTitle
                as="h2"
                before="Car Lift Services by"
                highlight="Emirate"
                className="text-3xl md:text-4xl text-ink"
              />
            }
            description="Dedicated pages for each service city — with related routes and WhatsApp booking."
          />

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {locations.map((location, index) => {
              const featured = index === locations.length - 1;
              return (
                <StaggerItem key={location.id}>
                  <Card
                    tone="light"
                    elevated
                    className={`flex h-full flex-col p-6 ${
                      featured ? "border-gold/40 bg-sand/70" : ""
                    }`}
                  >
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-onyx text-gold">
                      <PinIcon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-xl text-ink">
                      <Link
                        href={`/locations/${location.slug}`}
                        className="transition-default hover:text-gold"
                      >
                        Car Lift Services in {location.name}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-ink-muted leading-relaxed">
                      {location.summary}
                    </p>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold transition-default hover:text-gold-bright"
                    >
                      View {location.name} →
                    </Link>
                  </Card>
                </StaggerItem>
              );
            })}
            <StaggerItem>
              <Card
                tone="light"
                elevated
                className="flex h-full flex-col border-gold/40 bg-sand p-6"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gold text-onyx">
                  <PinIcon className="h-5 w-5" />
                </span>
                <h2 className="font-display text-xl text-ink">
                  <Link
                    href="/routes/dubai-to-abu-dhabi"
                    className="transition-default hover:text-gold"
                  >
                    Dubai to Abu Dhabi Route
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm text-ink-muted leading-relaxed">
                  Our most requested inter-emirate corridor — shared seats or
                  private chauffeur.
                </p>
                <Link
                  href="/routes/dubai-to-abu-dhabi"
                  className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-gold transition-default hover:text-gold-bright"
                >
                  Open route page →
                </Link>
              </Card>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <CTABand
        content={{
          ...homeCta,
          headline: "Need help choosing the right city service?",
          secondaryLabel: "Contact Us",
        }}
        secondaryHref="/contact"
      />
      <MapBand />
    </>
  );
}
