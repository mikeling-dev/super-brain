import Link from "next/link";
import { ModeToggle } from "../../ui/mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../../ui/button";
import { Ghost } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between w-full">
      <Link href="/" className="">
        <h1 className="font-semibold text-xl">Super Brain</h1>
      </Link>
      <div className="flex gap-5">
        <ModeToggle />

        <Link href="/sign-in">
          <Button variant="secondary">
            {/* <SignInButton /> */}
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
}
