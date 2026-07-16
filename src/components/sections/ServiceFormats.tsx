"use client";

import { motion, useReducedMotion } from "motion/react";
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
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((format, index) => (
        <motion.div
          key={format.id}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <FormatCard format={format} />
        </motion.div>
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
  const tours = formats.filter((format) => format.category === "tours");
  const transport = formats.filter((format) => format.category === "transport");

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
        <Tabs
          label="Service categories"
          items={[
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
          ]}
        />
      </div>
    </section>
  );
}
