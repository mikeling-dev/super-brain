import Heading from "@/components/heading";
import { MusicIcon } from "lucide-react";

export default function MusicPage() {
  return (
    <div>
      <Heading
        title="Music Generation"
        description="Turns out you don't need years to learn making music!"
        icon={MusicIcon}
      />
    </div>
  );
}
