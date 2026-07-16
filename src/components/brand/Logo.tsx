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
      src={siteConfig.logoPng}
      alt=""
      width={160}
      height={160}
      className={`rounded-full object-cover shadow-soft ring-1 ring-gold/25 ${className}`}
      priority
    />
  );
}

function LogoWordmark({ compact }: { compact: boolean }) {
  if (compact) {
    return (
      <span className="min-w-0 translate-y-0.5 md:translate-y-1">
        <span className="font-display text-lg leading-none tracking-tight text-ink md:text-xl">
          Tour <span className="text-gold">& Transport</span>
        </span>
      </span>
    );
  }

  return (
    <span className="min-w-0 translate-y-0.5 md:translate-y-1">
      <span className="font-display text-xl leading-none tracking-tight text-ink md:text-2xl">
        Tour <span className="text-gold">& Transport</span>
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
      ? "h-10 w-10"
      : "h-11 w-11 shrink-0 md:h-12 md:w-12");

  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`.trim()}>
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
      className="group shrink-0 rounded-sm transition-default hover:opacity-95"
      aria-label={`${siteConfig.name} home`}
      {...(onNavigate ? { onClick: onNavigate } : {})}
    >
      {content}
    </Link>
  );
}
