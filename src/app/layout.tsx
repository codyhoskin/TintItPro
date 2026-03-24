import type { Metadata } from "next";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import PerformanceMonitor from "@/components/PerformanceMonitor";

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
  metadataBase: new URL("https://tintitpro.ca"),
  title: {
    default: "Calgary Window Tinting & Surface Protection | Tint It Pro",
    template: "%s | Tint It Pro",
  },
  description:
    "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
  keywords: [
    "window tint",
    "Surface protection",
    "tuffskin",
    "decorative film",
    "car tint",
    "Tint It Pro",
    "Calgary",
  ],
  authors: [{ name: "Tint It Pro", url: "https://tintitpro.ca" }],
  openGraph: {
    title: "Calgary Window Tinting & Surface Protection | Tint It Pro",
    description:
      "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
    url: "https://tintitpro.ca",
    siteName: "Tint It Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tintitpro.ca/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Calgarys Experts in Window Films & Surface Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Window Tinting & Surface Protection | Tint It Pro",
    description:
      "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
    images: ["https://tintitpro.ca/images/logo.png"],
    creator: "@tintitpro",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://tintitpro.ca",
  },
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