import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Calgary TuffSkin Project Gallery",
  description:
    "View Tint It Pro TuffSkin installations protecting marble and other natural stone surfaces in Calgary homes and businesses.",
  path: "/tuffskin-image-gallery",
});

export default function TuffSkinGalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
