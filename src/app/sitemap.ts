import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { locations } from "@/content/locations";
import { routes } from "@/content/routes";
import { siteConfig } from "@/content/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/routes",
    "/locations",
    "/services",
    "/gallery",
    "/about",
    "/contact",
    "/tours",
    "/transport",
    "/transport/airport-transfers",
    "/blog",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const routeEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}/routes/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locationEntries: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteConfig.url}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...routeEntries,
    ...locationEntries,
    ...blogEntries,
  ];
}
