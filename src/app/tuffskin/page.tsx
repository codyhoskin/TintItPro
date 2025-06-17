"use client";

import React from "react";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import TitleSection from "@/components/TitleSection";
import MovieViewingComponent from "@/components/MovieComponent2";
import { MdPhotoLibrary } from "react-icons/md";

const generalFAQ = [
  {
    question: "What is TuffSkin?",
    answer:
      "TuffSkin is a proprietary stone laminate made from high-tech polyester that is gas-permeable but liquid-impermeable. Our hard coat technology resists abrasions and provides a long product life. TuffSkin adhesive is explicitly designed to work with stone to be removable and replaceable. In doing so, stone restoration is a thing of the past.",
  },
  {
    question: "Why TuffSkin?",
    answer:
      "Calcium-based Stones like Marble, Onyx, and Travertines etch and stain very easily, sometimes faster than they can be wiped away. No liquid sealer can prevent this issue. TuffSkin has been providing complete etch and stain protection since 2006.",
  },
  {
    question: "Will TuffSkin protect my counters from direct heat?",
    answer:
      "Yes, it can take the heat and stay in the kitchen. In the bathroom, blow dryers and curling irons do not affect TS. It can withstand heat up to 204 degrees Celsius/400 degrees Fahrenheit.",
  },
  {
    question: "How long will my TuffSkin last?",
    answer:
      "Historically, the decision to replace TuffSkin is an aesthetic determination based upon personal preference. Hotels are replaced every 8-10 years, busy restaurants and bars every 1-5 years, and residential customers every 4-8 years. Regardless of when the decision is made to replace TuffSkin, the product's performance will remain acid, alkaline, water, and oil-proof for as long as TuffSkin is protecting the surface.",
  },
  {
    question: "What finishes are available for TuffSkin?",
    answer:
      "Satin or Gloss are the two finishes available. Satin is used for a honed finish where Gloss is used for a polished finish.",
  },
  {
    question: "Does TuffSkin wrap around the edge of the stone?",
    answer:
      "No, TuffSkin protects the countertop's surface, slab backsplashes, and waterfall edges, which are the main areas where damage may occur.",
  },
  {
    question: "Does TuffSkin peel?",
    answer:
      "TuffSkin never peels on its own, but humans can peel it back with some effort. We have seen this in Bars, especially gaming bars. These types of installations require staff to review them monthly. We see no issues in home or hotel room installations. TuffSkin is a better way to maintain these surfaces.",
  },
  {
    question: "What will my countertops look like with TuffSkin installed?",
    answer:
      "Clients often report that their stone looks remarkable with TS’s color-enhancing effect. Satin enhances a honed finish, while gloss enhances a polished finish.",
  },
  {
    question: "What other surfaces can TuffSkin protect?",
    answer:
      "Aside from natural stone surfaces, TuffSkin can protect any flat surface needing protection. From engineered stone like quartz, metal, glass, and other flat surfaces.",
  },
  {
    question: "Care & 10-Year Warranty",
    answer: (
      <a
        href="https://www.tuffskin.com/care-and-warranty/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0070f3", textDecoration: "underline" }}
      >
        View Care Instructions and Warranty
      </a>
    ),
  },
];

const TuffSkinPage: React.FC = () => {
  return (
    <main
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        lineHeight: "1.8",
        position: "relative",
        marginTop: "150px"
      }}
    >
      {/* Hero Images */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        <Image src="/images/tuffskin-web.jpg" alt="TuffSkin Sample 1" width={400} height={100} />

        <div style={{ background: "#f7f7f7", padding: "30px", borderRadius: "12px", maxWidth: "800px", marginBottom: "20px", marginTop: "20px" }}>
          <p style={{ marginBottom: 0, textAlign: "center" }}>
            We are a professional certified TuffSkin© installer. <br></br>TuffSkin© provides professional-grade protection for natural stone surfaces, helping prevent etching,
            staining, and damage from heat or moisture. Ideal for kitchens, bathrooms, restaurants, and hotels, it
            maintains the look and feel of luxury countertops without the usual wear and tear.
          </p>
        </div>

        <MovieViewingComponent />

        {["/images/tuffskin-info.png", "/images/tuffskin-header2.png", "/images/tuffskin-banner.png", "/images/tuffskin-trusted.png"].map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`TuffSkin Image ${idx}`}
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
        ))}
      </div>

      {/* CTA Section */}
      <div
      className={styles.ctaBlock}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
  <div style={{marginLeft: "40px"}}>
    <div style={{marginLeft: "20px", marginBottom: "-20px"}}>
      <MdPhotoLibrary size={55} color="#2cc0ff" />
    </div>

    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1px" }}>
      <TitleSection
        title="Project Showcase"
        subtitle="Explore our recent installations and craftsmanship."
        align="left"
      />

      <Link
        href="/tuffskin-image-gallery"
        aria-label="Go to Image Gallery"
        className={styles.ctaButton}
      >
        View Our Image Gallery
      </Link>
    </div>
  </div>
</div>






      {/* Sticky CTA Button */}
      <div
        style={{
          position: "sticky",
          bottom: "20px",
          zIndex: 999,
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <a
          href="https://tintitpro.setmore.com/"
          className={styles.scheduleButton}
        >
        <Image
            src="/images/schedule.png"
            alt="Estimator Pro Schedule"
            width={270}
            height={100}
            className={styles.wigglePop}
          />        
          </a>
        </div>



      {/* FAQ Section */}
      <div>
        <FrequentlyAskedQuestions
          title="Customer Support"
          subtitle="Answers to Common Questions"
          faqItems={generalFAQ}
        />
      </div>

      <Image
        src="/images/tuffskin-info2.png"
        alt="TuffSkin Info"
        width={600}
        height={400}
        style={{
          width: "90%",
          maxWidth: "800px",
          height: "auto",
          borderRadius: "12px",
          transition: "width 0.3s ease",
          display: "block",
          margin: "50px auto 100px",
        }}
      />
    </main>
  );
};

export default TuffSkinPage;
