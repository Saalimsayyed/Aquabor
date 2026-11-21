import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

import { equipmentCategories } from "@/data/equipment";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      images: [
        "/images/water-well-drilling-rig-uae.webp",
        "/images/copper-bonded-earth-rods-uae.webp",
        "/images/earth-rod-coupling-brass-uae.webp",
        "/images/earthing-clamp-uae.webp",
        "/images/bentonite-earthing-backfill-uae.webp",
      ].map((path) => new URL(path, siteUrl).href),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      images: [new URL("/images/earthing-drilling-excavator-uae.webp", siteUrl).href],
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/equipment`,
      images: equipmentCategories.flatMap(({ items }) =>
        items.map(({ image }) => new URL(image, siteUrl).href)
      ),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    images: [new URL(s.image, siteUrl).href],
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    images: p.images.map((path) => new URL(path, siteUrl).href),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
