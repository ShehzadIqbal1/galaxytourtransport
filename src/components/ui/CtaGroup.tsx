"use client";

import type { ReactNode } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { useQuote } from "@/components/quote/QuoteProvider";
import { CtaButton, type CtaSize } from "@/components/ui/CtaButton";
import { siteConfig } from "@/content/siteConfig";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export interface CtaGroupProps {
  whatsappLabel: string;
  whatsappMessage?: string;
  /** When true, primary CTA opens the Get a Quote form instead of WhatsApp. */
  primaryOpensQuote?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryVariant?: "call" | "link";
  tone?: "dark" | "light";
  align?: "start" | "center";
  size?: CtaSize;
  showPhoneMeta?: boolean;
  meta?: ReactNode;
  className?: string;
}

/**
 * Canonical CTA structure site-wide:
 * Primary WhatsApp / Quote → Secondary call/link → optional phone meta line.
 */
export function CtaGroup({
  whatsappLabel,
  whatsappMessage,
  primaryOpensQuote = false,
  secondaryLabel,
  secondaryHref,
  secondaryVariant = "call",
  tone = "dark",
  align = "start",
  size = "md",
  showPhoneMeta = false,
  meta,
  className = "",
}: CtaGroupProps) {
  const { openQuote } = useQuote();
  const alignment =
    align === "center"
      ? "items-center justify-center text-center"
      : "items-start justify-start text-left";

  const secondaryOutline = tone === "light" ? "secondaryLight" : "secondary";
  const resolvedSecondaryHref =
    secondaryHref ??
    (secondaryVariant === "call" ? siteConfig.phoneHref : "/contact");
  const resolvedSecondaryLabel =
    secondaryLabel ?? (secondaryVariant === "call" ? "Call Now" : "Contact Us");

  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <div
        className={`flex flex-wrap gap-3 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        {primaryOpensQuote ? (
          <CtaButton
            type="button"
            variant="whatsapp"
            size={size}
            icon={<WhatsAppIcon className={iconSize} />}
            onClick={openQuote}
          >
            {whatsappLabel}
          </CtaButton>
        ) : (
          <CtaButton
            href={buildWhatsAppLink(whatsappMessage)}
            variant="whatsapp"
            size={size}
            external
            icon={<WhatsAppIcon className={iconSize} />}
          >
            {whatsappLabel}
          </CtaButton>
        )}

        <CtaButton
          href={resolvedSecondaryHref}
          variant={secondaryOutline}
          size={size}
          external={secondaryVariant === "call"}
          icon={
            secondaryVariant === "call" ? (
              <PhoneIcon className={iconSize} />
            ) : undefined
          }
        >
          {resolvedSecondaryLabel}
        </CtaButton>
      </div>

      {showPhoneMeta || meta ? (
        <div
          className={`text-sm ${
            tone === "light" ? "text-ink-muted" : "text-ivory/55"
          }`}
        >
          {meta ?? (
            <p>
              Prefer a call?{" "}
              <a
                href={siteConfig.phoneHref}
                className={`font-semibold transition-default ${
                  tone === "light"
                    ? "text-ink hover:text-gold"
                    : "text-gold hover:text-gold-bright"
                }`}
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
