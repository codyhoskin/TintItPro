import type { Metadata } from "next";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const interFontBold = localFont({
  src: "./fonts/Satoshi-Black.otf",
  variable: "--font-inter-bold",
  weight: "1000",
  display: "swap",
});

const interFontThin = localFont({
  src: "./fonts/Satoshi-Medium.otf",
  variable: "--font-inter-thin",
  weight: "600",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://tintitpro.ca"),
  title: {
    default: "Calgary Window Tinting & Marble Protection | Tint It Pro",
    template: "%s | Tint It Pro",
  },
  description: "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
  keywords: ["window tint", "marble protection", "tuffskin", "decorative film", "car tint", "Tint It Pro", "Calgary"],
  authors: [{ name: "Tint It Pro", url: "https://tintitpro.ca" }],
  openGraph: {
    title: "Calgary Window Tinting & Marble Protection | Tint It Pro",
    description: "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
    url: "https://tintitpro.ca",
    siteName: "Tint It Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tintitpro.ca/images/logo.png", // Make sure this image exists and is optimized
        width: 1200,
        height: 630,
        alt: "Calgarys Experts in Window Films & Marble Surface Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Window Tinting & Marble Protection | Tint It Pro",
    description: "Protect your home and save on energy with premium residential window films in Calgary. Block UV, reduce glare, and enhance privacy. Free estimates available!",
    images: ["https://tintitpro.ca/images/logo.png"],
    creator: "@tintitpro", // Optional if you have a Twitter handle
  },
  icons: {
    icon: "/favicon.ico",           // Normal favicon
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
    <html lang="en" className={`${interFontBold.variable} ${interFontThin.variable}`}>

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
