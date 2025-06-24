"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import styles from "../styles/ServicesSection.module.css";
import { FaLightbulb } from "react-icons/fa";
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
  
];

const ServicesSection: React.FC = () => {
  return (
    <section
  className={styles.servicesSection}
  style={{ padding: "60px 20px", background: "var(--tertiary)", marginBottom: "50px" }}
>
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <Image
      src="/images/house-logo.png"
      alt="Tint It Pro house logo"
      width={200}
      height={80}
      priority
      quality={90}
    />

    <TitleSection
      title="Our Product Solutions"
      subtitle="Cooler Homes. Protected Marble. No More Stress."
    />
  </div>

  <LazyMotion features={domAnimation}>
    <m.div
      className={styles.cardContainer}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {serviceCards.map((card, index) => (
        <m.div
          className={styles.card}
          key={index}
          style={{
            background: "var(--background)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.3s ease",
          }}
          whileHover={{ scale: 1.03 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Image
            src={card.img}
            alt={card.title}
            width={600}
            height={400}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <div style={{ padding: "20px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "10px",
                color: "var(--foreground)",
              }}
            >
              {card.title}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                marginBottom: "20px",
                color: "var(--text-muted)",
              }}
            >
              {card.subtitle}
            </p>
            <Link
              href={card.link}
              className={styles.learnMore}
              aria-label={`Learn more about ${card.title}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#ffffff",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "15px",
                marginBottom: "10px"
              }}
            >
              <FaLightbulb style={{ marginRight: "8px" }} />
              Learn More
            </Link>
          </div>
        </m.div>
      ))}
    </m.div>
  </LazyMotion>
</section>

  );
};

export default ServicesSection;
