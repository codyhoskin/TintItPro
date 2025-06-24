"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TitleSection from "./TitleSection";

interface MovieViewingComponentProps {
  videoId: string;
  title?: string;
  description?: string;
  uploadDate?: string;
  thumbnailUrl?: string;
  showCaption?: boolean;
}

const MovieViewingComponent: React.FC<MovieViewingComponentProps> = ({
  videoId,
  uploadDate = "2024-03-10",
  thumbnailUrl,
}) => {
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const thumbUrl = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    thumbnailUrl: [thumbUrl],
    uploadDate,
    contentUrl: videoUrl,
    embedUrl,
    publisher: {
      "@type": "Organization",
      name: "Tint It Pro",
      logo: {
        "@type": "ImageObject",
        url: "https://tintitpro.netlify.app/images/logo.png",
      },
    },
  };

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="video-title"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "100px auto",
        padding: "40px 20px",
        borderRadius: "20px",
        background: "var(--background)",
        color: "var(--foreground)",
        textAlign: "center",
      }}
    >
      <TitleSection title="Watch Our Work in Action" subtitle="See how Tint It Pro transforms your space with professional film installation. This short video showcases the clarity, protection, and style our services deliver."/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

  

      <div
        ref={videoRef}
        style={{
          width: "100%",
          position: "relative",
          paddingBottom: "56.25%",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
          border: "4px solid var(--border-color)",
        }}
      >
        {isInView ? (
          <iframe
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          <Image
            src={thumbUrl}
            alt={`Thumbnail for Tint it Pro`}
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
};

export default MovieViewingComponent;
