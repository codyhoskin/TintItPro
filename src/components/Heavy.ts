// components/heavy.ts
import dynamic from "next/dynamic";

export const LogoCarousel       = dynamic(() => import("./LogoCarousel"),       { ssr: false });
export const MovieViewing       = dynamic(() => import("./MovieComponent"),     { ssr: false });
export const ServicesSection    = dynamic(() => import("./ServicesSection"),    { ssr: false });
export const FAQSection         = dynamic(() => import("./FAQSection"),         { ssr: false });
export const StreamBackground   = dynamic(() => import("./BackgroundDesign"),   { ssr: false });
export const ElfsightLazy       = dynamic(() => import("./ElfSlightLazy"),      { ssr: false });
export const EstimatorPro       = dynamic(() => import("./EstimatorPro"),       { ssr: false });
