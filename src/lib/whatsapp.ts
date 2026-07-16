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
