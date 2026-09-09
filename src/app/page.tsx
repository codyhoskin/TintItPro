"use client";

import { Suspense } from "react";
import Hero           from "@/components/HeroSection";
import InfoCard       from "@/components/InfoCard";
import TitleSection   from "@/components/TitleSection";
import ViewportMount  from "@/components/ViewportMount";
import ViewportVideo  from "@/components/ViewportVideo";
import { ServicesSection, GoogleReviewShowcase, EstimatorPro, SocialCard,
} from "@/components/Heavy";
import { FaShieldAlt, FaWater } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import styles from "./page.module.css";
//import FAQChat from "@/components/FAQChat";
import FAQSection, { faqItems } from "@/components/FAQSection";
import StructuredData from "@/components/StructuredData";
import { homePageStructuredData } from "@/lib/seo";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

// Tailwind container keeps a max-width and side padding.
export default function Landing() {
  return (
    <main id="main" >
    <StructuredData data={homePageStructuredData} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
      }}
    />
    <section id="home" className="relative" style={{ scrollMarginTop: "150px" }}>

      <Hero />
    </section>

    <section id="showreel" className={styles.showreelSection}> </section>
    <div className={styles.videoWrapper}>
      <ViewportVideo
        src="/video/tuffskinvideo.mp4"
        label="Tint It Pro natural stone protection showreel"
        className={styles.video}
      />
    </div>
   

    {/* 5️⃣ Benefits strip */}
    <TitleSection title="Why Choose Tint It Pro" subtitle="Premium protection for your glass, windows, and natural stone" />

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



      <section id="solutions">
        <ViewportMount minHeight={760}>
          <Suspense><ServicesSection /></Suspense>
        </ViewportMount>
      </section>

      

      {/* 6️⃣ Reviews */}
      <section id="reviews" className="relative">
        <ViewportMount minHeight={620}>
          <Suspense><GoogleReviewShowcase /></Suspense>
        </ViewportMount>
      </section>



      {/* 7️⃣ Estimator – decorative background locked with aspect-ratio */}
      <section id="estimator" className="relative isolate overflow-hidden">
        <Suspense>
          <ViewportMount minHeight={760}>
            <div style={{ minHeight: "100px" }}>
              <EstimatorPro />
            </div>
          </ViewportMount>
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
      <ViewportMount minHeight={900} rootMargin="400px 0px">
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
      </ViewportMount>
    </main>
  );
}
