import Image from "next/image";
import styles from "../styles/LogoCarousel.module.css";
import TitleSection from "./TitleSection";

const partnerLogos = [
  "/images/armorcoat.svg",
  "/images/panorama.webp",
  "/images/solarguard.png",
  "/images/tuffskin-web.png",
  "/images/certifiedBadge.svg",
];

const LogoCarousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <TitleSection 
        title="Trusted by Industry Leaders" 
        subtitle="We partner with the world's most trusted brands"
      />
      
        <div className={styles.carouselShadowLeft} />
  <div className={styles.carouselShadowRight} />
      <div className={styles.carouselTrack}>
        {partnerLogos.concat(partnerLogos).map((logo, index) => {
          const isTuffskin = logo.includes("tuffskin");

          const width = isTuffskin ? 120 : 140;
          const height = isTuffskin ? 90 : 80;

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
                loading={index < 4 ? "eager" : "lazy"}
                quality={85}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoCarousel;
