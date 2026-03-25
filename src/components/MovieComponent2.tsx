"use client";

import React, { useState } from "react";
import Image from "next/image";

const MovieViewingComponent: React.FC = () => {
  const videoId = "UrYT7casVJM";
  const title = "Tint It Pro Surface Protection Video";

  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section
      aria-labelledby="Tuffskin Surface Protection"
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
      <div
      style={{
        width: "100%",
        maxWidth: "1000px", // 🔥 make wider
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
        background: "#000",
        aspectRatio: "16 / 9", // 🔥 keep correct ratio
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
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
              transform: "scale(0.65)",
            }}
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsPlaying(true);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Play video: ${title}`}
            style={{
              cursor: "pointer",
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={thumbnailSrc}
              alt={`Thumbnail for ${title}`}
              fill
              quality={85}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
              onError={() =>
                setThumbnailSrc(
                  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                )
              }
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.05))",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "84px",
                height: "84px",
                background: "rgba(255,255,255,0.9)",
                borderRadius: "50%",
                backgroundImage: "url('/images/play.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "38%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieViewingComponent;