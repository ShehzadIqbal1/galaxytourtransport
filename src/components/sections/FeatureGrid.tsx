import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { FeatureItem } from "@/lib/types";

export interface FeatureGridProps {
  features: FeatureItem[];
  className?: string;
  tone?: "dark" | "light";
}

export function FeatureGrid({
  features,
  className = "",
  tone = "dark",
}: FeatureGridProps) {
  const cardClass =
    tone === "light"
      ? "border-sand bg-paper text-ink shadow-soft"
      : "border-ivory/10 bg-charcoal text-ivory";
  const descClass = tone === "light" ? "text-ink-muted" : "text-ivory/70";

  return (
    <Reveal>
      <Stagger
        className={`grid gap-6 sm:grid-cols-2 ${className}`}
        stagger={0.1}
      >
        {features.map((feature) => (
          <StaggerItem key={feature.id}>
            <div
              className={`card-motion h-full rounded-md border p-6 ${cardClass}`}
            >
              <h3 className="font-display text-xl">{feature.title}</h3>
              <p className={`mt-3 leading-relaxed ${descClass}`}>
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Reveal>
  );
}
