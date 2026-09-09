"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import {
  FEATURED_GOOGLE_REVIEWS,
  GOOGLE_MAPS_LISTING_URL,
  type GoogleReviewResponse,
} from "@/lib/google-business";
import TitleSection from "./TitleSection";
import styles from "../styles/GoogleReviewShowcase.module.css";

const initialData: GoogleReviewResponse = {
  configured: false,
  googleMapsUri: GOOGLE_MAPS_LISTING_URL,
  name: "Tint It Pro",
  rating: 5,
  reviews: FEATURED_GOOGLE_REVIEWS,
  userRatingCount: 100,
};

function Stars({ rating, small = false }: { rating: number; small?: boolean }) {
  return (
    <span className={`${styles.stars} ${small ? styles.smallStars : ""}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          aria-hidden="true"
          key={index}
          className={index < Math.round(rating) ? styles.starOn : styles.starOff}
        />
      ))}
      <span className={styles.srOnly}>{rating.toFixed(1)} out of 5 stars</span>
    </span>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function GoogleReviewShowcase() {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/google-reviews", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : initialData))
      .then((nextData: GoogleReviewResponse) => setData(nextData))
      .catch(() => setData(initialData))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const scroll = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      behavior: "smooth",
      left: direction * Math.min(rail.clientWidth * 0.86, 420),
    });
  };

  const countLabel = data.configured
    ? `${data.userRatingCount.toLocaleString()} reviews`
    : "100+ reviews";
  const reviews = data.reviews.length > 0 ? data.reviews : FEATURED_GOOGLE_REVIEWS;

  return (
    <section className={styles.wrapper} aria-labelledby="google-reviews-title">
      <div className={styles.inner}>
        <div id="google-reviews-title">
          <TitleSection
            title="Customer Testimonials"
            subtitle="See what Calgary customers say about Tint It Pro."
          />
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryBrand}>
            <Image
              src="/images/google-logo.webp"
              alt="Google"
              width={42}
              height={42}
              className={styles.googleLogo}
            />
            <div>
              <span className={styles.eyebrow}>Google Reviews</span>
              <div className={styles.ratingLine}>
                <strong>{data.rating.toFixed(1)}</strong>
                <Stars rating={data.rating} />
              </div>
              <span className={styles.reviewCount}>Based on {countLabel}</span>
            </div>
          </div>

          <a
            href={data.googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleButton}
          >
            View all reviews <MdOpenInNew aria-hidden="true" />
          </a>
        </div>

        {loading ? (
          <div className={styles.rail} aria-label="Loading Google reviews">
            {Array.from({ length: 3 }, (_, index) => (
              <div className={styles.skeletonCard} key={index} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className={styles.rail} ref={railRef}>
              {reviews.map((review, index) => (
                <article
                  className={styles.reviewCard}
                  key={`${review.authorName}-${review.publishTime || index}`}
                >
                  <header className={styles.authorRow}>
                    <a
                      className={styles.author}
                      href={review.authorUri || data.googleMapsUri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {review.authorPhotoUri ? (
                        // Google supplies and hosts reviewer attribution photos.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={review.authorPhotoUri}
                          alt=""
                          className={styles.avatar}
                          decoding="async"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className={styles.avatarFallback} aria-hidden="true">
                          {initials(review.authorName)}
                        </span>
                      )}
                      <span>
                        <strong>{review.authorName}</strong>
                        <small>
                          {review.relativePublishTimeDescription || "Google review"}
                        </small>
                      </span>
                    </a>
                    <Image
                      src="/images/google-logo.webp"
                      alt=""
                      width={24}
                      height={24}
                      className={styles.cardGoogleLogo}
                    />
                  </header>

                  <Stars rating={review.rating} small />
                  <p className={styles.reviewText}>{review.text}</p>
                  <a
                    href={review.googleMapsUri || data.googleMapsUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.readOnGoogle}
                  >
                    Read full review on Google <MdOpenInNew aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>

            <div className={styles.controls} aria-label="Review carousel controls">
              <button type="button" onClick={() => scroll(-1)} aria-label="Previous reviews">
                <FaArrowLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => scroll(1)} aria-label="Next reviews">
                <FaArrowRight aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
