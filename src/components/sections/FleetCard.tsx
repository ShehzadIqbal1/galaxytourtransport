import Image from "next/image";
import {
  LuggageIcon,
  SnowflakeIcon,
  UsersIcon,
} from "@/components/icons";
import type { FleetVehicle } from "@/lib/types";

export interface FleetCardProps {
  vehicle: FleetVehicle;
}

export function FleetCard({ vehicle }: FleetCardProps) {
  return (
    <article className="card-motion group flex h-full flex-col overflow-hidden rounded-lg border border-sand bg-paper shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand/60 sm:aspect-[5/4]">
        <Image
          src={vehicle.image}
          alt={vehicle.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-slow group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/35 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-md bg-onyx/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
          {vehicle.categoryLabel}
        </span>
        {vehicle.premium ? (
          <span className="absolute right-3 top-3 rounded-md bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-onyx">
            Premium
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-2xl leading-tight text-ink md:text-[1.65rem]">
          {vehicle.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
          {vehicle.description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-sand pt-4 text-sm font-medium text-ink-muted"
          role="list"
        >
          <li className="inline-flex items-center gap-1.5">
            <UsersIcon className="h-4 w-4 text-gold" />
            {vehicle.seats} seats
          </li>
          <li className="inline-flex items-center gap-1.5">
            <SnowflakeIcon className="h-4 w-4 text-gold" />
            AC
          </li>
          <li className="inline-flex items-center gap-1.5">
            <LuggageIcon className="h-4 w-4 text-gold" />
            Luggage
          </li>
        </ul>
      </div>
    </article>
  );
}
