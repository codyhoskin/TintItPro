import type { Metadata } from "next";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import StructuredData from "@/components/StructuredData";
import { businessStructuredData, SITE_URL } from "@/lib/seo";

const interFontBold = localFont({
  src: "./fonts/Satoshi-Black.otf",
  variable: "--font-inter-bold",
  weight: "900",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "arial"],
});

const interFontThin = localFont({
  src: "./fonts/Satoshi-Medium.otf",
  variable: "--font-inter-thin",
  weight: "600",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Tint It Pro",
  title: {
    default: "Calgary Window Tinting & Surface Protection | Tint It Pro",
    template: "%s | Tint It Pro",
  },
  description:
    "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Estimates available!",
  keywords: [
    "Calgary window tinting",
    "residential window film Calgary",
    "commercial window film Calgary",
    "natural stone protection Calgary",
    "TuffSkin Calgary",
    "glass protection Calgary",
    "decorative window film Calgary",
    "security window film Calgary",
    "Tint It Pro",
  ],
  authors: [{ name: "Tint It Pro", url: "https://tintitpro.ca" }],
  creator: "Tint It Pro",
  publisher: "Tint It Pro",
  category: "Home Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Calgary Window Tinting & Surface Protection | Tint It Pro",
    description:
      "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Estimates available!",
    url: "https://tintitpro.ca",
    siteName: "Tint It Pro",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://tintitpro.ca/images/tint-it-pro-van-parallax.webp",
        width: 2400,
        height: 1356,
        alt: "Tint It Pro window film and surface protection service vehicle in Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Window Tinting & Surface Protection | Tint It Pro",
    description:
      "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Estimates available!",
    images: ["https://tintitpro.ca/images/tint-it-pro-van-parallax.webp"],
    creator: "@tintitpro",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://tintitpro.ca",
    languages: {
      "en-CA": "https://tintitpro.ca",
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${interFontBold.variable} ${interFontThin.variable}`}
    >
      <body>
        <StructuredData data={businessStructuredData} />
        <ThemeProviderWrapper>
          <Header />
          {children}
          <Footer />
          {process.env.NODE_ENV === "development" && <PerformanceMonitor />}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
