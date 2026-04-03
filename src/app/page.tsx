"use client";

import { Suspense } from "react";
import Hero           from "@/components/HeroSection";
import InfoCard       from "@/components/InfoCard";
import SocialCard     from "@/components/SocialComponent";
import TitleSection   from "@/components/TitleSection";
import { ServicesSection, ElfsightLazy, EstimatorPro,
} from "@/components/Heavy";
import { FaShieldAlt, FaWater } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import styles from "./page.module.css";
//import FAQChat from "@/components/FAQChat";
import FAQSection from "@/components/FAQSection";

// Tailwind container keeps a max-width and side padding.
export default function Landing() {
  return (
    <main id="main" >
    <section id="home" className="relative" style={{ scrollMarginTop: "150px" }}>

      <Hero />
    </section>

    <section id="showreel" className={styles.showreelSection}>
      <div className={styles.videoWrapper}>
        <video
          src="/video/tuffskinvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className={styles.video}
        >
   
          <p>
            Your browser doesnt support video playback. This video showcases TuffSkin®
            stone protection services, demonstrating our professional installation
            process and the lasting protection we provide for marble and granite
            surfaces.
          </p>
        </video>
      </div>
    </section>

    {/* 5️⃣ Benefits strip */}
    <TitleSection title="Why Choose TintItPro" subtitle="Premium protection for your glass, windows, and natural stone" />

    <InfoCard.Wrapper>
    <InfoCard
      icon={<FaShieldAlt size={40} className="text-secondary" />}
      title="Long-Term Surface Protection"
      subtitle="Protect your windows and natural stone from daily wear, damage, and environmental exposure."
    />
    <InfoCard
      icon={<FaWater size={40} className="text-secondary" />}
      title="Reduce Maintenance & Cleaning"
      subtitle="Keep shower glass, railings, and surfaces looking clean with less effort and no harsh chemicals"
    />
    <InfoCard
      icon={<MdWbSunny size={40} className="text-secondary" />}
      title="Improve Comfort & Performance"
      subtitle="Reduce heat, UV damage, and glare while protecting interiors and improving overall comfort."
    />
    </InfoCard.Wrapper>



      <section id="services">
        <Suspense><ServicesSection /></Suspense>
      </section>

      

      {/* 6️⃣ Reviews */}
      <section id="reviews" className="relative">
        <Suspense><ElfsightLazy height={700}/></Suspense>
      </section>



      {/* 7️⃣ Estimator – decorative background locked with aspect-ratio */}
      <section id="estimator" className="relative isolate overflow-hidden">
        <Suspense>
          
          <div style={{ minHeight: "100px" }}>
           
            <EstimatorPro />
              
          </div>
       
        </Suspense>
      </section>

      <div className={styles.parallaxBanner}></div>

      {/* 8️⃣ FAQ */}
      <section id="faq" className="relative isolate">
        <Suspense>
          <FAQSection />
        </Suspense>
      </section> 

    {/* <FAQChat />*/}

      {/* 9️⃣ Social footer */}
      <SocialCard
        title="Connect with Us."
        subtitle="Follow us on social media"
        imageUrl="/images/hero/tinterguy.png"
        socialLinks={{
          facebook:  "https://facebook.com/tintitpro",
          instagram: "https://instagram.com/tintitpro",
          twitter:   "https://twitter.com/tintitpro",
          youtube:   "https://youtube.com/channel/UCxJ_WibdI_sia2RZ_wAIOMw",
        }}
      />
    </main>
  );
}
