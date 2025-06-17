"use client";

import { useState } from "react";
import Script from "next/script";
import TitleSection from "./TitleSection";
import styles from "../styles/ElfSightGoogle.module.css";
import { motion } from "framer-motion";

const ElfsightWidget = () => {
  const [elfsightReady, setElfsightReady] = useState(false);

  return (
    <section className={styles.wrapper} aria-label="Customer Testimonials Section">
      <div className={styles.inner}>
        <TitleSection
          title="Customer Testimonials"
          subtitle="Real feedback from real people."
        />

        {/* Script loader */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log("Elfsight script loaded");
            setTimeout(() => {
              setElfsightReady(true);
            }, 500); // Optional delay to simulate loading
          }}
        />

        {/* Skeleton shown while loading */}
        {!elfsightReady && (
          <div className={styles.skeleton}>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
          </div>
        )}

        {/* Widget container is always in the DOM */}
        <motion.div
          className="elfsight-app-9a739ce6-aa6d-47ac-83b9-4952558ec03e"
          data-elfsight-app-lazy
          initial={{ opacity: 0 }}
          animate={elfsightReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ visibility: elfsightReady ? "visible" : "hidden", height: elfsightReady ? "auto" : "0px" }}
        />
      </div>
    </section>
  );
};

export default ElfsightWidget;
