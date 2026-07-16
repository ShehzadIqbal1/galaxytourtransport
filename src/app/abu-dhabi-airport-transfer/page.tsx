import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/sections/ServiceLandingView";
import { getServiceLandingByPath } from "@/content/serviceLandings";
import { buildServiceLandingMetadata } from "@/lib/metadata";

const PATH = "/abu-dhabi-airport-transfer";

export const metadata: Metadata = (() => {
  const page = getServiceLandingByPath(PATH);
  if (!page) return {};
  return buildServiceLandingMetadata(page);
})();

export default function AbuDhabiAirportTransferPage() {
  const page = getServiceLandingByPath(PATH);
  if (!page) notFound();
  return <ServiceLandingView page={page} />;
}
