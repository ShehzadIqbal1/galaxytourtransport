import { describe, expect, it } from "vitest";
import {
  buildContactWhatsAppMessage,
  buildWhatsAppLink,
} from "@/lib/whatsapp";

describe("buildWhatsAppLink", () => {
  it("builds a wa.me URL with the configured number", () => {
    const link = buildWhatsAppLink("Hello Galaxy");
    expect(link).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
    expect(link).toContain(encodeURIComponent("Hello Galaxy"));
  });

  it("falls back to the default message when empty", () => {
    const link = buildWhatsAppLink("   ");
    expect(link).toContain("text=");
    expect(decodeURIComponent(link.split("text=")[1] ?? "")).toContain(
      "Galaxy",
    );
  });
});

describe("buildContactWhatsAppMessage", () => {
  it("formats enquiry fields for WhatsApp", () => {
    const message = buildContactWhatsAppMessage({
      name: "Sara Ali",
      phone: "+971 50 123 4567",
      email: "sara@example.com",
      interest: "Airport transfer",
      message: "DXB Terminal 3, 12 Jul, 2 passengers",
    });

    expect(message).toContain("Name: Sara Ali");
    expect(message).toContain("Phone: +971 50 123 4567");
    expect(message).toContain("Email: sara@example.com");
    expect(message).toContain("Interest: Airport transfer");
    expect(message).toContain("DXB Terminal 3, 12 Jul, 2 passengers");
  });

  it("omits email when not provided", () => {
    const message = buildContactWhatsAppMessage({
      name: "Omar",
      phone: "+971 55 000 0000",
      interest: "Tour or day trip",
      message: "Desert safari for 4",
    });

    expect(message).not.toContain("Email:");
    expect(message).toContain("Name: Omar");
  });
});
