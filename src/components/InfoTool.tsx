"use client";

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const InfoTooltip: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        right: "50%",
        top: "145px",
        transform: "translateX(50%)",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <button
        type="button"
        aria-label="How it works"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onClick={() => setShowInfo((prev) => !prev)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <FaInfoCircle
          style={{
            color: "#000000",
            fontSize: "34px",
            filter: "drop-shadow(0 6px 12px rgba(227,0,10,0.2))",
            flexShrink: 0,
          }}
        />

    

        <span
          style={{
            background: "#111",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "10px",
            fontSize: "1rem",
            fontWeight: 700,
            lineHeight: 1,
            boxShadow: "0 10px 24px rgba(0,0,0,0.16)",
          }}
        >
          How It Works
        </span>
      </button>

      <div
        style={{
          position: "absolute",
          top: "72px",
          left: "50%",
          transform: showInfo
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(10px)",
          width: "min(92vw, 720px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(248,248,248,0.92) 100%)",
          borderRadius: "28px",
          padding: "18px",
          boxShadow:
            "0 22px 60px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.06)",
          opacity: showInfo ? 1 : 0,
          transition: "opacity 0.28s ease, transform 0.28s ease",
          pointerEvents: showInfo ? "auto" : "none",
          zIndex: 1001,
        }}
      >
        <div
          style={{
            background: "var(--background)",
            borderRadius: "22px",
            padding: "18px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              background: "#0f0f10",
              color: "#fff",
              padding: "18px 20px",
              borderRadius: "16px",
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              lineHeight: 1.35,
              fontWeight: 500,
              marginBottom: "14px",
              boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
            }}
          >
            Note: Triple-pane windows require exterior window film.
            Compatibility confirmed during consultation.
          </div>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {[
              "1) Enter your measurements (windows or countertops)",
              "2) Select your preferred options (premium recommended)",
              "3) Get a quick price range",
              "4) Book a consultation for final pricing and recommendations",
              "5) Press schedule a visit to choose a date and time for final confirmation",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#0f0f10",
                  color: "#fff",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  fontSize: "clamp(1rem, 1.3vw, 1.12rem)",
                  lineHeight: 1.3,
                  fontWeight: 500,
                  boxShadow: "0 10px 22px rgba(0,0,0,0.16)",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#0f0f10",
              color: "#fff",
              padding: "18px 20px",
              borderRadius: "16px",
              fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)",
              lineHeight: 1.25,
              fontWeight: 600,
              marginTop: "14px",
              boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
            }}
          >
            Estimate only. Final pricing confirmed after consultation.
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.94)",
              margin: "14px 2px 2px",
              fontSize: "1rem",
              lineHeight: 1.45,
              fontWeight: 500,
            }}
          >
            Estimates may vary if surfaces are not easily accessible or if the
            windows are triple-pane glass.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;