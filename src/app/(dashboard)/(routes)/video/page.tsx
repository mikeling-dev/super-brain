import Heading from "@/components/heading";
import { VideoIcon } from "lucide-react";

export default function VideoPage() {
  return (
    <div>
      <Heading
        title="Video Generation"
        description="No camera? Just type out your video!"
        icon={VideoIcon}
      />
    </div>
  );
}
