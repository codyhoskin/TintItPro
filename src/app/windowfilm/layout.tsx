import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createPageMetadata,
  createServiceStructuredData,
} from "@/lib/seo";

const description =
  "Residential window tinting in Calgary using premium Solar Gard films for heat, glare and UV reduction, daytime privacy, security and decorative glass.";

const keywords = [
  "residential window tinting Calgary",
  "home window film Calgary",
  "heat control window film Calgary",
  "UV protection window film",
  "privacy window film Calgary",
  "security window film Calgary",
  "Solar Gard window film Calgary",
];

export const metadata: Metadata = createPageMetadata({
  title: "Residential Window Tinting Calgary | Home Window Film",
  description,
  path: "/windowfilm",
  keywords,
  image: {
    path: "/images/hero/luxHosue.webp",
    width: 1024,
    height: 1024,
    alt: "Residential window tinting for a luxury Calgary home",
  },
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
          keywords,
          audience: "Homeowners and residential property managers in Calgary",
          image: "/images/hero/luxHosue.webp",
        })}
      />
      {children}
    </>
  );
}
