"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import RoutingForm from "@/components/RoutingForm";
import styles from "./page.module.css";

const RoutingPage: React.FC = () => {
  const [countdown, setCountdown] = useState(10);
  const [formLoaded, setFormLoaded] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [hydrated, setHydrated] = useState(false); // 🆕 Track hydration
  const formWrapperRef = useRef<HTMLDivElement>(null);

  // Mark hydrated once we hit client
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Countdown logic AFTER hydration
  useEffect(() => {
    if (!hydrated || formLoaded) return; // Only start countdown after hydrated

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
  }, [hydrated, formLoaded]);

  // Detect Calendly routing form iframe load
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const iframe = formWrapperRef.current?.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setFormLoaded(true));
      }
    });

    if (formWrapperRef.current) {
      observer.observe(formWrapperRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.pageWrapper}>
      {!formLoaded && !timeoutReached && (
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Loading form... please wait ({countdown}s)</p>
        </div>
      )}

      {timeoutReached && !formLoaded && (
        <div className={styles.errorState}>
          <p>Looks like the form didn’t load.</p>
          <button
            onClick={() => window.location.reload()}
            className={styles.reloadButton}
          >
            Refresh Page
          </button>
        </div>
      )}

      <div
        ref={formWrapperRef}
        style={{ display: formLoaded ? "block" : "none" }}
      >
        <Suspense fallback={null}>
          <RoutingForm />
        </Suspense>
      </div>
    </main>
  );
};

export default RoutingPage;
