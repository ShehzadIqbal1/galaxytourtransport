import { Logo } from "@/components/brand/Logo";
import { WhatsAppIcon } from "@/components/icons";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { TopBar } from "@/components/layout/TopBar";
import { QuoteTrigger } from "@/components/quote/QuoteTrigger";
import { siteConfig } from "@/content/siteConfig";

function flattenNavForMobile() {
  // Keep top-level items only so Blog/Contact stay visible without scrolling
  // past every Popular Routes child link.
  return siteConfig.nav.map((item) => ({
    id: item.id,
    label: item.label,
    href: item.href,
  }));
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-paper/95 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-paper/90">
      <TopBar />
      <div className="border-b border-gold/20 bg-ivory/95 supports-[backdrop-filter]:bg-ivory/90">
        <div className="container-content flex items-center justify-between gap-2 py-2.5 sm:gap-3 sm:py-3 md:gap-6 md:py-4">
          <Logo
            variant="compact"
            className="min-w-0"
            markClassName="h-11 w-11 shrink-0 sm:h-15 sm:w-15 md:h-17 md:w-17"
          />

          <nav aria-label="Primary" className="hidden min-w-0 flex-1 justify-center xl:flex">
            <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
              {siteConfig.nav.map((item) => (
                <NavDropdown key={item.id} item={item} />
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <QuoteTrigger
              variant="gold"
              size="sm"
              className="min-h-9 gap-1 px-2.5 py-1.5 text-[10px] tracking-[0.06em] sm:min-h-11 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.12em]"
              icon={<WhatsAppIcon className="hidden h-4 w-4 sm:block" />}
            >
              <span className="sm:hidden">Quote</span>
              <span className="hidden sm:inline">Get a Quote</span>
            </QuoteTrigger>
            <MobileNav
              items={flattenNavForMobile()}
              whatsappMessage={siteConfig.defaultWhatsAppMessage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
