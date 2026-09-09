"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  GOOGLE_MAPS_LISTING_URL,
  type GoogleReviewResponse,
} from "@/lib/google-business";
import styles from "../styles/GoogleReviews.module.css";

const GoogleReviewsSimple = () => {
  const [reviewData, setReviewData] = useState<GoogleReviewResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/google-reviews", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: GoogleReviewResponse | null) => setReviewData(data))
      .catch(() => setReviewData(null));

    return () => controller.abort();
  }, []);

  const reviewCount = reviewData?.configured
    ? reviewData.userRatingCount.toLocaleString()
    : "100+";

  return (
    <div className={styles.googleReviews}>
      <a
        href={reviewData?.googleMapsUri || GOOGLE_MAPS_LISTING_URL}
        className={styles.reviewLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${reviewCount} Tint It Pro reviews on Google`}
      >
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
    <div className={styles.ratingText}>
      {(reviewData?.rating ?? 5).toFixed(1)} on Google · {reviewCount} reviews
    </div>
  </div>
</a>
    </div>
  );
};

export default GoogleReviewsSimple;
