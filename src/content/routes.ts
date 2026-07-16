import type { RouteDetail } from "@/lib/types";

export const routes: RouteDetail[] = [
  {
    id: "dubai-to-abu-dhabi",
    slug: "dubai-to-abu-dhabi",
    title: "Dubai to Abu Dhabi",
    description:
      "Licensed car lift and private chauffeur from Dubai to Abu Dhabi — shared seats or exclusive vehicle, timed around your schedule.",
    category: "transport",
    distanceKm: "130 km",
    duration: "Approx. 1.5–2 hours",
    pickupPoints: ["Business Bay", "Downtown Dubai", "Dubai Marina", "JLT"],
    dropoffPoints: [
      "Corniche",
      "Yas Island",
      "Al Reem",
      "Abu Dhabi International Airport",
    ],
    keywords: ["Car lift Dubai to Abu Dhabi"],
    heroImage: "/images/routes/dubai-to-abu-dhabi.jpg",
    heroImageAlt: "Private car for Dubai to Abu Dhabi transfer on E11 corridor",
    flag: "Popular corridor",
  },
  {
    id: "abu-dhabi-to-dubai",
    slug: "abu-dhabi-to-dubai",
    title: "Abu Dhabi to Dubai",
    description:
      "Return car lift Abu Dhabi to Dubai with shared or private options — ideal for weekday commuting and weekend leisure runs.",
    category: "transport",
    distanceKm: "130 km",
    duration: "Approx. 1.5–2 hours",
    pickupPoints: ["Corniche", "Khalifa City", "Yas Island", "Al Raha"],
    dropoffPoints: [
      "Downtown Dubai",
      "Dubai Marina",
      "Dubai International Airport",
      "Business Bay",
    ],
    keywords: ["Car lift Abu Dhabi to Dubai"],
    heroImage: "/images/routes/abu-dhabi-to-dubai.jpg",
    heroImageAlt: "Private chauffeur car for Abu Dhabi to Dubai car lift",
    flag: "Commuter favourite",
  },
  {
    id: "dubai-to-sharjah",
    slug: "dubai-to-sharjah",
    title: "Dubai to Sharjah",
    description:
      "Daily shared and private car lift between Dubai and Sharjah — fixed morning windows, zone-aware drop-offs including SAIF and free zones.",
    category: "transport",
    distanceKm: "15–35 km",
    duration: "Approx. 30–75 minutes",
    pickupPoints: [
      "Al Nahda Dubai",
      "International City",
      "Silicon Oasis",
      "Deira",
    ],
    dropoffPoints: [
      "Al Nahda Sharjah",
      "SAIF Zone",
      "University City",
      "Sharjah Airport Free Zone",
    ],
    keywords: ["Car lift Dubai to Sharjah", "Car lift UAE"],
    heroImage: "/images/routes/dubai-to-sharjah.jpg",
    heroImageAlt: "Dubai to Sharjah commuting corridor",
    flag: "Busiest corridor",
  },
  {
    id: "dubai-to-ajman",
    slug: "dubai-to-ajman",
    title: "Dubai to Ajman",
    description:
      "Reliable Dubai–Ajman car lift for office, industrial, and hospitality workers with early departures around peak Sharjah traffic.",
    category: "transport",
    distanceKm: "30–50 km",
    duration: "Approx. 45–90 minutes",
    pickupPoints: ["Deira", "Business Bay", "Al Quoz", "DIP"],
    dropoffPoints: [
      "Ajman City Centre",
      "Al Rawda",
      "Jurf",
      "Ajman Industrial",
    ],
    keywords: ["Car lift Dubai to Ajman"],
    heroImage: "/images/routes/dubai-to-ajman.jpg",
    heroImageAlt: "Route connecting Dubai and Ajman",
    flag: "High demand",
  },
  {
    id: "dubai-to-fujairah",
    slug: "dubai-to-fujairah",
    title: "Dubai to Fujairah",
    description:
      "Long-distance mountain corridor car lift to Fujairah Port and free zone employers — early departures and luggage-ready vehicles.",
    category: "transport",
    distanceKm: "120–130 km",
    duration: "Approx. 1.5–2.5 hours",
    pickupPoints: ["Al Nahda", "Deira", "Mirdif", "Rashidiya"],
    dropoffPoints: ["Fujairah Port", "Fujairah Free Zone", "City centre"],
    keywords: ["Car lift Dubai to Fujairah"],
    heroImage: "/images/routes/dubai-to-fujairah.jpg",
    heroImageAlt: "Mountain route toward Fujairah",
    flag: "Mountain route",
  },
  {
    id: "dubai-to-ras-al-khaimah",
    slug: "dubai-to-ras-al-khaimah",
    title: "Dubai to Ras Al Khaimah",
    description:
      "Dubai to RAK car lift covering RAKEZ, Al Hamra, and free zone destinations with shared or private chauffeur options.",
    category: "transport",
    distanceKm: "~100 km",
    duration: "Approx. 1.5–2 hours",
    pickupPoints: ["Al Nahda", "Deira", "Mirdif", "International City"],
    dropoffPoints: ["RAKEZ", "Al Hamra Village", "RAK Free Trade Zone"],
    keywords: ["Car lift Dubai to Ras Al Khaimah"],
    heroImage: "/images/routes/dubai-to-ras-al-khaimah.jpg",
    heroImageAlt: "Corridor from Dubai to Ras Al Khaimah",
  },
  {
    id: "dubai-to-umm-al-quwain",
    slug: "dubai-to-umm-al-quwain",
    title: "Dubai to Umm Al Quwain",
    description:
      "Dubai–UAQ car lift for industrial, free zone, and hospitality workers with clear evening return coordination.",
    category: "transport",
    distanceKm: "60–80 km",
    duration: "Approx. 1–1.5 hours",
    pickupPoints: ["Deira", "International City", "Al Nahda"],
    dropoffPoints: ["UAQ Free Trade Zone", "Industrial zones", "City centre"],
    keywords: ["Car lift Dubai to Umm Al Quwain"],
    heroImage: "/images/routes/dubai-to-umm-al-quwain.jpg",
    heroImageAlt: "Route from Dubai to Umm Al Quwain",
  },
  {
    id: "dubai-desert-safari",
    slug: "dubai-desert-safari",
    title: "Dubai Desert Safari",
    description:
      "Sunset dune experience with hotel pickup, dune drive, desert camp hospitality, and return transfer included.",
    category: "tour",
    distanceKm: "40–70 km",
    duration: "6–7 hours",
    pickupPoints: ["Dubai hotels", "Marina residences", "Downtown apartments"],
    dropoffPoints: ["Same as pickup", "Optional city drop"],
    keywords: ["Dubai desert safari", "UAE desert tour"],
    heroImage: "/images/routes/dubai-desert-safari.jpg",
    heroImageAlt: "Desert dunes at golden hour near Dubai",
    flag: "Evening tour",
  },
  {
    id: "abu-dhabi-city-circuit",
    slug: "abu-dhabi-city-circuit",
    title: "Abu Dhabi City Circuit",
    description:
      "Guided day circuit covering Sheikh Zayed Grand Mosque, Corniche viewpoints, and cultural landmarks with private chauffeur.",
    category: "tour",
    distanceKm: "40–60 km",
    duration: "Full day",
    pickupPoints: ["Abu Dhabi hotels", "Yas Island resorts"],
    dropoffPoints: ["Same as pickup", "Airport transfer add-on"],
    keywords: ["Abu Dhabi city tour"],
    heroImage: "/images/routes/abu-dhabi-city-circuit.jpg",
    heroImageAlt: "Abu Dhabi landmarks on a city tour day",
  },
  {
    id: "hatta-mountain-day",
    slug: "hatta-mountain-day",
    title: "Hatta Mountain Day Trip",
    description:
      "Mountain air escape from Dubai — heritage village, dam views, and optional kayak stop with door-to-door transport.",
    category: "tour",
    distanceKm: "120–140 km",
    duration: "8–9 hours",
    pickupPoints: ["Dubai Marina", "Jumeirah", "Business Bay"],
    dropoffPoints: ["Same as pickup"],
    keywords: ["Hatta day trip", "UAE mountain tour"],
    heroImage: "/images/routes/hatta-mountain-day.jpg",
    heroImageAlt: "Hatta mountains and dam landscape",
  },
  {
    id: "uae-airport-shuttle",
    slug: "uae-airport-shuttle",
    title: "UAE Airport Shuttle",
    description:
      "Meet-and-greet pick and drop covering Dubai and Abu Dhabi airports with flight tracking and luggage-ready vehicles.",
    category: "transport",
    distanceKm: "Varies by airport",
    duration: "Flight-timed",
    pickupPoints: [
      "DXB Terminals",
      "DWC",
      "AUH",
      "Sharjah Airport (on request)",
    ],
    dropoffPoints: ["Hotels", "Residences", "Office parks across the UAE"],
    keywords: [
      "Dubai Airport pick and drop",
      "Abu Dhabi airport pick and drop",
      "UAE airport transportation services",
    ],
    heroImage: "/images/routes/uae-airport-shuttle.jpg",
    heroImageAlt: "Airport transfer vehicle for Dubai and Abu Dhabi pick and drop",
    flag: "Flight-synced",
  },
];

export function getRouteBySlug(slug: string): RouteDetail | undefined {
  return routes.find((route) => route.slug === slug);
}

export function getAllRouteSlugs(): string[] {
  return routes.map((route) => route.slug);
}

export function getTransportRoutes(): RouteDetail[] {
  return routes.filter((route) => route.category === "transport");
}

export function getTourRoutes(): RouteDetail[] {
  return routes.filter((route) => route.category === "tour");
}

export function getPopularRoutes(): RouteDetail[] {
  return routes.filter((route) =>
    ["dubai-to-abu-dhabi", "abu-dhabi-to-dubai", "dubai-to-sharjah"].includes(
      route.slug,
    ),
  );
}
