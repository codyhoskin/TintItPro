"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
  title = "",
  description = "",
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
    name: title,
    description,
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
        width: "95%",
        background: "linear-gradient(135deg, #b80000, #ff4d4d)",
        borderRadius: "20px",
        padding: "60px 20px",
        margin: "80px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />


      <figure
        ref={videoRef}
        style={{
          width: "95%",
          position: "relative",
          paddingBottom: "56.25%",
          height: "95%",
          border: "5px solid #fff",
          borderRadius: "14px",
          overflow: "hidden",
        }}
      >
        {isInView ? (
          <iframe
            src={embedUrl}
            title={title}
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
            alt={`Thumbnail for ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        )}
      </figure>
    </section>
  );
};

export default MovieViewingComponent;
