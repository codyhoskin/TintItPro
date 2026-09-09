import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createGalleryStructuredData,
  createPageMetadata,
} from "@/lib/seo";

const description =
  "Explore completed residential and commercial window tinting projects by Tint It Pro across Calgary, including privacy, solar control and decorative films.";

const keywords = [
  "Calgary window tinting gallery",
  "residential window tinting projects Calgary",
  "commercial window film projects Calgary",
  "privacy window film Calgary",
  "decorative window film Calgary",
];

export const metadata: Metadata = createPageMetadata({
  title: "Calgary Window Tinting Project Gallery",
  description,
  path: "/image-gallery",
  keywords,
  image: {
    path: "/images/tint-job/F62CCD86-DE98-46C6-8125-4D4D37CAA383.JPG",
    width: 1170,
    height: 2080,
    alt: "Completed Tint It Pro window film project in Calgary",
  },
});

export default function ImageGalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData
        data={createGalleryStructuredData({
          name: "Calgary Window Tinting Project Gallery",
          description,
          path: "/image-gallery",
          image: "/images/tint-job/F62CCD86-DE98-46C6-8125-4D4D37CAA383.JPG",
          keywords,
        })}
      />
      {children}
    </>
  );
}
