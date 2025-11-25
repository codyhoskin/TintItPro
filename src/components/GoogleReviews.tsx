import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "../styles/GoogleReviews.module.css";

const GoogleReviewsSimple = () => {
  return (
    <div className={styles.googleReviews}>
      <a href="https://g.co/kgs/FhGToiB" className={styles.reviewLink}>
  <div className={styles.reviewsRow}>
    <div className={styles.logoStarsRow}>
      <Image
        src="/images/google-logo.webp"
        alt="Google Logo"
        width={35}
        height={35}
        className={styles.googleLogo}
      />
      <div className={styles.starsRow}>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color="gold" size={30} />
        ))}
      </div>
    </div>
    <div className={styles.ratingText}>5.0 Rating by 82+ Happy Customers</div>
  </div>
</a>
    </div>
  );
};

export default GoogleReviewsSimple;
