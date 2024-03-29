import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/constants/data";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center p-4">
      <ThemeToggle />
    </div>
  );
}
