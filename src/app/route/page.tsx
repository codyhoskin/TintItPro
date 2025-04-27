"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import RoutingForm from "@/components/RoutingForm";
import styles from "./page.module.css";

const RoutingPage: React.FC = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const [formLoaded, setFormLoaded] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [redirecting, setRedirecting] = useState(false); // 🆕 New state
  const formWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || formLoaded) return;

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

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const iframe = formWrapperRef.current?.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setFormLoaded(true));

        iframe.contentWindow?.addEventListener("message", (event) => {
          if (event?.data?.event === "calendly.event_scheduled") {
            setRedirecting(true); // 🆕 Show redirecting message
            setTimeout(() => {
              router.push("/booking"); // 🚀 After short delay, navigate
            }, 1000);
          }
        });
      }
    });

    if (formWrapperRef.current) {
      observer.observe(formWrapperRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, [router]);

  return (
    <main className={styles.pageWrapper}>
      {redirecting ? (
        <div className={styles.redirectingState}>
          <div className={styles.spinner}></div>
          <p>Redirecting to booking page...</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
};

export default RoutingPage;
