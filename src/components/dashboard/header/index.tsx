import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "../../ui/mode-toggle";

export default function DashboardHeader() {
  return (
    <div className="flex w-full justify-between flex-row items-center p-10 md:p-24">
      <Link href="/" className="">
        <h1 className="font-semibold text-xl">Super Brain</h1>
      </Link>
      <div className="flex gap-5">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
