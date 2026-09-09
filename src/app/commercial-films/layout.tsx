import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createPageMetadata,
  createServiceStructuredData,
} from "@/lib/seo";

const description =
  "Commercial window film installation in Calgary for solar control, security, privacy, decorative glass, and anti-graffiti protection.";

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Window Film Calgary",
  description,
  path: "/commercial-films",
});

export default function CommercialFilmsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <StructuredData
        data={createServiceStructuredData({
          name: "Commercial Window Film in Calgary",
          serviceType: "Commercial window film installation",
          description,
          path: "/commercial-films",
        })}
      />
      {children}
    </>
  );
}
