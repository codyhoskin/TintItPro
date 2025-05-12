"use client";

import React from "react";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import TitleSection from "@/components/TitleSection";
import MovieViewingComponent from "@/components/MovieComponent2";

const generalFAQ = [
  {
    question: "What is TuffSkin?",
    answer: "TuffSkin is a proprietary stone laminate made from high-tech polyester that is gas-permeable but liquid-impermeable. Our hard coat technology resists abrasions and provides a long product life. TuffSkin adhesive is explicitly designed to work with stone to be removable and replaceable. In doing so, stone restoration is a thing of the past."
  },
  {
    question: "Why TuffSkin?",
    answer: "Calcium-based Stones like Marble, Onyx, and Travertines etch and stain very easily, sometimes faster than they can be wiped away. No liquid sealer can prevent this issue. TuffSkin has been providing complete etch and stain protection since 2006."
  },
  {
    question: "Will TuffSkin protect my counters from direct heat?",
    answer: "Yes, it can take the heat and stay in the kitchen. In the bathroom, blow dryers and curling irons do not affect TS. It can withstand heat up to 204 degrees Celsius/400 degrees Fahrenheit."
  },
  {
    question: "How long will my TuffSkin last?",
    answer: "Historically, the decision to replace TuffSkin is an aesthetic determination based upon personal preference. Hotels are replaced every 8-10 years, busy restaurants and bars every 1-5 years, and residential customers every 4-8 years. Regardless of when the decision is made to replace TuffSkin, the product's performance will remain acid, alkaline, water, and oil-proof for as long as TuffSkin is protecting the surface."
  },
  {
    question: "What finishes are available for TuffSkin?",
    answer: "Satin or Gloss are the two finishes available. Satin is used for a honed finish where Gloss is used for a polished finish."
  },
  {
    question: "Does TuffSkin wrap around the edge of the stone?",
    answer: "No, TuffSkin protects the countertop's surface, slab backsplashes, and waterfall edges, which are the main areas where damage may occur."
  },
  {
    question: "Does TuffSkin peel?",
    answer: "TuffSkin never peels on its own, but humans can peel it back with some effort. We have seen this in Bars, especially gaming bars. These types of installations require staff to review them monthly. We see no issues in home or hotel room installations. TuffSkin is a better way to maintain these surfaces."
  },
  {
    question: "What will my countertops look like with TuffSkin installed?",
    answer: "Clients often report that their stone looks remarkable with TS’s color-enhancing effect. Satin enhances a honed finish, while gloss enhances a polished finish."
  },
  {
    question: "What other surfaces can TuffSkin protect?",
    answer: "Aside from natural stone surfaces, TuffSkin can protect any flat surface needing protection. From engineered stone like quartz, metal, glass, and other flat surfaces."
  },
  {
    question: "Care & 10-Year Warranty",
    answer: "https://www.tuffskin.com/care-and-warranty/"
  },
];


const TuffSkinPage: React.FC = () => {
  return (
    <main
      style={{
        padding: "2px",
        maxWidth: "1200px",
        margin: "0 auto",
        lineHeight: "1.8",
        marginTop: "150px",
      }}
    >
      {/* IMAGE COLUMN ABOVE VIDEO */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
          <Image
          src="/images/tuffskin-web.jpg"
          alt="TuffSkin Sample 1"
          width={600}
          height={400}
          style={{
            width: "90%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "12px",
            transition: "width 0.3s ease",
          }}
                  />
        <Image
          src="/images/tuffskin-header2.png"
          alt="TuffSkin Sample 1"
          width={600}
          height={400}
          style={{
            width: "90%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "12px",
            transition: "width 0.3s ease",
          }}
                  />
                 
        
        <Image
          src="/images/tuffskin-info2.png"
          alt="TuffSkin Sample 2"
          width={600}
          height={400}
          style={{
            width: "90%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "12px",
            transition: "width 0.3s ease",
          }}
                  />
                     
       
      
      </div>

      {/* VIDEO */}
      <MovieViewingComponent />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
          <Image
          src="/images/tuffskin-banner.png"
          alt="TuffSkin Sample 1"
          width={600}
          height={400}
          style={{
            width: "90%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "12px",
            transition: "width 0.3s ease",
          }}
                  />
                  <Image
          src="/images/tuffskin-trusted.png"
          alt="TuffSkin Sample 4"
          width={600}
          height={400}
          style={{
            width: "90%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "12px",
            transition: "width 0.3s ease",
          }}
                  />
    
        </div>
      {/* CTA Block */}
      <div className={styles.ctaBlock}>
        <TitleSection title="See Our Past Work" subtitle="Head to the Image Gallery" />
        <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "100px" }}>
          <Link
            href="/tuffskin-image-gallery"
            aria-label="Go to Image Gallery"
            className={styles.ctaButton}
          >
            View Our Image Gallery
          </Link>
        </div>
      </div>

      {/* Booking Section */}
      <section className={styles.ctaSection}>
        <a
          href="https://tintitpro.setmore.com/"
          aria-label="Schedule an appointment with Estimator Pro"
          className={styles.scheduleButton}
        >
          <Image
            src="/images/schedule.png"
            alt="Estimator Pro Schedule"
            width={350}
            height={130}
            className={styles.wigglePop}
          />
        </a>
      </section>

      {/* Empty Image Grid (keep or remove?) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          margin: "50px 0",
        }}
      ></div>

      {/* FAQ */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "150px",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <FrequentlyAskedQuestions
          title="Frequently Asked Questions"
          subtitle="Have a Question?"
          faqItems={generalFAQ}
        />
      </div>
    </main>
  );
};

export default TuffSkinPage;
