import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  createPageMetadata,
  createServiceStructuredData,
} from "@/lib/seo";
import { residentialWindowFilmFaqs } from "@/lib/residential-window-film";

const description =
  "Professional residential window tinting in Calgary for heat and glare reduction, UV and fade protection, daytime privacy, decorative glass and security.";

const keywords = [
  "residential window tinting Calgary",
  "architectural home window film Calgary",
  "home window film Calgary",
  "heat control window film Calgary",
  "UV protection window film Calgary",
  "one way privacy window film Calgary",
  "frosted window film Calgary",
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
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://tintitpro.ca/windowfilm#faq",
          mainEntity: residentialWindowFilmFaqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          })),
        }}
      />
      {children}
    </>
  );
}
