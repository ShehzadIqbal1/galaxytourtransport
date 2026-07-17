import { Logo } from "@/components/brand/Logo";
import { WhatsAppIcon } from "@/components/icons";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { TopBar } from "@/components/layout/TopBar";
import { CtaButton } from "@/components/ui/CtaButton";
import { siteConfig } from "@/content/siteConfig";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function flattenNavForMobile() {
  return siteConfig.nav.flatMap((item) => {
    if (!item.children || item.children.length === 0) {
      return [item];
    }
    return [
      { id: item.id, label: item.label, href: item.href },
      ...item.children.map((child) => ({
        id: child.id,
        label: child.label,
        href: child.href,
      })),
    ];
  });
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

          <div className="flex shrink-0 items-center gap-2">
            <CtaButton
              href={buildWhatsAppLink(siteConfig.defaultWhatsAppMessage)}
              variant="gold"
              size="sm"
              external
              className="hidden sm:inline-flex"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Get a Quote
            </CtaButton>
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
