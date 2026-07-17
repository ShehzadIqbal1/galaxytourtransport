export type StatIcon =
  | "pin"
  | "car"
  | "clock"
  | "calendar"
  | "shield"
  | "users";

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon?: StatIcon;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ComparisonItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  highlighted?: boolean;
  tone: "shared" | "private" | "risk";
}

export interface ServiceFormat {
  id: string;
  category: "tours" | "transport";
  title: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  category: "suv" | "sedan" | "electric";
  categoryLabel: string;
  seats: number;
  premium: boolean;
  tags: string[];
  image: string;
  imageAlt: string;
  description: string;
}

export interface RouteDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "tour" | "transport";
  distanceKm: string;
  duration: string;
  pickupPoints: string[];
  dropoffPoints: string[];
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
  flag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  badge: string;
  preview: {
    label: string;
    title: string;
    lines: string[];
    status: string;
  };
}

export interface LegalColumn {
  id: string;
  title: string;
  description: string;
  points: string[];
  variant: "good" | "bad";
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

export interface LocationCity {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  highlights: string[];
  relatedRouteSlugs: string[];
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
  category: "fleet" | "tours" | "routes";
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
}

export interface ContactFormFieldOption {
  value: string;
  label: string;
}

export interface ContactFormContent {
  eyebrow: string;
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  interestLabel: string;
  interestPlaceholder: string;
  interestOptions: ContactFormFieldOption[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  requiredNote: string;
}

export interface QuoteFormContent {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  phoneCodeLabel: string;
  pickupLabel: string;
  pickupPlaceholder: string;
  dropoffLabel: string;
  dropoffPlaceholder: string;
  dateLabel: string;
  timeLabel: string;
  vehicleLabel: string;
  vehiclePlaceholder: string;
  vehicleCustomOptionLabel: string;
  vehicleCustomLabel: string;
  vehicleCustomPlaceholder: string;
  submitLabel: string;
  requiredNote: string;
  errors: {
    name: string;
    phone: string;
    pickup: string;
    dropoff: string;
    date: string;
    datePast: string;
    time: string;
    vehicle: string;
    vehicleCustom: string;
  };
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  relatedRouteSlugs?: string[];
  heroImage: string;
  heroImageAlt: string;
  body: string;
  readingTimeMinutes: number;
}

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  ogImage?: string;
}

export interface ServiceLandingRelatedLink {
  label: string;
  href: string;
}

export interface ServiceLandingPricing {
  title: string;
  description: string;
  points: string[];
}

export interface ServiceLandingStep {
  title: string;
  description: string;
}

export interface ServiceLandingHowItWorks {
  title: string;
  steps: ServiceLandingStep[];
}

export interface ServiceLandingServiceAreas {
  title: string;
  description: string;
  areas: string[];
}

/** Keyword-targeted service landing page (top-level SEO routes). */
export interface ServiceLandingPage {
  id: string;
  /** URL path including leading slash, e.g. `/dubai-to-abu-dhabi-car-lift` */
  path: string;
  /** Meta title — keep ~55–60 characters */
  title: string;
  /** Meta description — keep ~150–160 characters */
  description: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  pricing: ServiceLandingPricing;
  howItWorks: ServiceLandingHowItWorks;
  serviceAreas: ServiceLandingServiceAreas;
  faqs: FAQItem[];
  relatedLinks: ServiceLandingRelatedLink[];
  whatsappMessage: string;
  serviceType: string;
}

export interface CtaContent {
  eyebrow?: string;
  headline: string;
  description: string;
  primaryLabel: string;
  secondaryLabel?: string;
  whatsappMessage: string;
}

export interface TrustSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  features: FeatureItem[];
  ctaLabel: string;
  whatsappMessage: string;
}
