"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import {
  FaCalculator,
  FaClipboard,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import WhatsAppButton from "./WhatsApp";
import LogoCarousel from "./LogoCarousel";
import { LogoSkeleton } from "./Skeletons";

const Hero = () => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80);

    const node = buttonRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (node) observer.observe(node);

    return () => {
      clearTimeout(timer);
      if (node) observer.unobserve(node);
    };
  }, []);

  const benefitPillStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.04)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
    color: "var(--foreground)",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1.15,
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  const checkIconStyle: React.CSSProperties = {
    color: "#e22626",
    flexShrink: 0,
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "16px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0px)" : "translateY(10px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <Link
              href="/#estimator"
              aria-label="Get your free quote today"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginLeft: "10px",
                padding: "4px 4px",
                borderRadius: "30px",
                border: "0.5px solid var(--text-muted)",
                color: "var(--text-muted)",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                backgroundColor: "transparent",
                transition: "all 0.25s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 10px",
                  backgroundColor: "var(--primary)",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 900,
                  borderRadius: "25px",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "inherit", fontWeight: "inherit" }}>
                  NEW
                </span>
                <GiPartyPopper size={18} />
              </span>

              <span style={{ whiteSpace: "nowrap" }}>
                Get an Instant Estimate!
              </span>
              <FaCalculator style={{ marginRight: "8px" }} />
              <FaChevronRight size={14} />
            </Link>

            <WhatsAppButton />
          </div>

          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0px)" : "translateY(16px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              transitionDelay: "0.08s",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "18px",
                marginBottom: "18px",
                maxWidth: "1180px",
              }}
            >
              <h1
                className={styles.title}
                style={{
                  textAlign: "left",
                  fontSize: "clamp(2.6rem, 5.2vw, 5.4rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.05em",
                  margin: 0,
                  color: "var(--foreground)",
                  flex: "1 1 720px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#3aa0e8",
                    opacity: heroVisible ? 1 : 0,
                    transform: heroVisible
                      ? "translateY(0px)"
                      : "translateY(20px)",
                    filter: heroVisible ? "blur(0px)" : "blur(4px)",
                    transition:
                      "opacity 0.75s ease, transform 0.75s ease, filter 0.75s ease",
                  }}
                >
                  Protect your
                </span>

                <span
                  style={{
                    display: "block",
                    color: "#42434a",
                    opacity: heroVisible ? 1 : 0,
                    transform: heroVisible
                      ? "translateY(0px)"
                      : "translateY(24px)",
                    filter: heroVisible ? "blur(0px)" : "blur(5px)",
                    transition:
                      "opacity 0.9s ease, transform 0.9s ease, filter 0.9s ease",
                    transitionDelay: "0.08s",
                  }}
                >
                  Windows, Glass &
                </span>

                <span
                  style={{
                    display: "block",
                    color: "#9dbbcd",
                    opacity: heroVisible ? 1 : 0,
                    transform: heroVisible
                      ? "translateY(0px)"
                      : "translateY(28px)",
                    filter: heroVisible ? "blur(0px)" : "blur(6px)",
                    transition:
                      "opacity 1.05s ease, transform 1.05s ease, filter 1.05s ease",
                    transitionDelay: "0.16s",
                  }}
                >
                  Natural Stone Surfaces
                </span>
              </h1>

              <div
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "120px", // adjust this to align with title
                  zIndex: 2,
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible
                    ? "translateY(0px) rotate(-4deg)"
                    : "translateY(10px) rotate(-4deg)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  transitionDelay: "0.25s",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 12px",
                    background: "var(--background)",
                    color: "var(--secondary)",
                    fontSize: "14px",
                    fontWeight: 700,
                    borderRadius: "12px",
                    outline: "2px solid var(--secondary)",
                    whiteSpace: "nowrap",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                  }}
                >
                  <MdLocationOn size={18} />
                  Calgary, AB
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center",
                marginBottom: "30px",
                maxWidth: "980px",
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0px)" : "translateY(12px)",
                transition: "opacity 1s ease, transform 1s ease",
                transitionDelay: "0.28s",
              }}
            >
              <span style={benefitPillStyle}>
                <FaCheckCircle size={14} style={checkIconStyle} />
                Reduce heat & glare
              </span>

              <span style={benefitPillStyle}>
                <FaCheckCircle size={14} style={checkIconStyle} />
                Protect interiors from fading
              </span>

              <span style={benefitPillStyle}>
                <FaCheckCircle size={14} style={checkIconStyle} />
                Stop water spots on shower glass & railings
              </span>

              <span style={benefitPillStyle}>
                <FaCheckCircle size={14} style={checkIconStyle} />
                Prevent natural stone damage
              </span>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <a
              href="https://tintitpro.setmore.com/"
              className={`${styles.primaryButton} ${
                isVisible ? styles.animate : ""
              }`}
              aria-label="Request a Consultation"
              ref={buttonRef}
            >
              <FaClipboard size={20} style={{ marginRight: "8px" }} />
              Request a Consultation
            </a>

            <div style={{ display: "flex", alignItems: "center" }}>
              <GoogleReviews />
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          display: "flex",
          padding: "0 20px",
          justifyContent: "center",
          marginTop: "-20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <Suspense fallback={<LogoSkeleton />}>
            <LogoCarousel />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Hero;