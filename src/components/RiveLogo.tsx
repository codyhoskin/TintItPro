import Image from "next/image";

interface RiveLogoProps {
  width?: number;
  height?: number;
}

export const RiveLogoFooter = ({ width = 240, height = 240 }: RiveLogoProps) => {
  return (
    <div style={{ width, height, position: "relative" }}>
      <Image
        src="/images/logo.png"
        alt="Tint It Pro"
        fill
        sizes={`${width}px`}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};
