"use client";

import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/content/siteConfig";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(siteConfig.defaultWhatsAppMessage)}
      className="animate-whatsapp-pulse fixed z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-card transition-default hover:scale-105 hover:bg-whatsapp-dark bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] md:bottom-8 md:right-8"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
