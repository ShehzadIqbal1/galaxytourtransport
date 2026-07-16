import type { Metadata } from "next";
import { CTABand } from "@/components/sections/CTABand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { MapBand } from "@/components/sections/MapBand";
import { PageHero } from "@/components/sections/PageHero";
import { StatRow } from "@/components/sections/StatRow";
import { JsonLd } from "@/components/ui/JsonLd";
import { aboutContent } from "@/content/about";
import { homeCta } from "@/content/home";
import { buildAboutMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildAboutMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow="About Galaxy"
        titleBefore="Tours and transport,"
        titleHighlight="built for the UAE"
        description={aboutContent.description}
        breadcrumbs={breadcrumbs}
      />
      <div className="bg-paper section-padding">
        <div className="container-content space-y-16">
          <div className="max-w-3xl space-y-5 text-lg text-ink-muted leading-relaxed">
            {aboutContent.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-lg bg-onyx p-8 md:p-10">
            <StatRow stats={[...aboutContent.stats]} />
          </div>
          <FeatureGrid features={[...aboutContent.values]} tone="light" />
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
