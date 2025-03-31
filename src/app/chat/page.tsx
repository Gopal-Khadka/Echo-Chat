"use client";

import ChatConversation from "@/components/chat/chat-conversation";
import ChatInput from "@/components/chat/chat-input";
import React from "react";

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
