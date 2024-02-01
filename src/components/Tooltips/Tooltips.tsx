import { Tooltip } from "@nextui-org/tooltip";

export interface TooltipsProps {
  content: string;
  children: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  placement?:
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end"
    | "right-start"
    | "right-end";
}

export default function Tooltips({ content, children, color, radius, placement }: TooltipsProps) {
  return (
    <Tooltip content={content} color={color} radius={radius} placement={placement}>
      {children}
    </Tooltip>
  );
}
