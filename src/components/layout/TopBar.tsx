import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
} from "@/components/icons";
import { siteConfig } from "@/content/siteConfig";

export function TopBar() {
  return (
    <div className="hidden bg-sand text-sm text-ink md:block">
      <div className="container-content flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="rounded-sm bg-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
            {siteConfig.serviceTags[0]}
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden text-ink-muted transition-default hover:text-gold lg:inline"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-ink transition-default hover:text-gold"
          >
            <PhoneIcon className="h-4 w-4 shrink-0 text-gold" />
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <ul className="flex items-center gap-2">
          {siteConfig.social.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-paper text-ink transition-default hover:bg-gold hover:text-onyx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.id === "facebook" ? (
                  <FacebookIcon />
                ) : (
                  <InstagramIcon />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
