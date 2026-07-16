import { describe, expect, it } from "vitest";
import {
  buildHomeMetadata,
  buildPageMetadata,
  buildRouteMetadata,
} from "@/lib/metadata";
import type { RouteDetail } from "@/lib/types";

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
      absolute: expect.stringContaining("Galaxy Tour & Transport"),
    });
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
});
