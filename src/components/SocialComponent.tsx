"use client";

import React, { useRef } from "react";
import Script from "next/script";
import SocialLinks from "./SocialLinks";
import { motion, useInView } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

interface SocialCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
}

const SocialCard: React.FC<SocialCardProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        width: "100%",
        padding: "20px 14px",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "1180px",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          background: "var(--background)",
          border: "1px solid var(--border-color)",
          boxShadow: "0 18px 50px rgba(0,0,0,0.10), var(--glass-edge)",
        }}
      >
        <div
          style={{
            flex: "0 0 100%",
            width: "100%",
            background: "var(--quad)",
            borderBottom: "1px solid var(--border-color)",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "14px",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--primary)",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Stay Connected
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "var(--border-color)",
              minWidth: "24px",
            }}
          />

          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--primary)",
              fontWeight: 600,
              whiteSpace: "nowrap",
              opacity: 0.8,
            }}
          >
            Follow Us
          </span>
        </div>

        <div
          style={{
            flex: "1 1 100%",
            width: "100%",
            background:
              "linear-gradient(135deg, var(--primary) 0%, var(--primary) 45%, color-mix(in srgb, var(--primary) 82%, black) 100%)",
            color: "var(--text-button2)",
            padding: "28px 20px 26px",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 34%), radial-gradient(circle at 85% 85%, rgba(39,168,224,0.10), transparent 30%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              width: "100%",
              maxWidth: "820px",
              margin: "0 auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "8px 12px",
                marginBottom: "18px",
                border: "var(--glass-border)",
                background: "rgba(255,255,255,0.08)",
                color: "var(--tertiary)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                boxSizing: "border-box",
                boxShadow: "var(--glass-edge)",
              }}
            >
              Social Media
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 8vw, 4.8rem)",
                lineHeight: 0.94,
                letterSpacing: "-0.05em",
                fontWeight: 800,
                margin: "0 0 18px 0",
                color: "var(--tertiary)",
                maxWidth: "700px",
                wordBreak: "break-word",
              }}
            >
              Follow us and stay connected
            </h2>

            <p
              style={{
                fontSize: "clamp(1rem, 3.8vw, 1.15rem)",
                lineHeight: 1.7,
                color: "var(--tertiary)",
                maxWidth: "700px",
                margin: "0 0 24px 0",
              }}
            >
              See premium installs, before-and-after transformations, expert
              tips, and special offers.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {[
                "Latest project showcases and before / after transformations",
                "Expert care tips for window film and surface protection",
                "Special promotions, launches, and seasonal offers",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 14px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    boxSizing: "border-box",
                    minWidth: 0,
                    boxShadow: "var(--glass-edge)",
                  }}
                >
                  <FaCheckCircle
                    style={{
                      color: "var(--tertiary)",
                      flexShrink: 0,
                      marginTop: "3px",
                      fontSize: "14px",
                    }}
                  />
                  <span
                    style={{
                      color: "var(--tertiary)",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      fontWeight: 500,
                      minWidth: 0,
                      wordBreak: "break-word",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Connect with us
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <SocialLinks />
              </div>

              <div
                style={{
                  width: "100%",
                  marginTop: "18px",
                  padding: "14px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  boxSizing: "border-box",
                  boxShadow: "var(--glass-edge)",
                }}
              >
                <Script
                  src="https://elfsightcdn.com/platform.js"
                  strategy="lazyOnload"
                />
                <div
                  className="elfsight-app-ae477bbe-7b15-477f-8e77-2a3b63606c61"
                  data-elfsight-app-lazy
                  style={{
                    minHeight: "420px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialCard;
