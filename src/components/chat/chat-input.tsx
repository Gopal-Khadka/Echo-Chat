"use client";
import { ChatContext } from "@/app/chat/_lib/chat-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessageType } from "@/types/types";
import { SendHorizonalIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import { sendMessageAction } from "@/app/chat/actions";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { dispatch } = useContext(ChatContext);

  const handleMessageSend = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (message.trim() === "") return;

    // Dispatch the action with the message
    const newMessage: ChatMessageType = {
      id: Date.now(),
      isUser: true,
      message,
      username: "Gopal",
    };
    dispatch({ type: "ADD_MESSAGE", payload: newMessage });

    // fetch response from the server
    const res = await sendMessageAction(message);
    if (res.success) {
      const responseMsg: ChatMessageType = {
        isUser: false,
        id: Date.now(),
        message: res.processedText,
        username: "Assistant",
      };
      // add response message to the chat messages list
      dispatch({ type: "ADD_MESSAGE", payload: responseMsg });
    }

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
