import type {
  ComparisonItem,
  CtaContent,
  FeatureItem,
  LegalColumn,
  ProcessStep,
  StatItem,
  TrustSectionContent,
} from "@/lib/types";

export const heroContent = {
  eyebrow: "Licensed & UAE-wide transport provider",
  headlineBefore: "Tours & Car Lift UAE:",
  headlineHighlight: "Reliable, Affordable",
  headlineAfter: "Journeys Across Every Emirate.",
  subcopy:
    "Galaxy Tour & Transport pairs curated UAE tours with licensed car lifts, private chauffeurs, and airport transfers — confirmed in chat, delivered on time.",
  primaryCta: "Book on WhatsApp",
  secondaryCta: "Call Now",
  whatsappMessage:
    "Hello Galaxy — I'd like to book a tour or transfer. Here are my details:",
} as const;

export const heroStats: StatItem[] = [
  {
    id: "stat-emirates",
    value: "7",
    label: "Emirates covered",
    icon: "pin",
  },
  {
    id: "stat-fleet",
    value: "15+",
    label: "Fleet vehicles",
    icon: "car",
  },
  {
    id: "stat-experience",
    value: "5+",
    label: "Years of experience",
    icon: "shield",
  },
  {
    id: "stat-routes",
    value: "Daily",
    label: "Dubai–Abu Dhabi lifts",
    icon: "calendar",
  },
];

export const explainerContent = {
  eyebrow: "How Galaxy works",
  title: "What a Galaxy booking looks like",
  description:
    "Share your route, date, and party size. We match the right vehicle — shared seat or private chauffeur — and send a clear confirmation before pickup.",
} as const;

export const explainerFeatures: FeatureItem[] = [
  {
    id: "feat-whatsapp",
    title: "WhatsApp-first confirmations",
    description:
      "Fares, pickup points, and driver details live in one chat thread you can revisit anytime.",
  },
  {
    id: "feat-licensed",
    title: "Licensed operators only",
    description:
      "Tourism and transport licensing kept current so corporate and leisure guests travel with clarity.",
  },
  {
    id: "feat-fleet",
    title: "Right vehicle for the job",
    description:
      "From Camry car lifts to Land Cruiser desert days and Tesla chauffeur options.",
  },
  {
    id: "feat-uae",
    title: "All over the UAE",
    description:
      "Inter-emirate corridors, airport runs, and mountain day trips from a single team.",
  },
];

export const costComparisons: ComparisonItem[] = [
  {
    id: "cmp-shared",
    title: "Shared transport",
    description:
      "Seat-based car lift on fixed corridors — the economical way to move between emirates.",
    points: [
      "Lower per-seat fare",
      "Set pickup windows",
      "Ideal for solo or duo travellers",
    ],
    tone: "shared",
  },
  {
    id: "cmp-private",
    title: "Private licensed transport",
    description:
      "Your vehicle, your timing, with a licensed chauffeur and transparent WhatsApp quote.",
    points: [
      "Door-to-door flexibility",
      "Luggage-ready SUVs available",
      "Corporate-friendly invoices on request",
    ],
    highlighted: true,
    tone: "private",
  },
  {
    id: "cmp-unlicensed",
    title: "Unlicensed operators",
    description:
      "Informal rides may look cheaper until cancellations, unclear insurance, or disputed fares appear.",
    points: [
      "Uncertain insurance cover",
      "No formal recourse on disputes",
      "Variable vehicle standards",
    ],
    tone: "risk",
  },
];

