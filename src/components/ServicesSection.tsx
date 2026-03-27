"use client";

import React, { memo, useMemo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaChevronRight,
  FaShieldAlt,
  FaBuilding,
  FaHome,
  FaComments,
} from "react-icons/fa";
import styles from "../styles/ServicesSection.module.css";

// Updated service cards data to match the screenshot text/order
const serviceCards = [
  {
    id: "glass-protection",
    img: "/images/service3.webp",
    title: "Glass Protection",
    subtitle: "Cleaner glass. Less effort.",
    category: "Protect your glass",
    categoryIcon: <FaShieldAlt />,
    bullets: [
      "No more water spots",
      "Less maintenance",
      "Crystal clear glass",
      "Resists stains & soap scum",
    ],
    link: "/tuffskin",
    overlayColor: "rgba(0, 0, 0, 0.6)",
    badgeColor: "rgba(0, 0, 0, 0.82)",
    contentColor: "#f7b6de",
    benefitsColor: "rgba(0, 0, 0, 0.9)",
    description:
      "Glass protection services that help keep shower glass and railings cleaner with less effort.",
    keywords: [
      "glass protection",
      "shower glass",
      "water spot prevention",
      "soap scum protection",
    ],
  },
  {
    id: "window-film",
    img: "/images/service2.webp",
    title: "Window Film",
    subtitle: "Less heat. Less glare.",
    category: "Upgrade Interiors",
    categoryIcon: <FaBuilding />,
    bullets: [
      "Reduce heat and glare",
      "Block harmful UV rays",
      "Protect interiors from fading",
      "Daytime privacy options",
    ],
    link: "/commercial-films",
    overlayColor: "rgba(0, 0, 0, 0.6)",
    badgeColor: "rgba(0, 80, 120, 0.95)",
    contentColor: "#f7b6de",
    benefitsColor: "rgba(0, 80, 120, 0.95)",
    description:
      "Window film solutions that reduce heat, glare, and UV exposure while improving comfort.",
    keywords: [
      "window film",
      "heat reduction",
      "glare reduction",
      "UV protection",
      "privacy film",
    ],
  },
  {
    id: "stone-protection",
    img: "/images/service1.webp",
    title: "Stone Protection",
    subtitle: "Prevent damage. Preserve beauty.",
    category: "Protect your stone",
    categoryIcon: <FaHome />,
    bullets: [
      "Stops etching & stains",
      "Protect high-end stone",
      "Heat resistant up to 400°F",
      "Long-lasting protection",
    ],
    link: "/windowfilm",
    overlayColor: "rgba(0, 0, 0, 0.6)",
    badgeColor: "rgba(139, 69, 19, 0.92)",
    contentColor: "#f7b6de",
    benefitsColor: "rgba(139, 69, 19, 0.9)",
    description:
      "Natural stone protection that helps preserve premium surfaces from etching, stains, and damage.",
    keywords: [
      "stone protection",
      "countertop protection",
      "etch prevention",
      "stain resistance",
    ],
  },
];

// Memoized Service Card Component
const ServiceCard = memo(
  ({ card, index }: { card: typeof serviceCards[0]; index: number }) => {
    const cardVariants = useMemo(
      () => ({
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }),
      []
    );

    const benefitsSectionStyle = useMemo(
      () => ({
        backgroundColor:
          card.category === "Business Protection"
            ? "rgba(0, 80, 120, 0.95)"
            : card.category === "Home Protection"
            ? "rgba(139, 69, 19, 0.9)"
            : "rgba(0, 0, 0, 0.9)",
      }),
      [card.category]
    );

    const categoryBadgeStyle = useMemo(
      () => ({
        backgroundColor:
          card.category === "Business Protection"
            ? "rgba(0, 80, 120, 0.95)"
            : card.badgeColor,
      }),
      [card.category, card.badgeColor]
    );

    return (
      <m.article
        variants={cardVariants}
        transition={{ duration: 0.6 }}
        className={styles.serviceCard}
      >
        <div className={styles.liquidGlassCard}>
          <div className={styles.imageSection}>
            <Image
              src={card.img}
              alt={`${card.title} - ${card.description}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={85}
              style={{
                objectFit: "cover",
              }}
            />

            <div
              className={styles.imageOverlay}
              style={{ backgroundColor: card.overlayColor }}
              aria-hidden="true"
            />

            <div className={styles.categoryBadge} style={categoryBadgeStyle}>
              <span className={styles.categoryIcon} aria-hidden="true">
                {card.categoryIcon}
              </span>
              <span className={styles.categoryText}>{card.category}</span>
            </div>

            <div className={styles.textOverlay}>
              <h3 className={styles.cardTitle}>{card.title}</h3>

              <div className={styles.subtitleContainer}>
                <span className={styles.subtitleText}>{card.subtitle}</span>
              </div>

              <div className={styles.ctaSection}>
                <a
                  href="https://tintitpro.setmore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                  style={{ backgroundColor: "var(--secondary)", color: "var(--background)" }}
                  aria-label={`Request a consultation for ${card.title}`}
                >
                  <FaComments className={styles.chatIcon} aria-hidden="true" />
                  Request a Consult
                </a>
              </div>

              <div className={styles.navigationArrow}>
                <Link
                  href={card.link}
                  className={styles.arrowButton}
                  aria-label={`Navigate to ${card.title} page`}
                >
                  <FaChevronRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.benefitsSection} style={benefitsSectionStyle}>
            <ul className={styles.benefitsList} role="list">
              {card.bullets.map((point, i) => (
                <li key={i} className={styles.benefitItem} role="listitem">
                  <div className={styles.checkIcon} aria-hidden="true">
                    <FaCheck style={{ color: "white" }} />
                  </div>
                  <span className={styles.benefitText}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={card.link}
            className={styles.cardBackgroundLink}
            aria-label={`Learn more about ${card.title}`}
          />
        </div>
      </m.article>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

const ServicesSection: React.FC = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "var(--background)",
      }}
      aria-labelledby="services-heading"
    >
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          id="services-heading"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginTop: "25px",
            color: "var(--foreground)",
          }}
        >
          Our Solutions
        </h2>
      </header>

      <LazyMotion features={domAnimation}>
        <m.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          role="list"
          aria-label="Service offerings"
        >
          {serviceCards.map((card, index) => (
            <div key={card.id} role="listitem">
              <ServiceCard card={card} index={index} />
            </div>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default memo(ServicesSection);