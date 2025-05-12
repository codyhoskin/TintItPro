"use client";

import React from "react";
import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import Link from "next/link";
import styles from "./page.module.css";

const DecorativeFilms: React.FC = () => {
  return (
    <main className={styles.pageWrapper}>
      {/* Background animation blobs */}
      <div className={styles.blobContainer}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
      </div>

      {/* Section 1 - Decorative Films */}
      <section className={styles.contentSection}>
      <TitleSection
        title="Decorative & Security Films"
        subtitle="Stylish Privacy & Custom Design for Any Space"
      />
        <div className={styles.textBlock}>
          <h2>Why Choose Decorative and Privacy Window Films?</h2>
          <p>
            Decorative window films are a versatile solution that enhance the aesthetics and functionality of any space — whether residential or commercial.
            <br /><br />
            From frosted finishes to intricate patterns, these films allow endless customization while providing privacy, UV protection, and glare control. They not only improve comfort but also elevate the ambiance of interiors.
            <br /><br />
            Our Solar Gard decorative films come with a 5-year warranty for both product and installation.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <Image
            src="/images/service4.png"
            alt="Decorative Window Film"
            width={600}
            height={400}
            style={{ borderRadius: "10px", width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* Section 2 - Anti-Graffiti Films */}
      <section className={styles.contentSection}>
        
        <div className={styles.imageBlock}>
          <Image
            src="/images/service5.png"
            alt="Anti-Graffiti Film"
            width={100}
            height={60}
            style={{ borderRadius: "10px", width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.textBlock}>
          <h2>Anti-Graffiti Film Protection</h2>
          <p>
            Graffiti and vandalism can result in costly damage and operational downtime. Our anti-graffiti films provide a durable protective barrier that helps you quickly restore surfaces without replacing glass or fixtures.
            <br /><br />
            Products like Graffitigard™, Graffitigard 4PLUS™, and Armorcoat™ offer flexible solutions for storefronts, transit systems, elevators, escalators, and more.
            <br /><br />
            Preserve your business assets with Solar Gards invisible, peel-away film technology.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBlock}>
          <TitleSection title="See Our Decorative Work" subtitle="View the Style in Action" />
          <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "50px" }}>
            <Link
              href="/image-gallery"
              aria-label="Go to Image Gallery"
              className={styles.ctaButton}
            >
              View Our Image Gallery
            </Link>
          </div>
        </div>

        <div className={styles.ctaBlock1}>
          <TitleSection title="Schedule Your Consultation" subtitle="Book a Free Design Assessment" />
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <a
              href="https://tintitpro.setmore.com/"
              aria-label="Book a consultation for decorative films"
              className={styles.scheduleButton}
            >
              <Image
                src="/images/schedule.png"
                alt="Estimator Pro Schedule"
                width={250}
                height={90}
                className={styles.wigglePop}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DecorativeFilms;
