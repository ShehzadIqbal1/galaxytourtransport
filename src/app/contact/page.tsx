import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { CTABand } from "@/components/sections/CTABand";
import { FAQSection } from "@/components/sections/FAQSection";
import { MapBand } from "@/components/sections/MapBand";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/ui/JsonLd";
import { contactContent } from "@/content/contact";
import { homeCta } from "@/content/home";
import { buildContactMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = buildContactMetadata();

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          buildLocalBusinessSchema(),
          buildBreadcrumbListSchema(breadcrumbs),
          buildFaqPageSchema([...contactContent.faqs]),
        ]}
      />
      <PageHero
        eyebrow="Contact Galaxy"
        titleBefore="Tell us the corridor,"
        titleHighlight="tour, or flight"
        description={contactContent.description}
        breadcrumbs={breadcrumbs}
        whatsappLabel="Start on WhatsApp"
        whatsappMessage={contactContent.whatsappMessage}
      />
      <div className="bg-paper section-padding">
        <div className="container-content">
          <ul className="grid gap-6 md:grid-cols-2" role="list">
            {contactContent.channels.map((channel) => (
              <li key={channel.id}>
                <Card tone="light" elevated className="h-full overflow-hidden p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                    {channel.label}
                  </p>
                  {channel.id === "whatsapp" ? (
                    <a
                      href={buildWhatsAppLink(contactContent.whatsappMessage)}
                      className="mt-3 block break-words font-display text-xl text-ink transition-default hover:text-gold sm:text-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {channel.value}
                    </a>
                  ) : channel.id === "address" ? (
                    <a
                      href={channel.href}
                      className="mt-3 block break-words font-display text-xl text-ink transition-default hover:text-gold sm:text-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <a
                      href={channel.href}
                      className="mt-3 block break-all font-display text-lg text-ink transition-default hover:text-gold sm:text-xl md:text-2xl"
                    >
                      {channel.value}
                    </a>
                  )}
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ContactForm content={contactContent.form} />
      <FAQSection
        eyebrow="Before you message"
        title="Contact FAQs"
        description="A few details that speed up your first Galaxy reply."
        items={[...contactContent.faqs]}
      />
      <CTABand content={homeCta} />
      <MapBand />
    </>
  );
}
