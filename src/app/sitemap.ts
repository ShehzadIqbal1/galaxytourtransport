import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { locations } from "@/content/locations";
import { routes } from "@/content/routes";
import { serviceLandings } from "@/content/serviceLandings";
import { siteConfig } from "@/content/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/routes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/locations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/transport`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/transport/airport-transfers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/tours`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const serviceLandingEntries: MetadataRoute.Sitemap = serviceLandings.map(
    (page) => ({
      url: `${siteConfig.url}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  const redirectedRouteSlugs = new Set([
    "dubai-to-abu-dhabi",
    "abu-dhabi-to-dubai",
  ]);

  const routeEntries: MetadataRoute.Sitemap = routes
    .filter((route) => !redirectedRouteSlugs.has(route.slug))
    .map((route) => ({
      url: `${siteConfig.url}/routes/${route.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    }));

  const locationEntries: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteConfig.url}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...serviceLandingEntries,
    ...routeEntries,
    ...locationEntries,
    ...blogEntries,
  ];
}
