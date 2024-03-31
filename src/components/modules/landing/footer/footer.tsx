import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <Separator />
      <div className="flex justify-center items-center p-5 font-bold">
        Made with ❤️ by
        <div className="pl-1 text-blue-800">
          <Link href={"https://www.linkedin.com/in/faizanahmed-saiyed/"}>
            Faizan & Pavandeep
          </Link>
        </div>
      </div>
    </>
  );
}
