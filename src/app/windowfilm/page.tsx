"use client";

import React from "react";
import styles from "./page.module.css";
import { FaSun, FaUserShield, FaEyeSlash } from "react-icons/fa";
import {ElfsightLazy} from "@/components/Heavy";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const WindowFilms: React.FC = () => {
    const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

   const images = [
    "/images/tint-job/IMG_0159.JPG",
    "/images/tint-job/IMG_1751.JPG",
    "/images/tint-job/IMG_4256.jpg",
    "/images/tint-job/IMG_8023.JPG",
    "/images/tint-job/IMG_9183.JPG",
    "/images/tint-job/IMG_9772.JPG",
    "/images/tint-job/IMG_9769.JPG",
    "/images/tint-job/IMG_9701.JPG",
    "/images/tint-job/IMG_8804.JPG",
    "/images/tint-job/IMG_8704.JPG",
  ];


  return (
    <main className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>Luxury Window Tinting for Calgary Homes</h1>
          <p>
            Protect your interiors, reduce heat & glare, and enhance privacy — without
            sacrificing style.
          </p>
          <a href="https://tintitpro.setmore.com/" className={styles.ctaButton}>
            Book Your Free Consultation
          </a>
        </div>
        <div className={styles.heroImagePlaceholder}></div>
      </section>

      {/* Service Overview */}
      <section className={styles.serviceOverview}>
        <h2 style={{padding: "20px"}}>Enhance Comfort & Elegance With Premium Window Film</h2>
        <p>
          We specialize in high-end residential window tinting using industry-leading films
          by Solar Gard. Whether you want to reduce glare, improve privacy, or enhance your
          homes look, we tailor solutions to your lifestyle.
        </p>
      </section>

      {/* Types of Film */}
      <section className={styles.filmTypes}>
        <h2 style={{textAlign: "center", padding: "25px"}}>Types of Residential Window Film</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <FaSun size={40} color="var(--primary)" className={styles.icon} />
            <h3>Solar Control Film</h3>
            <p>Blocks heat and UV without darkening views.</p>
          </div>
          <div className={styles.card}>
            <FaEyeSlash size={40} color="var(--primary)" className={styles.icon} />
            <h3>Decorative Film</h3>
            <p>Adds style and privacy to bathrooms and entryways.</p>
          </div>
          <div className={styles.card}>
            <FaUserShield size={40} color="var(--primary)" className={styles.icon} />
            <h3>Security Film</h3>
            <p>Holds shattered glass and deters break-ins.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2 >Why Calgary Homeowners Choose Tint It Pro</h2>
        <ul className={styles.benefitsList}>
          <li>UV Protection (up to 99%)</li>
          <li>Energy Efficiency</li>
          <li>Daytime Privacy</li>
          <li>Glare Reduction</li>
          <li>10-Year Warranty</li>
          <li>Solar Gard Certified</li>
          <li>Elegant Installation</li>
          <li>Fully Insured & Professional</li>
        </ul>
      </section>

  
      <section className={styles.gallerySection}>
      <h2>Snap Shots From a Few Projects</h2>
      <a href="/image-gallery" className={styles.imageGallery}>
        Checkout the Image Gallery
      </a>

      <div className={styles.galleryGrid}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`Project ${i + 1}`}
              width={400}
              height={250}
              className={styles.galleryImage}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              style={{ cursor: "zoom-in", borderRadius: "12px" }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </section>

  



      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <ElfsightLazy />
      </section>

     

     {/* How It Works */}
<section className={styles.processSection}>
  <h2>Our 3-Step Process</h2>
  <div className={styles.processFlow}>
    <div className={styles.stepCard}>
      <h3>1. Free In-Home Consultation</h3>
      <p>Well assess your space and recommend ideal tinting options.</p>
    </div>

    <div className={styles.arrow}>&rarr;</div>

    <div className={`${styles.stepCard} ${styles.staggered}`}>
      <h3>2. Tailored Product Selection</h3>
      <p>You choose from premium films customized to your style and needs.</p>
    </div>

    <div className={styles.arrow}>&rarr;</div>

    <div className={styles.stepCard}>
      <h3>3. Professional Installation</h3>
      <p>Clean, elegant install backed by a 10-year warranty.</p>
    </div>
  </div>
</section>


      {/* Final CTA */}
      <section className={styles.finalCTA}>
        <h2>Ready to Protect and Enhance Your Home?</h2>
        <p>Get expert advice and a no-pressure estimate — right at your home.</p>
        <a href="https://tintitpro.setmore.com/" className={styles.ctaButton}>
          Book a Free Consultation
        </a>
      </section>
    </main>
  );
};

export default WindowFilms;
