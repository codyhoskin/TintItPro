import { useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";

interface RiveLogoProps {
  width?: number;
  height?: number;
  delay?: number; // delay in ms
}

export const RiveLogoNav = ({
  width = 100,
  height = 100,
  delay = 300,
}: RiveLogoProps) => {
  const { rive, RiveComponent } = useRive({
    src: "/rive/tintitpro.riv",
    autoplay: false,
  });

  useEffect(() => {
    if (rive) {
      const t = setTimeout(() => {
        rive.play();
      }, delay);

      return () => clearTimeout(t);
    }
  }, [rive, delay]);

  return (
    <div style={{ width, height }}>
      <RiveComponent />
    </div>
  );
};
