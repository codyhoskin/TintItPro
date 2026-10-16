"use client";

import React from "react";
import styles from "./page.module.css";
import { FaSun, FaUserShield, FaEyeSlash } from "react-icons/fa";
import { GoogleReviewShowcase } from "@/components/Heavy";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { residentialWindowFilmFaqs } from "@/lib/residential-window-film";
import { motion, useReducedMotion } from "framer-motion";

const WindowFilms: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const reveal = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
      };
  const revealTransition = { duration: 0.65, ease: "easeOut" as const };

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
        <motion.div className={styles.heroText} {...reveal}>
          <p className={styles.heroKicker}>CALGARY · RESIDENTIAL WINDOW FILM</p>
          <h1>Residential Window Tinting in Calgary</h1>
          <p>
            Premium home window film that reduces heat, glare and UV exposure while
            improving daytime privacy without sacrificing your view.
          </p>
          <div className={styles.heroActions}>
            <a href="https://tintitpro.setmore.com/" className={styles.ctaButton}>
              Request a Consultation
            </a>
            <a href="#film-solutions" className={styles.heroTextLink}>
              Explore film options <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>
        <div className={styles.heroImagePlaceholder}></div>
      </section>

      {/* Service Overview */}
      <motion.section className={styles.serviceOverview} {...reveal}>
        <p className={styles.eyebrow}>CALGARY HOME WINDOW FILM</p>
        <h2>Professional Window Tinting for Calgary Homes</h2>
        <p>
          Tint It Pro installs professional Solar Gard® architectural window film on
          existing residential glass. We match the product to your windows and your goal—
          cooling a sunny room, reducing screen glare, protecting hardwood and furnishings,
          adding privacy, or strengthening vulnerable glass.
        </p>
      </motion.section>

      {/* Types of Film */}
      <section className={styles.filmTypes} id="film-solutions">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>RESIDENTIAL WINDOW FILM SERVICES</p>
          <h2>Choose the Right Film for Your Home</h2>
          <p>
            Every film solves a different problem. We review the glass, sun exposure,
            desired appearance and privacy needs before recommending a product.
          </p>
        </div>
        <div className={styles.cardGrid}>
          <motion.div className={styles.card} {...reveal} transition={{ ...revealTransition, delay: 0.02 }}>
            <FaSun size={40} color="var(--secondary)" className={styles.icon} />
            <h3>Heat-Control Window Film</h3>
            <p>Reduces solar heat and glare in hot south- and west-facing rooms while maintaining a comfortable view.</p>
          </motion.div>
          <motion.div className={styles.card} {...reveal} transition={{ ...revealTransition, delay: 0.1 }}>
            <FaEyeSlash size={40} color="var(--secondary)" className={styles.icon} />
            <h3>Privacy &amp; Frosted Film</h3>
            <p>Adds daytime privacy or a frosted finish to bathrooms, entry sidelights and street-facing glass.</p>
          </motion.div>
          <motion.div className={styles.card} {...reveal} transition={{ ...revealTransition, delay: 0.18 }}>
            <FaUserShield size={40} color="var(--secondary)" className={styles.icon} />
            <h3>Safety &amp; Security Film</h3>
            <p>Helps hold shattered glass together after impact for added protection at windows and glass doors.</p>
          </motion.div>
          <motion.div className={styles.card} {...reveal} transition={{ ...revealTransition, delay: 0.26 }}>
            <FaSun size={40} color="var(--secondary)" className={styles.icon} />
            <h3>UV &amp; Fade Protection Film</h3>
            <p>Blocks more than 99% of ultraviolet light to help protect floors, furniture, art and fabrics from fading.</p>
          </motion.div>
        </div>
      </section>

      <motion.section className={styles.solutionGuide} aria-labelledby="window-film-solution-guide" {...reveal}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>A SIMPLE SELECTION GUIDE</p>
          <h2 id="window-film-solution-guide">What Are You Trying to Improve?</h2>
        </div>
        <div className={styles.solutionGrid}>
          <motion.article {...reveal} transition={{ ...revealTransition, delay: 0.02 }}>
            <h3>Hot, sunny rooms</h3>
            <p>Start with solar-control or dual-climate film for large south- and west-facing windows.</p>
          </motion.article>
          <motion.article {...reveal} transition={{ ...revealTransition, delay: 0.08 }}>
            <h3>Fading interiors</h3>
            <p>Choose UV-filtering film to help preserve hardwood, artwork, furniture and fabrics.</p>
          </motion.article>
          <motion.article {...reveal} transition={{ ...revealTransition, delay: 0.14 }}>
            <h3>Daytime privacy</h3>
            <p>Reflective privacy film screens views from outside while keeping your outward view during daylight.</p>
          </motion.article>
          <motion.article {...reveal} transition={{ ...revealTransition, delay: 0.2 }}>
            <h3>Privacy day and night</h3>
            <p>Use frosted or decorative film where permanent privacy matters more than seeing through the glass.</p>
          </motion.article>
          <motion.article {...reveal} transition={{ ...revealTransition, delay: 0.26 }}>
            <h3>Glare on screens</h3>
            <p>A neutral solar film can reduce intense glare in living rooms, home offices and media spaces.</p>
          </motion.article>
          <motion.article {...reveal} transition={{ ...revealTransition, delay: 0.32 }}>
            <h3>Glass safety</h3>
            <p>Safety and security film helps retain glass fragments after accidental impact or breakage.</p>
          </motion.article>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section className={styles.benefitsSection} {...reveal}>
        <h2 >Why Calgary Homeowners Choose Tint It Pro</h2>
        <ul className={styles.benefitsList}>
          <li>More than 99% UV blocked on select films</li>
          <li>Reduced solar heat gain</li>
          <li>Daytime privacy options</li>
          <li>Less glare on TVs and screens</li>
          <li>Film-specific manufacturer warranties</li>
          <li>Solar Gard® Certified</li>
          <li>Clean, professional installation</li>
          <li>Film matched to your glass</li>
        </ul>
      </motion.section>

  
      <motion.section className={styles.gallerySection} {...reveal}>
      <h2>Calgary Residential Window Tinting Projects</h2>
      <a href="/image-gallery" className={styles.imageGallery}>
        View Our Calgary Window Film Gallery
      </a>

      <div className={styles.galleryGrid}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`Residential window film installation in a Calgary home ${i + 1}`}
              fill
              sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw"
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
    </motion.section>

  



      {/* Testimonials */}
      <motion.section className={styles.testimonialsSection} {...reveal}>
        <GoogleReviewShowcase />
      </motion.section>

     

     {/* How It Works */}
