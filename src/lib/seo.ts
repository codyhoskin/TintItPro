import type { Metadata } from "next";

export const SITE_URL = "https://tintitpro.ca";

export const socialProfiles = [
  "https://www.facebook.com/tintitpro",
  "https://www.instagram.com/tintitpro",
  "https://www.tiktok.com/@tintitpro",
  "https://www.youtube.com/channel/UCxJ_WibdI_sia2RZ_wAIOMw",
];

const defaultSocialImage = {
  url: `${SITE_URL}/images/tint-it-pro-van-parallax.webp`,
  width: 2400,
  height: 1356,
  alt: "Tint It Pro window film and surface protection service vehicle in Calgary",
};

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "Tint It Pro",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: `${SITE_URL}/images/tint-it-pro-van-parallax.webp`,
      telephone: "+1-403-470-1687",
      priceRange: "$$",
      description:
        "Calgary window film and surface protection specialists for residential and commercial properties, including Solar Gard window films and TuffSkin natural stone protection.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      areaServed: {
        "@type": "City",
        name: "Calgary",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Alberta",
        },
      },
      sameAs: socialProfiles,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-403-470-1687",
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Window Film and Surface Protection Services",
        itemListElement: [
          "Residential window film",
          "Commercial window film",
          "Solar control window film",
          "Security window film",
          "Decorative window film",
          "Anti-graffiti film",
          "TuffSkin natural stone surface protection",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Tint It Pro",
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
      inLanguage: "en-CA",
    },
  ],
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Tint It Pro`,
      description,
      url: canonical,
      siteName: "Tint It Pro",
      locale: "en_CA",
      type: "website",
      images: [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Tint It Pro`,
      description,
      images: [`${SITE_URL}/images/tint-it-pro-van-parallax.webp`],
    },
  };
}

export function createServiceStructuredData({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType,
        description,
        url,
        provider: {
          "@id": `${SITE_URL}/#business`,
        },
        areaServed: {
          "@type": "City",
          name: "Calgary",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name,
            item: url,
          },
        ],
      },
    ],
  };
}
