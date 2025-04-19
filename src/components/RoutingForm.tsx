"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const RoutingForm: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const routingFormUrl = "https://calendly.com/d/crzw-7ty-whv";

  useEffect(() => {
    if (!scriptLoaded) return;

    if (widgetRef.current && window.Calendly) {
      widgetRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: routingFormUrl,
        parentElement: widgetRef.current,
      });
    }
  }, [scriptLoaded]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "80px 0",
        boxSizing: "border-box",
      }}
    >
      <div
        ref={widgetRef}
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "150vh",
          minHeight: "700px",
        }}
      ></div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
    </div>
  );
};

export default RoutingForm;
