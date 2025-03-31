import { Action } from "@/app/chat/_lib/chat-reducer";
import { ChatMessageType } from "@/types/types";
import React, { createContext } from "react";

// Chatcontext provider to handle messages and dispatch from chatReducer
export const ChatContext = createContext<{
  messagesList: ChatMessageType[];
  dispatch: React.Dispatch<Action>;
}>({
  // define initial states
  messagesList: [] as ChatMessageType[],
  dispatch: () => null,
});
