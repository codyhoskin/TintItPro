import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ImageGallery.module.css";

// Define the type for the image prop
interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  title: string;
  description: string;
  relatedLinks: Array<{
    href: string;
    label: string;
  }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
  description,
  relatedLinks,
}) => {
  return (
    <main className={styles.galleryContainer}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span>{title}</span>
      </nav>

      <header className={styles.galleryHeader}>
        <p className={styles.eyebrow}>Completed Calgary projects</p>
        <h1 className={styles.galleryHeading}>{title}</h1>
        <p className={styles.galleryIntro}>{description}</p>
        <nav className={styles.relatedLinks} aria-label="Related services">
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.relatedLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ImageGallery;
