import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { en } from "@/lib/i18n/en";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectPages: MetadataRoute.Sitemap = en.projects.items
    .filter((item) => item.slug)
    .map((item) => ({
      url: `${SITE_URL}/projects/${item.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/review`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...projectPages,
  ];
}
