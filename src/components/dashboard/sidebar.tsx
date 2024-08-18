"use client";

import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn("w-full flex justify-start")}
        >
          <Button
            className={cn(
              "w-full flex justify-start text-muted-foreground",
              pathname === route.href
                ? "bg-accent text-accent-foreground"
                : null
            )}
            variant="ghost"
          >
            <route.icon className="h-5 w-5 mr-3" />
            {route.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
