import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/icons";
import { siteConfig } from "@/content/siteConfig";

function FooterHeading({ children }: { children: string }) {
  return (
    <div className="mb-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
        {children}
      </p>
      <span
        className="mt-2 block h-0.5 w-8 rounded-full bg-gold"
        aria-hidden="true"
      />
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-x-hidden border-t border-sand bg-paper text-ink">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container-content py-10 sm:py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-10">
          {/* Brand + contact */}
          <div className="min-w-0 md:col-span-4">
            <Logo
              variant="full"
              href="/"
              className="max-w-full"
              markClassName="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {siteConfig.description}
            </p>

            <address className="mt-6 space-y-3 not-italic">
              <p className="text-sm font-semibold text-ink">{siteConfig.name}</p>

              <a
                href={siteConfig.mapsUrl}
                className="flex items-start gap-2.5 text-sm text-ink-muted transition-default hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="min-w-0 break-words leading-snug">
                  {siteConfig.address.streetAddress},{" "}
                  {siteConfig.address.addressLocality}, UAE
                </span>
              </a>

              <a
                href={siteConfig.phoneHref}
                className="flex min-h-11 items-center gap-2.5 text-sm font-medium text-ink transition-default hover:text-gold"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex min-h-11 items-center gap-2.5 text-sm text-ink-muted transition-default hover:text-gold"
              >
                <span
                  className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-xs font-bold leading-none text-gold"
                  aria-hidden="true"
                >
                  @
                </span>
                <span className="min-w-0 break-all">{siteConfig.email}</span>
              </a>
            </address>
          </div>

          {/* Service routes — full width on mobile so long labels read cleanly */}
          <div className="min-w-0 border-t border-sand pt-8 md:col-span-3 md:border-t-0 md:pt-0">
            <FooterHeading>Car lift & transfers</FooterHeading>
            <ul className="space-y-0.5">
              {siteConfig.footerServiceLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="group flex min-h-11 items-center gap-2 py-1.5 text-sm leading-snug text-ink-muted transition-default hover:text-gold"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-gold/50 transition-default group-hover:bg-gold"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 break-words">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links — compact 2-col on mobile */}
          <div className="min-w-0 border-t border-sand pt-8 md:col-span-3 md:border-t-0 md:pt-0">
            <FooterHeading>Useful links</FooterHeading>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5 sm:grid-cols-2 md:grid-cols-1">
              {siteConfig.footerNav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center text-sm text-ink-muted transition-default hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="min-w-0 border-t border-sand pt-8 md:col-span-2 md:border-t-0 md:pt-0">
            <FooterHeading>Follow us</FooterHeading>
            <ul className="flex flex-wrap gap-2.5">
              {siteConfig.social.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-sand bg-ivory text-ink transition-default hover:border-gold hover:bg-onyx hover:text-gold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.id === "facebook" ? (
                      <FacebookIcon className="h-4 w-4" />
                    ) : (
                      <InstagramIcon className="h-4 w-4" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-sand bg-ivory/60 pb-[max(6rem,calc(env(safe-area-inset-bottom)+5.5rem))] md:pb-0">
        <div className="container-content flex flex-col items-center gap-1.5 py-5 text-center text-xs text-ink-muted sm:text-sm md:flex-row md:justify-between md:text-left">
          <p className="max-w-full break-words">
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
