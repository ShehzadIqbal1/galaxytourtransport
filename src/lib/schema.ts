import { serviceLandings } from "@/content/serviceLandings";
import { siteConfig } from "@/content/siteConfig";
import type {
  BlogPost,
  BreadcrumbItem,
  FAQItem,
  RouteDetail,
  ServiceLandingPage,
} from "@/lib/types";
import { absoluteUrl } from "@/lib/metadata";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

const knowsAbout = [
  ...siteConfig.keywordsByPage.home,
  ...siteConfig.keywordsByPage.airportTransfers,
  "Car lift Dubai to Abu Dhabi",
  "Private taxi Dubai",
  "Desert safari UAE",
  "Monthly car lift UAE",
] as const;

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency", "TaxiService"],
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.defaultOgImage),
    logo: absoluteUrl(siteConfig.logoFull),
    description: siteConfig.description,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    areaServed: {
      "@type": "Country",
      name: siteConfig.serviceArea,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    hasMap: siteConfig.mapsUrl,
    sameAs: siteConfig.social.map((link) => link.href),
    priceRange: "$$",
    knowsAbout: [...knowsAbout],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneDisplay,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "reservations",
        areaServed: "AE",
        availableLanguage: ["en"],
        url: `https://wa.me/${siteConfig.whatsappNumber}`,
      },
    ],
    makesOffer: serviceLandings.map((page) => ({
      "@type": "Offer",
      url: absoluteUrl(page.path),
      itemOffered: {
        "@type": "Service",
        name: page.h1,
        description: page.description,
        serviceType: page.serviceType,
        provider: { "@id": organizationId },
        areaServed: {
          "@type": "Country",
          name: siteConfig.serviceArea,
        },
        url: absoluteUrl(page.path),
      },
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-AE",
    publisher: { "@id": organizationId },
    about: { "@id": organizationId },
  };
}

export function buildServiceSchema(
  input:
    | RouteDetail
    | Pick<
        ServiceLandingPage,
        "h1" | "description" | "path" | "serviceType"
      >,
) {
  const isRoute = "slug" in input && "category" in input;
  const name = isRoute ? input.title : input.h1;
  const description = input.description;
  const url = isRoute
    ? absoluteUrl(`/routes/${input.slug}`)
    : absoluteUrl(input.path);
  const serviceType = isRoute
    ? input.category === "tour"
      ? "Tour"
      : "Passenger Transportation"
    : input.serviceType;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@id": organizationId,
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.serviceArea,
    },
    url,
    serviceType,
  };
}

export function buildFaqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    image: absoluteUrl(post.heroImage),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      "@id": organizationId,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      "@id": organizationId,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoFull),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.keywords.join(", "),
    about: post.keywords.map((keyword) => ({
      "@type": "Thing",
      name: keyword,
    })),
  };
}

export type JsonLdSchema = Record<string, unknown>;
