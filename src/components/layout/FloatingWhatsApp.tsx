"use client";

import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/content/siteConfig";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(siteConfig.defaultWhatsAppMessage)}
      className="animate-whatsapp-pulse fixed z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_6px_20px_rgb(37_211_102_/_0.45)] transition-default hover:bg-whatsapp-dark bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] md:bottom-8 md:right-8"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}
