import type { Metadata } from "next";
import { siteConfig } from "@/content/siteConfig";
import type {
  BlogPost,
  BreadcrumbItem,
  PageSeo,
  RouteDetail,
  ServiceLandingPage,
} from "@/lib/types";

function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

function resolveOgImage(path?: string): string {
  return absoluteUrl(path ?? siteConfig.defaultOgImage);
}

export function buildPageMetadata(seo: PageSeo): Metadata {
  const url = absoluteUrl(seo.path);
  const ogImage = resolveOgImage(seo.ogImage);

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.defaultOgImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}

export function buildHomeMetadata(): Metadata {
  return buildPageMetadata({
    title: "Car Lift UAE | Affordable Dubai to Abu Dhabi Transfers",
    description:
      "Reliable, affordable car lift and airport transfer service across UAE. Dubai to Abu Dhabi private taxi, airport pick & drop. Book now.",
    path: "/",
    keywords: [...siteConfig.keywordsByPage.home],
    ogImage: siteConfig.defaultOgImage,
  });
}

export function buildServiceLandingMetadata(
  page: ServiceLandingPage,
): Metadata {
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
    ogImage: page.heroImage,
  });
}

export function buildTransportMetadata(): Metadata {
  return buildPageMetadata({
    title: `Private Transfers & Car Lift | ${siteConfig.name}`,
    description:
      "Book licensed private taxi, shared car lift, monthly commuter plans, and chauffeur transport across Dubai, Abu Dhabi, and the wider UAE.",
    path: "/transport",
    keywords: [...siteConfig.keywordsByPage.transport],
  });
}

export function buildAirportTransfersMetadata(): Metadata {
  return buildPageMetadata({
    title: `Dubai & Abu Dhabi Airport Transfers | ${siteConfig.name}`,
    description:
      "Meet-and-greet airport pick and drop for DXB, DWC, AUH, and regional UAE airports with licensed chauffeurs and fixed WhatsApp booking.",
    path: "/transport/airport-transfers",
    keywords: [...siteConfig.keywordsByPage.airportTransfers],
  });
}

export function buildToursMetadata(): Metadata {
  return buildPageMetadata({
    title: `Desert Safaris, City Tours & Day Trips | ${siteConfig.name}`,
    description:
      "Curated UAE tours — desert safari evenings, Dubai and Abu Dhabi city circuits, mountain day trips, and custom multi-day itineraries.",
    path: "/tours",
    keywords: [
      "UAE desert safari",
      "Dubai city tour",
      "Abu Dhabi day trip",
      "UAE mountain tour",
    ],
  });
}

export function buildRouteMetadata(route: RouteDetail): Metadata {
  return buildPageMetadata({
    title: `${route.title} | ${siteConfig.name}`,
    description: route.description,
    path: `/routes/${route.slug}`,
    keywords: route.keywords,
    ogImage: route.heroImage,
  });
}

export function buildBlogIndexMetadata(): Metadata {
  return buildPageMetadata({
    title: `Travel Notes & Route Guides | ${siteConfig.name}`,
    description:
      "Practical UAE guides to car lifts, private chauffeurs, airport pickups, and tour transport from Galaxy Tour & Transport.",
    path: "/blog",
    keywords: [
      "Car lift UAE",
      "Car lift Dubai",
      "Car lift Dubai to Abu Dhabi",
      "Dubai Airport pick and drop",
      "Affordable chauffeur services in UAE",
      "UAE travel tips",
    ],
  });
}

export function buildBlogPostMetadata(post: BlogPost): Metadata {
  return buildPageMetadata({
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogImage: post.heroImage,
  });
}

export function buildRoutesIndexMetadata(): Metadata {
  return buildPageMetadata({
    title: `Popular Car Lift Routes Across the UAE | ${siteConfig.name}`,
    description:
      "Browse Galaxy corridors — Dubai to Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, Umm Al Quwain, plus tours and airport shuttles.",
    path: "/routes",
    keywords: [
      "Car lift UAE",
      "Car lift Dubai to Abu Dhabi",
      "Car lift Dubai",
    ],
  });
}

export function buildLocationsIndexMetadata(): Metadata {
  return buildPageMetadata({
    title: `Service Locations Across the UAE | ${siteConfig.name}`,
    description:
      "Car lift and tour coverage in Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain.",
    path: "/locations",
    keywords: ["Car lift UAE", "Car lift Dubai", "UAE affordable transportation services"],
  });
}

export function buildLocationMetadata(location: {
  name: string;
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  heroImage: string;
}): Metadata {
  return buildPageMetadata({
    title: `${location.title} | ${siteConfig.name}`,
    description: location.description,
    path: `/locations/${location.slug}`,
    keywords: location.keywords,
    ogImage: location.heroImage,
  });
}

export function buildServicesMetadata(): Metadata {
  return buildPageMetadata({
    title: `Transport & Tour Services | ${siteConfig.name}`,
    description:
      "Shared car lift, private transfers, monthly plans, airport pickups, and UAE tours — all booked on WhatsApp.",
    path: "/services",
    keywords: [
      "UAE affordable transportation services",
      "Private taxi Dubai",
      "Affordable chauffeur services in UAE",
    ],
  });
}

export function buildGalleryMetadata(): Metadata {
  return buildPageMetadata({
    title: `Fleet & Journey Gallery | ${siteConfig.name}`,
    description:
      "Explore Galaxy vehicles and journey visuals — sedans, SUVs, electric options, tours, and airport transfers.",
    path: "/gallery",
    keywords: ["Galaxy Tour & Transport fleet", "UAE chauffeur vehicles"],
  });
}

export function buildAboutMetadata(): Metadata {
  return buildPageMetadata({
    title: `About Galaxy Tour & Transport | ${siteConfig.name}`,
    description:
      "Learn how Galaxy pairs licensed UAE tours with chauffeur transport and WhatsApp-first booking.",
    path: "/about",
    keywords: ["Galaxy Tour & Transport", "UAE tours and transport"],
  });
}

export function buildContactMetadata(): Metadata {
  return buildPageMetadata({
    title: `Contact & WhatsApp Booking | ${siteConfig.name}`,
    description:
      "Message Galaxy on WhatsApp for car lifts, private transfers, airport pickups, and UAE tour bookings.",
    path: "/contact",
    keywords: ["Galaxy Tour & Transport contact", "WhatsApp car lift Dubai"],
  });
}

export function buildBreadcrumbLabels(items: BreadcrumbItem[]): string {
  return items.map((item) => item.name).join(" › ");
}

export { absoluteUrl, resolveOgImage };
