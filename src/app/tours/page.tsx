import type { Metadata } from "next";
import { CTABand } from "@/components/sections/CTABand";
import { FormatCard } from "@/components/sections/FormatCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFormatsByCategory } from "@/content/formats";
import { homeCta } from "@/content/home";
import { buildToursMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildToursMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Tours", href: "/tours" },
];

export default function ToursPage() {
  const formats = getFormatsByCategory("tours");

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
          eyebrow="Tours"
          title="Desert evenings, city circuits, mountain days"
          description="Curated UAE experiences with chauffeur transport included — customise via WhatsApp."
          tone="light"
        />
        <ul className="grid gap-6 md:grid-cols-3" role="list">
          {formats.map((format) => (
            <li key={format.id}>
              <FormatCard format={format} />
            </li>
          ))}
        </ul>
      </div>
      <CTABand content={homeCta} secondaryHref="/#routes" />
    </>
  );
}
