"use client";

import React from "react";
import styles from "./page.module.css";
import { FaSun, FaShieldAlt, FaSprayCan, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {ElfsightLazy} from "@/components/Heavy";


const CommercialWindowTinting: React.FC = () => {

    const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

   const images = [
    "/images/tint-job/C86168FC-19D8-4BC5-BD02-6C6797DC84FD.JPG",
    "/images/tint-job/IMG_1517.JPG",
    "/images/tint-job/IMG_1738.JPG",
    "/images/tint-job/IMG_6056 2.JPG",
    "/images/tint-job/IMG_7848.JPG",
    "/images/tint-job/IMG_8784.JPG",
  ];


  return (
    <main className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>Professional Window Tinting for Calgary Businesses</h1>
          <p>
            Improve energy efficiency, increase security, and reduce glare with
            industry-leading commercial films.
          </p>
          <a href="https://tintitpro.setmore.com/" className={styles.ctaButton}>
            Request a Free On-Site Quote
          </a>
        </div>
        <div className={styles.heroImageCommercial}></div>
      </section>

      {/* Overview */}
      <section className={styles.serviceOverview}>
        <h2 style={{padding: "10px"}}>Smart Solutions for Modern Buildings</h2>
        <p>
          We install high-performance window film for businesses, retail spaces,
          hotels, and office towers. From energy savings to safety compliance,
          our commercial film solutions are tailored to your property.
        </p>
      </section>

      {/* Types of Film */}
      <section className={styles.filmTypes}>
        <h2 style={{padding: "20px"}}>Commercial Film Options</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <FaSun size={36} />
            <h3>Solar Control Film</h3>
            <p>Reduces heat and cooling costs while improving comfort.</p>
          </div>
          <div className={styles.card}>
            <FaEyeSlash size={36} />
            <h3>Decorative Film</h3>
            <p>Stylish frosted or branded films for interior and exterior glass.</p>
          </div>
          <div className={styles.card}>
            <FaSprayCan size={36} />
            <h3>Anti-Graffiti Film</h3>
            <p>Protects glass against tagging, scratching, and vandalism.</p>
          </div>
          <div className={styles.card}>
            <FaShieldAlt size={36} />
            <h3>Security Film</h3>
            <p>Strengthens glass to help prevent break-ins and injuries.</p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className={styles.industriesSection}>
        <h2>Industries We Serve</h2>
        <ul className={styles.industriesList}>
          <li>Office Buildings</li>
          <li>Retail Stores</li>
          <li>Hotels & Spas</li>
          <li>Government Facilities</li>
          <li>Schools & Universities</li>
          <li>Condominiums & Multi-Unit</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2>Why Leading Businesses Choose Tint It Pro</h2>
        <ul className={styles.benefitsList}>
          <li>Reduces HVAC costs</li>
          <li>Adds privacy and branding</li>
          <li>Protects glass from damage</li>
          <li>Extends window lifespan</li>
          <li>Fast, clean installation</li>
          <li>Certified, insured team</li>
        </ul>
      </section>

      <section className={styles.gallerySection}>
      <h2>A Few Commerical Projects</h2>
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

      {/* Process */}
      <section className={styles.processSection}>
        <h2>From Quote to Installation</h2>
        <div className={styles.processFlow}>
          <div className={styles.stepCard}>
            <h3>1. Site Visit & Assessment</h3>
            <p>We evaluate your property needs and recommend solutions.</p>
          </div>
          <div className={styles.arrow}>&rarr;</div>
          <div className={`${styles.stepCard} ${styles.staggered}`}>
            <h3>2. Product Selection & Quote</h3>
            <p>Choose from top commercial films tailored to your goals.</p>
          </div>
          <div className={styles.arrow}>&rarr;</div>
          <div className={styles.stepCard}>
            <h3>3. Professional Installation</h3>
            <p>Fast, clean install with minimal disruption to your business.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCTA}>
        <h2>Get a Free Commercial Tinting Quote</h2>
        <p>
          Our team will visit your site, assess your needs, and provide a tailored proposal.
        </p>
        <a href="https://tintitpro.setmore.com/" className={styles.ctaButton}>
          Book a Free Consultation
        </a>
      </section>
    </main>
  );
};

export default CommercialWindowTinting;
