"use client";

import React from "react";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import TitleSection from "@/components/TitleSection";
import MovieViewingComponent from "@/components/MovieComponent2";
import { MdPhotoLibrary } from "react-icons/md";
import { useTheme } from "next-themes";
import { motion, useReducedMotion } from "framer-motion";

const generalFAQ = [
  {
    question: "What is TuffSkin®?",
    answer:
      "TuffSkin® is a proprietary stone laminate made from high-tech polyester that is gas-permeable but liquid-impermeable. Our hard coat technology resists abrasions and provides a long product life. TuffSkin® adhesive is explicitly designed to work with stone to be removable and replaceable. In doing so, stone restoration is a thing of the past.",
  },
  {
    question: "Why TuffSkin®?",
    answer:
      "Calcium-based Stones like Marble, Onyx, and Travertines etch and stain very easily, sometimes faster than they can be wiped away. No liquid sealer can prevent this issue. TuffSkin® has been providing complete etch and stain protection since 2006.",
  },
  {
    question: "Will TuffSkin® protect my counters from direct heat?",
    answer:
      "Yes, it can take the heat and stay in the kitchen. In the bathroom, blow dryers and curling irons do not affect TS. It can withstand heat up to 204 degrees Celsius/400 degrees Fahrenheit.",
  },
  {
    question: "How long will my TuffSkin® last?",
    answer:
      "Historically, the decision to replace TuffSkin® is an aesthetic determination based upon personal preference. Hotels are replaced every 8-10 years, busy restaurants and bars every 1-5 years, and residential customers every 4-8 years. Regardless of when the decision is made to replace TuffSkin®, the product's performance will remain acid, alkaline, water, and oil-proof for as long as TuffSkin® is protecting the surface.",
  },
  {
    question: "What finishes are available for TuffSkin®?",
    answer:
      "Satin or Gloss are the two finishes available. Satin is used for a honed finish where Gloss is used for a polished finish.",
  },
  {
    question: "Does TuffSkin® wrap around the edge of the stone?",
    answer:
      "No, TuffSkin® protects the countertop's surface, slab backsplashes, and waterfall edges, which are the main areas where damage may occur.",
  },
  {
    question: "Does TuffSkin® peel?",
    answer:
      "TuffSkin® never peels on its own, but humans can peel it back with some effort. We have seen this in Bars, especially gaming bars. These types of installations require staff to review them monthly. We see no issues in home or hotel room installations. TuffSkin® is a better way to maintain these surfaces.",
  },
  {
    question: "What will my countertops look like with TuffSkin® installed?",
    answer:
      "Clients often report that their stone looks remarkable with TS’s color-enhancing effect. Satin enhances a honed finish, while gloss enhances a polished finish.",
  },
  {
    question: "What other surfaces can TuffSkin® protect?",
    answer:
      "Aside from natural stone surfaces, TuffSkin® can protect any flat surface needing protection. From engineered stone like quartz, metal, glass, and other flat surfaces.",
  },
  {
    question: "Care & 10-Year Warranty",
    answer: (
      <a
        href="https://www.tuffskin.com/care-and-warranty/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.faqLink}
      >
        View Care Instructions and Warranty
      </a>
    ),
  },
];

const TuffSkinPage: React.FC = () => {
  const { theme } = useTheme();
  const reducedMotion = useReducedMotion();
  const reveal = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.16 },
      };
  const revealTransition = { duration: 0.6, ease: "easeOut" as const };

const imageSrc =
    theme === "light"
      ? "/images/tuffskin-web.jpg" // black logo for light mode
      : "/images/TuffSkin-logo-whtpurp.png";

    
  return (
    <main className={styles.pageWrapper}>
      {/* Hero Images */}
      <motion.section className={styles.heroSection} {...reveal}>
        <Image src={imageSrc} alt="TuffSkin® Surface Protection" width={300} height={90} className={styles.themedLogo}/>

        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Stone surface protection · Calgary</p>
          <h1>TuffSkin® Marble &amp; Stone Countertop Protection in Calgary</h1>
          <p>
            Preserve luxury marble, onyx, travertine and quartz surfaces with a
            removable protective film engineered to resist etching, staining,
            moisture and everyday wear.
          </p>
        </div>

        <div className={styles.introPanel}>
          <p>
            Tint It Pro is a certified TuffSkin® installer serving Calgary homes and
            businesses. TuffSkin® provides professional-grade protection for natural
            stone surfaces, helping prevent etching, staining and damage from heat or
            moisture. It is ideal for kitchens, bathrooms, restaurants and hotels.
          </p>
        </div>
        <Image src="/images/tuffskin-header2.png" alt="TuffSkin® Sample" width={700} height={180} className={styles.roundedImage}/>

        <MovieViewingComponent />

        <div className={styles.visualStack}>
        {["/images/tuffskin-banner.png", "/images/tuffskin-info.png", "/images/tuffskin-trusted.png"].map((src, idx) => (
          <motion.div key={idx} {...reveal} transition={{ ...revealTransition, delay: idx * 0.08 }}>
            <Image src={src} alt={`TuffSkin® installation detail ${idx + 1}`} width={600} height={400} className={styles.detailImage}/>
          </motion.div>
        ))}
        </div>
      </motion.section>

    <motion.section className={styles.ctaBlock} {...reveal}>
  <div className={styles.ctaContent}>
    <div className={styles.iconWrapper}>
      <MdPhotoLibrary size={85} color="#0042DD" />
    </div>

    <div className={styles.textWrapper}>
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
</motion.section>






    {/* Sticky CTA Button */}
<motion.div className={styles.scheduleSection} {...reveal}>
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
</motion.div>




      {/* FAQ Section */}
      <motion.section className={styles.faqSection} {...reveal}>
        <FrequentlyAskedQuestions
          title="Customer Support"
          subtitle="Answers to Common Questions"
          faqItems={generalFAQ}
        />
      </motion.section>

      <motion.figure className={styles.infoFeature} {...reveal}>
        <Image src="/images/tuffskin-info2.png" alt="TuffSkin® product information" width={600} height={400} />
      </motion.figure>

      <motion.section className={styles.relatedServices} aria-labelledby="related-stone-services" {...reveal}>
        <h2 id="related-stone-services">Explore More Calgary Protection Services</h2>
        <p>
          Protect your home&apos;s glass with our{" "}
          <Link href="/windowfilm">residential window tinting services</Link>, or explore
          energy, privacy and security solutions for businesses through our{" "}
          <Link href="/commercial-films">commercial window film installation</Link>.
        </p>
        <Link href="/tuffskin-image-gallery" className={styles.galleryTextLink}>
          Browse our Calgary TuffSkin project gallery
        </Link>
      </motion.section>
    </main>
  );
};

export default TuffSkinPage;
