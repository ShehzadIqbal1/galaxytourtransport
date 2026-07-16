import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { RouteDetailCard } from "@/components/sections/RouteDetailCard";
import { Chip } from "@/components/ui/Chip";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeCta } from "@/content/home";
import {
  getAllLocationSlugs,
  getLocationBySlug,
} from "@/content/locations";
import { getRouteBySlug } from "@/content/routes";
import { buildLocationMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) {
    return {};
  }
  return buildLocationMetadata(location);
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) {
    notFound();
  }

  const relatedRoutes = location.relatedRouteSlugs
    .map((routeSlug) => getRouteBySlug(routeSlug))
    .filter((route): route is NonNullable<typeof route> => Boolean(route));

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: location.name, href: `/locations/${location.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <PageHero
        eyebrow={`${location.name} · UAE coverage`}
        titleBefore="Car lift & tours in"
        titleHighlight={location.name}
        description={location.description}
        breadcrumbs={breadcrumbs}
        whatsappMessage={`Hello Galaxy — I need transport or a tour involving ${location.name}. Details:`}
      />
      <div className="bg-paper section-padding">
        <div className="container-content">
        <div className="relative mb-12 aspect-[4/3] overflow-hidden rounded-lg shadow-card sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src={location.heroImage}
            alt={location.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="max-w-3xl text-lg text-ink-muted leading-relaxed">
          {location.summary}
        </p>
        <ul className="mt-8 space-y-3">
          {location.highlights.map((highlight) => (
            <li key={highlight}>
              <Chip tone="light">{highlight}</Chip>
            </li>
          ))}
        </ul>
        {relatedRoutes.length > 0 ? (
          <section className="mt-16" aria-labelledby="related-routes-heading">
            <h2
              id="related-routes-heading"
              className="mb-8 font-display text-3xl text-ink"
            >
              Related routes from {location.name}
            </h2>
            <ul className="grid gap-6 lg:grid-cols-2" role="list">
              {relatedRoutes.map((route) => (
                <li key={route.id}>
                  <RouteDetailCard route={route} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        </div>
      </div>
      <CTABand
        content={{
          ...homeCta,
          headline: `Book travel involving ${location.name}`,
          whatsappMessage: `Hello Galaxy — I need transport or a tour involving ${location.name}. Details:`,
        }}
      />
    </>
  );
}
