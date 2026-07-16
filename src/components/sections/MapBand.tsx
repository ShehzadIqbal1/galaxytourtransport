import { siteConfig } from "@/content/siteConfig";

export function MapBand() {
  return (
    <section className="border-y border-sand bg-sand/40" aria-label="Service area map">
      <div className="relative h-64 w-full overflow-hidden md:h-80">
        <iframe
          title={`${siteConfig.name} — ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}`}
          src="https://www.openstreetmap.org/export/embed.html?bbox=55.24%2C25.16%2C55.30%2C25.21&layer=mapnik&marker=25.185%2C55.272"
          className="h-full w-full border-0 grayscale-[30%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-onyx/50 to-transparent p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
          <div className="container-content flex flex-wrap items-end justify-between gap-3">
            <p className="text-sm font-medium text-ivory">
              {siteConfig.address.streetAddress},{" "}
              {siteConfig.address.addressLocality} — serving corridors across
              the UAE
            </p>
            <a
              href={siteConfig.mapsUrl}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-gold transition-default hover:text-ivory"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
