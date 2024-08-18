import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center p-4 gap-4">
      <MobileSidebar />
      <div className="flex w-full justify-between flex-row items-center ">
        <Link href="/" className="md:hidden">
          <h1 className="font-semibold md:text-xl">Super Brain</h1>
        </Link>
      </div>
      <div className="flex gap-5 w-full justify-end">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
