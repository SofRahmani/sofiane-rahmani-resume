import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export interface ProfilPicProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  radius: "none" | "sm" | "md" | "lg" | "full";
  shadow: "none" | "sm" | "md" | "lg";
  isZoomed: boolean;
}

export default function ProfilPic({
  src = "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
  alt,
  width,
  height,
  radius,
  shadow,
  isZoomed
}: ProfilPicProps) {
  return (
    <Image
      as={NextImage}
      width={width}
      height={height}
      radius={radius}
      shadow={shadow}
      isZoomed={isZoomed}
      alt={alt}
      src={src}
    />
  );
}
