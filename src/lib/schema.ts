import { siteConfig } from "@/content/siteConfig";
import type {
  BlogPost,
  BreadcrumbItem,
  FAQItem,
  RouteDetail,
  ServiceLandingPage,
} from "@/lib/types";
import { absoluteUrl } from "@/lib/metadata";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency", "TaxiService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.defaultOgImage),
    logo: absoluteUrl(siteConfig.logoPng),
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
      "@id": `${siteConfig.url}/#organization`,
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
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoPng),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.keywords.join(", "),
  };
}

export type JsonLdSchema = Record<string, unknown>;
