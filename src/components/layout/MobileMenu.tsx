"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import { CloseIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { useQuote } from "@/components/quote/QuoteProvider";
import { CtaButton } from "@/components/ui/CtaButton";
import { siteConfig } from "@/content/siteConfig";
import type { NavItem } from "@/lib/types";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  whatsappMessage: string;
  whatsappLabel: string;
}

export function MobileMenu({
  open,
  onClose,
  items,
  whatsappMessage,
  whatsappLabel,
}: MobileMenuProps) {
  const { openQuote } = useQuote();

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-onyx/50"
        aria-label="Close menu backdrop"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 top-0 flex max-h-[100dvh] flex-col overflow-hidden border-b border-sand bg-paper shadow-card">
        <div className="flex shrink-0 items-center justify-between px-5 py-5">
          <Logo
            variant="compact"
            href="/"
            onNavigate={onClose}
            markClassName="h-14 w-14"
          />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-sand text-ink transition-default hover:border-gold hover:text-gold"
            aria-label="Close menu"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Mobile" className="min-h-0 flex-1 overflow-y-auto px-5 pb-4">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-3.5 text-base font-semibold text-ink transition-default hover:bg-sand hover:text-gold"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-sand bg-ivory px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <CtaButton
            type="button"
            variant="gold"
            size="md"
            className="w-full"
            icon={<WhatsAppIcon className="h-5 w-5" />}
            onClick={() => {
              onClose();
              openQuote();
            }}
          >
            Get a Quote
          </CtaButton>
          <CtaButton
            href={buildWhatsAppLink(whatsappMessage)}
            variant="whatsapp"
            size="md"
            external
            className="w-full"
            icon={<WhatsAppIcon className="h-5 w-5" />}
            onClick={onClose}
          >
            {whatsappLabel}
          </CtaButton>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-sand bg-paper text-sm font-semibold text-ink transition-default hover:border-gold hover:text-gold"
            onClick={onClose}
          >
            <PhoneIcon className="h-4 w-4 text-gold" />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
