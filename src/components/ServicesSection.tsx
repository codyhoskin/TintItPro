"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import styles from "../styles/ServicesSection.module.css";
import { FaClipboard, FaLightbulb } from "react-icons/fa";
import TitleSection from "./TitleSection";
import Link from "next/link";

const serviceCards = [
  {
    img: "/images/service1.png",
    title: "TuffSkin® Marble Protection",
    subtitle: "Marble Protection – 100% Etch & Stain Proof",
    link: "/tuffskin",
  },
  {
    img: "/images/service2.png",
    title: "Residential Window Tinting",
    subtitle: "Solar Guard Window Tinting – Blocks heat, glare & UV damage",
    link: "/windowfilm",
  },
  {
    img: "/images/service3.png",
    title: "Commercial Window Tinting",
    subtitle:
      "Upgrade the style and energy efficiency of your commercial property.",
    link: "/windowfilm",
  },
  {
    img: "/images/service4.png",
    title: "Decorative & Privacy Films",
    subtitle:
      "Enhance your safety by adding protection to your windows with anti-shatter films.",
    link: "/decorative",
  },

];

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <Image
        src="/images/house-logo.png"
        alt="Tint It Pro house logo"
        width={200}
        height={80}
        priority // 👈 important for LCP if it's above the fold
        quality={90}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />

      <TitleSection
        title="Our Solutions"
        subtitle="Cooler Homes. Protected Marble. No More Stress."
      />

      <div className={styles.cardContainer}>
        <LazyMotion features={domAnimation}>
          {serviceCards.map((card, index) => (
            <m.div
              className={styles.card}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={300}
                  height={200}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.overlay}>
                <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)" }}>
                  {card.title}
                </h2>
                <p style={{ padding: "10px", fontWeight: "100" }}>
                  {card.subtitle}
                </p>
                <Link
                  href={card.link}
                  className={styles.learnMore}
                  aria-label={`Learn more about ${card.title}`}
                >
                  <FaLightbulb style={{ marginRight: "8px" }} />
                  Learn More
                </Link>
                <a
                  href={"/route"}
                  className={styles.learnMore2}
                  aria-label={`Schedule a consult about ${card.title}`}
                >
                  <FaClipboard style={{ marginRight: "8px" }} />
                  Schedule a Free Consult
                </a>
              </div>
            </m.div>
          ))}
        </LazyMotion>
      </div>
    </section>
  );
};

export default ServicesSection;
