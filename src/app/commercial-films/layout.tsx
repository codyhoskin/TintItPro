import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createPageMetadata,
  createServiceStructuredData,
} from "@/lib/seo";

const description =
  "Commercial window film installation in Calgary for offices, retail and multi-unit properties needing solar control, security, privacy or anti-graffiti protection.";

const keywords = [
  "commercial window film Calgary",
  "commercial window tinting Calgary",
  "office window tinting Calgary",
  "security window film Calgary",
  "anti-graffiti film Calgary",
  "decorative privacy film Calgary",
  "solar control window film Calgary",
];

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Window Film Calgary | Office Tinting",
  description,
  path: "/commercial-films",
  keywords,
  image: {
    path: "/images/tint-job/C86168FC-19D8-4BC5-BD02-6C6797DC84FD.JPG",
    width: 2048,
    height: 2048,
    alt: "Commercial window film installation completed by Tint It Pro in Calgary",
  },
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
          keywords,
          audience: "Calgary businesses, facility managers and commercial property owners",
          image: "/images/tint-job/C86168FC-19D8-4BC5-BD02-6C6797DC84FD.JPG",
        })}
      />
      {children}
    </>
  );
}
