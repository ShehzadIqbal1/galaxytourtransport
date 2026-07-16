import type { Metadata } from "next";
import { CTABand } from "@/components/sections/CTABand";
import { MapBand } from "@/components/sections/MapBand";
import { PageHero } from "@/components/sections/PageHero";
import { RouteDetailCard } from "@/components/sections/RouteDetailCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { HighlightTitle, SectionIntro } from "@/components/ui/HighlightTitle";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeCta } from "@/content/home";
import { getTourRoutes, getTransportRoutes } from "@/content/routes";
import { buildRoutesIndexMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildRoutesIndexMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Popular Routes", href: "/routes" },
];

export default function RoutesIndexPage() {
  const transport = getTransportRoutes();
  const tours = getTourRoutes();

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow="Licensed corridors across the UAE"
        titleBefore="Popular Car Lift"
        titleHighlight="Routes"
        description="Shared car lifts, private chauffeurs, airport shuttles, and tour days — each route page lists pickup points and booking cues."
        breadcrumbs={breadcrumbs}
      />
      <div className="bg-paper section-padding space-y-16">
        <div className="container-content">
          <SectionIntro
            eyebrow="Transport corridors"
            title={
              <HighlightTitle
                as="h2"
                before="Inter-emirate"
                highlight="car lifts"
                className="text-3xl md:text-4xl text-ink"
              />
            }
            align="left"
          />
          <Stagger className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {transport.map((route) => (
              <StaggerItem key={route.id}>
                <RouteDetailCard route={route} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <div className="container-content">
          <SectionIntro
            eyebrow="Tour experiences"
            title={
              <HighlightTitle
                as="h2"
                before="Curated"
                highlight="day trips"
                className="text-3xl md:text-4xl text-ink"
              />
            }
            align="left"
          />
          <Stagger className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {tours.map((route) => (
              <StaggerItem key={route.id}>
                <RouteDetailCard route={route} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
      <CTABand
        content={{ ...homeCta, secondaryLabel: "Contact Us" }}
        secondaryHref="/contact"
      />
      <MapBand />
    </>
  );
}
