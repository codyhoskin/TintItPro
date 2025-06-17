"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/TitleSection.module.css";

interface TitleSectionProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle, align = "center" }) => {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      className={styles.container}
      style={{ textAlign: align }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setInView(true)}
    >
      <h2 className={styles.title}>
        {title.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: "inline-block", marginRight: "5px" }}>
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={`${styles.char} ${inView ? styles.animateWave : ""}`}
                style={{
                  animationDelay: `${(wordIndex * 0.3) + (charIndex * 0.05)}s`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
};

export default TitleSection;
