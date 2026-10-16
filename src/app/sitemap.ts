import type { MetadataRoute } from "next";
import { resourcePosts } from "@/lib/resources";

const SITE_URL = "https://tintitpro.ca";

const serviceUrls = [
  "/",
  "/commercial-films",
  "/image-gallery",
  "/resources",
  "/tuffskin",
  "/tuffskin-image-gallery",
  "/windowfilm",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const services: MetadataRoute.Sitemap = serviceUrls.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const resources: MetadataRoute.Sitemap = resourcePosts.map((post) => ({
    url: `${SITE_URL}/resources/${post.slug}`,
    lastModified: post.modifiedTime,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...services, ...resources];
}
