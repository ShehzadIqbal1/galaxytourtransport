import type { LocationCity } from "@/lib/types";

export const locations: LocationCity[] = [
  {
    id: "dubai",
    slug: "dubai",
    name: "Dubai",
    title: "Car lift & tours from Dubai",
    description:
      "Galaxy coordinates shared car lifts, private chauffeurs, airport transfers, and desert tours across Dubai and every major UAE corridor.",
    summary:
      "Dubai is our primary hub for inter-emirate commuting, hotel pickups, and airport meet-and-greet.",
    highlights: [
      "Corridors to Abu Dhabi, Sharjah, Ajman, Fujairah, RAK, and UAQ",
      "DXB and DWC airport transfers",
      "Desert safari and city itinerary pickups",
    ],
    relatedRouteSlugs: [
      "dubai-to-abu-dhabi",
      "dubai-to-sharjah",
      "dubai-to-ajman",
      "dubai-desert-safari",
      "uae-airport-shuttle",
    ],
    keywords: ["Car lift Dubai", "Car lift UAE", "Private taxi Dubai"],
    heroImage: "/images/locations/dubai.jpg",
    heroImageAlt: "Dubai skyline transport hub",
  },
  {
    id: "abu-dhabi",
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    title: "Car lift & city circuits in Abu Dhabi",
    description:
      "Licensed transfers between Abu Dhabi and Dubai, plus chauffeur-led city circuits for visitors and residents.",
    summary:
      "From Corniche offices to Yas Island hotels — shared lifts and private vehicles on request.",
    highlights: [
      "Abu Dhabi to Dubai weekday lifts",
      "AUH airport pick and drop",
      "Mosque and cultural day circuits",
    ],
    relatedRouteSlugs: [
      "abu-dhabi-to-dubai",
      "dubai-to-abu-dhabi",
      "abu-dhabi-city-circuit",
      "uae-airport-shuttle",
    ],
    keywords: ["Car lift Abu Dhabi to Dubai", "Abu Dhabi airport pick and drop"],
    heroImage: "/images/locations/abu-dhabi.jpg",
    heroImageAlt: "Abu Dhabi city transport corridors",
  },
  {
    id: "sharjah",
    slug: "sharjah",
    name: "Sharjah",
    title: "Car lift services in Sharjah",
    description:
      "High-frequency Dubai–Sharjah car lift covering residential gates, SAIF Zone, and university destinations.",
    summary:
      "The UAE’s busiest commuting corridor — Galaxy focuses on punctual windows and zone-aware drop-offs.",
    highlights: [
      "Al Nahda and Muweilah pickups",
      "SAIF Zone and free zone experience",
      "Ladies-preferred chauffeur on request",
    ],
    relatedRouteSlugs: ["dubai-to-sharjah"],
    keywords: ["Car lift Dubai to Sharjah", "Car lift UAE"],
    heroImage: "/images/locations/sharjah.jpg",
    heroImageAlt: "Sharjah commuting and city routes",
  },
  {
    id: "ajman",
    slug: "ajman",
    name: "Ajman",
    title: "Car lift services in Ajman",
    description:
      "Dubai–Ajman shared and private lifts for office, retail, and industrial workers with early peak-hour timing.",
    summary:
      "Predictable morning departures that account for Sharjah traffic before Ajman arrivals.",
    highlights: [
      "City Centre and Al Rawda coverage",
      "Industrial area drop-offs",
      "Monthly commuter packages",
    ],
    relatedRouteSlugs: ["dubai-to-ajman"],
    keywords: ["Car lift Dubai to Ajman"],
    heroImage: "/images/locations/ajman.jpg",
    heroImageAlt: "Ajman transport and car lift coverage",
  },
  {
    id: "fujairah",
    slug: "fujairah",
    name: "Fujairah",
    title: "Car lift services in Fujairah",
    description:
      "Mountain-route car lift from Dubai to Fujairah Port and free zone employers with early industrial start times.",
    summary:
      "Longer corridor travel where vehicle comfort and confirmed schedules matter most.",
    highlights: [
      "Port and free zone drop-offs",
      "Early departure windows",
      "Book-ahead seat confirmation",
    ],
    relatedRouteSlugs: ["dubai-to-fujairah", "hatta-mountain-day"],
    keywords: ["Car lift Dubai to Fujairah"],
    heroImage: "/images/locations/fujairah.jpg",
    heroImageAlt: "Fujairah coastal and mountain corridor",
  },
  {
    id: "ras-al-khaimah",
    slug: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    title: "Car lift services in Ras Al Khaimah",
    description:
      "Dubai to RAK transfers for RAKEZ, hospitality, and free zone travellers with shared or private options.",
    summary:
      "Confirm your exact workplace zone so we route Al Hamra, RAKEZ, or city centre correctly.",
    highlights: [
      "RAKEZ and free zone coverage",
      "Al Hamra Village hospitality runs",
      "Shared or private vehicle choice",
    ],
    relatedRouteSlugs: ["dubai-to-ras-al-khaimah"],
    keywords: ["Car lift Dubai to Ras Al Khaimah"],
    heroImage: "/images/locations/ras-al-khaimah.jpg",
    heroImageAlt: "Ras Al Khaimah car lift destinations",
  },
  {
    id: "umm-al-quwain",
    slug: "umm-al-quwain",
    name: "Umm Al Quwain",
    title: "Car lift services in Umm Al Quwain",
    description:
      "Dubai–UAQ car lift for free zone, industrial, and hospitality workers with agreed evening return plans.",
    summary:
      "Smaller corridor demand means clear WhatsApp coordination on return timing is essential.",
    highlights: [
      "Free zone and industrial drop-offs",
      "Flexible evening returns",
      "Direct driver chat after confirmation",
    ],
    relatedRouteSlugs: ["dubai-to-umm-al-quwain"],
    keywords: ["Car lift Dubai to Umm Al Quwain"],
    heroImage: "/images/locations/umm-al-quwain.jpg",
    heroImageAlt: "Umm Al Quwain transport corridor",
  },
];

export function getLocationBySlug(slug: string): LocationCity | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}
