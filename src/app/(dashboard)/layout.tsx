import Sidebar from "@/components/dashboard/sidebar";
import Navbar from "@/components/navbar";

import Link from "next/link";
import React from "react";

export default function DashboardLoyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative w-full">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-100 z-[80] bg-background w-60 items-center pt-10 md:pt-4 border-r-2">
        <Link href="/" className="">
          <h1 className="font-semibold text-xl">Super Brain</h1>
        </Link>
        <Sidebar />
      </div>
      <main className="md:pl-60">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
