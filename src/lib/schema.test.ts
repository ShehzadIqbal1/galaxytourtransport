import { describe, expect, it } from "vitest";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "@/lib/schema";
import type { FAQItem, RouteDetail } from "@/lib/types";

describe("schema generators", () => {
  it("builds LocalBusiness schema for the UAE", () => {
    const schema = buildLocalBusinessSchema();
    expect(schema["@type"]).toEqual(
      expect.arrayContaining(["LocalBusiness", "TaxiService"]),
    );
    expect(schema.areaServed).toEqual({
      "@type": "Country",
      name: "United Arab Emirates",
    });
  });

  it("builds FAQPage schema from FAQ items", () => {
    const items: FAQItem[] = [
      {
        id: "1",
        question: "How do I book?",
        answer: "Via WhatsApp.",
      },
    ];
    const schema = buildFaqPageSchema(items);
    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(1);
  });

  it("builds BreadcrumbList and Service schemas", () => {
    const crumbs = buildBreadcrumbListSchema([
      { name: "Home", href: "/" },
      { name: "Routes", href: "/#routes" },
    ]);
    expect(crumbs["@type"]).toBe("BreadcrumbList");
    expect(crumbs.itemListElement).toHaveLength(2);

    const route: RouteDetail = {
      id: "r1",
      slug: "dubai-to-abu-dhabi",
      title: "Dubai to Abu Dhabi",
      description: "Desc",
      category: "transport",
      distanceKm: "130 km",
      duration: "2h",
      pickupPoints: [],
      dropoffPoints: [],
      keywords: [],
      heroImage: "/images/routes/dubai-to-abu-dhabi.jpg",
      heroImageAlt: "Alt",
    };
    const service = buildServiceSchema(route);
    expect(service["@type"]).toBe("Service");
    expect(service.url).toContain("/routes/dubai-to-abu-dhabi");
  });
});
