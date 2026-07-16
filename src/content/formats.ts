import type { ServiceFormat } from "@/lib/types";

export const serviceFormats: ServiceFormat[] = [
  {
    id: "desert-safari",
    category: "tours",
    title: "Desert safari evenings",
    description:
      "Hotel pickup, dune drive, camp hospitality, and return transfer timed for sunset across Dubai’s desert fringe.",
    highlights: ["Hotel pickup", "Sunset timing", "Camp experience"],
    image: "/images/tours/desert-safari.jpg",
    imageAlt: "Desert safari dunes at sunset",
  },
  {
    id: "city-tours",
    category: "tours",
    title: "City discovery circuits",
    description:
      "Curated Dubai or Abu Dhabi landmark loops with a private chauffeur and flexible photo stops.",
    highlights: ["Private vehicle", "Landmark stops", "Half or full day"],
    image: "/images/tours/city-tours.jpg",
    imageAlt: "Abu Dhabi landmark on a city discovery circuit",
  },
  {
    id: "multi-day",
    category: "tours",
    title: "Custom multi-day itineraries",
    description:
      "Emirate-hopping plans that mix mountain escapes, cultural sites, and leisure days around your hotel nights.",
    highlights: ["Custom routing", "Multi-emirate", "Chauffeur included"],
    image: "/images/tours/multi-day.jpg",
    imageAlt: "Coastal mountain road for a multi-day UAE itinerary",
  },
  {
    id: "shared-lift",
    category: "transport",
    title: "Shared car lift",
    description:
      "Seat-based rides on busy corridors such as Dubai–Abu Dhabi at an accessible fare.",
    highlights: ["Seat pricing", "Fixed corridors", "WhatsApp confirm"],
    image: "/images/tours/shared-lift.jpg",
    imageAlt: "Busy UAE highway corridor for shared car lifts",
  },
  {
    id: "private-transfer",
    category: "transport",
    title: "Private transfers",
    description:
      "Exclusive vehicle for meetings, hotel hops, and door-to-door journeys on your clock.",
    highlights: ["Full vehicle", "Flexible stops", "Business ready"],
    image: "/images/tours/private-transfer.jpg",
    imageAlt: "Chauffeur holding the door of a private transfer sedan",
  },
  {
    id: "monthly-commuter",
    category: "transport",
    title: "Monthly commuter plans",
    description:
      "Weekday packages for regular Dubai–Abu Dhabi travellers who want predictable pricing.",
    highlights: ["Fixed monthly rate", "Preferred driver", "Peak-hour focus"],
    image: "/images/tours/monthly-commuter.jpg",
    imageAlt: "Evening commute from the driver’s seat",
  },
];

export function getFormatsByCategory(category: ServiceFormat["category"]) {
  return serviceFormats.filter((format) => format.category === category);
}
