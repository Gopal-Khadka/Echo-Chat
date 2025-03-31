"use client";
import React, { useReducer } from "react";

import { ChatContext } from "./_lib/chat-provider";
import { chatReducer } from "./_lib/chat-reducer";

import ChatInput from "@/components/chat/chat-input";
import ChatConversation from "@/components/chat/chat-conversation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ChatPage = () => {
  const [messagesList, dispatch] = useReducer(chatReducer, []);
  return (
    <ChatContext.Provider value={{ messagesList, dispatch }}>
      <h2 className="font-bold text-2xl text-center">Chat Site</h2>
      <Button asChild>
        <Link href="/">Go to home</Link>
      </Button>
      <ChatConversation />
      <ChatInput />
    </ChatContext.Provider>
  );
};

export default ChatPage;
