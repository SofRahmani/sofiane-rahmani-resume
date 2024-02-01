"use client";
import { IconArrowUpSquare } from "@/icons/Icons";
import ScrollToTop from "react-scroll-up";

export default function ScrollToTopButton() {
  return (
    <ScrollToTop showUnder={160} easing="linear">
      <IconArrowUpSquare />
    </ScrollToTop>
  );
}
