import type { Metadata } from "next";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";


const interFontBold = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter-bold",
  weight: "900",
  display: "swap",
});

const interFontThin = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter-thin",
  weight: "600",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://tintitpro.netlify.app"),
  title: {
    default: "Calgary Window Tinting & Marble Protection | Tint it Pro",
    template: "%s | Tint it Pro",
  },
  description: "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
  keywords: ["window tint", "marble protection", "tuffskin", "decorative film", "car tint", "Tint it Pro", "Calgary"],
  authors: [{ name: "Tint it Pro", url: "https://tintitpro.netlify.app" }],
  openGraph: {
    title: "Calgary Window Tinting & Marble Protection | Tint it Pro",
    description: "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
    url: "https://tintitpro.netlify.app",
    siteName: "Tint it Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tintitpro.netlify.app/images/logo.png", // Make sure this image exists and is optimized
        width: 1200,
        height: 630,
        alt: "Calgarys Experts in Window Films & Marble Surface Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Window Tinting & Marble Protection | Tint it Pro",
    description: "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
    images: ["https://tintitpro.netlify.app/images/logo.png"],
    creator: "@tintitpro", // Optional if you have a Twitter handle
  },
  icons: {
    icon: "/favicon.ico",           // Normal favicon
  },
  alternates: {
    canonical: "https://tintitpro.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interFontBold.variable} ${interFontThin.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/marble-texture.webp" />
      </head>
      <body>
        <ThemeProviderWrapper>  
          <Header />        
          {children}
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
