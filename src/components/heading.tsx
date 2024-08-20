import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function Heading({
  title,
  description,
  icon: Icon,
}: HeadingProps) {
  return (
    <div className="flex flex-row p-6 md:p-10 gap-5 items-center">
      <div className="bg-accent p-2 rounded-md">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
