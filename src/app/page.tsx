"use client"
import Hero from "@/components/HeroSection";
import styles from "./page.module.css";
import InfoCard from "@/components/InfoCard";
import { FaShieldAlt, FaAward } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import LogoCarousel from "@/components/LogoCarousel";
import MovieViewingComponent from "@/components/MovieComponent";
import FAQSection from "@/components/FAQSection";
import ServicesSection from "@/components/ServicesSection";
import StreamBackground from "@/components/BackgroundDesign";
import ElfsightLazy from "../components/ElfSlightLazy";

import dynamic from "next/dynamic";



const EstimatorPro = dynamic(() => import("@/components/EstimatorPro"), {
  ssr: false,
});


export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <section id="home">
        <Hero />
        </section>

        <LogoCarousel />
        <MovieViewingComponent videoId="ZsGwmoubqqE" title="Tuffskin marble protection" />

       

        <section id="solutions">
        <ServicesSection />
        </section>

        <div className={styles.cardContainer}>
          <InfoCard
            icon={<FaShieldAlt size={40} color="var(--secondary)" />}
            title="Solar Guard® 10 Year Warranty"
            subtitle="Our interior Solar Guard® window films are backed by an 10-Year Warranty on the film and installation."
          />
          <InfoCard
            icon={<FaAward size={40} color="var(--secondary)" />}
            title="100% Etch-Proof & Stain-Proof Marble—Guaranteed."
            subtitle="Protect your high-end stone surfaces from damage & costly repairs."
          />
          <InfoCard
            icon={<MdWbSunny size={40} color="var(--secondary)" />}
            title="Why Solar Film is Best"
            subtitle="Solar Gard® window films ensure superior quality and offer up to 82% heat rejection, 99% UV ray blocking, 90% glare reduction, interior fade control, and up to 30% energy cost savings."
          />
        </div>

        <section id="reviews">
        <ElfsightLazy />
        </section>

        <section id="estimator" style={{ position: "relative"}}>
          <StreamBackground position="bottom" height="1000px" variant="dramatic"/>
          <EstimatorPro />
        </section>

        <section id="faq" style={{ position: "relative",  marginTop: "-5px" }}>
        <StreamBackground position="top" height="100px" variant="dramatic"/>
        <FAQSection />
        </section>
      </main>
    </div>
  );
}
