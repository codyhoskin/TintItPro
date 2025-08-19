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
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className={styles.cardLeft}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt="Tint It Pro Professional Services"
              fill
              className={styles.cardImage}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.imageOverlay} />
          </div>
        </div>
        <div className={styles.cardRight}>
          <TitleSection 
            title="Stay Connected" 
            subtitle="Follow our journey and discover the latest in window tinting excellence." 
          />
          
          <div className={styles.socialDescription}>
            <p>Join our community of satisfied customers and stay updated with:</p>
            <ul className={styles.socialBenefits}>
              <li>Latest project showcases and before/after photos</li>
              <li>Expert tips for window film maintenance</li>
              <li>Industry insights and product updates</li>
              <li>Special offers and seasonal promotions</li>
            </ul>
          </div>
          
          <div className={styles.socialCTA}>
            <p className={styles.socialCTAText}>Connect with us on social media:</p>
            <SocialLinks />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialCard;