export const trustSection: TrustSectionContent = {
  eyebrow: "Travel with confidence",
  title: "Comfort-first options for every guest",
  description:
    "Whether you need a ladies-preferred chauffeur, a quiet executive sedan, or a family SUV with room for bags, we tailor the assignment before you leave the hotel lobby.",
  features: [
    {
      id: "trust-ladies",
      title: "Ladies-preferred chauffeurs",
      description:
        "Request a female chauffeur for eligible routes and we confirm availability before you commit.",
    },
    {
      id: "trust-premium",
      title: "Premium chauffeur tier",
      description:
        "Lexus and Tesla assignments for guests who want a quieter, elevated cabin experience.",
    },
    {
      id: "trust-tracking",
      title: "Clear pickup cues",
      description:
        "Meet points, vehicle details, and driver name shared in WhatsApp ahead of every airport arrival.",
    },
  ],
  ctaLabel: "Request a preferred chauffeur",
  whatsappMessage:
    "Hello Galaxy — I'd like to request a preferred chauffeur for my upcoming trip.",
};

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Message your plan",
    description:
      "Send date, pickup, destination, passengers, and any luggage notes on WhatsApp.",
    badge: "WhatsApp enquiry",
    preview: {
      label: "New chat",
      title: "Galaxy Tour & Transport",
      lines: [
        "Dubai Marina → Abu Dhabi",
        "Tomorrow · 2 passengers",
        "1 suitcase · private preferred",
      ],
      status: "Waiting for quote",
    },
  },
  {
    id: "step-2",
    step: 2,
    title: "Receive a clear quote",
    description:
      "We reply with vehicle options, fare, and pickup window — shared or private.",
    badge: "Transparent fare",
    preview: {
      label: "Quote ready",
      title: "Private SUV · 6 seats",
      lines: [
        "Pickup window 08:30–08:45",
        "Fixed corridor fare confirmed",
        "Shared seat option also available",
      ],
      status: "Awaiting your OK",
    },
  },
  {
    id: "step-3",
    step: 3,
    title: "Confirm and ride",
    description:
      "Approve in chat. On the day, your driver arrives with the details already aligned.",
    badge: "Driver assigned",
    preview: {
      label: "Booking confirmed",
      title: "Meet at Marina Walk",
      lines: [
        "Driver: Ahmed · Lexus LX",
        "Gold trim · Meet at lobby",
        "Live WhatsApp thread open",
      ],
      status: "Ready for pickup",
    },
  },
];

export const legalColumns: LegalColumn[] = [
  {
    id: "legal-good",
    title: "Licensed Galaxy journey",
    description:
      "Documented operator status, insured vehicles, and a written WhatsApp trail for every booking.",
    points: [
      "Traceable booking confirmation",
      "Insured, maintained fleet",
      "Support if plans change mid-route",
    ],
    variant: "good",
  },
  {
    id: "legal-bad",
    title: "Informal roadside pickup",
    description:
      "Cash-only deals without paperwork leave little protection when something goes wrong.",
    points: [
      "No formal cancellation policy",
      "Unclear who is liable after an incident",
      "Fares that shift after you are seated",
    ],
    variant: "bad",
  },
];

export const homeCta: CtaContent = {
  eyebrow: "Get your route sorted today",
  headline: "Ready when your itinerary is",
  description:
    "Tell us the corridor, the tour, or the flight number. Galaxy confirms the rest on WhatsApp.",
  primaryLabel: "Chat on WhatsApp",
  secondaryLabel: "Contact Us",
  whatsappMessage:
    "Hello Galaxy Tour & Transport — I'm ready to book. Please help me with:",
};

export const formatsSection = {
  eyebrow: "Service formats",
  title: "Tours and transport, equally weighted",
  description:
    "Switch between curated experiences and practical movement — both booked the same way.",
} as const;

export const fleetSection = {
  eyebrow: "Fleet",
  title: "Vehicles matched to the journey",
  description:
    "Premium SUVs for groups and desert approaches, business sedans for daily lifts, and electric options for premium chauffeur days.",
} as const;

export const routesSection = {
  eyebrow: "Corridors & experiences",
  title: "Routes guests book most",
  description:
    "From Dubai–Abu Dhabi car lifts to desert evenings and mountain day trips — each with clear pickup points.",
} as const;
