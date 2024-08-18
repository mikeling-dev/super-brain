import Heading from "@/components/heading";
import { ImageIcon } from "lucide-react";

export default function ImagePage() {
  return (
    <div>
      <Heading
        title="Image Generation"
        description="Turn your words into wonderful images"
        icon={ImageIcon}
      />
    </div>
  );
}
