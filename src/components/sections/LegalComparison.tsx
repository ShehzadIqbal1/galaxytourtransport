import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LegalColumn } from "@/lib/types";

export interface LegalComparisonProps {
  eyebrow: string;
  title: string;
  description: string;
  columns: LegalColumn[];
}

export function LegalComparison({
  eyebrow,
  title,
  description,
  columns,
}: LegalComparisonProps) {
  return (
    <section
      className="section-padding bg-sand text-ink"
      aria-labelledby="legal-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="legal-heading"
          description={description}
          tone="light"
        />
        <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.1}>
          {columns.map((column) => (
            <StaggerItem key={column.id}>
              <div
                className={`card-motion h-full rounded-md border p-6 ${
                  column.variant === "good"
                    ? "border-gold/50 bg-paper"
                    : "border-ink/15 bg-paper/80"
                }`}
              >
                <h3 className="font-display text-2xl text-ink">{column.title}</h3>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  {column.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {column.points.map((point) => (
                    <li key={point}>
                      <Chip tone="light">{point}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
