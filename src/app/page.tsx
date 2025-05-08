"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Hero from "@/components/HeroSection";
import { FaShieldAlt, FaAward } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import InfoCard from "@/components/InfoCard";
import SocialCard from "@/components/SocialComponent";


// Dynamically import all heavy components
const LogoCarousel = dynamic(() => import("@/components/LogoCarousel"), { ssr: false });
const MovieViewingComponent = dynamic(() => import("@/components/MovieComponent"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/FAQSection"), { ssr: false });
const StreamBackground = dynamic(() => import("@/components/BackgroundDesign"), { ssr: false });
const ElfsightLazy = dynamic(() => import("../components/ElfSlightLazy"), { ssr: false });
const EstimatorPro = dynamic(() => import("@/components/EstimatorPro"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        {/* Hero Section - Loads immediately */}
        <section id="home">
          <Hero />
        </section>

        {/* Logo Carousel - Lazy Loaded */}
        <LogoCarousel />

        {/* Movie Viewing Component - Lazy Loaded */}
        <MovieViewingComponent videoId="ZsGwmoubqqE" title="Tuffskin marble protection | Tint it Pro" />

        {/* Services Section - Lazy Loaded */}
        <section id="solutions">
          <ServicesSection />
        </section>

        {/* Info Cards */}
        <div className={styles.cardContainer}>
          <InfoCard
            icon={<FaShieldAlt size={40} color="var(--secondary)" aria-hidden="true" />}
            title="Solar Guard® 10 Year Warranty"
            subtitle="Our interior Solar Guard® window films are backed by a 10-Year Warranty on the film and installation."
          />
          <InfoCard
            icon={<FaAward size={40} color="var(--secondary)" aria-hidden="true" />}
            title="100% Etch-Proof & Stain-Proof Marble—Guaranteed."
            subtitle="Protect your high-end stone surfaces from damage & costly repairs."
          />
          <InfoCard
            icon={<MdWbSunny size={40} color="var(--secondary)" aria-hidden="true" />}
            title="Why Solar Film is Best"
            subtitle="Solar Gard® window films ensure superior quality and offer up to 82% heat rejection, 99% UV ray blocking, 90% glare reduction, interior fade control, and up to 30% energy cost savings."
          />
        </div>

      



        {/* Reviews Section - Lazy Loaded */}
        <section id="reviews">
          <ElfsightLazy />
        </section>

       


        {/* Estimator Section */}
        <section
          id="estimator"
          style={{
            position: "relative",
            minHeight: "1000px", // Reserve space to avoid layout shift
          }}
        >
          <StreamBackground position="bottom" height="1000px" variant="dramatic" />
          <EstimatorPro />
        </section>

    



        {/* FAQ Section */}
        <section
          id="faq"
          style={{
            position: "relative",
            marginTop: "-5px",
            minHeight: "500px", // Reserve space to avoid layout shift
          }}
        >
          <StreamBackground position="top" height="100px" variant="dramatic" />
          <FAQSection />
        </section>
        <SocialCard
        title="Connect with Us."
        subtitle="Follow us on social media"
        imageUrl="/images/socialBanner.png"
        socialLinks={{
          facebook: "https://www.facebook.com",
          instagram: "https://www.instagram.com",
          twitter: "https://www.twitter.com",
          youtube: "https://www.youtube.com",
        }}
      />
      </main>
    </div>
  );
}
