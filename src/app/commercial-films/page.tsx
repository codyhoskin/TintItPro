"use client";

import React from "react";
import Image from "next/image";
import ElfsightWidget from "@/components/ElfSightGoogle";
import TitleSection from "@/components/TitleSection";
import Link from "next/link";
import styles from "./page.module.css";
import { FaShieldAlt } from "react-icons/fa";

const WindowFilms: React.FC = () => {
  return (
    <main className={styles.pageWrapper}>
      {/* Floating Blue Blobs */}
      <div className={styles.blobContainer}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
      </div>

      {/* Page Title */}
      <TitleSection
        title="Commercial Window Films"
        subtitle="Energy Efficiency, Privacy & UV Protection for Your Business"
      />

      {/* Section 1 - Text Left, Image Right */}
      <section className={styles.contentSection}>
        <div className={styles.textBlock}>
          <h2>Why Commercial Window Tinting?</h2>
          <p>
            Our commercial window films enhance productivity, privacy, and comfort across office spaces, retail locations, and large-scale buildings. They reduce glare on monitors, shield interiors from UV damage, and project a sleek, modern look to clients and customers.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <Image
            src="/images/service3.png"
            alt="Commercial Window Tinting"
            width={600}
            height={400}
            style={{ borderRadius: "10px", width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* Section 2 - Text Left, Image Right (reversed) */}
      <section className={styles.contentSection}>
      
        <div className={styles.imageBlock}>
          <Image
            src="/images/window-tinting.png"
            alt="Office Sun Protection"
            width={600}
            height={400}
            style={{ borderRadius: "10px", width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.textBlock}>
          <h2>Maintain a Comfortable Work Environment</h2>
          <p>
            Our solar control window films can reduce indoor heat by up to 82% and glare by 90%. Employees stay focused without constantly adjusting blinds, while your HVAC system works more efficiently — lowering operational costs.
          </p>
        </div>
      </section>

      {/* Icon/Highlight Block */}
      <section className={styles.highlightSection}>
        <div className={styles.iconCard}>
          <div className={styles.iconCircle}>
            <FaShieldAlt size={40} color="#fff" />
          </div>
          <div>
            <h3>Office Shield</h3>
            <p>
              Defend your business interior from fading, overheating, and privacy risks while presenting a clean, professional aesthetic to clients.
            </p>
          </div>
        </div>
      </section>

      {/* Local MP4 Video Section */}
      <section className={styles.videoSection}>
        <TitleSection
          title="Watch Commercial Film Installation"
          subtitle="See how we transform workspaces across Nevada"
        />
        <div className={styles.videoWrapper}>
          <video
            width="100%"
            height="auto"
            controls
            playsInline
            poster="/images/service3.png"
            style={{ borderRadius: "12px", maxHeight: "600px", objectFit: "cover" }}
          >
            <source
              src="/images/tint-job/8a5eb925fb574c7aba9c313676837868.MP4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Widget Integration */}
      <ElfsightWidget />

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBlock}>
          <TitleSection title="See Our Work" subtitle="Head to the Image Gallery" />
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
          <TitleSection
            title="Schedule a Commercial Assessment"
            subtitle="Book Your Free Consultation"
          />
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Link
              href="/route"
              aria-label="Schedule an appointment with Estimator Pro"
              className={styles.scheduleButton}
            >
              <Image
                src="/images/schedule.png"
                alt="Estimator Pro Schedule"
                width={250}
                height={90}
                className={styles.wigglePop}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WindowFilms;
