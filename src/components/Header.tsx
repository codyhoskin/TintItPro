"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "../styles/Header.module.css";
import ThemeToggle from "./ThemeToggle";
import { FaCalculator, FaClipboard } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import { RiveLogoNav } from "./RiveHeaderLogo";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
  <div className={styles.headerWrapper}>

    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/#home" aria-label="Navigate to Home">
        <RiveLogoNav width={90} height={90} delay={200} />
        </Link>

      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
       <Link href="/#home" aria-label="Navigate to Home">Home</Link>





        <div
          className={styles.dropdown}
          onMouseEnter={() => setDesktopDropdownOpen(true)}
          onMouseLeave={() => setDesktopDropdownOpen(false)}
        >
          <button className={styles.dropdownTrigger}>
            Services <span style={{ fontSize: "0.75rem", marginLeft: "6px" }}>▼</span>
          </button>
          {desktopDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <a href="/windowfilm" aria-label="Navigate to windowfilm page.">Residential Window Films</a>
              <a href="/commercial-films" aria-label="Navigate to commercial-films page.">Commercial Window Films</a>
              <a href="/tuffskin" aria-label="Navigate to tuffskin page.">Stone Protection (TuffSkin®)</a>
              <Link href="/tuffskin" aria-label="Navigate to Tuffskin page.">Glass Protection</Link>
            </div>
          )}
        </div>
        <Link href="/#estimator" aria-label="Navigate to estimator section.">Get a Quote</Link>
        <Link href="/#reviews" aria-label="Navigate to reviews section.">Reviews</Link>
        <Link href="/#faq" aria-label="Navigate to FAQ section.">FAQ</Link>
      </nav>




      {/* Desktop Call to Action */}
      <div className={styles.desktopActions}>
        <ThemeToggle />
       
        <a
          href="https://tintitpro.setmore.com/"
          className={styles.ctaButton}
          aria-label="Get your free quote today"
        >
          <FaClipboard size={20} style={{ marginRight: "8px", marginBottom: "-4px" }} />
           Request a Consultation
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className={styles.mobileActions}>
        <ThemeToggle />
        <button
          className={styles.menuButton}
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <button
          className={styles.closeButton}
          onClick={handleMenuClose}
          aria-label="Close mobile menu"
        >
          <X size={32} />
        </button>

        <nav className={styles.mobileNav} aria-label="Mobile navigation">
        

          <Link href="/#home" aria-label="Navigate to Home" onClick={handleMenuClose}>
            Home
          </Link>



          <div className={styles.dropdown}>
            <button
              className={styles.dropdownTrigger}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Services <span style={{ fontSize: "0.75rem", marginLeft: "6px" }}>▼</span>
            </button>
            {mobileDropdownOpen && (
              <div className={`${styles.dropdownMenu} ${styles.mobileDropdownMenu}`}>
                <a href="/windowfilm" aria-label="Navigate to window film section." onClick={handleMenuClose}>Residential Window Films</a>
                <a href="/commercial-films" aria-label="Navigate to commercial films section." onClick={handleMenuClose}>Commercial Window Films</a>
                <a href="/tuffskin" aria-label="Navigate to tuffskin section." onClick={handleMenuClose}>Stone Protection (TuffSkin®)</a>
                <Link href="/tuffskin" aria-label="Navigate to tuffskin section." onClick={handleMenuClose}>Glass Protection</Link>
              </div>
            )}
          </div>

          <Link href="/#reviews" aria-label="Navigate to reviews section." onClick={handleMenuClose}>Reviews</Link>
          <Link href="/#faq" aria-label="Navigate to FAQ section." onClick={handleMenuClose}>FAQ</Link>
        </nav>

        {/* Mobile CTA */}
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
  <Link
    href="/#estimator"
    className={styles.ctaButton1}
    aria-label="Get your free quote today"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "350px",
      padding: "25px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "8px",
      textAlign: "center",
      textDecoration: "none",
    }}
  >
    <FaCalculator style={{ marginRight: "8px" }} aria-hidden="true" />
    Estimator Pro
  </Link>

  <a
    href="https://tintitpro.setmore.com/"
    className={styles.ctaButton}
    aria-label="Get your free quote today"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "350px",
      padding: "25px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "8px",
      textAlign: "center",
      textDecoration: "none",
    }}
  >
    <FaClipboard style={{ marginRight: "8px" }} />
      Request a Consultation
  </a>
</div>



        {/* Social Icons & Footer */}
        <div className={styles.mobileExtras}>
          <SocialLinks />
          <p style={{ fontSize: "15px", marginTop: "auto", textAlign: "center", paddingBottom: "25px" }}>
            Tint It Pro ©2025
          </p>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
