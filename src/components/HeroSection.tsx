"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import { FaCalculator, FaClipboard } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import WhatsAppButton from "./WhatsApp";
import LogoCarousel from "./LogoCarousel";
import { LogoSkeleton } from "./Skeletons";


const Hero = () => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <>
    <section className={styles.hero}>
    <div className={styles.heroInner}>


<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px", // Space between the two buttons
    flexWrap: "wrap", // Optional: wrap on small screens
    marginTop: "16px", // Optional spacing
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
          <span style={{ fontSize: "inherit", fontWeight: "inherit" }}>NEW</span>
          <GiPartyPopper size={18} />
        </span>


          <span style={{ whiteSpace: "nowrap" }}>Get an Instant Estimate!</span>
          <FaCalculator style={{ marginRight: "8px" }} />

          <FaChevronRight size={14} />
        </Link>
                <WhatsAppButton />
          </div>
            


        <h1 className={styles.title} style={{ textAlign: "left", fontSize: "50px", lineHeight: 1.2}}>
          Protect Your Home or Office{" "}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              border: "1px solid rgba(0,0,0,0.1)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              borderRadius: "25px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              fontSize: "14px",
              color: "var(--text-muted)",
              verticalAlign: "middle"
            }}
          >
            <MdLocationOn size={16} />
            Calgary, AB
          </span>
        </h1>

        <h2 className={styles.secondary}>
          Stop Heat, UV, & Marble Damage.
        </h2>




          <p className={styles.subtitle}>
          Experience premium comfort and lasting beauty with{" "}
          <Link
            href="https://www.solargard.com/"
            style={{
              color: "var(--secondary)",
              fontWeight: "bold",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              display: "inline-block",
              transition: "transform 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            SolarGard
          </Link>
          <span style={{ color: "var(--secondary)" }}>®</span> Window Films &{" "}
          <Link
            href="https://www.tuffskin.com/"
            style={{
              color: "var(--secondary)",
              fontWeight: "bold",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              display: "inline-block",
              transition: "transform 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Tuffskin
          </Link>
          <span style={{ color: "var(--secondary)" }}>®</span> Surface Protection.
        </p>

     


    <div
      className={styles.ctaButtons}
     
    >
      <a
        href="https://tintitpro.setmore.com/"
        className={`${styles.primaryButton} ${isVisible ? styles.animate : ""}`}
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