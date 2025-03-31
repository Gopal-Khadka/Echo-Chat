import { ChatMessageType } from "@/types/types";
import React, { useContext } from "react";
import ChatMessage from "./chat-message";
import { ChatContext } from "@/app/chat/_lib/chat-provider";

const demoMessages: ChatMessageType[] = [
  {
    id: 101,
    username: "Gopal",
    isUser: true,
    message: "Help me fix this issue.",
  },
  {
    id: 102,
    username: "Assistant",
    isUser: false,
    message: "Explain the issue.",
  },
];

const ChatConversation = () => {
  const { messagesList } = useContext(ChatContext);

  const allMessages = demoMessages.concat(messagesList);
  return (
    <div className="flex flex-col gap-2 min-w-1/3 mx-auto overflow-y-auto max-h-[450px] py-3 px-5 shadow-lg rounded-lg shadow-gray-200 bg-gray-200">
      {allMessages.map((msg) => (
        <ChatMessage {...msg} key={msg.id} />
      ))}
    </div>
  );
};

export default ChatConversation;
