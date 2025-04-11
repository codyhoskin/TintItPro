"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import ThemeToggle from "./ThemeToggle";
import { FaCalculator, FaClipboard } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

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
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" aria-label="Tint it Pro Home">
          <Image
            src="/images/logo.png"
            alt="Tint it Pro logo"
            width={70}
            height={50}
            priority
            className={styles.logoImg}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/#home">Home</Link>

        <div
          className={styles.dropdown}
          onMouseEnter={() => setDesktopDropdownOpen(true)}
          onMouseLeave={() => setDesktopDropdownOpen(false)}
        >
          <button className={styles.dropdownTrigger}>
            Solutions <span style={{ fontSize: "0.75rem", marginLeft: "6px" }}>▼</span>
          </button>
          {desktopDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link href="/tuffskin">Marble Protection</Link>
              <Link href="/windowfilm">Residential Films</Link>
              <Link href="/commercial-films">Commercial Films</Link>
              <Link href="/decorative">Decorative Films</Link>
            </div>
          )}
        </div>

        <Link href="/#reviews">Reviews</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>




      {/* Desktop Call to Action */}
      <div className={styles.desktopActions}>
        <ThemeToggle />
       
        <a
          href="/booking"
          className={styles.ctaButton}
          aria-label="Get your free quote today"
        >
          <FaClipboard style={{ marginRight: "8px" }} />
          Book Your Free Consultation!
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
          <Link href="/#home" onClick={handleMenuClose}>Home</Link>

          {/* Mobile Dropdown for Solutions */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownTrigger}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Solutions <span style={{ fontSize: "0.75rem", marginLeft: "6px" }}>▼</span>
            </button>
            {mobileDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/tuffskin" onClick={handleMenuClose}>Marble Protection</Link>
                <Link href="/windowfilm" onClick={handleMenuClose}>Residential Films</Link>
                <Link href="/commercial-films" onClick={handleMenuClose}>Commercial Films</Link>
                <Link href="/decorative" onClick={handleMenuClose}>Decorative Films</Link>
              </div>
            )}
          </div>

          <Link href="/#reviews" onClick={handleMenuClose}>Reviews</Link>
          <Link href="/#faq" onClick={handleMenuClose}>FAQ</Link>
        </nav>

        {/* Mobile CTA */}
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px", // space between buttons
          marginTop: "50px",
          marginBottom: "auto",
        }}
      >
        <Link
          href="/#estimator"
          className={styles.ctaButton1}
          aria-label="Get your free quote today"
          style={{
            width: "100%",
            maxWidth: "250px",
            textAlign: "center",
          }}
        >
          <FaCalculator style={{ marginRight: "8px" }} />
          Estimator Pro
        </Link>

        <a
          href="/booking"
          className={styles.ctaButton}
          aria-label="Get your free quote today"
          style={{
            width: "100%",
            maxWidth: "250px",
            textAlign: "center",
          }}
        >
          <FaClipboard style={{ marginRight: "8px" }} />
          Book Your Free Consultation!
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
  );
};

export default Header;
