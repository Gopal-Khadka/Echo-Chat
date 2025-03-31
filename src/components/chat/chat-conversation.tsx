import { ChatMessageType } from "@/types/types";
import React from "react";
import ChatMessage from "./chat-message";

const demoMessages: ChatMessageType[] = [
  {
    username: "Gopal",
    isUser: true,
    message: "Help me fix this issue.",
  },
  {
    username: "Assistant",
    isUser: false,
    message: "Explain the issue.",
  },
];

const ChatConversation = () => {
  return (
    <div className="flex flex-col gap-2 min-w-1/3 mx-auto overflow-y-auto max-h-[450px] py-3 px-5 shadow-md rounded-lg shadow-gray-300">
      {demoMessages.map((msg, idx) => (
        <ChatMessage {...msg} key={idx} />
      ))}
    </div>
  );
};

export default ChatConversation;
