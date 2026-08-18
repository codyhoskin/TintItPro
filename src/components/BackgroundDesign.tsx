"use client";

import React from "react";
import styles from "../styles/BackgroundDesign.module.css";

interface StreamBackgroundProps {
  position: "top" | "bottom";
  height?: string;
  color?: string;
  variant?: "default" | "gentle" | "dramatic";
  duration?: string; // like "10s", "6s"
}

const StreamBackground: React.FC<StreamBackgroundProps> = ({
  position,
  height = "800px",
  color = "#0042DD",
  variant = "default",
  duration = "10s",
}) => {
  const isTop = position === "top";

  // Animation path variants
  const animationValues = {
    default: `
      M0,400 C360,200 1080,600 1440,400 L1440,800 L0,800 Z;
      M0,420 C400,220 1040,620 1440,420 L1440,800 L0,800 Z;
      M0,380 C340,180 1100,580 1440,380 L1440,800 L0,800 Z;
      M0,400 C360,200 1080,600 1440,400 L1440,800 L0,800 Z
    `,
    gentle: `
      M0,400 C360,300 1080,500 1440,400 L1440,800 L0,800 Z;
      M0,410 C390,320 1050,480 1440,410 L1440,800 L0,800 Z;
      M0,390 C330,280 1110,520 1440,390 L1440,800 L0,800 Z;
      M0,400 C360,300 1080,500 1440,400 L1440,800 L0,800 Z
    `,
    dramatic: `
      M0,400 C300,100 1140,700 1440,400 L1440,800 L0,800 Z;
      M0,430 C450,80 1000,750 1440,430 L1440,800 L0,800 Z;
      M0,370 C250,150 1200,650 1440,370 L1440,800 L0,800 Z;
      M0,400 C300,100 1140,700 1440,400 L1440,800 L0,800 Z
    `,
  };

  return (
    <figure
      className={`${styles.streamBackground} ${isTop ? styles.top : styles.bottom}`}
      style={{ height }}
      aria-hidden="true"
      role="presentation"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d={animationValues[variant].split(";")[0]} // Start with first shape
        >
          <animate
            attributeName="d"
            dur={duration}
            repeatCount="indefinite"
            values={animationValues[variant]}
          />
        </path>
      </svg>
    </figure>
  );
};

export default StreamBackground;
