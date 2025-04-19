import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "../styles/GoogleReviews.module.css";

const GoogleReviewsSimple = () => {
  return (
    <div className={styles.googleReviews}>
      <a
        href="https://g.co/kgs/FhGToiB"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.reviewLink}
        aria-label="Read customer reviews for Tint it Pro on Google"
      >
        <div className={styles.reviewsRow}>
          <Image
            src="/images/google-logo.webp"
            alt="Google Logo"
            width={35}
            height={35}
            loading="lazy"
            className={styles.googleLogo}
          />

          <div className={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="gold" size={18} aria-hidden="true"/>
            ))}
            <span className={styles.ratingText}>5.0 Rating by 65+ Happy Customers</span>
          </div>
        </div>
        <div className={styles.ratingText2}>See Why They Trust Us!</div>
      </a>
    </div>
  );
};

export default GoogleReviewsSimple;
