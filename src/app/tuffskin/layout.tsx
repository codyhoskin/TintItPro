import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createPageMetadata,
  createServiceStructuredData,
} from "@/lib/seo";

const description =
  "Certified TuffSkin installer in Calgary providing removable natural stone protection for marble, onyx, travertine, quartz, and other surfaces.";

export const metadata: Metadata = createPageMetadata({
  title: "TuffSkin Stone Protection Calgary",
  description,
  path: "/tuffskin",
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
        })}
      />
      {children}
    </>
  );
}
