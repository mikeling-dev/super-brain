import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center p-4 gap-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-between flex-row items-center ">
        <Link href="/" className="md:hidden">
          <h1 className="font-semibold text-xl">Super Brain</h1>
        </Link>
      </div>
      <div className="flex gap-5 w-full justify-end">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
