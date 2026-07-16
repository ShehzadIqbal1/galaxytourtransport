import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/sections/ServiceLandingView";
import { getServiceLandingByPath } from "@/content/serviceLandings";
import { buildServiceLandingMetadata } from "@/lib/metadata";

const PATH = "/private-taxi-dubai";

export const metadata: Metadata = (() => {
  const page = getServiceLandingByPath(PATH);
  if (!page) return {};
  return buildServiceLandingMetadata(page);
})();

export default function PrivateTaxiDubaiPage() {
  const page = getServiceLandingByPath(PATH);
  if (!page) notFound();
  return <ServiceLandingView page={page} />;
}
