import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Chip } from "@/components/ui/Chip";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeCta } from "@/content/home";
import { getAllRouteSlugs, getRouteBySlug } from "@/content/routes";
import { buildRouteMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/schema";

interface RoutePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) {
    return {};
  }
  return buildRouteMetadata(route);
}

export default async function RoutePage({ params }: RoutePageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Routes", href: "/routes" },
    { name: route.title, href: `/routes/${route.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
          buildServiceSchema(route),
        ]}
      />
      <section className="relative bg-onyx text-ivory">
        <div className="relative h-56 w-full sm:h-72 md:h-[22rem]">
          <Image
            src={route.heroImage}
            alt={route.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/55 to-onyx/20" />
        </div>

        <div className="container-content relative -mt-24 pb-10 sm:-mt-28 sm:pb-12 md:-mt-32 md:pb-14">
          <div className="mx-auto max-w-5xl rounded-lg border border-ivory/10 bg-charcoal/95 p-6 shadow-card backdrop-blur-sm md:p-8">
            <Breadcrumbs items={breadcrumbs} className="mb-6" />
            <p className="text-sm uppercase tracking-[0.16em] text-gold">
              {route.category === "tour" ? "Tour route" : "Transport corridor"}
            </p>
            <h1 className="mt-3 font-display text-4xl text-ivory md:text-5xl">
              {route.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ivory/75">
              {route.description}
            </p>
            <dl className="mt-8 grid max-w-xl gap-4 text-ivory/85 sm:grid-cols-2">
              <div className="rounded-md border border-ivory/10 bg-onyx/60 p-4">
                <dt className="text-sm text-gold">Distance</dt>
                <dd className="mt-1 text-lg">{route.distanceKm}</dd>
              </div>
              <div className="rounded-md border border-ivory/10 bg-onyx/60 p-4">
                <dt className="text-sm text-gold">Duration</dt>
                <dd className="mt-1 text-lg">{route.duration}</dd>
              </div>
            </dl>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-ivory/10 bg-onyx/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Pickup points
                </p>
                <ul className="mt-4 space-y-2">
                  {route.pickupPoints.map((point) => (
                    <li key={point}>
                      <Chip>{point}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-ivory/10 bg-onyx/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Drop-off points
                </p>
                <ul className="mt-4 space-y-2">
                  {route.dropoffPoints.map((point) => (
                    <li key={point}>
                      <Chip>{point}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTABand
        content={{
          ...homeCta,
          headline: `Book ${route.title}`,
          whatsappMessage: `Hello Galaxy — I'd like to book ${route.title}. Details:`,
          secondaryLabel: "Contact Us",
        }}
        secondaryHref="/contact"
      />
    </>
  );
}
