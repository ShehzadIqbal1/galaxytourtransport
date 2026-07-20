"use client";

import { useId, useState, type ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  className?: string;
  label?: string;
}

export function Tabs({ items, className = "", label = "Sections" }: TabsProps) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((item) => item.id === activeId) ?? items[0];

  if (!active) {
    return null;
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        className="mb-8 flex flex-wrap gap-2"
      >
        {items.map((item) => {
          const selected = item.id === active.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              className={`inline-flex min-h-11 items-center rounded-sm px-5 text-sm font-medium transition-default ${
                selected
                  ? "bg-gold text-onyx"
                  : "border border-ivory/15 text-ivory hover:border-gold/50"
              }`}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => {
        const selected = item.id === active.id;
        return (
          <div
            key={item.id}
            role="tabpanel"
            id={`${baseId}-panel-${item.id}`}
            aria-labelledby={`${baseId}-tab-${item.id}`}
            hidden={!selected}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}
