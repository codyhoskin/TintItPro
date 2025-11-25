import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";

interface RiveLogoProps {
  width?: number;
  height?: number;
}

export const RiveLogoFooter = ({ width = 240, height = 240 }: RiveLogoProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const { rive, RiveComponent } = useRive({
    src: "/rive/tintitpro.riv",
    autoplay: false,
  });

  useEffect(() => {
    if (isInView && rive) {
      rive.play();
    }
  }, [isInView, rive]);

  return (
    <div ref={ref} style={{ width, height }}>
      <RiveComponent />
    </div>
  );
};
