import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TrustSectionContent } from "@/lib/types";

export interface TrustSectionProps {
  content: TrustSectionContent;
}

export function TrustSection({ content }: TrustSectionProps) {
  return (
    <section
      className="section-padding bg-ivory"
      aria-labelledby="trust-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          titleId="trust-heading"
          description={content.description}
          tone="light"
        />
        <FeatureGrid features={content.features} tone="light" />
        <CtaGroup
          className="mt-10"
          tone="light"
          size="md"
          whatsappLabel={content.ctaLabel}
          whatsappMessage={content.whatsappMessage}
          secondaryVariant="call"
        />
      </div>
    </section>
  );
}
