"use client";

import React, { memo, useMemo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaChevronRight, FaShieldAlt, FaBuilding, FaHome, FaMapMarkerAlt, FaComments } from "react-icons/fa";
import styles from "../styles/ServicesSection.module.css";

// Memoized service cards data for performance
const serviceCards = [
  {
    id: "countertop-protection",
    img: "/images/service1.webp",
    title: "Countertop Film Protection",
    subtitle: "For the peace of mind",
    category: "Stone Protection",
    categoryIcon: <FaShieldAlt />,
    bullets: [
      "Resistant To Scratches",
      "Protects From Stains",
      "Easy Maintenance",
      "Invisible Coverage",
    ],
    link: "/tuffskin",
    overlayColor: "rgba(0, 0, 0, 0.6)",
    badgeColor: "rgba(0, 0, 0, 0.8)",
    contentColor: "rgba(64, 64, 64, 0.9)",
    benefitsColor: "rgba(0, 0, 0, 0.9)",
    description: "Premium countertop protection film that shields your surfaces from scratches, stains, and damage while maintaining invisible coverage.",
    keywords: ["countertop protection", "film protection", "stone protection", "scratch resistant", "stain protection"],
  },
  {
    id: "commercial-tinting",
    img: "/images/service2.webp",
    title: "Commercial Window Tinting",
    subtitle: "For Calgary business owners",
    category: "Business Protection",
    categoryIcon: <FaBuilding />,
    bullets: [
      "Energy Cost Reduction",
      "Protect From UV Radiation",
      "Glare Reduction",
      "Enhanced Privacy",
    ],
    link: "/windowfilm",
    overlayColor: "rgba(0, 0, 0, 0.6)",
    badgeColor: "rgba(21, 53, 69, 0.9)",
    contentColor: "rgba(21, 53, 69, 0.9)",
    benefitsColor: "rgba(0, 0, 0, 0.9)",
    description: "Professional commercial window tinting services in Calgary that reduce energy costs, protect from UV radiation, and enhance privacy for businesses.",
    keywords: ["commercial window tinting", "Calgary business", "energy reduction", "UV protection", "glare reduction"],
  },
  {
    id: "residential-tinting",
    img: "/images/service3.webp",
    title: "Residential Window Tinting",
    subtitle: "For Calgary home owners",
    category: "Home Protection",
    categoryIcon: <FaHome />,
    bullets: [
      "Increase Privacy",
      "Decrease Energy Costs",
      "Protect Your Furniture",
      "Increase Your Comfort",
    ],
    link: "/windowfilm",
    overlayColor: "rgba(0, 0, 0, 0.6)",
    badgeColor: "rgba(139, 69, 19, 0.9)",
    contentColor: "rgba(139, 69, 19, 0.9)",
    benefitsColor: "rgba(139, 69, 19, 0.9)",
    description: "Residential window tinting solutions for Calgary homeowners that increase privacy, reduce energy costs, and protect furniture from UV damage.",
    keywords: ["residential window tinting", "Calgary homes", "privacy enhancement", "energy savings", "furniture protection"],
  },
];

// Memoized Service Card Component for performance
const ServiceCard = memo(({ card, index }: { card: typeof serviceCards[0], index: number }) => {
  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }), []);

  const benefitsSectionStyle = useMemo(() => ({
    backgroundColor: card.category === "Business Protection" 
      ? "rgba(0, 80, 120, 0.95)" 
      : card.category === "Home Protection"
      ? "rgba(139, 69, 19, 0.9)"
      : "rgba(0, 0, 0, 0.9)"
  }), [card.category]);

  const categoryBadgeStyle = useMemo(() => ({
    backgroundColor: card.category === "Business Protection" 
      ? "rgba(0, 80, 120, 0.95)"
      : card.badgeColor 
  }), [card.category, card.badgeColor]);

  return (
    <m.article
      variants={cardVariants}
      transition={{ duration: 0.6 }}
      className={styles.serviceCard}
    >
      <div className={styles.liquidGlassCard}>
        {/* Image Section with Text Overlay */}
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
          
          {/* Category Badge */}
          <div 
            className={styles.categoryBadge}
            style={categoryBadgeStyle}
          >
            <span className={styles.categoryIcon} aria-hidden="true">{card.categoryIcon}</span>
            <span className={styles.categoryText}>{card.category}</span>
          </div>

          {/* Text Overlay */}
          <div className={styles.textOverlay}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <div className={styles.subtitleContainer}>
              <span className={styles.subtitleText}>For</span>
              {card.category !== "Stone Protection" && (
                <>
                  <div className={styles.locationBadge}>
                    <FaMapMarkerAlt className={styles.locationIcon} aria-hidden="true" />
                    <span>Calgary</span>
                  </div>
                  <span className={styles.subtitleText}>
                    {card.category === "Home Protection" ? "home owners" : "business owners"}
                  </span>
                </>
              )}
              {card.category === "Stone Protection" && (
                <span className={styles.subtitleText}>the peace of mind</span>
              )}
            </div>
            
            {/* CTA Button */}
            <div className={styles.ctaSection}>
              <a 
                href="https://tintitpro.setmore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
                style={{ backgroundColor: card.contentColor }}
                aria-label={`Get free quote for ${card.title}`}
              >
                <FaComments className={styles.chatIcon} aria-hidden="true" />
                Get Free Quote
              </a>
            </div>

            {/* Navigation Arrow */}
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

        {/* Benefits Section */}
        <div 
          className={styles.benefitsSection}
          style={benefitsSectionStyle}
        >
          <div className={styles.benefitsHeader}>
            <span className={styles.benefitsLabel}>Your Benefits</span>
          </div>
          <ul className={styles.benefitsList} role="list">
            {card.bullets.map((point, i) => (
              <li key={i} className={styles.benefitItem}>
                <div className={styles.checkIcon} aria-hidden="true">
                  <FaCheck style={{ color: 'white' }} />
                </div>
                <span className={styles.benefitText}>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Background Link - Invisible overlay for card click */}
        <Link 
          href={card.link} 
          className={styles.cardBackgroundLink}
          aria-label={`Learn more about ${card.title}`}
        />
      </div>
    </m.article>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Structured data for SEO
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Window Tinting and Protection Services",
    "description": "Professional window tinting and countertop protection services in Calgary",
    "itemListElement": serviceCards.map((card, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": card.title,
      "description": card.description,
      "url": `https://tintitpro.com${card.link}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "TintItPro",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Calgary",
          "addressRegion": "Alberta",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Calgary"
      }
    }))
  };
};

const ServicesSection: React.FC = () => {
  // Memoize structured data
  const structuredData = useMemo(() => generateStructuredData(), []);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <section
        style={{
          padding: "80px 20px",
          background: "var(--background)",
        }}
        aria-labelledby="services-heading"
      >
        {/* Section Header */}
        <header style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 
            id="services-heading"
            style={{ fontSize: "2.4rem", fontWeight: "bold", marginTop: "25px", color: "var(--foreground)" }}
          >
            Our Solutions
          </h2>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)" }}>
            Protect your home and business with our premium window films.
          </p>
        </header>

        {/* Cards */}
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
              <ServiceCard key={card.id} card={card} index={index} />
            ))}
          </m.div>
        </LazyMotion>
      </section>
    </>
  );
};

export default memo(ServicesSection);
