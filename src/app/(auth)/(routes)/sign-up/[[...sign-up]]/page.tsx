import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div>
      <SignUp />
    </div>
  );
}
