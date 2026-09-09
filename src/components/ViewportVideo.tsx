"use client";

import { useEffect, useRef, useState } from "react";

type ViewportVideoProps = {
  className?: string;
  label: string;
  poster?: string;
  src: string;
};

export default function ViewportVideo({
  className,
  label,
  poster,
  src,
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.play().catch(() => {});
  }, [active]);

  return (
    <video
      ref={videoRef}
      className={className}
      aria-label={label}
      autoPlay={active}
      muted
      loop
      playsInline
      controls={false}
      poster={poster}
      preload={active ? "metadata" : "none"}
    >
      {active ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
