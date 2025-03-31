"use client";
import { ChatContext } from "@/app/chat/_lib/chat-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessageType } from "@/types/types";
import { SendHorizonalIcon } from "lucide-react";
import React, { useContext, useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const {  dispatch } = useContext(ChatContext);

  const handleMessageSend = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (message.trim() == "") return;
    const newMessage: ChatMessageType = {
      id: Date.now(),
      isUser: true,
      message,
      username: "Gopal",
    };

    dispatch({ type: "ADD_MESSAGE", payload: newMessage });
    setMessage("");
  };
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Type your message..."
        autoFocus
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" onClick={handleMessageSend}>
        <SendHorizonalIcon />
      </Button>
    </div>
  );
};

export default ChatInput;
