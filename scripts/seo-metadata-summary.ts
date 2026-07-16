import {
  buildAboutMetadata,
  buildAirportTransfersMetadata,
  buildBlogIndexMetadata,
  buildBlogPostMetadata,
  buildContactMetadata,
  buildGalleryMetadata,
  buildHomeMetadata,
  buildLocationMetadata,
  buildLocationsIndexMetadata,
  buildRouteMetadata,
  buildRoutesIndexMetadata,
  buildServiceLandingMetadata,
  buildServicesMetadata,
  buildToursMetadata,
  buildTransportMetadata,
} from "../src/lib/metadata";
import { blogPosts } from "../src/content/blog";
import { locations } from "../src/content/locations";
import { routes } from "../src/content/routes";
import { serviceLandings } from "../src/content/serviceLandings";

function titleOf(meta: { title?: unknown }): string {
  const t = meta.title;
  if (typeof t === "string") return t;
  if (t && typeof t === "object" && "absolute" in t) {
    return String((t as { absolute: string }).absolute);
  }
  return JSON.stringify(t);
}

const rows: Array<{
  path: string;
  title: string;
  description: string;
  titleLen: number;
  descLen: number;
}> = [];

function add(path: string, meta: { title?: unknown; description?: string | null }) {
  const title = titleOf(meta);
  const description = meta.description ?? "";
  rows.push({
    path,
    title,
    description,
    titleLen: title.length,
    descLen: description.length,
  });
}

add("/", buildHomeMetadata());
for (const page of serviceLandings) {
  add(page.path, buildServiceLandingMetadata(page));
}
add("/services", buildServicesMetadata());
add("/routes", buildRoutesIndexMetadata());
add("/locations", buildLocationsIndexMetadata());
add("/transport", buildTransportMetadata());
add("/transport/airport-transfers", buildAirportTransfersMetadata());
add("/tours", buildToursMetadata());
add("/gallery", buildGalleryMetadata());
add("/about", buildAboutMetadata());
add("/contact", buildContactMetadata());
add("/blog", buildBlogIndexMetadata());

const redirected = new Set(["dubai-to-abu-dhabi", "abu-dhabi-to-dubai"]);
for (const route of routes.filter((r) => !redirected.has(r.slug))) {
  add(`/routes/${route.slug}`, buildRouteMetadata(route));
}
for (const location of locations) {
  add(`/locations/${location.slug}`, buildLocationMetadata(location));
}
for (const post of blogPosts) {
  add(`/blog/${post.slug}`, buildBlogPostMetadata(post));
}

const titles = rows.map((r) => r.title);
const descs = rows.map((r) => r.description);
const dupTitles = [...new Set(titles.filter((t, i) => titles.indexOf(t) !== i))];
const dupDescs = [...new Set(descs.filter((d, i) => descs.indexOf(d) !== i))];

console.log("--- METADATA SUMMARY ---");
for (const row of rows) {
  console.log(
    `${row.path}\t${row.titleLen}c\t${row.descLen}c\t${row.title}\t${row.description}`,
  );
}
console.log("--- DUPLICATE TITLES ---");
console.log(dupTitles.length ? dupTitles.join("\n") : "(none)");
console.log("--- DUPLICATE DESCRIPTIONS ---");
console.log(dupDescs.length ? dupDescs.join("\n") : "(none)");
console.log(`--- TOTAL ROUTES: ${rows.length} ---`);
