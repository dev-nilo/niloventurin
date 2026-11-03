import type { MetadataRoute } from "next";
import { sitemapEntries } from "../site/crawlers";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries(new Date());
}
