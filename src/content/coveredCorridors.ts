import type { RouteDetail } from "@/lib/types";
import { getRouteBySlug } from "@/content/routes";

export type CoveredCorridor = {
  slug: string;
  from: string;
  to: string;
  badge: string;
  summary: string;
  tip: string;
  highlights: string[];
  featured?: boolean;
};

/** Dubai-outbound corridors featured in the homepage “All Routes Covered” board. */
export const coveredCorridors: CoveredCorridor[] = [
  {
    slug: "dubai-to-sharjah",
    from: "Dubai",
    to: "Sharjah",
    badge: "Busiest corridor — peak daily demand",
    summary:
      "The UAE’s highest-volume commute lane. Galaxy runs shared seats and private cars with zone-aware drop-offs across Al Nahda, SAIF, and free-zone gates.",
    tip: "Tell us if you need SAIF Zone or Sharjah Airport Free Zone — entry timing and gate notes are confirmed in WhatsApp before pickup.",
    highlights: ["Al Nahda Sharjah", "SAIF Zone", "University City", "Free Zone"],
    featured: true,
  },
  {
    slug: "dubai-to-ajman",
    from: "Dubai",
    to: "Ajman",
    badge: "High demand",
    summary:
      "Early windows help you clear Sharjah congestion. Ideal for industrial, hospitality, and office teams based in Ajman.",
    tip: "Morning departures fill first — message your preferred pickup zone the night before.",
    highlights: ["Ajman City Centre", "Al Rawda", "Jurf", "Ajman Industrial"],
  },
  {
    slug: "dubai-to-fujairah",
    from: "Dubai",
    to: "Fujairah",
    badge: "Long distance — mountain route",
    summary:
      "Luggage-ready vehicles for Fujairah Port and free-zone employers via the Hajar corridor, with early starts built in.",
    tip: "Mountain weather can shift ETA — we share an updated window in chat before you leave.",
    highlights: ["Fujairah Port", "Fujairah Free Zone", "City centre"],
  },
  {
    slug: "dubai-to-ras-al-khaimah",
    from: "Dubai",
    to: "Ras Al Khaimah",
    badge: "RAKEZ & industrial",
    summary:
      "RAKEZ, Al Hamra, and free-zone destinations covered with shared or private chauffeur options.",
    tip: "Industrial shift times vary — send your gate and shift start so we lock the right vehicle.",
    highlights: ["RAKEZ", "Al Hamra Village", "RAK Free Trade Zone"],
  },
  {
    slug: "dubai-to-umm-al-quwain",
    from: "Dubai",
    to: "Umm Al Quwain",
    badge: "Available daily",
    summary:
      "Steady Dubai–UAQ corridor for free zone, industrial, and hospitality workers with clear evening return plans.",
    tip: "Return seats sell out on Thursday evenings — book the round trip in one WhatsApp thread.",
    highlights: ["UAQ Free Trade Zone", "Industrial zones", "City centre"],
  },
  {
    slug: "dubai-to-abu-dhabi",
    from: "Dubai",
    to: "Abu Dhabi",
    badge: "Dedicated corridor page",
    summary:
      "The UAE’s flagship inter-emirate lane — shared seats or private chauffeur timed around meetings, flights, and weekend plans.",
    tip: "Yas Island, Corniche, and AUH drop-offs are booked as named points in your confirmation.",
    highlights: ["Corniche", "Yas Island", "Al Reem", "AUH Airport"],
    featured: true,
  },
];

export function getCoveredCorridorRoutes(): Array<
  CoveredCorridor & { route: RouteDetail }
> {
  return coveredCorridors.flatMap((item) => {
    const route = getRouteBySlug(item.slug);
    if (!route) return [];
    return [{ ...item, route }];
  });
}
