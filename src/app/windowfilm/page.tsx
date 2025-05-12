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
    <div className={styles.blobContainer}>
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={`${styles.blob} ${styles.blob3}`}></div>
    </div>

      <TitleSection title="Residential Window Films" subtitle="Comfort, Protection, and Privacy for Your Home" />

      {/* Section 1 - Text Left, Image Right */}
      <section className={styles.contentSection}>
        <div className={styles.textBlock}>
          <h2>Why Choose Window Films?</h2>
          <p>
            Our residential window films offer increased daytime privacy, UV protection, and improved energy efficiency. They block up to 99% of harmful UV rays, preserving your furniture, flooring, and peace of mind — all while letting natural light in.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <Image
            src="/images/service2.png"
            alt="Residential Window Tinting"
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
            src="/images/home-residential.png"
            alt="Sunlight blocked by window film"
            width={600}
            height={400}
            style={{ borderRadius: "10px", width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.textBlock}>
          <h2>Cooler, More Comfortable Interiors</h2>
          <p>
            With our solar control films, reduce indoor heat by up to 82% and glare by 90%. Enjoy consistent temperatures year-round, lower energy bills, and a more relaxing home environment without sacrificing your view.
          </p>
        </div>
      </section>

      {/* Icon/Highlight Block */}
      <section className={styles.highlightSection}>
        <div className={styles.iconCard}>
          <div className={styles.iconCircle}>
          <FaShieldAlt size={40} color="#fff" />          </div>
          <div>
            <h3>UV Shield</h3>
            <p>
              Defend your interior from UV damage while keeping rooms bright and welcoming.
            </p>
          </div>
        </div>
      </section>
    
      {/* Local MP4 Video Section */}
      <section className={styles.videoSection}>
        <TitleSection title="Watch Us Install Window Films" subtitle="We can help protect your home." />
        <div className={styles.videoWrapper}>
          <video
            width="100%"
            height="auto"
            controls
            playsInline
            poster="/images/service2.png"
            style={{ borderRadius: "12px", maxHeight: "600px", objectFit: "cover" }}
          >
            <source src="/images/tint-job/8a5eb925fb574c7aba9c313676837868.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
   
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
          <TitleSection title="Book with Us Today!" subtitle="Schedule a Free Consultation" />
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <a
              href="https://tintitpro.setmore.com/"
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
            </a>

           
          </div>
        </div>
      </section>
  
    </main>
  );
};

export default WindowFilms;
