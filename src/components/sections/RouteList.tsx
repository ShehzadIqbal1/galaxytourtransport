import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { RouteDetailCard } from "@/components/sections/RouteDetailCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { RouteDetail } from "@/lib/types";

export interface RouteListProps {
  eyebrow: string;
  title: string;
  description: string;
  routes: RouteDetail[];
}

export function RouteList({
  eyebrow,
  title,
  description,
  routes,
}: RouteListProps) {
  return (
    <section
      id="routes"
      className="section-padding bg-paper"
      aria-labelledby="routes-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="routes-heading"
          description={description}
          tone="light"
        />
        <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.1}>
          {routes.map((route) => (
            <StaggerItem key={route.id}>
              <RouteDetailCard route={route} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
