"use client";

import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { MdLocationOn } from "react-icons/md";
import { motion, easeOut } from "framer-motion";
import SocialLinks from "./SocialLinks";
import {
  FaClipboard,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import { RiveLogoFooter } from "./RiveLogo";
import VanParallax from "./VanParallax";

const floatUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
  viewport: { once: true, amount: 0.2 },
};

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+4034701687";
    const message = "Hello, I have a question about window tinting services!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          width: "100%",
          padding: "18px 14px 0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              border: `1px solid var(--footer-stroke)`,
              background:
                "linear-gradient(135deg, var(--footer-surface-1) 0%, var(--footer-surface-2) 48%, var(--footer-surface-3) 100%)",
              boxShadow: "var(--footer-shadow), var(--glass-edge)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `
                  radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--secondary) 10%, transparent), transparent 34%),
                  radial-gradient(circle at 85% 85%, color-mix(in srgb, var(--primary) 12%, transparent), transparent 28%)
                `,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "clamp(22px, 4vw, 42px)",
              }}
            >
              <div
                style={{
                  maxWidth: "860px",
                  minWidth: 0,
                }}
              >
                <h2
                  style={{
                    margin: "0 0 12px 0",
                    color: "var(--footer-text)",
                    fontSize: "clamp(2rem, 7vw, 4.2rem)",
                    lineHeight: 0.94,
                    letterSpacing: "-0.05em",
                    fontWeight: 800,
                    maxWidth: "720px",
                    wordBreak: "break-word",
                  }}
                >
                  Ready to upgrade your space?
                </h2>

                <p
                  style={{
                    margin: "0 0 20px 0",
                    color: "var(--footer-text-muted)",
                    fontSize: "clamp(0.98rem, 2.4vw, 1.08rem)",
                    lineHeight: 1.65,
                    maxWidth: "560px",
                  }}
                >
                  Premium window films and surface protection, installed with
                  expert care.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "10px",
                    marginBottom: "22px",
                    maxWidth: "720px",
                  }}
                >
                  {[
                    "Premium films",
                    "Surface protection",
                    "Expert installation",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "9px",
                        padding: "12px 13px",
                        background: "var(--footer-glass-bg)",
                        border: `1px solid var(--footer-stroke)`,
                        color: "var(--footer-text)",
                        fontSize: "13px",
                        fontWeight: 600,
                        lineHeight: 1.4,
                        boxSizing: "border-box",
                        boxShadow: "var(--glass-edge)",
                      }}
                    >
                      <FaCheckCircle
                        style={{
                          color: "var(--footer-accent)",
                          flexShrink: 0,
                          fontSize: "0.9em",
                        }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "18px",
                  }}
                >
                  {/* PRIMARY CTA */}
                  <a
                    href="https://tintitpro.setmore.com/"
                    aria-label="Request a Consultation"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "16px 24px",
                      minHeight: "56px",
                      background:
                        "linear-gradient(135deg, var(--primary) 0%, var(--primary) 100%)",
                      color: "var(--footer-button-text)",
                      textDecoration: "none",
                      fontWeight: 800,
                      fontSize: "15px",
                      letterSpacing: "0.01em",
                      boxShadow: "var(--footer-hero-shadow)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxSizing: "border-box",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(-2px) scale(1.02)";
                      el.style.boxShadow =
                        "0 28px 80px rgba(18,18,18,0.38), var(--footer-hero-shadow)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(0) scale(1)";
                      el.style.boxShadow = "var(--footer-hero-shadow)";
                    }}
                  >
                    <FaClipboard />
                    Request Consultation
                  </a>

                  {/* SECONDARY CTA */}
                  <button
                    onClick={handleWhatsAppClick}
                    aria-label="Contact us on WhatsApp"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "16px 22px",
                      minHeight: "56px",
                      background: "var(--footer-glass-bg-strong)",
                      color: "var(--footer-text)",
                      border: `1px solid var(--footer-stroke)`,
                      fontWeight: 700,
                      fontSize: "15px",
                      cursor: "pointer",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      boxSizing: "border-box",
                      boxShadow: "var(--glass-edge)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(-2px)";
                      el.style.background = "var(--footer-glass-bg)";
                      el.style.border = "1px solid var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(0)";
                      el.style.background = "var(--footer-glass-bg-strong)";
                      el.style.border = "1px solid var(--footer-stroke)";
                    }}
                  >
                    <FaWhatsapp style={{ fontSize: "1.08em" }} />
                    WhatsApp Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <VanParallax />

      <div className={styles.upperFooter}>
        <motion.div className={styles.logoBlock} {...floatUp}>
          <div className={styles.logo}>
            <RiveLogoFooter width={240} height={240} />
          </div>
        </motion.div>

        <motion.div className={styles.descriptionBlock} {...floatUp}>
          <p className={styles.description}>
            Premium Stone & Glass Protection in Calgary. Authorized TuffSkin® & Solar Gard® Certified Installer.
          </p>
        </motion.div>

        <motion.div className={styles.mapBlock} {...floatUp}>
          <div className={styles.locationRow}>
            <MdLocationOn className={styles.locationIcon} />
            <span className={styles.locationText}>Serving Calgary, AB</span>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102410.96638528618!2d-114.18252740611754!3d51.02734996478432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717000c3bfb93f%3A0x2f4e48ed62761efb!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1710600000000"
            width="100%"
            height="150"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing location of Tint It Pro"
          />
        </motion.div>

        <motion.div className={styles.hoursBlock} {...floatUp}>
          <h3>Hours of Operation</h3>
          <p>Monday - Saturday: 8am - 8pm</p>
          <p>Sunday: 10am - 6pm</p>
          <p>Holidays: Closed</p>
        </motion.div>

        <motion.div className={styles.socialIconsBlock} {...floatUp}>
          <h3>Follow Us</h3>
          <SocialLinks size={25} />
        </motion.div>
      </div>

      <motion.div className={styles.bottomFooter} {...floatUp}>
        <div className={styles.bottomLinks}>
          <Link
            href="https://policies.google.com/privacy"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://policies.google.com/terms"
            aria-label="Terms of Service"
          >
            Terms of Service
          </Link>
        </div>

        <p className={styles.copyText}>Tint It Pro © 2025. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
