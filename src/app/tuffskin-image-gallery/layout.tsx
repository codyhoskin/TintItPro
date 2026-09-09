import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createGalleryStructuredData,
  createPageMetadata,
} from "@/lib/seo";

const description =
  "View TuffSkin marble and natural stone protection projects installed by Tint It Pro in Calgary homes, kitchens, hotels, restaurants and commercial spaces.";

const keywords = [
  "TuffSkin gallery Calgary",
  "marble countertop protection projects",
  "natural stone protection Calgary",
  "TuffSkin installation Calgary",
  "marble etch protection Calgary",
];

export const metadata: Metadata = createPageMetadata({
  title: "TuffSkin Stone Protection Gallery Calgary",
  description,
  path: "/tuffskin-image-gallery",
  keywords,
  image: {
    path: "/images/tuffskin/DJI_20250228131733_0121_D.JPG",
    width: 3840,
    height: 2160,
    alt: "TuffSkin natural stone protection installation in Calgary",
  },
});

export default function TuffSkinGalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData
        data={createGalleryStructuredData({
          name: "TuffSkin Stone Protection Gallery Calgary",
          description,
          path: "/tuffskin-image-gallery",
          image: "/images/tuffskin/DJI_20250228131733_0121_D.JPG",
          keywords,
        })}
      />
      {children}
    </>
  );
}
