"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const floatUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const Footer = () => {
  return (
    <footer>
      {/* Upper Section */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <iframe
          width="100%"
          height="500px"
          src="https://app.tintwiz.com/web/ce/q2qhvszp8cxjukdexllsugfkhh5dvi3h"
          frameBorder="0"
          style={{ border: "none" }}
          title="tint wiz sign up"
        ></iframe>
      </div>
      <div className={styles.upperFooter}>
        {/* Logo */}
        <motion.div className={styles.logoBlock} {...floatUp}>
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="Tint it Pro Logo" width={250} height={160} />
          </div>
        </motion.div>

        {/* Description Paragraph */}
        <motion.div className={styles.descriptionBlock} {...floatUp}>
          <p className={styles.description}>
            We are proud to be an authorized dealer and installer for TuffSkin® Stone Sealer and Solar Gard® Window Films in Calgary.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div className={styles.mapBlock} {...floatUp}>
          <div className={styles.locationRow}>
            <MdLocationOn className={styles.locationIcon} />
            <h3>Serving Calgary, AB</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102410.96638528618!2d-114.18252740611754!3d51.02734996478432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717000c3bfb93f%3A0x2f4e48ed62761efb!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1710600000000"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing location of Tint it Pro Calgary, Alberta, Canada"
          />
        </motion.div>

        {/* Hours of Operation */}
        <motion.div className={styles.hoursBlock} {...floatUp}>
          <h4>Hours of Operation</h4>
          <p>Monday - Saturday: 8am - 8pm</p>
          <p>Sunday: 10am - 7pm</p>
          <p>Holidays: 10am - 5pm</p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div className={styles.socialIconsBlock} {...floatUp}>
          <h4>Follow Us</h4>
          <SocialLinks size={25}/>
        </motion.div>
      </div>
     

      {/* Bottom Section */}
      <motion.div className={styles.bottomFooter} {...floatUp}>
        <div className={styles.bottomLinks}>
          <Link aria-label="Privacy Policy" href="https://policies.google.com/privacy">
            Privacy Policy
          </Link>
          <Link aria-label="Terms of Service" href="https://policies.google.com/terms">
            Terms of Service
          </Link>
        </div>
        <p className={styles.copyText}>Tint It Pro © 2025. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
