"use client";

import { useState } from "react";
import { MenuIcon } from "@/components/icons";
import { MobileMenu } from "@/components/layout/MobileMenu";
import type { NavItem } from "@/lib/types";

export interface MobileNavProps {
  items: NavItem[];
  whatsappMessage: string;
}

export function MobileNav({
  items,
  whatsappMessage,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-sand bg-paper text-ink transition-default hover:border-gold hover:text-gold xl:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="h-5 w-5" />
      </button>
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        items={items}
        whatsappMessage={whatsappMessage}
        whatsappLabel="Book on WhatsApp"
      />
    </>
  );
}
