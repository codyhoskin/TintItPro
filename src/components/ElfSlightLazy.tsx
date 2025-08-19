"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useScriptCache } from "./useScriptCache";

/* —— heavy widget —— */
const ElfsightWidget = dynamic(() => import("./ElfSightGoogle"), { 
  ssr: false,
  loading: () => <ReviewsSkeleton height={600} />
});

/* —— visual placeholder —— */
function ReviewsSkeleton({ height = 600 }: { height?: number }) {
  return (
    <div
      style={{ 
        height,
        contain: "layout style paint",
        willChange: "auto"
      }}
      className="w-full rounded-xl bg-gray-100 dark:bg-slate-800 animate-pulse"
      aria-hidden="true"
    />
  );
}

interface Props {
  height?: number;
  timeoutMs?: number;
}

export default function ElfsightLazy({
  height = 600,
  timeoutMs = 3000,
}: Props) {
  const [activate, setActivate] = useState(false); // inject widget?
  const [ready, setReady] = useState(false);       // iframe loaded?
  const hostRef = useRef<HTMLDivElement | null>(null);

  // Use the script cache hook for Elfsight
  useScriptCache({
    src: "https://static.elfsight.com/platform/platform.js",
    strategy: "lazyOnload",
    cacheKey: "elfsight-platform-cache",
    cacheDuration: 24 * 60 * 60 * 1000 // 24 hours
  });

  /* 1 - Activate with IntersectionObserver for better performance */
  useEffect(() => {
    if (!hostRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame to avoid forced reflow
          requestAnimationFrame(() => {
            setActivate(true);
          });
          observer.disconnect();
        }
      },
      { 
        rootMargin: "200px 0px", // Start loading 200px before visible
        threshold: 0.1 
      }
    );

    observer.observe(hostRef.current);
    return () => observer.disconnect();
  }, []);

  /* 2 - Detect widget load (DOM change) with optimized observer */
  useEffect(() => {
    if (!activate || !hostRef.current) return;

    const node = hostRef.current;
    const timeoutId = setTimeout(() => {
      setReady(true);
    }, timeoutMs);

    const onChange = () => {
      // Use requestAnimationFrame to avoid forced reflow
      requestAnimationFrame(() => {
        setReady(true);
      });
    };

    const mObserver = new MutationObserver((mutations) => {
      // Only trigger if we see actual content changes
      const hasContentChanges = mutations.some(mutation => 
        mutation.type === 'childList' && mutation.addedNodes.length > 0
      );
      
      if (hasContentChanges) {
        onChange();
        mObserver.disconnect();
        clearTimeout(timeoutId);
      }
    });

    mObserver.observe(node, { 
      childList: true, 
      subtree: true,
      attributes: false, // Don't observe attribute changes
      characterData: false // Don't observe text changes
    });

    return () => {
      mObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [activate, timeoutMs]);

  /* 3 - Render with optimized container */
  return (
    <div
      ref={hostRef}
      style={{ 
        position: "relative", 
        minHeight: height || "500px",
        contain: "layout style paint",
        willChange: "auto"
      }}
    >
      {!ready && <ReviewsSkeleton height={height} />}
      {activate && <ElfsightWidget />}
    </div>
  );
}
