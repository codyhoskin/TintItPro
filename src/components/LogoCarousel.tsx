import Image from "next/image";
import styles from "../styles/LogoCarousel.module.css";
import TitleSection from "./TitleSection";

const partnerLogos = [
  "/images/armorcoat-sheild.png",
  "/images/panorama.webp",
  "/images/solarguard.png",
  "/images/tuffskin-web.png",
];

const LogoCarousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <TitleSection title="Certified by the Best" subtitle="We create happy customers."/><br></br>
      <div className={styles.carouselTrack}>
        {partnerLogos.concat(partnerLogos).map((logo, index) => {
          const isTuffskin = logo.includes("tuffskin");

          const width = isTuffskin ? 100 : 120; // Slightly wider
          const height = isTuffskin ? 70 : 60;  // Same height for now, or increase to 70 if needed

          return (
            <div
              className={styles.logoItem}
              key={index}
              style={{
                position: "relative",
                width: `${width}px`,
                height: `${height}px`,
              }}
            >
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                sizes={`${width}px`}
                priority={index < 4}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoCarousel;