<motion.section className={styles.processSection} {...reveal}>
  <p className={styles.eyebrow}>FROM GLASS ASSESSMENT TO INSTALLATION</p>
  <h2>How Residential Window Tinting Works</h2>
  <div className={styles.processFlow}>
    <motion.div className={styles.stepCard} {...reveal}>
      <h3>1. In-Home Consultation</h3>
      <p>We assess the glass, sun exposure, access and the result you want.</p>
    </motion.div>

    <div className={styles.arrow}>&rarr;</div>

    <motion.div className={`${styles.stepCard} ${styles.staggered}`} {...reveal} transition={{ ...revealTransition, delay: 0.12 }}>
      <h3>2. Tailored Product Selection</h3>
      <p>Compare suitable film samples, appearance, performance and warranty coverage.</p>
    </motion.div>

    <div className={styles.arrow}>&rarr;</div>

    <motion.div className={styles.stepCard} {...reveal} transition={{ ...revealTransition, delay: 0.24 }}>
      <h3>3. Professional Installation</h3>
      <p>Your selected film is installed precisely, followed by care and warranty guidance.</p>
    </motion.div>
  </div>
  </motion.section>

      <motion.section className={styles.localSection} aria-labelledby="calgary-service-area" {...reveal}>
        <div>
          <p className={styles.eyebrow}>LOCAL RESIDENTIAL INSTALLATION</p>
          <h2 id="calgary-service-area">Home Window Film Across Calgary and Nearby Communities</h2>
        </div>
        <p>
          Tint It Pro serves homeowners throughout Calgary and surrounding communities.
          Our mobile consultation and installation service is suited to detached homes,
          townhomes, condominiums and residential renovation projects. Contact us to confirm
          availability for your address and window type.
        </p>
      </motion.section>

      <motion.section className={styles.faqSection} aria-labelledby="residential-window-film-faq" {...reveal}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>STRAIGHT ANSWERS</p>
          <h2 id="residential-window-film-faq">Calgary Residential Window Film FAQ</h2>
        </div>
        <div className={styles.faqList}>
          {residentialWindowFilmFaqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </motion.section>


      <motion.section className={styles.relatedServices} aria-labelledby="related-residential-services" {...reveal}>
        <h2 id="related-residential-services">More Protection Services in Calgary</h2>
        <p>
          Planning a business project? Explore our{" "}
          <a href="/commercial-films">commercial window film installation</a>. To protect
          marble and natural stone surfaces, learn about our{" "}
          <a href="/tuffskin">TuffSkin countertop protection</a>.
        </p>
      </motion.section>


      {/* Final CTA */}
      <motion.section className={styles.finalCTA} {...reveal}>
        <h2>Ready to Protect and Enhance Your Home?</h2>
        <p>Get expert advice and tailored recommendations — right at your home.</p>
        <a href="https://tintitpro.setmore.com/" className={styles.ctaButton}>
          Book a Consultation
        </a>
      </motion.section>
    </main>
  );
};

export default WindowFilms;
