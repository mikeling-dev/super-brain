import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
