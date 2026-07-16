import type { FeatureItem, StatItem } from "@/lib/types";

export const aboutContent = {
  eyebrow: "About Galaxy",
  title: "Tours and transport, built for the UAE rhythm",
  description:
    "Galaxy Tour & Transport is a UAE operator focused on two equal pillars: curated tours and licensed chauffeur transport. We book primarily on WhatsApp so confirmations stay clear, fast, and personal.",
  story: [
    "Guests and commuters need different things — a desert evening is not a weekday car lift. We treat both with the same licensing standards, vehicle care, and chat-first booking flow.",
    "From Business Bay pickups to Fujairah early starts, our team matches the vehicle to the corridor: Camry for light business runs, Land Cruiser for groups, Lexus or Tesla when a premium chauffeur is requested.",
  ],
  values: [
    {
      id: "value-licensed",
      title: "Licensed operation",
      description:
        "Tourism and transport compliance kept current so corporate and leisure travellers can book with clarity.",
    },
    {
      id: "value-whatsapp",
      title: "WhatsApp-first clarity",
      description:
        "Quotes, plates, and pickup cues live in one thread — no app download required.",
    },
    {
      id: "value-coverage",
      title: "UAE-wide coverage",
      description:
        "Inter-emirate corridors, airport transfers, and tour days from a single coordinated team.",
    },
  ] satisfies FeatureItem[],
  stats: [
    {
      id: "about-emirates",
      value: "7",
      label: "Emirates covered",
      icon: "pin",
    },
    {
      id: "about-fleet",
      value: "15+",
      label: "Fleet vehicles",
      icon: "car",
    },
    {
      id: "about-channels",
      value: "1",
      label: "Primary booking chat",
      icon: "users",
    },
    {
      id: "about-focus",
      value: "2",
      label: "Equal service pillars",
      icon: "shield",
    },
  ] satisfies StatItem[],
} as const;
