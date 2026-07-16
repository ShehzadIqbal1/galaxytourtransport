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
    "Licensed UAE tours and chauffeur transport desert safaris, city itineraries, car lifts, and airport transfers booked on WhatsApp.",
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
  serviceArea: "United Arab Emirates",
  whatsappNumber,
  gaId: gaIdRaw ? gaIdRaw : undefined,
  googleMapsApiKey: mapsKeyRaw ? mapsKeyRaw : undefined,
  defaultOgImage: "/images/hero/og-default.svg",
  defaultOgImageAlt:
    "Galaxy Tour & Transport — desert and city journeys across the UAE",
  logo: "/images/brand/logo-mark.svg",
  logoPng: "/images/brand/logo-mark.png",
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
    ],
    transport: [
      "Private taxi Dubai",
      "UAE affordable transportation services",
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
          href: "/routes/dubai-to-abu-dhabi",
        },
        {
          id: "route-auh-dxb",
          label: "Car Lift Abu Dhabi to Dubai",
          href: "/routes/abu-dhabi-to-dubai",
        },
      ],
    },
    { id: "locations", label: "Locations", href: "/locations" },
    { id: "services", label: "Services", href: "/services" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
    { id: "blog", label: "Blog", href: "/blog" },
  ] satisfies NavItem[],
  footerNav: [
    { id: "routes", label: "Popular routes", href: "/routes" },
    { id: "locations", label: "Locations", href: "/locations" },
    { id: "services", label: "Services", href: "/services" },
    { id: "tours", label: "Tours", href: "/tours" },
    { id: "transport", label: "Transport", href: "/transport" },
    {
      id: "airport",
      label: "Airport transfers",
      href: "/transport/airport-transfers",
    },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
    { id: "blog", label: "Blog", href: "/blog" },
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
