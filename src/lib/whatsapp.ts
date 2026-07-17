import { siteConfig } from "@/content/siteConfig";

export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(
    message?.trim() || siteConfig.defaultWhatsAppMessage,
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export interface ContactEnquiryFields {
  name: string;
  phone: string;
  email?: string;
  interest: string;
  message: string;
}

export function buildContactWhatsAppMessage(
  fields: ContactEnquiryFields,
): string {
  const lines = [
    "Hello Galaxy — new enquiry from the website.",
    "",
    `Name: ${fields.name.trim()}`,
    `Phone: ${fields.phone.trim()}`,
  ];

  const email = fields.email?.trim();
  if (email) {
    lines.push(`Email: ${email}`);
  }

  lines.push(
    `Interest: ${fields.interest.trim()}`,
    "",
    "Details:",
    fields.message.trim(),
  );

  return lines.join("\n");
}

export interface QuoteBookingFields {
  name: string;
  phone: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  vehicle: string;
}

export function buildQuoteWhatsAppMessage(fields: QuoteBookingFields): string {
  return [
    "Hello Galaxy — I'd like a quote from the website.",
    "",
    `Name: ${fields.name.trim()}`,
    `Phone: ${fields.phone.trim()}`,
    `Pickup: ${fields.pickup.trim()}`,
    `Drop-off: ${fields.dropoff.trim()}`,
    `Date: ${fields.date.trim()}`,
    `Time: ${fields.time.trim()}`,
    `Vehicle: ${fields.vehicle.trim()}`,
  ].join("\n");
}

/** Normalize UAE local mobile digits (expects 9 digits after +971). */
export function formatUaeWhatsAppPhone(localDigits: string): string {
  const digits = localDigits.replace(/\D/g, "");
  if (digits.startsWith("971") && digits.length >= 12) {
    return `+${digits}`;
  }
  if (digits.startsWith("0") && digits.length === 10) {
    return `+971${digits.slice(1)}`;
  }
  return `+971${digits}`;
}

export function isValidUaeLocalMobile(localDigits: string): boolean {
  const digits = localDigits.replace(/\D/g, "");
  return /^5\d{8}$/.test(digits);
}

