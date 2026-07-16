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
    title: "Private Taxi Dubai & Car Lift | Galaxy Transport",
    description:
      "Book private taxi Dubai, shared car lift, and affordable chauffeur services in UAE. WhatsApp quotes for Dubai, Abu Dhabi, and beyond.",
    path: "/transport",
    keywords: [...siteConfig.keywordsByPage.transport],
  });
}

export function buildAirportTransfersMetadata(): Metadata {
  return buildPageMetadata({
    title: "UAE Airport Transfers | DXB, DWC & AUH Pickup",
    description:
      "UAE airport transportation services — Dubai Airport pick and drop plus Abu Dhabi airport pick and drop with flight tracking. Book on WhatsApp.",
    path: "/transport/airport-transfers",
    keywords: [...siteConfig.keywordsByPage.airportTransfers],
  });
}

export function buildToursMetadata(): Metadata {
  return buildPageMetadata({
    title: "UAE Desert Safari & City Tours | Galaxy Transport",
    description:
      "Curated UAE tours with transport included — Dubai desert safari, Abu Dhabi city circuits, mountain days, and custom itineraries. Book on WhatsApp.",
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
    title: "UAE Car Lift & Airport Travel Guides | Galaxy",
    description:
      "Guides on car lift Dubai to Abu Dhabi costs, airport transfers, private taxi vs public transport, and affordable chauffeur tips across the UAE.",
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
    title: "Popular Car Lift Routes UAE | Galaxy Transport",
    description:
      "Browse car lift UAE corridors — Dubai to Abu Dhabi, Sharjah, Ajman, Fujairah, RAK, plus airport shuttles. Book licensed seats on WhatsApp.",
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
    title: "Car Lift Locations Across the UAE | Galaxy",
    description:
      "Service coverage in Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and UAQ — car lifts and affordable chauffeur services.",
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
    title: "UAE Car Lift & Chauffeur Services | Galaxy",
    description:
      "Overview of Galaxy services — car lift UAE, private taxi Dubai, airport pick and drop, monthly plans, and tours. Compare formats and book on WhatsApp.",
    path: "/services",
    keywords: [
      "UAE affordable transportation services",
      "Private taxi Dubai",
      "Affordable chauffeur services in UAE",
      "Car lift UAE",
    ],
  });
}

export function buildGalleryMetadata(): Metadata {
  return buildPageMetadata({
    title: "Fleet Gallery | Galaxy Tour & Transport UAE",
    description:
      "See Galaxy sedans, SUVs, and chauffeur vehicles used for Dubai–Abu Dhabi car lifts, airport transfers, and UAE tour days.",
    path: "/gallery",
    keywords: ["Galaxy Tour & Transport fleet", "UAE chauffeur vehicles"],
  });
}

export function buildAboutMetadata(): Metadata {
  return buildPageMetadata({
    title: "About Galaxy | UAE Tours & Car Lift Operator",
    description:
      "Galaxy Tour & Transport is a licensed UAE operator for car lifts, private taxi Dubai rides, airport transfers, and curated tours booked on WhatsApp.",
    path: "/about",
    keywords: ["Galaxy Tour & Transport", "Car lift UAE", "Affordable chauffeur services in UAE"],
  });
}

export function buildContactMetadata(): Metadata {
  return buildPageMetadata({
    title: "Contact Galaxy | WhatsApp Car Lift Booking UAE",
    description:
      "Contact Galaxy in Business Bay, Dubai for car lift UAE quotes, airport pick and drop, and private taxi Dubai. Call, email, or WhatsApp to book.",
    path: "/contact",
    keywords: ["Galaxy Tour & Transport contact", "WhatsApp car lift Dubai", "Car lift UAE"],
  });
}

export function buildBreadcrumbLabels(items: BreadcrumbItem[]): string {
  return items.map((item) => item.name).join(" › ");
}

export { absoluteUrl, resolveOgImage };
