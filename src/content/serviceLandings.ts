import type { ServiceLandingPage } from "@/lib/types";

/**
 * Keyword-targeted SEO landing pages at top-level paths.
 * Metadata, schema, sitemap, and nav/footer all consume this list.
 */
export const serviceLandings: ServiceLandingPage[] = [
  {
    id: "dubai-to-abu-dhabi-car-lift",
    path: "/dubai-to-abu-dhabi-car-lift",
    title: "Car Lift Dubai to Abu Dhabi | Galaxy Transport UAE",
    description:
      "Book a licensed car lift Dubai to Abu Dhabi — shared seat or private chauffeur. Clear WhatsApp fares, door-to-door pickup. Message Galaxy now to reserve.",
    keywords: [
      "Car lift Dubai to Abu Dhabi",
      "Car lift UAE",
      "Car lift Dubai",
      "UAE affordable transportation services",
    ],
    eyebrow: "Dubai → Abu Dhabi corridor",
    h1: "Car Lift Service from Dubai to Abu Dhabi",
    intro:
      "Galaxy runs a daily car lift Dubai to Abu Dhabi for commuters, tourists, and business travellers. Choose a shared seat for value or a private vehicle when you need the cabin to yourself — both confirmed on WhatsApp before you leave Dubai.",
    heroImage: "/images/routes/dubai-to-abu-dhabi.jpg",
    heroImageAlt:
      "Private car for Dubai to Abu Dhabi transfer on the UAE highway corridor",
    pricing: {
      title: "Pricing for Dubai to Abu Dhabi car lifts",
      description:
        "Fares depend on shared vs private, vehicle class, and pickup zone. Galaxy quotes a fixed price on WhatsApp — no surprise meters between Dubai and Abu Dhabi.",
      points: [
        "Shared seat: lowest fare when you can align with a fixed window",
        "Private sedan or SUV: exclusive cabin for meetings, families, or luggage",
        "Airport add-ons: continue to AUH or DXB on the same booking thread",
        "Tolls and waiting policy confirmed in chat before you ride",
      ],
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "Message your Dubai pickup",
          description:
            "Share neighbourhood or pin, preferred hour, passenger count, and bags.",
        },
        {
          title: "Confirm vehicle and fare",
          description:
            "Galaxy replies with shared or private options and a clear Abu Dhabi drop plan.",
        },
        {
          title: "Ride door to door",
          description:
            "Licensed chauffeur collects you in Dubai and drops on Corniche, Yas, Al Reem, or AUH.",
        },
      ],
    },
    serviceAreas: {
      title: "Service areas on this corridor",
      description:
        "Pickups across Dubai and drop-offs across Abu Dhabi — including airport links when you need them.",
      areas: [
        "Business Bay & Downtown Dubai",
        "Dubai Marina & JLT",
        "Abu Dhabi Corniche & Al Reem",
        "Yas Island & Khalifa City",
        "Abu Dhabi International Airport (AUH)",
      ],
    },
    faqs: [
      {
        id: "dxb-auh-faq-1",
        question: "How long is a car lift from Dubai to Abu Dhabi?",
        answer:
          "Expect roughly 1.5–2 hours for the ~130 km corridor in light traffic. Friday evenings, holidays, and fog mornings need extra buffer.",
      },
      {
        id: "dxb-auh-faq-2",
        question: "Is shared or private better for this route?",
        answer:
          "Shared suits light solo travel on a fixed window. Private suits families, executives, oversized luggage, or mid-route stops in Dubai or Abu Dhabi.",
      },
      {
        id: "dxb-auh-faq-3",
        question: "Can I book a return car lift Abu Dhabi to Dubai?",
        answer:
          "Yes — ask for a round trip in the same WhatsApp thread, or book the return corridor separately when your schedule is set.",
      },
    ],
    relatedLinks: [
      {
        label: "Car lift Abu Dhabi to Dubai",
        href: "/abu-dhabi-to-dubai-car-lift",
      },
      {
        label: "Abu Dhabi airport pick and drop",
        href: "/abu-dhabi-airport-transfer",
      },
      {
        label: "Dubai Airport pick and drop",
        href: "/dubai-airport-transfer",
      },
      {
        label: "Private taxi Dubai",
        href: "/private-taxi-dubai",
      },
    ],
    whatsappMessage:
      "Hello Galaxy — I'd like a car lift Dubai to Abu Dhabi. Pickup, time, and passengers:",
    serviceType: "Car Lift / Passenger Transportation",
  },
  {
    id: "abu-dhabi-to-dubai-car-lift",
    path: "/abu-dhabi-to-dubai-car-lift",
    title: "Car Lift Abu Dhabi to Dubai | Galaxy Transport UAE",
    description:
      "Licensed car lift Abu Dhabi to Dubai for weekday commuting and weekend trips. Shared or private chauffeur, WhatsApp booking. Reserve your seat with Galaxy today.",
    keywords: [
      "Car lift Abu Dhabi to Dubai",
      "Car lift UAE",
      "Car lift Dubai",
      "UAE affordable transportation services",
    ],
    eyebrow: "Abu Dhabi → Dubai corridor",
    h1: "Car Lift Service from Abu Dhabi to Dubai",
    intro:
      "Need a reliable car lift Abu Dhabi to Dubai? Galaxy covers Corniche, Yas, Khalifa City, and Al Raha pickups with Downtown, Marina, Business Bay, or DXB drop-offs — shared seats for value, private cabins when timing cannot slip.",
    heroImage: "/images/routes/abu-dhabi-to-dubai.jpg",
    heroImageAlt:
      "Chauffeur car ready for Abu Dhabi to Dubai car lift transfer",
    pricing: {
      title: "Pricing for Abu Dhabi to Dubai lifts",
      description:
        "Quote clarity matters on a weekday commute. Message Galaxy with your Abu Dhabi zone and Dubai drop — we lock a fare before you sit down.",
      points: [
        "Shared seats for light weekday commuting",
        "Private vehicles for hybrid workers and client days",
        "DXB / DWC continuations available on request",
        "Standing monthly plans for regular Abu Dhabi–Dubai riders",
      ],
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "Share your Abu Dhabi pickup",
          description:
            "Zone, preferred departure, passengers, and whether you need a same-day return.",
        },
        {
          title: "Choose shared or private",
          description:
            "Galaxy confirms vehicle class, fare, and Dubai drop neighbourhood.",
        },
        {
          title: "Commute with a named plan",
          description:
            "Licensed chauffeur collects you in Abu Dhabi and delivers you across Dubai.",
        },
      ],
    },
    serviceAreas: {
      title: "Service areas on this corridor",
      description:
        "Capital pickups and Dubai drop-offs tailored to offices, hotels, and airports.",
      areas: [
        "Abu Dhabi Corniche & Al Reem",
        "Yas Island & Al Raha",
        "Khalifa City",
        "Downtown Dubai & Business Bay",
        "Dubai Marina & Dubai International Airport (DXB)",
      ],
    },
    faqs: [
      {
        id: "auh-dxb-faq-1",
        question: "Can I keep a weekly Abu Dhabi to Dubai seat?",
        answer:
          "Yes. Share your standing window and Galaxy can align recurring seats so you are not re-booking from scratch every Sunday.",
      },
      {
        id: "auh-dxb-faq-2",
        question: "Do you drop at Dubai Airport?",
        answer:
          "Yes — DXB (and DWC on request) can be named as your Dubai drop when you book the car lift Abu Dhabi to Dubai.",
      },
      {
        id: "auh-dxb-faq-3",
        question: "What if traffic is heavy on E11?",
        answer:
          "We build buffer into hard arrival times and update you on WhatsApp if events or fog change the ETA.",
      },
    ],
    relatedLinks: [
      {
        label: "Car lift Dubai to Abu Dhabi",
        href: "/dubai-to-abu-dhabi-car-lift",
      },
      {
        label: "Dubai Airport pick and drop",
        href: "/dubai-airport-transfer",
      },
      {
        label: "Private taxi Dubai",
        href: "/private-taxi-dubai",
      },
      {
        label: "All services overview",
        href: "/services",
      },
    ],
    whatsappMessage:
      "Hello Galaxy — I'd like a car lift Abu Dhabi to Dubai. Pickup, time, and passengers:",
    serviceType: "Car Lift / Passenger Transportation",
  },
  {
    id: "dubai-airport-transfer",
    path: "/dubai-airport-transfer",
    title: "Dubai Airport Pick & Drop | Galaxy Transfers UAE",
    description:
      "Dubai Airport pick and drop for DXB and DWC — flight-tracked meet-and-greet, licensed chauffeurs, fixed WhatsApp fares. Book your UAE transfer now.",
    keywords: [
      "Dubai Airport pick and drop",
      "UAE airport transportation services",
      "Car lift Dubai",
      "Private taxi Dubai",
    ],
    eyebrow: "DXB & DWC transfers",
    h1: "Dubai Airport Pick and Drop Transfers",
    intro:
      "Galaxy provides Dubai Airport pick and drop with flight tracking, a clear meet point, and luggage-ready vehicles. Whether you land at DXB or DWC, your chauffeur confirmation lives in one WhatsApp thread — ideal for tourists, residents, and onward car lift UAE journeys.",
    heroImage: "/images/routes/uae-airport-shuttle.jpg",
    heroImageAlt:
      "Private transfer car waiting for Dubai Airport pick and drop at arrivals",
    pricing: {
      title: "Pricing for Dubai Airport transfers",
      description:
        "Airport fares reflect terminal, drop zone, vehicle class, and waiting buffer. Galaxy confirms everything before you land.",
      points: [
        "DXB Terminals 1–3 and DWC covered",
        "Sedans for light business travel; SUVs for families and bags",
        "Hotel, residence, and office drops across Dubai",
        "Optional continuation to Abu Dhabi or other emirates",
      ],
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "Send flight details",
          description:
            "Flight number, terminal if known, passenger count, and Dubai drop address.",
        },
        {
          title: "Receive meet instructions",
          description:
            "Plate, chauffeur name, and arrivals meet point arrive on WhatsApp.",
        },
        {
          title: "Land and ride",
          description:
            "We track your flight and adjust within the agreed buffer — then door-to-door delivery.",
        },
      ],
    },
    serviceAreas: {
      title: "Where we pick up and drop",
      description:
        "Dubai airports plus the neighbourhoods travellers ask for most after landing.",
      areas: [
        "Dubai International Airport (DXB)",
        "Al Maktoum International (DWC)",
        "Downtown, Marina, JBR & Business Bay hotels",
        "Residential communities across Dubai",
        "Onward Abu Dhabi transfers on request",
      ],
    },
    faqs: [
      {
        id: "dxb-apt-faq-1",
        question: "Do you track delayed flights?",
        answer:
          "Yes. Share your flight number and we monitor inbound status, adjusting pickup within the agreed waiting policy.",
      },
      {
        id: "dxb-apt-faq-2",
        question: "Can I continue from DXB to Abu Dhabi?",
        answer:
          "Absolutely — many guests book Dubai Airport pick and drop plus a private run to Abu Dhabi in the same chat.",
      },
      {
        id: "dxb-apt-faq-3",
        question: "Is child seat available?",
        answer:
          "Request child seats when you book so we assign a suitable vehicle before you land.",
      },
    ],
    relatedLinks: [
      {
        label: "Abu Dhabi airport pick and drop",
        href: "/abu-dhabi-airport-transfer",
      },
      {
        label: "Car lift Dubai to Abu Dhabi",
        href: "/dubai-to-abu-dhabi-car-lift",
      },
      {
        label: "Private taxi Dubai",
        href: "/private-taxi-dubai",
      },
      {
        label: "UAE airport services overview",
        href: "/transport/airport-transfers",
      },
    ],
    whatsappMessage:
      "Hello Galaxy — I need Dubai Airport pick and drop. Flight, terminal, and drop address:",
    serviceType: "Airport Transfer",
  },
  {
    id: "abu-dhabi-airport-transfer",
    path: "/abu-dhabi-airport-transfer",
    title: "Abu Dhabi Airport Pick & Drop | Galaxy Transport",
    description:
      "Abu Dhabi airport pick and drop with licensed chauffeurs, flight tracking, and fixed WhatsApp quotes. AUH meet-and-greet across the UAE — book now.",
    keywords: [
      "Abu Dhabi airport pick and drop",
      "UAE airport transportation services",
      "Car lift Abu Dhabi to Dubai",
      "Car lift UAE",
    ],
    eyebrow: "AUH transfers",
    h1: "Abu Dhabi Airport Pick and Drop Transfers",
    intro:
      "Galaxy handles Abu Dhabi airport pick and drop for leisure and business travellers. Meet-and-greet at AUH, luggage-ready vehicles, and optional continuation to Dubai hotels or residences — part of our UAE airport transportation services.",
    heroImage: "/images/routes/uae-airport-shuttle.jpg",
    heroImageAlt:
      "Licensed chauffeur vehicle for Abu Dhabi airport pick and drop service",
    pricing: {
      title: "Pricing for Abu Dhabi airport transfers",
      description:
        "AUH fares depend on drop city, vehicle class, and timing. Galaxy quotes before you fly so UAE airport transportation stays predictable.",
      points: [
        "AUH arrivals meet-and-greet with named chauffeur",
        "Drops across Abu Dhabi Corniche, Yas, and hotels",
        "Private run to Dubai available after landing",
        "Flight tracking and agreed waiting buffer included in the quote",
      ],
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "Share AUH flight details",
          description:
            "Flight number, passenger count, bags, and destination in Abu Dhabi or Dubai.",
        },
        {
          title: "Confirm fare and vehicle",
          description:
            "Sedan or SUV assigned with meet instructions on WhatsApp.",
        },
        {
          title: "Arrive and continue",
          description:
            "Chauffeur meets you after immigration and drives door to door.",
        },
      ],
    },
    serviceAreas: {
      title: "Service areas from AUH",
      description:
        "Capital drops and Dubai continuations for travellers who land in Abu Dhabi.",
      areas: [
        "Abu Dhabi International Airport (AUH)",
        "Corniche & downtown Abu Dhabi hotels",
        "Yas Island resorts",
        "Khalifa City & Al Raha",
        "Dubai hotel and residence continuations",
      ],
    },
    faqs: [
      {
        id: "auh-apt-faq-1",
        question: "Can you take me from AUH straight to Dubai?",
        answer:
          "Yes. Many guests book Abu Dhabi airport pick and drop with a private continuation to Dubai Marina, Downtown, or DXB.",
      },
      {
        id: "auh-apt-faq-2",
        question: "Where do we meet at AUH?",
        answer:
          "Your WhatsApp confirmation includes the arrivals meet description and vehicle plate before you land.",
      },
      {
        id: "auh-apt-faq-3",
        question: "Do you cover late-night arrivals?",
        answer:
          "Yes — share your flight time and we schedule a night transfer with the right vehicle class.",
      },
    ],
    relatedLinks: [
      {
        label: "Dubai Airport pick and drop",
        href: "/dubai-airport-transfer",
      },
      {
        label: "Car lift Abu Dhabi to Dubai",
        href: "/abu-dhabi-to-dubai-car-lift",
      },
      {
        label: "Car lift Dubai to Abu Dhabi",
        href: "/dubai-to-abu-dhabi-car-lift",
      },
      {
        label: "All services overview",
        href: "/services",
      },
    ],
    whatsappMessage:
      "Hello Galaxy — I need Abu Dhabi airport pick and drop. Flight and drop address:",
    serviceType: "Airport Transfer",
  },
  {
    id: "private-taxi-dubai",
    path: "/private-taxi-dubai",
    title: "Private Taxi Dubai | Affordable Chauffeur UAE",
    description:
      "Book a private taxi Dubai with licensed chauffeurs — city hops, airport runs, and inter-emirate lifts. Affordable chauffeur services in UAE via WhatsApp today.",
    keywords: [
      "Private taxi Dubai",
      "Affordable chauffeur services in UAE",
      "Car lift Dubai",
      "UAE affordable transportation services",
    ],
    eyebrow: "Private chauffeur · Dubai & UAE",
    h1: "Private Taxi and Chauffeur Service in Dubai",
    intro:
      "Searching for a private taxi Dubai riders can trust? Galaxy pairs licensed chauffeurs with clear WhatsApp quotes for city transfers, Dubai Airport pickups, and longer car lift UAE corridors to Abu Dhabi and beyond — affordable chauffeur services without kerbside surprises.",
    heroImage: "/images/fleet/toyota-camry.jpg",
    heroImageAlt:
      "Private taxi Dubai sedan for affordable chauffeur services in the UAE",
    pricing: {
      title: "Pricing for private taxi Dubai rides",
      description:
        "City hops and inter-emirate private runs are quoted differently. Tell Galaxy your points and we confirm vehicle class and fare before dispatch.",
      points: [
        "Short Dubai private taxi hops with fixed chat quotes",
        "Airport meet-and-greet at DXB or DWC",
        "Full-vehicle car lift Dubai to Abu Dhabi when you need exclusivity",
        "Hourly or half-day chauffeur options for multi-stop city days",
      ],
    },
    howItWorks: {
      title: "How it works",
      steps: [
        {
          title: "Describe the trip",
          description:
            "Pickup, drop, time, passengers, and whether stops are needed in Dubai.",
        },
        {
          title: "Lock the private vehicle",
          description:
            "Galaxy confirms sedan or SUV, fare, and chauffeur details on WhatsApp.",
        },
        {
          title: "Ride exclusively",
          description:
            "Your cabin stays private from door to door — no shared seats on this format.",
        },
      ],
    },
    serviceAreas: {
      title: "Where private taxi Dubai coverage reaches",
      description:
        "Dubai-first private chauffeur coverage with UAE-wide extensions when you need them.",
      areas: [
        "Downtown, Marina, JBR & Business Bay",
        "Dubai airports (DXB & DWC)",
        "Palm, Jumeirah & hotel districts",
        "Abu Dhabi private continuations",
        "Wider UAE corridors on request",
      ],
    },
    faqs: [
      {
        id: "pt-dxb-faq-1",
        question: "Is a private taxi cheaper than a shared car lift?",
        answer:
          "Shared seats cost less per person on busy corridors. Private taxi Dubai pricing wins when you need timing control, luggage space, or an exclusive cabin.",
      },
      {
        id: "pt-dxb-faq-2",
        question: "Can I book affordable chauffeur services for a full day?",
        answer:
          "Yes — ask for hourly or half-day coverage when you have multiple Dubai stops or client meetings.",
      },
      {
        id: "pt-dxb-faq-3",
        question: "Do you only operate inside Dubai?",
        answer:
          "Dubai is the core for private taxi bookings, but Galaxy also covers Abu Dhabi and UAE-wide car lifts under the same WhatsApp booking flow.",
      },
    ],
    relatedLinks: [
      {
        label: "Car lift Dubai to Abu Dhabi",
        href: "/dubai-to-abu-dhabi-car-lift",
      },
      {
        label: "Dubai Airport pick and drop",
        href: "/dubai-airport-transfer",
      },
      {
        label: "Car lift Abu Dhabi to Dubai",
        href: "/abu-dhabi-to-dubai-car-lift",
      },
      {
        label: "Browse all services",
        href: "/services",
      },
    ],
    whatsappMessage:
      "Hello Galaxy — I'd like a private taxi Dubai / chauffeur. Pickup, drop, and time:",
    serviceType: "Private Taxi / Chauffeur",
  },
];

export function getServiceLandingByPath(
  path: string,
): ServiceLandingPage | undefined {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return serviceLandings.find((page) => page.path === normalized);
}

export function getAllServiceLandingPaths(): string[] {
  return serviceLandings.map((page) => page.path);
}

/** Prefer SEO landing URLs when a corridor has a dedicated keyword page. */
export const routeSeoPathMap: Record<string, string> = {
  "dubai-to-abu-dhabi": "/dubai-to-abu-dhabi-car-lift",
  "abu-dhabi-to-dubai": "/abu-dhabi-to-dubai-car-lift",
  "uae-airport-shuttle": "/dubai-airport-transfer",
};

export function getRouteHref(slug: string): string {
  return routeSeoPathMap[slug] ?? `/routes/${slug}`;
}
