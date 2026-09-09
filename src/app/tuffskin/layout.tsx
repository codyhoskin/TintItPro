import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createPageMetadata,
  createServiceStructuredData,
} from "@/lib/seo";

const description =
  "Certified TuffSkin installer in Calgary protecting marble, onyx, travertine and quartz countertops from etching, staining, moisture and everyday wear.";

const keywords = [
  "TuffSkin Calgary",
  "TuffSkin installer Calgary",
  "marble countertop protection Calgary",
  "natural stone protection Calgary",
  "marble etch protection",
  "stone surface protection film",
  "quartz countertop protection Calgary",
];

export const metadata: Metadata = createPageMetadata({
  title: "TuffSkin Stone & Countertop Protection Calgary",
  description,
  path: "/tuffskin",
  keywords,
  image: {
    path: "/images/tuffskin-header2.png",
    width: 2454,
    height: 794,
    alt: "TuffSkin natural stone and marble countertop protection",
  },
});

export default function TuffSkinLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData
        data={createServiceStructuredData({
          name: "TuffSkin Stone Protection in Calgary",
          serviceType: "Natural stone surface protection installation",
          description,
          path: "/tuffskin",
          keywords,
          audience: "Calgary homeowners, hotels, restaurants and property managers",
          image: "/images/tuffskin-header2.png",
        })}
      />
      {children}
    </>
  );
}
