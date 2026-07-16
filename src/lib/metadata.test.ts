import { describe, expect, it } from "vitest";
import {
  buildHomeMetadata,
  buildPageMetadata,
  buildRouteMetadata,
  buildServiceLandingMetadata,
} from "@/lib/metadata";
import type { RouteDetail, ServiceLandingPage } from "@/lib/types";

const sampleRoute: RouteDetail = {
  id: "test-route",
  slug: "dubai-to-abu-dhabi",
  title: "Dubai to Abu Dhabi",
  description: "Test description for car lift Dubai to Abu Dhabi.",
  category: "transport",
  distanceKm: "130 km",
  duration: "2 hours",
  pickupPoints: ["Business Bay"],
  dropoffPoints: ["Corniche"],
  keywords: ["Car lift Dubai to Abu Dhabi"],
  heroImage: "/images/routes/dubai-to-abu-dhabi.jpg",
  heroImageAlt: "Test alt",
};

describe("metadata helpers", () => {
  it("sets canonical and Open Graph URL from path", () => {
    const meta = buildPageMetadata({
      title: "Test",
      description: "Desc",
      path: "/transport",
      keywords: ["Private taxi Dubai"],
    });

    expect(meta.alternates?.canonical).toBe("http://localhost:3000/transport");
    expect(meta.openGraph?.url).toBe("http://localhost:3000/transport");
    expect(meta.keywords).toEqual(["Private taxi Dubai"]);
  });

  it("builds home metadata with homepage keywords", () => {
    const meta = buildHomeMetadata();
    expect(meta.title).toEqual({
      absolute: "Car Lift UAE | Affordable Dubai to Abu Dhabi Transfers",
    });
    expect(meta.description).toContain("car lift and airport transfer");
    expect(meta.keywords).toEqual(
      expect.arrayContaining(["Car lift UAE", "Car lift Dubai"]),
    );
  });

  it("builds route metadata from route keywords", () => {
    const meta = buildRouteMetadata(sampleRoute);
    expect(meta.keywords).toEqual(["Car lift Dubai to Abu Dhabi"]);
    expect(meta.alternates?.canonical).toContain(
      "/routes/dubai-to-abu-dhabi",
    );
  });

  it("builds service landing metadata with canonical path", () => {
    const page: ServiceLandingPage = {
      id: "test",
      path: "/dubai-to-abu-dhabi-car-lift",
      title: "Car Lift Dubai to Abu Dhabi | Galaxy Transport UAE",
      description:
        "Book a licensed car lift Dubai to Abu Dhabi — shared seat or private chauffeur. Clear WhatsApp fares. Message Galaxy now.",
      keywords: ["Car lift Dubai to Abu Dhabi"],
      eyebrow: "Test",
      h1: "Car Lift Service from Dubai to Abu Dhabi",
      intro: "Intro",
      heroImage: "/images/routes/dubai-to-abu-dhabi.jpg",
      heroImageAlt: "Alt",
      pricing: { title: "Pricing", description: "Desc", points: ["A"] },
      howItWorks: {
        title: "How it works",
        steps: [{ title: "Step", description: "Do it" }],
      },
      serviceAreas: {
        title: "Areas",
        description: "Desc",
        areas: ["Dubai"],
      },
      faqs: [
        { id: "1", question: "Q?", answer: "A." },
      ],
      relatedLinks: [{ label: "Related", href: "/services" }],
      whatsappMessage: "Hello",
      serviceType: "Car Lift",
    };
    const meta = buildServiceLandingMetadata(page);
    expect(meta.alternates?.canonical).toContain(
      "/dubai-to-abu-dhabi-car-lift",
    );
    expect(meta.title).toEqual({ absolute: page.title });
  });
});
