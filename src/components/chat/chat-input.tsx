import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonalIcon } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Type your message..." autoFocus />
      <Button type="submit">
        <SendHorizonalIcon />
      </Button>
    </div>
  );
};

export default ChatInput;
