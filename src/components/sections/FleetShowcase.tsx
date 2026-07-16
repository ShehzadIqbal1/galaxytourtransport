import { CarIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FleetCard } from "@/components/sections/FleetCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FleetVehicle } from "@/lib/types";

export interface FleetGroup {
  category: FleetVehicle["category"];
  label: string;
  caption: string;
  vehicles: FleetVehicle[];
}

export interface FleetShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  groups: FleetGroup[];
}

export function FleetShowcase({
  eyebrow,
  title,
  description,
  groups,
}: FleetShowcaseProps) {
  return (
    <section
      id="fleet"
      className="section-padding bg-sand/40"
      aria-labelledby="fleet-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="fleet-heading"
          description={description}
          tone="light"
        />

        <div className="space-y-14 md:space-y-16">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 0.04}>
              <div className="mb-7 flex items-start gap-3 md:mb-8">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold">
                  <CarIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink md:text-3xl">
                    {group.label}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted md:text-base">
                    {group.caption}
                  </p>
                </div>
              </div>

              <Stagger
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 sm:gap-7"
                stagger={0.08}
              >
                {group.vehicles.map((vehicle) => (
                  <StaggerItem key={vehicle.id}>
                    <FleetCard vehicle={vehicle} />
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
