import type { ReactNode } from "react";
import {
  CalendarIcon,
  CarIcon,
  ClockIcon,
  DriverIcon,
  ShieldIcon,
  SnowflakeIcon,
  WhatsAppIcon,
} from "@/components/icons";
import type { TrustBarItemData, TrustIconName } from "@/content/trust";

export interface TrustItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface TrustBarProps {
  items: TrustBarItemData[];
}

const iconClass = "h-4 w-4";

function resolveIcon(name: TrustIconName): ReactNode {
  switch (name) {
    case "shield":
      return <ShieldIcon className={iconClass} />;
    case "driver":
      return <DriverIcon className={iconClass} />;
    case "clock":
      return <ClockIcon className={iconClass} />;
    case "whatsapp":
      return <WhatsAppIcon className={iconClass} />;
    case "ac":
      return <SnowflakeIcon className={iconClass} />;
    case "calendar":
      return <CalendarIcon className={iconClass} />;
    case "car":
      return <CarIcon className={iconClass} />;
    default:
      return null;
  }
}

function TrustItems({
  items,
  keyPrefix,
}: {
  items: TrustBarItemData[];
  keyPrefix: string;
}) {
  return (
    <ul
      className="flex shrink-0 items-center gap-8 px-4 py-3.5 sm:gap-10 sm:px-5 sm:py-4 md:gap-14"
      aria-hidden={keyPrefix !== "a"}
    >
      {items.map((item) => (
        <li
          key={`${keyPrefix}-${item.id}`}
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-semibold tracking-wide"
        >
          <span
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-onyx/10 text-onyx"
            aria-hidden="true"
          >
            {resolveIcon(item.icon)}
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div
      className="overflow-hidden bg-gold text-onyx"
      role="region"
      aria-label="Service highlights"
    >
      <div className="trust-marquee flex w-max">
        <TrustItems items={items} keyPrefix="a" />
        <TrustItems items={items} keyPrefix="b" />
        <TrustItems items={items} keyPrefix="c" />
      </div>
    </div>
  );
}
