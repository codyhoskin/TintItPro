"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import CalendlyInlineWidget from "@/components/Calendly";
import styles from "./page.module.css";

const BookingPage: React.FC = () => {
  const [countdown, setCountdown] = useState(10);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const calendlyWrapperRef = useRef<HTMLDivElement>(null);

  // Countdown logic
  useEffect(() => {
    if (calendlyLoaded) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeoutReached(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [calendlyLoaded]);

  // Detect Calendly iframe load
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const iframe = calendlyWrapperRef.current?.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setCalendlyLoaded(true));
      }
    });

    if (calendlyWrapperRef.current) {
      observer.observe(calendlyWrapperRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.pageWrapper}>
      {!calendlyLoaded && !timeoutReached && (
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Loading calendar... please wait ({countdown}s)</p>
        </div>
      )}

      {timeoutReached && !calendlyLoaded && (
        <div className={styles.errorState}>
          <p>Looks like the calendar didnt load.</p>
          <button
            onClick={() => window.location.reload()}
            className={styles.reloadButton}
          >
            Refresh Page
          </button>
        </div>
      )}

      <div
        ref={calendlyWrapperRef}
        style={{ display: calendlyLoaded ? "block" : "none" }}
      >
        <Suspense fallback={null}>
          <CalendlyInlineWidget />
        </Suspense>
      </div>
    </main>
  );
};

export default BookingPage;
