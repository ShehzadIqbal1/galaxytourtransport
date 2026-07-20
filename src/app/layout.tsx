import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Header } from "@/components/layout/Header";
import { RouteProgress } from "@/components/motion/RouteProgress";
import { QuoteProvider } from "@/components/quote/QuoteProvider";
import { siteConfig } from "@/content/siteConfig";
import { siteFontsClassName } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.png?v=4", type: "image/png", sizes: "512x512" },
      { url: "/images/brand/logo-v4.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png?v=4", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.png?v=4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${siteFontsClassName} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <QuoteProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-onyx"
          >
            Skip to content
          </a>
          <RouteProgress />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </QuoteProvider>
      </body>
    </html>
  );
}
