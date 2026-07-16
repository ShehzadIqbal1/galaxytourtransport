import type { BreadcrumbItem } from "@/lib/types";
import Link from "next/link";

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  tone?: "dark" | "light";
}

export function Breadcrumbs({
  items,
  className = "",
  tone = "dark",
}: BreadcrumbsProps) {
  const muted = tone === "light" ? "text-ink-muted" : "text-ivory/70";
  const current = tone === "light" ? "text-ink" : "text-ivory";
  const sep = tone === "light" ? "text-ink/30" : "text-ivory/40";
  const hover =
    tone === "light" ? "hover:text-gold" : "hover:text-gold-bright";

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${muted} ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.href}-${item.name}`}
              className="flex min-w-0 items-center gap-2"
            >
              {index > 0 ? (
                <span aria-hidden="true" className={sep}>
                  /
                </span>
              ) : null}
              {isLast ? (
                <span
                  aria-current="page"
                  className={`max-w-[14rem] truncate sm:max-w-none ${current}`}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-default ${hover}`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
