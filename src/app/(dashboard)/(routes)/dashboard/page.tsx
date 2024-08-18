"use client";

import { Card, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  CodeIcon,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
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
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-20 p-10">
      <div className="flex flex-col space-y-4 ">
        <h1 className="text-xl font-bold md:text-2xl text-center">
          Experience the power of AI
        </h1>
        <p className="text-muted-foreground text-center">
          Boost your productivity by chatting with Super Brain
        </p>
        <div className="py-10 px-4 md:px-20 space-y-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              className="py-2 px-4 dark:hover:bg-accent hover:shadow-md justify-between flex flex-row gap-x-6"
              key={tool.href}
            >
              <CardTitle className="flex flex-row gap-2 text-md">
                <tool.icon />
                {tool.label}
              </CardTitle>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
