"use client";
import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import styles from "../styles/InfoCard.module.css";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, subtitle }) => {
  return (
    <LazyMotion features={domAnimation}>
    
      <m.div
        className={styles.card}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.iconWrapper}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </m.div>
    </LazyMotion>
  );
};

export default InfoCard;
