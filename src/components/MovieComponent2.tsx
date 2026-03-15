"use client";

import React, { useState } from "react";
import Image from "next/image";

const MovieViewingComponent: React.FC = () => {
  const videoId = "UrYT7casVJM";
  const title = "Tint It Pro Surface Protection Video";
  const description = "Watch how we protect marble surfaces using TuffSkin film.";
  const uploadDate = "2024-03-10";

  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  );

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description,
    thumbnailUrl: [thumbnailSrc],
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

  return (
    <section
      aria-labelledby="video-title"
      style={{
        width: "100%",
        backgroundColor: "var(--background)",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          background: "#000",
          paddingBottom: isPlaying ? "56.25%" : "0", // 👈 ADD THIS
          height: isPlaying ? 0 : "auto", 
        }}
      >
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            role="button"
            aria-label={`Play video: ${title}`}
            style={{
              cursor: "pointer",
              position: "relative",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              height: 0,
              width: "100%",
            }}
          >
            <Image
              src={thumbnailSrc}
              alt={`Thumbnail for ${title}`}
              fill
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              style={{ objectFit: "cover" }}
              onError={() => setThumbnailSrc("/images/video-fallback.jpg")}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                background: "rgba(255,255,255,0.85)",
                borderRadius: "50%",
                backgroundImage: "url('/images/play.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "40%",
                boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieViewingComponent;
