"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronIcon } from "@/components/icons";
import type { NavItem } from "@/lib/types";

export interface NavDropdownProps {
  item: NavItem;
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavDropdown({ item }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const menuId = useId();
  const children = item.children ?? [];
  const active =
    isActive(pathname, item.href) ||
    children.some((child) => isActive(pathname, child.href));

  useEffect(() => {
    if (!open) {
      return;
    }
    const onPointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const shellClass = `inline-flex min-h-11 items-center rounded-md text-sm font-semibold transition-default ${
    active
      ? "bg-gold text-onyx"
      : "text-ink hover:bg-sand hover:text-ink"
  }`;

  if (children.length === 0) {
    return (
      <li>
        <Link href={item.href} className={`${shellClass} px-3`}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className={shellClass}>
        <Link
          href={item.href}
          className="inline-flex min-h-11 items-center rounded-md px-3"
          onClick={() => setOpen(false)}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-md pr-2.5 pl-0.5"
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-label={`${item.label} submenu`}
          onClick={() => setOpen((value) => !value)}
        >
          <ChevronIcon className="h-4 w-4" direction={open ? "up" : "down"} />
        </button>
      </div>
      {open ? (
        <ul
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-50 mt-0 min-w-64 overflow-hidden rounded-md border border-sand bg-paper p-2 pt-2 shadow-card"
        >
          <li role="none">
            <Link
              role="menuitem"
              href={item.href}
              className={`block rounded-md px-3 py-3 text-sm font-medium transition-default hover:bg-sand ${
                pathname === item.href
                  ? "bg-sand font-semibold text-gold"
                  : "text-ink"
              }`}
              onClick={() => setOpen(false)}
            >
              View all {item.label.toLowerCase()}
            </Link>
          </li>
          {children.map((child) => (
            <li key={child.id} role="none">
              <Link
                role="menuitem"
                href={child.href}
                className={`block rounded-md px-3 py-3 text-sm font-medium transition-default hover:bg-sand ${
                  isActive(pathname, child.href)
                    ? "bg-sand font-semibold text-gold"
                    : "text-ink"
                }`}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
