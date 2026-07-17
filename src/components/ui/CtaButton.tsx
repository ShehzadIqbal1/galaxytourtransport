import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type CtaVariant = "whatsapp" | "gold" | "secondary" | "secondaryLight";
export type CtaSize = "sm" | "md" | "lg";

const variantClasses: Record<CtaVariant, string> = {
  whatsapp:
    "bg-whatsapp text-white shadow-soft hover:bg-whatsapp-dark hover:-translate-y-0.5",
  gold:
    "bg-gold text-onyx shadow-soft hover:bg-gold-bright hover:-translate-y-0.5",
  secondary:
    "border border-ivory/30 bg-transparent text-ivory hover:border-gold/60 hover:text-gold-bright hover:-translate-y-0.5",
  secondaryLight:
    "border border-ink/15 bg-paper text-ink hover:border-gold hover:text-gold hover:-translate-y-0.5",
};

const sizeClasses: Record<CtaSize, string> = {
  sm: "min-h-11 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]",
  md: "min-h-12 px-6 py-3 text-sm font-semibold",
  lg: "min-h-14 px-7 py-3.5 text-base font-semibold",
};

const baseClasses =
  "items-center justify-center gap-2 rounded-md transition-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-50";

function hasDisplayClass(className: string): boolean {
  return /\b(hidden|block|inline-block|inline|flex|inline-flex|grid|inline-grid|contents)\b/.test(
    className,
  );
}

type SharedProps = {
  variant?: CtaVariant;
  size?: CtaSize;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export type CtaButtonProps = SharedProps &
  (
    | ({
        href: string;
        external?: boolean;
      } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        "href" | "children" | "className"
      >)
    | ({
        href?: undefined;
        external?: never;
      } & Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "children" | "className"
      >)
  );

export function CtaButton({
  variant = "gold",
  size = "md",
  icon,
  children,
  className = "",
  ...rest
}: CtaButtonProps) {
  const classNames = [
    hasDisplayClass(className) ? "" : "inline-flex",
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorRest } = rest;
    return (
      <a
        href={href}
        className={classNames}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorRest}
      >
        {icon}
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonRest.type ?? "button"}
      className={classNames}
      {...buttonRest}
    >
      {icon}
      {children}
    </button>
  );
}
