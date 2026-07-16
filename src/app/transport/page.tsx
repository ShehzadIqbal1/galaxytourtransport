import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";
import { FormatCard } from "@/components/sections/FormatCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFormatsByCategory } from "@/content/formats";
import { homeCta } from "@/content/home";
import { buildTransportMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildTransportMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Transport", href: "/transport" },
];

export default function TransportPage() {
  const formats = getFormatsByCategory("transport");

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <div className="container-content py-10">
        <Breadcrumbs items={breadcrumbs} tone="light" />
        <SectionHeading
          className="mt-8"
          eyebrow="Transport"
          title="Car lifts, private chauffeurs, monthly plans"
          description="Affordable licensed movement across Dubai, Abu Dhabi, and the wider UAE — booked on WhatsApp."
          tone="light"
        />
        <p className="mb-8">
          <Link
            href="/transport/airport-transfers"
            className="inline-flex min-h-11 items-center text-gold transition-default hover:text-gold-bright"
          >
            Looking for airport pick and drop? →
          </Link>
        </p>
        <ul className="grid gap-6 md:grid-cols-3" role="list">
          {formats.map((format) => (
            <li key={format.id}>
              <FormatCard format={format} />
            </li>
          ))}
        </ul>
      </div>
      <CTABand content={homeCta} />
    </>
  );
}
