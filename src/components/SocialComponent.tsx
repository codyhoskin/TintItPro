"use client";

import React, { useRef } from "react";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import TitleSection from "./TitleSection";
import { motion, useInView } from "framer-motion";

interface SocialCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
}

const SocialCard: React.FC<SocialCardProps> = ({ imageUrl }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles.cardContainer}>
      <motion.div
        ref={ref}
        className={styles.card}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.cardLeft}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt="Socials"
              fill
              className={styles.cardImage}
              priority
            />
            <div className={styles.imageOverlay} />
          </div>
        </div>
        <div className={styles.cardRight}>
          <TitleSection title="Connect with Us" subtitle="Follow us on social media." />
          <SocialLinks />
        </div>
      </motion.div>
    </div>
  );
};

export default SocialCard;
