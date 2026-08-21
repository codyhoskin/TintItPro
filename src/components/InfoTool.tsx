"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";
import styles from "../styles/InfoTool.module.css";

const estimatorSteps = [
  {
    title: "Add your surfaces",
    description:
      "Choose Windows or Counters. Add a new card when the size or film changes.",
  },
  {
    title: "Complete each card",
    description:
      "Set the quantity, drag the width and height sliders, then choose a film.",
  },
  {
    title: "Confirm access",
    description:
      "In Review, tell us whether a ladder, scaffold, or lift is required.",
  },
  {
    title: "Review your estimate",
    description:
      "Check the preliminary price, then book a consultation for final pricing.",
  },
];

const InfoTooltip: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const infoWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showInfo) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (
        infoWrapperRef.current &&
        !infoWrapperRef.current.contains(event.target as Node)
      ) {
        setShowInfo(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowInfo(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [showInfo]);

  return (
    <div className={styles.infoWrapper} ref={infoWrapperRef}>
      <button
        type="button"
        className={styles.infoButton}
        aria-label="How Estimator Pro works"
        aria-expanded={showInfo}
        aria-controls="estimator-how-it-works"
        onClick={() => setShowInfo((current) => !current)}
      >
        <FaInfoCircle />
        How it works
      </button>

      <div
        id="estimator-how-it-works"
        className={`${styles.infoPanel} ${showInfo ? styles.infoPanelOpen : ""}`}
        aria-hidden={!showInfo}
        role="dialog"
        aria-label="How to use Estimator Pro"
      >
        <div className={styles.panelHeading}>
          <div>
            <span>Estimator guide</span>
            <strong>How to use Estimator Pro</strong>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setShowInfo(false)}
            aria-label="Close estimator guide"
          >
            <FaTimes />
          </button>
        </div>

        <ol className={styles.stepList}>
          {estimatorSteps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.stepCopy}>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </div>
              <FaCheck />
            </li>
          ))}
        </ol>

        <div className={styles.infoNote}>
          <strong>Triple-pane glass</strong>
          <p>Exterior film only. We’ll confirm compatibility.</p>
        </div>

        <p className={styles.disclaimer}>
          Preliminary only. On-site consultations are $75 + GST and credited if you proceed.
        </p>
      </div>
    </div>
  );
};

export default InfoTooltip;
