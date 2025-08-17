"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ServicesSection.module.css";

const serviceCards = [
  {
    img: "/images/service3.png",
    title: "Commercial Window Tinting",
    subtitle:
      "Professional tinting for offices, retail spaces, and commercial buildings in Calgary.",
    bullets: [
      "Energy cost reduction",
      "UV protection",
      "Glare reduction",
      "Privacy enhancement",
    ],
    link: "/windowfilm",
  },
  {
    img: "/images/service2.png",
    title: "Residential Window Tinting",
    subtitle:
      "Boost home comfort, privacy, and energy efficiency with quality window films.",
    bullets: [
      "Home privacy",
      "Energy savings",
      "Furniture protection",
      "Increased comfort",
    ],
    link: "/windowfilm",
  },
  {
    img: "/images/service1.png",
    title: "TuffSkin Countertop Protection",
    subtitle:
      "Premium films to preserve your marble and stone countertops.",
    bullets: [
      "Scratch resistance",
      "Stain protection",
      "Easy maintenance",
      "Invisible coverage",
    ],
    link: "/tuffskin",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "var(--background)",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "2.4rem", fontWeight: "bold", marginTop: "25px" }}>
          Our Product Solutions
        </h2>
        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)" }}>
          Cooler Homes. Protected Marble. No More Stress.
        </p>
      </div>

      {/* Cards */}
      <LazyMotion features={domAnimation}>
        <m.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
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
        >
          {serviceCards.map((card, index) => (
            <m.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Link href={card.link} style={{ textDecoration: "none" }}>
                <div
                  className={styles.card}
                  style={{
                    background: "var(--background)",
                    color: "var(--foreground)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    border: "1px solid var(--border-color, rgba(255,255,255,0.1))",
                  }}
                >
                  {/* Hover effect */}
                  <style jsx>{`
                    .${styles.card}:hover {
                      transform: rotateY(8deg) translateY(-6px);
                      box-shadow: 0 14px 35px rgba(0, 0, 0, 0.15);
                      border-color: var(--primary);
                    }
                  `}</style>

                  {/* Image top half */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "180px",
                      backgroundColor: "#000",
                    }}
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      style={{
                        objectFit: "cover",
                        opacity: 0.85,
                      }}
                    />
                    <h3
                      style={{
                        position: "absolute",
                        bottom: "-20px",
                        left: "20px",
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        color: "#fff",
                        textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom half */}
                  <div
                    style={{
                      padding: "40px 25px 30px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* Subtitle */}
                    <p
                      style={{
                        fontSize: "1rem",
                        marginBottom: "25px",
                        color: "var(--text-muted)",
                        minHeight: "60px",
                      }}
                    >
                      {card.subtitle}
                    </p>

                    {/* Benefits grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "12px",
                        width: "100%",
                      }}
                    >
                      {card.bullets.map((point, i) => (
                        <div
                          key={i}
                          style={{
                            padding: "10px",
                            borderRadius: "10px",
                            background: "var(--primary)", // brand red
                            color: "#fff",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default ServicesSection;
