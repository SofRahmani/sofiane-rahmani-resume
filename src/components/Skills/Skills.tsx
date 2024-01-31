import { Chip } from "@nextui-org/chip";

export interface SkillsProps {
  children: React.ReactNode;
  variant: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot";
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size: "sm" | "md" | "lg";
  radius: "none" | "sm" | "md" | "lg" | "full";
}

export default function Skills({ children, variant, color, size, radius }: SkillsProps) {
  return (
    <Chip variant={variant} color={color} size={size} radius={radius}>
      {children}
    </Chip>
  );
}
