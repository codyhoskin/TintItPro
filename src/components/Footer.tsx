"use client";

import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { MdLocationOn } from "react-icons/md";
import { motion, easeOut } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { FaClipboard, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import { RiveLogoFooter } from "./RiveLogo";

// Animation preset
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
    <footer>
      {/* ===========================
          Call To Action Section
      ============================ */}
      <motion.div
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <FaCalendarAlt style={{ marginRight: "8px", fontSize: "5.2em" }} />

            </div>

            <div className={styles.ctaText}>
              <h2>Ready to Transform Your Space?</h2>
              <p>
                Get your free consultation and quote today. Our experts are
                ready to help you choose the perfect window films and protection
                solutions for your home or business.
              </p>

              <div className={styles.ctaButtons}>
                <a
                  href="https://tintitpro.setmore.com/"
                  className={styles.primaryCtaButton}
                  aria-label="Book Your Free Consultation"
                >
                  <FaClipboard style={{ marginRight: "8px" }} />
                  Book Your Free Consultation
                </a>

                <button
                  onClick={handleWhatsAppClick}
                  className={styles.secondaryCtaButton}
                  aria-label="Contact us on WhatsApp"
                >
                  <FaWhatsapp style={{ marginRight: "8px", fontSize: "1.2em" }} />
                  Text Us on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===========================
          Upper Footer Sections
      ============================ */}
      <div className={styles.upperFooter}>
        {/* Logo */}
        <motion.div className={styles.logoBlock} {...floatUp}>
          <div className={styles.logo}>
          <RiveLogoFooter width={240} height={240} />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div className={styles.descriptionBlock} {...floatUp}>
          <p className={styles.description}>
            We are proud to be an authorized dealer and installer for TuffSkin®
            Stone Sealer and Solar Gard® Window Films in Calgary.
          </p>
        </motion.div>

        {/* Map */}
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

        {/* Hours */}
        <motion.div className={styles.hoursBlock} {...floatUp}>
          <h3>Hours of Operation</h3>
          <p>Monday - Saturday: 8am - 8pm</p>
          <p>Sunday: 10am - 7pm</p>
          <p>Holidays: 10am - 5pm</p>
        </motion.div>

        {/* Social Icons */}
        <motion.div className={styles.socialIconsBlock} {...floatUp}>
          <h3>Follow Us</h3>
          <SocialLinks size={25} />
        </motion.div>
      </div>

      {/* ===========================
          Bottom Footer
      ============================ */}
      <motion.div className={styles.bottomFooter} {...floatUp}>
        <div className={styles.bottomLinks}>
          <Link href="https://policies.google.com/privacy" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
          <Link href="https://policies.google.com/terms" aria-label="Terms of Service">
            Terms of Service
          </Link>
        </div>

        <p className={styles.copyText}>Tint It Pro © 2025. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
