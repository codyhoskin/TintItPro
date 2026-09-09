import type { Metadata } from "next";
import {
  GOOGLE_MAPS_LISTING_URL,
  GOOGLE_PLACE_ID,
} from "@/lib/google-business";

export const SITE_URL = "https://tintitpro.ca";

export const socialProfiles = [
  "https://www.facebook.com/tintitpro",
  "https://www.instagram.com/tintitpro",
  "https://www.tiktok.com/@tintitpro",
  "https://www.youtube.com/channel/UCxJ_WibdI_sia2RZ_wAIOMw",
];

const businessProfiles = [...socialProfiles, GOOGLE_MAPS_LISTING_URL];

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
      alternateName: "Tint It Pro Calgary",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/images/tint-it-pro-google-logo.png`,
        contentUrl: `${SITE_URL}/images/tint-it-pro-google-logo.png`,
        width: 720,
        height: 720,
        caption: "Tint It Pro",
      },
      image: [
        `${SITE_URL}/images/tint-it-pro-google-logo.png`,
        `${SITE_URL}/images/tint-it-pro-van-parallax.webp`,
        `${SITE_URL}/images/window-tinting.webp`,
      ],
      telephone: "+1-403-470-1687",
      priceRange: "$$",
      currenciesAccepted: "CAD",
      slogan: "Premium Stone & Glass Protection in Calgary",
      description:
        "Calgary window film and surface protection specialists for residential and commercial properties, including Solar Gard window films and TuffSkin natural stone protection.",
      mainEntityOfPage: {
        "@id": `${SITE_URL}/#webpage`,
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Google Place ID",
        value: GOOGLE_PLACE_ID,
      },
      hasMap: GOOGLE_MAPS_LISTING_URL,
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
      sameAs: businessProfiles,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "18:00",
        },
      ],
      knowsAbout: [
        "Residential window film",
        "Commercial window film",
        "Solar control window film",
        "Security window film",
        "Decorative window film",
        "Anti-graffiti film",
        "Glass protection",
        "TuffSkin natural stone protection",
      ],
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

export const homePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Calgary Window Tinting & Surface Protection | Tint It Pro",
  description:
    "Premium residential and commercial window film, glass protection, and natural stone protection services in Calgary, Alberta.",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#business`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/tint-it-pro-van-parallax.webp`,
  },
  inLanguage: "en-CA",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: {
    path: string;
    width: number;
    height: number;
    alt: string;
  };
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image,
}: PageMetadataOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const socialImage = image
    ? {
        url: `${SITE_URL}${image.path}`,
        width: image.width,
        height: image.height,
        alt: image.alt,
      }
    : defaultSocialImage;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: { "en-CA": canonical },
    },
    openGraph: {
      title: `${title} | Tint It Pro`,
      description,
      url: canonical,
      siteName: "Tint It Pro",
      locale: "en_CA",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Tint It Pro`,
      description,
      images: [socialImage.url],
    },
  };
}

export function createServiceStructuredData({
  name,
  description,
  path,
  serviceType,
  keywords = [],
  audience,
  image,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  keywords?: string[];
  audience?: string;
  image?: string;
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
        category: serviceType,
        description,
        url,
        ...(keywords.length > 0 ? { keywords } : {}),
        ...(image ? { image: `${SITE_URL}${image}` } : {}),
        ...(audience
          ? {
              audience: {
                "@type": "Audience",
                audienceType: audience,
              },
            }
          : {}),
        provider: {
          "@id": `${SITE_URL}/#business`,
        },
        mainEntityOfPage: {
          "@id": `${url}#webpage`,
        },
        areaServed: {
          "@type": "City",
          name: "Calgary",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#business`,
        },
        mainEntity: {
          "@id": `${url}#service`,
        },
        breadcrumb: {
          "@id": `${url}#breadcrumb`,
        },
        inLanguage: "en-CA",
      },
    ],
  };
}

export function createGalleryStructuredData({
  name,
  description,
  path,
  image,
  keywords = [],
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "ImageGallery"],
        "@id": `${url}#gallery`,
        name,
        description,
        url,
        image: `${SITE_URL}${image}`,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${image}`,
        },
        ...(keywords.length > 0 ? { keywords } : {}),
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#business`,
        },
        breadcrumb: {
          "@id": `${url}#breadcrumb`,
        },
        inLanguage: "en-CA",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
