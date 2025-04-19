"use client";

import { useState } from "react";
import Script from "next/script";
import TitleSection from "./TitleSection";
import styles from "../styles/ElfSightGoogle.module.css";
import { motion } from "framer-motion";

const ElfsightWidget = () => {
  const [elfsightReady, setElfsightReady] = useState(false);

  return (
    <section
      className={styles.wrapper}
      aria-label="Customer Reviews Section"
    >
      <div className={styles.inner}>
        <TitleSection
          title="What Our Customers Say"
          subtitle="Check out the word on the street."
        />

        {/* Load Elfsight widget script */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log("Elfsight script loaded");
            setElfsightReady(true);
          }}
        />

        {/* Animate widget only when Elfsight is ready */}
        <motion.div
          className="elfsight-app-9a739ce6-aa6d-47ac-83b9-4952558ec03e"
          data-elfsight-app-lazy
          initial={{ opacity: 0, y: 50 }}
          animate={elfsightReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Optional overlay if needed */}
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
};

export default ElfsightWidget;
