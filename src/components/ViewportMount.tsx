"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type ViewportMountProps = {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
};

export default function ViewportMount({
  children,
  minHeight = 320,
  rootMargin = "600px 0px",
}: ViewportMountProps) {
  const markerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker || mounted) return;

    if (!("IntersectionObserver" in window)) {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  return (
    <div
      ref={markerRef}
      style={mounted ? undefined : { minHeight }}
      aria-busy={!mounted}
    >
      {mounted ? children : null}
    </div>
  );
}
