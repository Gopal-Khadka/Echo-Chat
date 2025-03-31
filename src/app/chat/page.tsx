import ChatConversation from "@/components/chat/chat-conversation";
import ChatInput from "@/components/chat/chat-input";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chat | Echo Chat",
  description: "Chat page for users",
};

const ChatPage = () => {
  return (
    <>
      <h2 className="font-bold text-2xl text-center">Chat Site</h2>
      <ChatConversation />
      <ChatInput />
    </>
  );
};

export default ChatPage;
