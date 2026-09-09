import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Calgary Window Tinting Project Gallery",
  description:
    "Explore residential and commercial window film projects completed by Tint It Pro in Calgary and surrounding communities.",
  path: "/image-gallery",
});

export default function ImageGalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
