"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { QuoteModal } from "./QuoteModal";

interface QuoteContextValue {
  isOpen: boolean;
  openQuote: () => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuote = useCallback(() => setIsOpen(true), []);
  const closeQuote = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({ isOpen, openQuote, closeQuote }),
    [isOpen, openQuote, closeQuote],
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal open={isOpen} onClose={closeQuote} />
    </QuoteContext.Provider>
  );
}

export function useQuote(): QuoteContextValue {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return context;
}
