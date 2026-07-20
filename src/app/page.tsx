import dynamic from "next/dynamic";
import { AllRoutesCovered } from "@/components/sections/AllRoutesCovered";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CostComparison } from "@/components/sections/CostComparison";
import { CTABand } from "@/components/sections/CTABand";
import { FleetShowcase } from "@/components/sections/FleetShowcase";
import { Hero } from "@/components/sections/Hero";
import { LegalComparison } from "@/components/sections/LegalComparison";
import { MapBand } from "@/components/sections/MapBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceExplainer } from "@/components/sections/ServiceExplainer";
import { TrustBar } from "@/components/sections/TrustBar";
import { TrustSection } from "@/components/sections/TrustSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { blogPosts } from "@/content/blog";
import { getCoveredCorridorRoutes } from "@/content/coveredCorridors";
import { faqItems } from "@/content/faq";
import { getFleetByCategory } from "@/content/fleet";
import { serviceFormats } from "@/content/formats";
import {
  blogSection,
  costComparisons,
  explainerContent,
  explainerFeatures,
  fleetSection,
  formatsSection,
  heroContent,
  heroStats,
  homeCta,
  legalColumns,
  processSteps,
  trustSection,
} from "@/content/home";
import { siteConfig } from "@/content/siteConfig";
import { trustBarItems } from "@/content/trust";
import { buildHomeMetadata } from "@/lib/metadata";
import {
  buildFaqPageSchema,
  buildLocalBusinessSchema,
  buildWebSiteSchema,
} from "@/lib/schema";

const ServiceFormats = dynamic(
  () =>
    import("@/components/sections/ServiceFormats").then(
      (mod) => mod.ServiceFormats,
    ),
  { ssr: true },
);

const FAQSection = dynamic(
  () =>
    import("@/components/sections/FAQSection").then((mod) => mod.FAQSection),
  { ssr: true },
);

export const metadata = buildHomeMetadata();

const previewPosts = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildWebSiteSchema(),
          buildFaqPageSchema(faqItems),
        ]}
      />
      <Hero
        eyebrow={heroContent.eyebrow}
        headlineBefore={heroContent.headlineBefore}
        headlineHighlight={heroContent.headlineHighlight}
        headlineAfter={heroContent.headlineAfter}
        subcopy={heroContent.subcopy}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        secondaryHref={siteConfig.phoneHref}
        whatsappMessage={heroContent.whatsappMessage}
        stats={heroStats}
        imageSrc="/images/hero/hero.webp"
        imageAlt={siteConfig.defaultOgImageAlt}
      />
      <TrustBar items={trustBarItems} />
      <ServiceFormats
        eyebrow={formatsSection.eyebrow}
        title={formatsSection.title}
        description={formatsSection.description}
        formats={serviceFormats}
      />
      <ServiceExplainer
        eyebrow={explainerContent.eyebrow}
        title={explainerContent.title}
        description={explainerContent.description}
        features={explainerFeatures}
      />
      <CostComparison
        eyebrow="Value clarity"
        title="Shared, private, or informal — know the trade-offs"
        description="Compare seat-based car lifts, licensed private chauffeurs, and the risks of unlicensed roadside offers."
        comparisons={costComparisons}
      />
      <FleetShowcase
        eyebrow={fleetSection.eyebrow}
        title={fleetSection.title}
        description={fleetSection.description}
        groups={getFleetByCategory()}
      />
      <AllRoutesCovered corridors={getCoveredCorridorRoutes()} />
      <TrustSection content={trustSection} />
      <ProcessSteps
        eyebrow="Booking flow"
        title="Three steps from chat to curb"
        description="No app installs — just a clear WhatsApp thread from enquiry to pickup."
        steps={processSteps}
      />
      <LegalComparison
        eyebrow="Licensing matters"
        title="Documented journeys vs informal pickups"
        description="A licensed operator leaves a paper trail; informal rides rarely do."
        columns={legalColumns}
      />
      <BlogPreview
        eyebrow={blogSection.eyebrow}
        title={blogSection.title}
        description={blogSection.description}
        posts={previewPosts}
        viewAllLabel={blogSection.viewAllLabel}
        viewAllHref={blogSection.viewAllHref}
      />
      <FAQSection
        eyebrow="FAQ"
        title="Answers before you message"
        description="Quick clarity on booking, airports, ladies-preferred chauffeurs, and monthly plans."
        items={faqItems}
      />
      <CTABand
        content={{ ...homeCta, secondaryLabel: "Contact Us" }}
        secondaryHref="/contact"
      />
      <MapBand />
    </>
  );
}
