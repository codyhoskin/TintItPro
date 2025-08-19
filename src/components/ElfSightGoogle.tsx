"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import TitleSection from "./TitleSection";
import styles from "../styles/ElfSightGoogle.module.css";
import { motion } from "framer-motion";

const ElfsightWidget = () => {
  const [elfsightReady, setElfsightReady] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Check if script is already loaded in sessionStorage
  useEffect(() => {
    const isLoaded = sessionStorage.getItem('elfsight-loaded');
    if (isLoaded) {
      setScriptLoaded(true);
      setElfsightReady(true);
    }
  }, []);

  const handleScriptLoad = () => {
    console.log("Elfsight script loaded");
    setScriptLoaded(true);
    sessionStorage.setItem('elfsight-loaded', 'true');
    
    // Use requestAnimationFrame to avoid forced reflow
    requestAnimationFrame(() => {
      setTimeout(() => {
        setElfsightReady(true);
      }, 100);
    });
  };

  return (
    <section className={styles.wrapper} aria-label="Customer Testimonials Section">
      <div className={styles.inner}>
        <TitleSection
          title="Customer Testimonials"
          subtitle="See what Calgary customers say about Tint It Pro."
        />

        {/* Script loader with caching strategy */}
        {!scriptLoaded && (
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="lazyOnload"
            onLoad={handleScriptLoad}
            crossOrigin="anonymous"
          />
        )}

        {/* Widget container with pre-allocated space */}
        <div className={styles.widgetContainer} ref={widgetRef}>
          {/* Skeleton shown while loading */}
          {!elfsightReady && (
            <div className={styles.skeleton}>
              <div className={styles.skeletonLine}></div>
              <div className={styles.skeletonLine}></div>
              <div className={styles.skeletonLine}></div>
            </div>
          )}

          {/* Widget with layout containment */}
          <motion.div
            className="elfsight-app-9a739ce6-aa6d-47ac-83b9-4952558ec03e"
            data-elfsight-app-lazy
            initial={{ opacity: 0 }}
            animate={elfsightReady ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ 
              visibility: elfsightReady ? "visible" : "hidden",
              contain: "layout style paint",
              willChange: "opacity"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ElfsightWidget;
