import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons";
import { siteConfig } from "@/content/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand bg-paper pb-24 text-ink md:pb-0">
      <div className="container-content grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo variant="full" href="/" markClassName="h-12 w-12" />
          <p className="mt-4 max-w-sm text-ink-muted leading-relaxed">
            {siteConfig.description}
          </p>
          <address className="mt-6 not-italic text-sm text-ink-muted">
            <p className="font-semibold text-ink">{siteConfig.name}</p>
            <p className="mt-1">
              <a
                href={siteConfig.mapsUrl}
                className="transition-default hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.address.streetAddress},{" "}
                {siteConfig.address.addressLocality}, UAE
              </a>
            </p>
            <p className="mt-1">
              <a
                href={siteConfig.phoneHref}
                className="transition-default hover:text-gold"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-default hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Car lift & transfers
          </p>
          <ul className="space-y-2.5 text-sm text-ink-muted">
            {siteConfig.footerServiceLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="transition-default hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Useful links
          </p>
          <ul className="space-y-2.5 text-sm text-ink-muted">
            {siteConfig.footerNav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="transition-default hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Follow us
          </p>
          <ul className="flex gap-3">
            {siteConfig.social.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-onyx text-gold transition-default hover:bg-gold hover:text-onyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.id === "facebook" ? (
                    <FacebookIcon className="h-5 w-5" />
                  ) : (
                    <InstagramIcon className="h-5 w-5" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sand">
        <div className="container-content flex flex-col gap-2 py-5 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href={siteConfig.poweredBy.href}
              className="font-semibold text-ink transition-default hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.poweredBy.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
