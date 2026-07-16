import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FeatureItem } from "@/lib/types";

export interface ServiceExplainerProps {
  eyebrow: string;
  title: string;
  description: string;
  features: FeatureItem[];
}

export function ServiceExplainer({
  eyebrow,
  title,
  description,
  features,
}: ServiceExplainerProps) {
  return (
    <section className="section-padding bg-paper" aria-labelledby="explainer-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="explainer-heading"
          description={description}
          tone="light"
        />
        <FeatureGrid features={features} tone="light" />
      </div>
    </section>
  );
}
