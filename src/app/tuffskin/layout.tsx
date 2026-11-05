import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createPageMetadata,
  createServiceStructuredData,
} from "@/lib/seo";

const description =
  "Certified TuffSkin installer in Calgary providing natural stone protection film for marble, onyx, travertine and quartz countertops. Protect against etching, staining, moisture and everyday wear.";

const keywords = [
  "TuffSkin Calgary",
  "TuffSkin installer Calgary",
  "TuffSkin countertop protection Calgary",
  "natural stone protection film Calgary",
  "countertop protection film Calgary",
  "marble countertop protection Calgary",
  "onyx countertop protection Calgary",
  "travertine countertop protection Calgary",
  "quartz countertop protection Calgary",
  "natural stone protection Calgary",
  "marble etch protection Calgary",
  "stone surface protection film",
  "countertop film installation Calgary",
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
