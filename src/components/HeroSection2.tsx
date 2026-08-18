"use client";

import { useRef, useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import GoogleReviews from "./GoogleReviews";
import { FaCalculator, FaClipboard } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import WhatsAppButton from "./WhatsApp";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

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
    <section className={styles.hero} style={{ padding: "160px 20px" }}>
  <div
    style={{
      maxWidth: "1100px",          // Controls how wide your section is
      margin: "0 auto",            // ✅ This centers it
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "10px",
    }}
  >
    <div
      style={{
        maxWidth: "680px",
        paddingLeft: "40px",       // Creates spacing from the left inside the container
        paddingRight: "20px",
        textAlign: "left",         // ✅ Keeps your text left-aligned
      }}
    >
      <div
        className={styles.locationTag}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <MdLocationOn size={20} />
        <p style={{ fontSize: "16px", margin: 0 }}>Calgary, AB</p>
      </div>




          <h1 className={styles.title} style={{ textAlign: "left" }}>
            Protect Your Home or Office{" "}
            <span>
              <FaHome size={50} style={{ position: "relative", top: "5px" }} />
              <MdLocationCity size={50} style={{ position: "relative", top: "5px" }} />
            </span>
            <br />
            <span className={styles.secondary}>
              Stop Heat, UV, & Marble Damage.
            </span>
          </h1>


          <p className={styles.subtitle}>
            Experience premium comfort and lasting beauty with {" "}
            <span style={{ color: "var(--secondary)", fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              <Link href="https://www.solargard.com/">SolarGard</Link>
            </span>
            <span style={{ color: "var(--secondary)" }}>®</span> Window Films & {" "}
            <span style={{ color: "var(--secondary)", fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: "4px" }}>
              <Link href="https://www.tuffskin.com/">TuffSkin®</Link>
            </span>
            <span style={{ color: "var(--secondary)" }}>®</span> Surface Protection.
          </p>

        

          <div className={styles.ctaButtons} style={{ justifyContent: "flex-start" }}>
            <a
              href="https://tintitpro.setmore.com/"
              className={`${styles.primaryButton} ${isVisible ? styles.animate : ""}`}
              aria-label="Request a Consultation"
              ref={buttonRef}
            >
              <FaClipboard style={{ marginRight: "8px" }} />
                Request a Consultation
            </a>
            <WhatsAppButton />
            <Link
              href="/#estimator"
              className={styles.ctaButton1}
              aria-label="Get your quote today"
            >
              <FaCalculator style={{ marginRight: "8px" }} />
              Get an Instant Estimation!
            </Link>
          </div>
            
        </div>

       <div
        style={{
          flex: "1 1 300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          marginTop: "25px",
          marginBottom: "25px"
        }}
      >
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f2f2f2",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <Image
            src="/images/brand-character.png"
            alt="Brand character"
            fill
            style={{ zIndex: 2, objectFit: "contain" }}
          />
        </div>
      </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",     // vertically center if inside a fixed height
        margin: "10px auto",      // auto handles horizontal centering
        width: "100%",
        maxWidth: "600px",        // optional: to avoid stretching too wide
        textAlign: "center"       // useful if the component includes text
      }}
    >
      <GoogleReviews />
    </div>

      </div>
    </section>
  );
};

export default Hero;
