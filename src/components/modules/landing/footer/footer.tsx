import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Footer() {
  return (
    <>
      <Separator />
      <footer className="p-4 px-14 text-xl">
        <div className="flex justify-between items-center">
          <div>Footer</div>
          <ul className="flex justify-center items-center gap-6">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
