import React from "react";
import Image from "next/image";
import styles from "../styles/ImageGallery.module.css"; // Adjust the path as necessary
import TitleSection from "./TitleSection";

// Define the type for the image prop
interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className={styles.galleryContainer}>
        <TitleSection title="Image Gallery" subtitle="Completed Jobs For Our Happy Customers." />
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
    </div>
  );
};

export default ImageGallery;
