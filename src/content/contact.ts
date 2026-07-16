import type { ContactChannel, ContactFormContent, FAQItem } from "@/lib/types";
import { siteConfig } from "@/content/siteConfig";

export const contactContent = {
  eyebrow: "Contact",
  title: "Tell us the corridor, tour, or flight",
  description:
    "WhatsApp is the fastest way to confirm a Galaxy booking for Dubai and Abu Dhabi corridors. Call or email if you prefer — we are based in Business Bay, Dubai.",
  nap: {
    name: siteConfig.name,
    addressLine: `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, UAE`,
    phoneDisplay: siteConfig.phoneDisplay,
    phoneHref: siteConfig.phoneHref,
    email: siteConfig.email,
    mapsUrl: siteConfig.mapsUrl,
  },
  channels: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: siteConfig.phoneDisplay,
      href: `https://wa.me/${siteConfig.whatsappNumber}`,
    },
    {
      id: "phone",
      label: "Phone",
      value: siteConfig.phoneDisplay,
      href: siteConfig.phoneHref,
    },
    {
      id: "email",
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      id: "address",
      label: "Base",
      value: `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, UAE`,
      href: siteConfig.mapsUrl,
    },
  ] satisfies ContactChannel[],
  whatsappMessage:
    "Hello Galaxy — I'd like a quote. Here are my route/date/passengers:",
  form: {
    eyebrow: "Send a message",
    title: "Request a quote on WhatsApp",
    description:
      "Share a few details and we will open WhatsApp with your enquiry ready to send.",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone / WhatsApp",
    phonePlaceholder: "+971 50 000 0000",
    emailLabel: "Email (optional)",
    emailPlaceholder: "you@example.com",
    interestLabel: "What do you need?",
    interestPlaceholder: "Select an option",
    interestOptions: [
      { value: "Shared or private transport", label: "Shared or private transport" },
      { value: "Airport transfer", label: "Airport transfer" },
      { value: "Monthly car lift", label: "Monthly car lift" },
      { value: "Tour or day trip", label: "Tour or day trip" },
      { value: "Corporate / staff transport", label: "Corporate / staff transport" },
      { value: "Other", label: "Other" },
    ],
    messageLabel: "Trip details",
    messagePlaceholder:
      "Date, pickup area, destination, passenger count, and any luggage notes",
    submitLabel: "Continue on WhatsApp",
    requiredNote: "Required fields are marked with an asterisk.",
  } satisfies ContactFormContent,
  faqs: [
    {
      id: "contact-faq-1",
      question: "How fast do you reply on WhatsApp?",
      answer:
        "Most enquiries receive a first reply within minutes during daytime hours; complex multi-day itineraries may take longer to quote.",
    },
    {
      id: "contact-faq-2",
      question: "What should I include in my first message?",
      answer:
        "Date, pickup area, destination, passenger count, luggage notes, and whether you want shared or private transport.",
    },
    {
      id: "contact-faq-3",
      question: "Do you invoice for companies?",
      answer:
        "Yes — mention corporate billing in chat and we will confirm what documentation you need before travel.",
    },
  ] satisfies FAQItem[],
} as const;

export const servicesPageContent = {
  eyebrow: "Services",
  title: "Everything Galaxy books on WhatsApp",
  description:
    "Shared car lifts between Dubai and Abu Dhabi, private taxi Dubai rides, monthly plans, airport pick and drop, and curated UAE tours — choose the format that fits your day.",
  cards: [
    {
      id: "svc-dxb-auh",
      title: "Car Lift Dubai to Abu Dhabi",
      description:
        "Daily shared seats and private chauffeurs on the flagship Dubai–Abu Dhabi corridor.",
      href: "/dubai-to-abu-dhabi-car-lift",
    },
    {
      id: "svc-auh-dxb",
      title: "Car Lift Abu Dhabi to Dubai",
      description:
        "Return and weekday commuting lifts from Abu Dhabi into Downtown, Marina, and DXB.",
      href: "/abu-dhabi-to-dubai-car-lift",
    },
    {
      id: "svc-dxb-airport",
      title: "Dubai Airport Pick and Drop",
      description:
        "DXB and DWC meet-and-greet with flight tracking and luggage-ready vehicles.",
      href: "/dubai-airport-transfer",
    },
    {
      id: "svc-auh-airport",
      title: "Abu Dhabi Airport Pick and Drop",
      description:
        "AUH arrivals transfers across Abu Dhabi, with optional continuation to Dubai.",
      href: "/abu-dhabi-airport-transfer",
    },
    {
      id: "svc-private",
      title: "Private Taxi Dubai",
      description:
        "Exclusive chauffeur cabin for city hops, client days, and affordable UAE chauffeur plans.",
      href: "/private-taxi-dubai",
    },
    {
      id: "svc-help",
      title: "Not Sure Which Fits?",
      description:
        "Tell us your Dubai or Abu Dhabi route, schedule, and group size — we will recommend the right Galaxy format.",
      href: "/contact",
    },
  ],
} as const;
