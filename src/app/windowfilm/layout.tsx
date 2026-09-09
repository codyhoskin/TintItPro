import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createPageMetadata,
  createServiceStructuredData,
} from "@/lib/seo";

const description =
  "Premium residential window tinting in Calgary for heat reduction, UV protection, glare control, privacy, security, and decorative glass.";

export const metadata: Metadata = createPageMetadata({
  title: "Residential Window Tinting Calgary",
  description,
  path: "/windowfilm",
});

export default function WindowFilmLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData
        data={createServiceStructuredData({
          name: "Residential Window Tinting in Calgary",
          serviceType: "Residential window film installation",
          description,
          path: "/windowfilm",
        })}
      />
      {children}
    </>
  );
}
