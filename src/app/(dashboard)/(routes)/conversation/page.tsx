import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";

export default function ConversationPage() {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Super Brain answers any question you have in mind"
        icon={MessageSquare}
      />
    </div>
  );
}
