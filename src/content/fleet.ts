import type { FleetVehicle } from "@/lib/types";

export const fleetVehicles: FleetVehicle[] = [
  // Sedan Cars
  {
    id: "yaris",
    name: "Toyota Yaris",
    category: "sedan",
    categoryLabel: "Sedan",
    seats: 5,
    premium: false,
    tags: ["5 seats", "AC", "City commute"],
    image: "/images/fleet/toyota-yaris.jpg",
    imageAlt: "Toyota Yaris — compact sedan for city and car lift routes",
    description:
      "Compact, efficient sedan for daily car lifts, short city hops, and budget-friendly corridor seats.",
  },
  {
    id: "optima",
    name: "Kia Optima",
    category: "sedan",
    categoryLabel: "Sedan",
    seats: 5,
    premium: false,
    tags: ["5 seats", "AC", "Business"],
    image: "/images/fleet/kia-optima.jpg",
    imageAlt: "Kia Optima — mid-size business sedan",
    description:
      "Mid-size comfort for office shuttles, hotel transfers, and smooth inter-emirate sedan travel.",
  },
  {
    id: "altima",
    name: "Nissan Altima",
    category: "sedan",
    categoryLabel: "Sedan",
    seats: 5,
    premium: false,
    tags: ["5 seats", "AC", "Business"],
    image: "/images/fleet/nissan-altima.jpg",
    imageAlt: "Nissan Altima — spacious business sedan",
    description:
      "Spacious cabin for client pickups and daily Dubai–Abu Dhabi sedan assignments.",
  },
  {
    id: "civic",
    name: "Honda Civic",
    category: "sedan",
    categoryLabel: "Sedan",
    seats: 5,
    premium: false,
    tags: ["5 seats", "AC", "Reliable"],
    image: "/images/fleet/honda-civic.jpg",
    imageAlt: "Honda Civic — reliable daily sedan",
    description:
      "Reliable daily driver for car lifts, airport drop-offs, and point-to-point city routes.",
  },
  {
    id: "sonata",
    name: "Hyundai Sonata",
    category: "sedan",
    categoryLabel: "Sedan",
    seats: 5,
    premium: false,
    tags: ["5 seats", "AC", "Executive"],
    image: "/images/fleet/honda-sonata.jpg",
    imageAlt: "Hyundai Sonata — executive mid-size sedan",
    description:
      "Executive mid-size sedan for longer corridors and guests who want extra cabin quiet.",
  },
  {
    id: "mg-5",
    name: "MG 5",
    category: "sedan",
    categoryLabel: "Sedan",
    seats: 5,
    premium: false,
    tags: ["5 seats", "AC", "Modern"],
    image: "/images/fleet/mg-5.jpg",
    imageAlt: "MG 5 — modern sedan for UAE corridors",
    description:
      "Modern sedan option for shared seats and private city transfers across the UAE.",
  },
  {
    id: "camry",
    name: "Toyota Camry",
    category: "sedan",
    categoryLabel: "Sedan",
    seats: 5,
    premium: false,
    tags: ["5 seats", "AC", "Business"],
    image: "/images/fleet/toyota-camry.jpg",
    imageAlt: "Toyota Camry — business sedan",
    description:
      "Trusted business sedan for daily car lifts, office shuttles, and point-to-point city transfers.",
  },
  {
    id: "lexus-es",
    name: "Lexus ES 300",
    category: "sedan",
    categoryLabel: "Sedan",
    seats: 5,
    premium: true,
    tags: ["5 seats", "AC", "Premium"],
    image: "/images/fleet/lexus-es-300.jpg",
    imageAlt: "Lexus ES 300 — executive premium sedan",
    description:
      "Quiet executive cabin for client meetings, hotel pickups, and premium chauffeur assignments.",
  },

  // SUV & MPV
  {
    id: "rush",
    name: "Toyota Rush",
    category: "suv",
    categoryLabel: "SUV",
    seats: 7,
    premium: false,
    tags: ["7 seats", "AC", "Luggage"],
    image: "/images/fleet/toyota-rush.jpg",
    imageAlt: "Toyota Rush — seven-seat SUV",
    description:
      "Seven-seat SUV for families and small groups with luggage on city and inter-emirate runs.",
  },
  {
    id: "carnival",
    name: "Kia Carnival",
    category: "suv",
    categoryLabel: "SUV",
    seats: 8,
    premium: false,
    tags: ["8 seats", "AC", "Spacious"],
    image: "/images/fleet/kia-carnival.jpg",
    imageAlt: "Kia Carnival — spacious eight-seat MPV",
    description:
      "Spacious MPV for corporate teams, tour groups, and luggage-heavy airport transfers.",
  },
  {
    id: "odyssey",
    name: "Honda Odyssey",
    category: "suv",
    categoryLabel: "SUV",
    seats: 8,
    premium: false,
    tags: ["8 seats", "AC", "Spacious"],
    image: "/images/fleet/honda-odyssey.jpg",
    imageAlt: "Honda Odyssey — eight-seat family MPV",
    description:
      "Comfortable eight-seat MPV for family tours, hotel moves, and group corridor travel.",
  },
  {
    id: "land-cruiser",
    name: "Toyota Land Cruiser",
    category: "suv",
    categoryLabel: "SUV",
    seats: 7,
    premium: false,
    tags: ["7 seats", "AC", "Luxury SUV"],
    image: "/images/fleet/toyota-land-cruiser.jpg",
    imageAlt: "Toyota Land Cruiser — premium seven-seat SUV",
    description:
      "Flagship desert-ready SUV for family groups and long UAE corridors with chauffeur option.",
  },
  {
    id: "highlander",
    name: "Toyota Highlander",
    category: "suv",
    categoryLabel: "SUV",
    seats: 7,
    premium: false,
    tags: ["7 seats", "AC", "Family"],
    image: "/images/fleet/toyota-highlander.jpg",
    imageAlt: "Toyota Highlander — family seven-seat SUV",
    description:
      "Spacious crossover for luggage-heavy airport runs and multi-stop city days.",
  },
  {
    id: "patrol",
    name: "Nissan Patrol",
    category: "suv",
    categoryLabel: "SUV",
    seats: 7,
    premium: false,
    tags: ["7 seats", "AC", "Luxury SUV"],
    image: "/images/fleet/nissan-patrol.jpg",
    imageAlt: "Nissan Patrol — luxury seven-seat SUV",
    description:
      "Commanding presence for desert approaches and inter-emirate travel with elevated comfort.",
  },

  // Electric / Premium
  {
    id: "tesla",
    name: "Tesla Model Y / Model 3",
    category: "electric",
    categoryLabel: "Electric",
    seats: 5,
    premium: true,
    tags: ["5 seats", "Electric", "Premium"],
    image: "/images/fleet/tesla.jpg",
    imageAlt: "Tesla Model Y or Model 3 — electric premium vehicle",
    description:
      "Smooth electric ride with optional premium chauffeur for eco-minded guests and airport VIP arrivals.",
  },
];

export function getFleetByCategory() {
  const meta: Record<
    FleetVehicle["category"],
    { label: string; caption: string }
  > = {
    sedan: {
      label: "Sedan Cars",
      caption: "Ideal for 1–4 passengers · AC · Comfortable daily commute",
    },
    suv: {
      label: "SUV & MPV",
      caption:
        "Ideal for families, groups & corporate teams · Spacious · AC",
    },
    electric: {
      label: "Electric / Premium",
      caption: "Quiet cabin · Premium chauffeur option · Airport VIP ready",
    },
  };

  const order: FleetVehicle["category"][] = ["sedan", "suv", "electric"];
  return order.map((category) => ({
    category,
    label: meta[category].label,
    caption: meta[category].caption,
    vehicles: fleetVehicles.filter((vehicle) => vehicle.category === category),
  }));
}
