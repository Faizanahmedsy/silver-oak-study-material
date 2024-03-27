import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/constants/data";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="p-4 px-14 text-xl">
      <nav className="flex justify-between items-center">
        <div>Logo</div>
        <ul className="flex justify-center items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <li>{link.name}</li>
            </Link>
          ))}
          <ThemeToggle />
        </ul>
      </nav>
    </div>
  );
}
