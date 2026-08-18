"use client";

import React, { useState } from "react";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import styles from "../styles/InfoTool.module.css";

const estimatorSteps = [
  "Add cards with quantity, size, and film.",
  "Check access and book a consultation.",
];

const InfoTooltip: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.infoWrapper}>
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
      >
        <div className={styles.panelHeading}>
          <span>Estimator guide</span>
          <strong>Two quick sections</strong>
        </div>

        <ol className={styles.stepList}>
          {estimatorSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
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
