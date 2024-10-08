"use client";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

export default function MobileSidebar() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pt-10 md:hidden">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
