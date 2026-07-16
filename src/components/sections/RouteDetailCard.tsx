import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { RouteDetail } from "@/lib/types";

export interface RouteDetailCardProps {
  route: RouteDetail;
}

export function RouteDetailCard({ route }: RouteDetailCardProps) {
  return (
    <Card className="group overflow-hidden bg-charcoal2 transition-default hover:border-gold/40">
      <div className="relative aspect-[16/10]">
        <Image
          src={route.heroImage}
          alt={route.heroImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-slow group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/30 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge tone="muted" className="bg-charcoal2/70 backdrop-blur-sm">
            {route.category === "tour" ? "Tour" : "Transport"}
          </Badge>
          {route.flag ? (
            <Badge className="bg-gold/15 text-gold border-gold/30">
              {route.flag}
            </Badge>
          ) : null}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-2xl leading-tight text-ivory md:text-[1.7rem]">
          <Link
            href={`/routes/${route.slug}`}
            className="transition-default hover:text-gold-bright"
          >
            {route.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ivory/70">
          {route.description}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-3 rounded-md border border-ivory/10 bg-charcoal2/40 p-3 text-sm">
          <div>
            <dt className="text-gold">Distance</dt>
            <dd className="mt-0.5 text-ivory/90">{route.distanceKm}</dd>
          </div>
          <div>
            <dt className="text-gold">Duration</dt>
            <dd className="mt-0.5 text-ivory/90">{route.duration}</dd>
          </div>
        </dl>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Pickup points
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {route.pickupPoints.slice(0, 3).map((point) => (
              <span
                key={point}
                className="rounded-md border border-ivory/15 bg-onyx/40 px-2.5 py-1 text-[11px] font-medium text-ivory/80"
              >
                {point}
              </span>
            ))}
            {route.pickupPoints.length > 3 ? (
              <span className="rounded-md border border-ivory/15 bg-onyx/40 px-2.5 py-1 text-[11px] font-semibold text-ivory/70">
                +{route.pickupPoints.length - 3}
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-6">
          <Link
            href={`/routes/${route.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-default hover:text-gold-bright"
          >
            View route <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Card>
  );
}
