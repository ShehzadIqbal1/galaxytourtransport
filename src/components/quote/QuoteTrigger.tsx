"use client";

import type { ReactNode } from "react";
import { useQuote } from "@/components/quote/QuoteProvider";
import { CtaButton, type CtaSize, type CtaVariant } from "@/components/ui/CtaButton";

export interface QuoteTriggerProps {
  children: ReactNode;
  variant?: CtaVariant;
  size?: CtaSize;
  className?: string;
  icon?: ReactNode;
}

export function QuoteTrigger({
  children,
  variant = "gold",
  size = "sm",
  className = "",
  icon,
}: QuoteTriggerProps) {
  const { openQuote } = useQuote();

  return (
    <CtaButton
      type="button"
      variant={variant}
      size={size}
      className={className}
      icon={icon}
      onClick={openQuote}
    >
      {children}
    </CtaButton>
  );
}
