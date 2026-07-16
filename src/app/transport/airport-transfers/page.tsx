import type { Metadata } from "next";
import { CTABand } from "@/components/sections/CTABand";
import { RouteDetailCard } from "@/components/sections/RouteDetailCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCta } from "@/content/home";
import { getRouteBySlug } from "@/content/routes";
import { buildAirportTransfersMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildAirportTransfersMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Transport", href: "/transport" },
  { name: "Airport transfers", href: "/transport/airport-transfers" },
];

export default function AirportTransfersPage() {
  const route = getRouteBySlug("uae-airport-shuttle");

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
          ...(route ? [buildServiceSchema(route)] : []),
        ]}
      />
      <div className="container-content py-10">
        <Breadcrumbs items={breadcrumbs} tone="light" />
        <SectionHeading
          className="mt-8"
          eyebrow="Airport transfers"
          title="Dubai & Abu Dhabi airport pick and drop"
          description="Flight-synced meet-and-greet for DXB, DWC, and AUH with luggage-ready vehicles and WhatsApp confirmations."
          tone="light"
        />
        {route ? (
          <div className="max-w-3xl">
            <RouteDetailCard route={route} />
          </div>
        ) : null}
      </div>
      <CTABand
        content={{
          ...homeCta,
          headline: "Share your flight number on WhatsApp",
          description:
            "We confirm meet point, vehicle, and fare before you land.",
          whatsappMessage:
            "Hello Galaxy — I need an airport transfer. Flight details:",
        }}
      />
    </>
  );
}
