"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/ElfSightGoogle.module.css";

/* —— heavy widget —— */
const ElfsightWidget = dynamic(() => import("./ElfSightGoogle"), { ssr: false });

/* —— visual placeholder —— */
function ReviewsSkeleton({ height = 600 }: { height?: number }) {
  return (
    <div
      style={{ height }}
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

  /* 1 - Activate immediately (no IntersectionObserver) */
  useEffect(() => {
    setActivate(true);
  }, []);

  /* 2 - Detect widget load (DOM change) */
  useEffect(() => {
    if (!activate || !hostRef.current) return;

    const node = hostRef.current;
    const onChange = () => setReady(true);
    const mObserver = new MutationObserver(onChange);
    mObserver.observe(node, { childList: true, subtree: true });

    const id = setTimeout(() => setReady(true), timeoutMs);

    return () => {
      mObserver.disconnect();
      clearTimeout(id);
    };
  }, [activate, timeoutMs]);

  /* 3 - Render */
  return (
  <div
    ref={hostRef}
    style={{ position: "relative", minHeight: height || "500px" }} // ensure it has height
  >
    {!ready && <ReviewsSkeleton height={height} />}
    {activate && <ElfsightWidget />}
    <div className={styles.floatingBox}/>

  </div>
);
}
