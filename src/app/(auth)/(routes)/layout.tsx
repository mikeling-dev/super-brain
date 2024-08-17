import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import React from "react";

export default function functionName({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center p-8 md:p-20 gap-10 md:gap-20 w-full  h-full">
      <div className="flex  justify-between w-full">
        <Link href="/" className="">
          <h1 className="text-xl font-semibold">Super Brain</h1>
        </Link>

        <ModeToggle />
      </div>
      {children}
    </div>
  );
}
