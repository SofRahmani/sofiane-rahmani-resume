'use client'
import ScrollToTop from "react-scroll-up";
import { IconArrowUpSquare } from "@/icons/Icons";

export default function ScrollToTopButton() {
  return (
    <ScrollToTop showUnder={160}>
      <IconArrowUpSquare />
    </ScrollToTop>
  );
}
