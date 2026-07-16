import Image from "next/image";
import { Chip } from "@/components/ui/Chip";
import { Card } from "@/components/ui/Card";
import type { ServiceFormat } from "@/lib/types";

export interface FormatCardProps {
  format: ServiceFormat;
}

export function FormatCard({ format }: FormatCardProps) {
  return (
    <Card className="overflow-hidden bg-charcoal2">
      <div className="relative aspect-[16/10]">
        <Image
          src={format.image}
          alt={format.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-ivory">{format.title}</h3>
        <p className="mt-3 text-ivory/70 leading-relaxed">{format.description}</p>
        <ul className="mt-5 space-y-2">
          {format.highlights.map((highlight) => (
            <li key={highlight}>
              <Chip>{highlight}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
