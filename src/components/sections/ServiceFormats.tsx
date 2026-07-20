"use client";

import { useMemo } from "react";
import { FormatCard } from "@/components/sections/FormatCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import type { ServiceFormat } from "@/lib/types";

export interface ServiceFormatsProps {
  eyebrow: string;
  title: string;
  description: string;
  formats: ServiceFormat[];
}

function FormatGrid({ items }: { items: ServiceFormat[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((format) => (
        <FormatCard key={format.id} format={format} />
      ))}
    </div>
  );
}

export function ServiceFormats({
  eyebrow,
  title,
  description,
  formats,
}: ServiceFormatsProps) {
  const tours = useMemo(
    () => formats.filter((format) => format.category === "tours"),
    [formats],
  );
  const transport = useMemo(
    () => formats.filter((format) => format.category === "transport"),
    [formats],
  );

  const tabItems = useMemo(
    () => [
      {
        id: "tours",
        label: "Tours",
        content: <FormatGrid items={tours} />,
      },
      {
        id: "transport",
        label: "Transport",
        content: <FormatGrid items={transport} />,
      },
    ],
    [tours, transport],
  );

  return (
    <section
      id="formats"
      className="section-padding bg-onyx"
      aria-labelledby="formats-heading"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="formats-heading"
          description={description}
        />
        <Tabs label="Service categories" items={tabItems} />
      </div>
    </section>
  );
}
