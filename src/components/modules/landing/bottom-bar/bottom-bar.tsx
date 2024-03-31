import { BadgeInfo, Database, FileText, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full backdrop-blur-md bg-opacity-50 bg-white dark:bg-opacity-60 dark:bg-black dark:text-white text-black md:hidden">
      <div className="max-w-screen-lg mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="w-full">
          <button className="darK:text-white py-2 px-4  w-full flex flex-col justify-center items-center">
            <Database />
            <div className="text-sm">Resources</div>
          </button>
        </Link>
        <Link href="/" className="w-full">
          <button className="darK:text-white py-2 px-4  w-full flex flex-col justify-center items-center">
            {/* <Image src="/byceeps.svg" width={24} height={24} alt="logo" /> */}
            <Gem />
            <div className="text-sm">Motivation</div>
          </button>
        </Link>
        <Link href="/" className="w-full">
          <button className="darK:text-white py-2 px-4  w-full flex flex-col justify-center items-center">
            <BadgeInfo />
            <div className="text-sm">About</div>
          </button>
        </Link>
        {/* Add more buttons for additional tabs */}
      </div>
    </div>
  );
}
