import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";

export type LogoVariant = "full" | "compact" | "mark";

export interface LogoProps {
  variant?: LogoVariant;
  href?: string | null;
  className?: string;
  markClassName?: string;
  onNavigate?: () => void;
}

function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <Image
      src={siteConfig.logoFull}
      alt=""
      width={160}
      height={160}
      className={`shrink-0 rounded-md object-contain shadow-soft ring-1 ring-gold/30 ${className}`}
      priority
      unoptimized
    />
  );
}

function LogoWordmark({ compact }: { compact: boolean }) {
  if (compact) {
    return (
      <span className="min-w-0 leading-none">
        <span className="block truncate font-display text-sm tracking-tight text-ink sm:text-base md:text-lg">
          Tours <span className="text-gold">&amp; Transport</span>
        </span>
      </span>
    );
  }

  return (
    <span className="min-w-0 leading-none">
      <span className="block font-display text-xl tracking-tight text-ink md:text-2xl">
        Tours <span className="text-gold">&amp; Transport</span>
      </span>
      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted md:text-[11px]">
        Across the UAE
      </span>
    </span>
  );
}

export function Logo({
  variant = "full",
  href = "/",
  className = "",
  markClassName,
  onNavigate,
}: LogoProps) {
  const markSize =
    markClassName ??
    (variant === "mark"
      ? "h-11 w-11"
      : variant === "compact"
        ? "h-14 w-14 sm:h-16 sm:w-16 md:h-[4.25rem] md:w-[4.25rem]"
        : "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20");

  const content = (
    <span
      className={`inline-flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`.trim()}
    >
      <LogoMark className={markSize} />
      {variant !== "mark" ? (
        <LogoWordmark compact={variant === "compact"} />
      ) : null}
    </span>
  );

  if (href === null) {
    return content;
  }

  return (
    <Link
      href={href}
      className="group min-w-0 shrink-0 rounded-sm transition-default hover:opacity-95"
      aria-label={`${siteConfig.name} home`}
      {...(onNavigate ? { onClick: onNavigate } : {})}
    >
      {content}
    </Link>
  );
}
