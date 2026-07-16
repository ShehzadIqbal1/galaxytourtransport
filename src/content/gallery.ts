import type { GalleryItem } from "@/lib/types";
import { fleetVehicles } from "@/content/fleet";

export const galleryIntro = {
  eyebrow: "Gallery",
  title: "Fleet and journey snapshots",
  description:
    "A look at the vehicles and corridors Galaxy runs across the UAE — sedans for daily lifts, SUVs for groups, and tour-ready assignments.",
} as const;

export const galleryItems: GalleryItem[] = [
  ...fleetVehicles.map((vehicle) => ({
    id: `gallery-${vehicle.id}`,
    title: vehicle.name,
    caption: vehicle.description,
    image: vehicle.image,
    imageAlt: vehicle.imageAlt,
    category: "fleet" as const,
  })),
  {
    id: "gallery-desert",
    title: "Desert safari evenings",
    caption: "Hotel pickup, dune approaches, and camp hospitality timed for sunset.",
    image: "/images/tours/desert-safari.jpg",
    imageAlt: "Desert safari dunes at sunset",
    category: "tours",
  },
  {
    id: "gallery-city",
    title: "City discovery circuits",
    caption: "Landmark loops across Dubai and Abu Dhabi with flexible photo stops.",
    image: "/images/tours/city-tours.jpg",
    imageAlt: "Sheikh Zayed Grand Mosque on a city circuit",
    category: "tours",
  },
  {
    id: "gallery-airport",
    title: "Airport meet-and-greet",
    caption: "Flight-synced pickups at DXB, DWC, and AUH with luggage-ready vehicles.",
    image: "/images/routes/uae-airport-shuttle.jpg",
    imageAlt: "Airport transfer vehicle at arrivals",
    category: "routes",
  },
  {
    id: "gallery-dxb-auh",
    title: "Dubai–Abu Dhabi corridor",
    caption: "Shared seats and private chauffeurs on the UAE’s signature inter-emirate run.",
    image: "/images/routes/dubai-to-abu-dhabi.jpg",
    imageAlt: "Dubai to Abu Dhabi corridor",
    category: "routes",
  },
  {
    id: "gallery-dxb-shj",
    title: "Dubai–Sharjah corridor",
    caption: "The UAE’s busiest commute lane with zone-aware drop-offs across Sharjah.",
    image: "/images/routes/dubai-to-sharjah.jpg",
    imageAlt: "Dubai to Sharjah highway corridor",
    category: "routes",
  },
  {
    id: "gallery-dxb-ajm",
    title: "Dubai–Ajman corridor",
    caption: "Early windows past Sharjah congestion for Ajman city and industrial drops.",
    image: "/images/routes/dubai-to-ajman.jpg",
    imageAlt: "Dubai to Ajman urban road corridor",
    category: "routes",
  },
  {
    id: "gallery-dxb-rak",
    title: "Dubai–Ras Al Khaimah corridor",
    caption: "Mountain and free-zone runs toward RAKEZ, Al Hamra, and the northern coast.",
    image: "/images/routes/dubai-to-ras-al-khaimah.jpg",
    imageAlt: "Mountain road toward Ras Al Khaimah",
    category: "routes",
  },
];
