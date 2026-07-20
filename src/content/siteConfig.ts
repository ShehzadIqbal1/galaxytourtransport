import type { NavItem, SocialLink } from "@/lib/types";

function requireValue(name: string, value: string | undefined): string {
  if (!value || value.trim() === "") {
    throw new Error(
      `Missing required environment variable: ${name}. Copy .env.example to .env.local and set a value.`,
    );
  }
  return value.trim();
}

// IMPORTANT: access NEXT_PUBLIC_* with static identifiers so Next.js inlines them for the client bundle.
const siteUrl = requireValue(
  "NEXT_PUBLIC_SITE_URL",
  process.env.NEXT_PUBLIC_SITE_URL,
).replace(/\/$/, "");

const whatsappNumber = requireValue(
  "NEXT_PUBLIC_WHATSAPP_NUMBER",
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
).replace(/\D/g, "");

if (!/^\d{10,15}$/.test(whatsappNumber)) {
  throw new Error(
    "NEXT_PUBLIC_WHATSAPP_NUMBER must be a valid E.164-style digit string (10–15 digits).",
  );
}

const gaIdRaw = process.env.NEXT_PUBLIC_GA_ID?.trim();
const mapsKeyRaw = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();

export const siteConfig = {
  name: "Galaxy Tour & Transport",
  shortName: "Galaxy",
  legalName: "Galaxy Tour & Transport LLC",
  domain: "galaxytourtransport.com",
  url: siteUrl,
  locale: "en_AE",
  defaultLocale: "en",
  description:
    "Reliable, affordable car lift and airport transfer service across UAE. Dubai to Abu Dhabi private taxi, airport pick & drop. Book on WhatsApp now.",
  phoneDisplay: "+971 50 559 7803",
  phoneHref: "tel:+971505597803",
  email: "info@galaxytourtransport.com",
  address: {
    streetAddress: "Business Bay",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  mapsUrl: "https://maps.app.goo.gl/cG6aT2HEtcAfESk28",
  /** Google Maps embed (no API key required) for Business Bay, Dubai */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Business+Bay,+Dubai,+United+Arab+Emirates&output=embed",
  serviceArea: "United Arab Emirates",
  whatsappNumber,
  gaId: gaIdRaw ? gaIdRaw : undefined,
  googleMapsApiKey: mapsKeyRaw ? mapsKeyRaw : undefined,
  defaultOgImage: "/images/hero/og-default.svg",
  defaultOgImageAlt:
    "Affordable chauffeur car lift UAE — Dubai to Abu Dhabi private transfers",
  logo: "/images/brand/logo-v4.png",
  logoPng: "/images/brand/logo-v4.png",
  logoFull: "/images/brand/logo-v4.png",
  serviceTags: [
    "All over the UAE",
    "Transportation & Tourism",
    "Chauffeur services",
  ] as const,
  keywordsByPage: {
    home: [
      "Car lift UAE",
      "Car lift Dubai",
      "Affordable chauffeur services in UAE",
      "UAE affordable transportation services",
    ],
    transport: [
      "Private taxi Dubai",
      "UAE affordable transportation services",
      "Car lift Dubai",
    ],
    airportTransfers: [
      "Dubai Airport pick and drop",
      "Abu Dhabi airport pick and drop",
      "UAE airport transportation services",
    ],
  } as const,
  nav: [
    { id: "home", label: "Home", href: "/" },
    {
      id: "routes",
      label: "Popular Routes",
      href: "/routes",
      children: [
        {
          id: "route-dxb-auh",
          label: "Car Lift Dubai to Abu Dhabi",
          href: "/dubai-to-abu-dhabi-car-lift",
        },
        {
          id: "route-auh-dxb",
          label: "Car Lift Abu Dhabi to Dubai",
          href: "/abu-dhabi-to-dubai-car-lift",
        },
        {
          id: "route-dxb-airport",
          label: "Dubai Airport Transfer",
          href: "/dubai-airport-transfer",
        },
        {
          id: "route-auh-airport",
          label: "Abu Dhabi Airport Transfer",
          href: "/abu-dhabi-airport-transfer",
        },
      ],
    },
    { id: "locations", label: "Locations", href: "/locations" },
    { id: "services", label: "Services", href: "/services" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  footerNav: [
    { id: "routes", label: "Popular routes", href: "/routes" },
    { id: "locations", label: "Locations", href: "/locations" },
    { id: "services", label: "Services", href: "/services" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "tours", label: "Tours", href: "/tours" },
    { id: "transport", label: "Transport", href: "/transport" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  footerServiceLinks: [
    {
      id: "seo-dxb-auh",
      label: "Car lift Dubai to Abu Dhabi",
      href: "/dubai-to-abu-dhabi-car-lift",
    },
    {
      id: "seo-auh-dxb",
      label: "Car lift Abu Dhabi to Dubai",
      href: "/abu-dhabi-to-dubai-car-lift",
    },
    {
      id: "seo-dxb-airport",
      label: "Dubai Airport pick and drop",
      href: "/dubai-airport-transfer",
    },
    {
      id: "seo-auh-airport",
      label: "Abu Dhabi airport pick and drop",
      href: "/abu-dhabi-airport-transfer",
    },
    {
      id: "seo-private-taxi",
      label: "Private taxi Dubai",
      href: "/private-taxi-dubai",
    },
    {
      id: "seo-airport-overview",
      label: "UAE airport transportation services",
      href: "/transport/airport-transfers",
    },
  ] satisfies NavItem[],
  social: [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/galaxytourtransport/",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61591979160655",
    },
  ] satisfies SocialLink[],
  poweredBy: {
    label: "mintylogix.com",
    href: "https://mintylogix.com",
  },
  defaultWhatsAppMessage:
    "Hello Galaxy Tour & Transport — I'd like to enquire about a booking.",
} as const;

export type SiteConfig = typeof siteConfig;
