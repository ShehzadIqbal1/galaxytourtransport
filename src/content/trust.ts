export type TrustIconName =
  | "shield"
  | "driver"
  | "clock"
  | "whatsapp"
  | "ac"
  | "calendar"
  | "car";

export interface TrustBarItemData {
  id: string;
  label: string;
  icon: TrustIconName;
}

export const trustBarItems: TrustBarItemData[] = [
  { id: "licensed", label: "Licensed Transport Company", icon: "shield" },
  { id: "drivers", label: "Professional Vetted Drivers", icon: "driver" },
  { id: "ontime", label: "On-Time Corridors", icon: "clock" },
  { id: "whatsapp", label: "WhatsApp Booking", icon: "whatsapp" },
  { id: "ac", label: "AC Vehicles", icon: "ac" },
];

export const servicesTrustBarItems: TrustBarItemData[] = [
  { id: "licensed", label: "Licensed Transport Company", icon: "shield" },
  { id: "drivers", label: "Experienced Drivers", icon: "driver" },
  { id: "schedule", label: "Flexible Scheduling", icon: "calendar" },
  { id: "whatsapp", label: "WhatsApp Booking", icon: "whatsapp" },
  { id: "ac", label: "Clean AC Vehicles", icon: "ac" },
];
