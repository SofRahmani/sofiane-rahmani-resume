import { Chip } from "@nextui-org/chip";

export interface TagsProps {
  children: React.ReactNode;
  variant: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot";
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size: "sm" | "md" | "lg";
  radius: "none" | "sm" | "md" | "lg" | "full";
}

export default function Tags({ children, variant, color, size, radius }: TagsProps) {
  return (
    <Chip
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      className=" cursor-default hover:scale-105 hover:shadow-md "
    >
      {children}
    </Chip>
  );
}
