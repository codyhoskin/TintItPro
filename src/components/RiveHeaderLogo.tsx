import Image from "next/image";

interface RiveLogoProps {
  width?: number;
  height?: number;
  delay?: number;
}

export const RiveLogoNav = ({
  width = 100,
  height = 100,
  delay: _delay = 300,
}: RiveLogoProps) => {
  return (
    <div style={{ width, height, position: "relative" }}>
      <Image
        src="/images/logo-white.png"
        alt="Tint It Pro"
        fill
        sizes={`${width}px`}
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
};
