"use client";

import { useRef, useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import { FaCalculator, FaClipboard } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import WhatsAppButton from "./WhatsApp";

const Hero = () => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = buttonRef.current; // ✅ Store stable reference
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // optional: remove this line to allow repeat animation
        }
      },
      { threshold: 0.5 }
    );
  
    if (node) observer.observe(node);
  
    return () => {
      if (node) observer.unobserve(node); // ✅ Use the saved node here
    };
  }, []);
  

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.locationWrapper}>
          <div className={styles.locationTag}>
            <MdLocationOn size={18} />
            <span>Calgary, AB</span>
          </div>
        </div>

        <h1 className={styles.title}>
        Protect Your Home or Office <br></br>
          <span className={styles.secondary}>
             Stop Heat, UV, & Marble Damage.
            </span>
        </h1>

        <p className={styles.subtitle}>
        Experience premium comfort and lasting beauty with {" "}
          <span
            style={{
              color: "var(--secondary)",
              fontWeight: "bold",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            <Link aria-label="Navigate to solar guard page" href="https://www.solargard.com/">SolarGard</Link>
          </span>
          <span style={{ color: "var(--secondary)" }}>®</span> Window Films &{" "}
          <span
            style={{
              color: "var(--secondary)",
              fontWeight: "bold",
              textDecoration: "underline",
              textUnderlineOffset: "4px",

            }}
          >
            <Link aria-label="Navigate to tuffskin page" href="https://www.tuffskin.com/">Tuffskin</Link>
          </span>
          <span style={{ color: "var(--secondary)" }}>®</span> Marble Protection.
        </p>

        <GoogleReviews />

        <div className={styles.ctaButtons}>
          <a
            href="/route"
            className={`${styles.primaryButton} ${isVisible ? styles.animate : ""}`}
            aria-label="Book Your Free Consultation!"
            
          >
            <FaClipboard style={{ marginRight: "8px" }} />
            Book Your Free Consultation!
          </a>
          <WhatsAppButton />
          <Link
          href="/#estimator"
          className={styles.ctaButton1}
          aria-label="Get your free quote today"
        >
          <FaCalculator style={{ marginRight: "8px" }}/>
          Get an Instant Estimation!
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
