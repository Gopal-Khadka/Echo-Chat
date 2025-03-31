import React from "react";
import { cn } from "@/lib/utils";
import type { ChatMessageType } from "@/types/types";
import { AvatarImage, Avatar, AvatarFallback } from "../ui/avatar";

const ChatMessage = ({
  message,
  username,
  isUser,
  avatarUrl,
}: ChatMessageType) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>
      )}
      <div
        id="message"
        className={cn(
          "rounded-lg px-4 max-w-[70%] py-2",
          isUser
            ? "bg-blue-500 text-white"
            : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        )}
      >
        <span className="text-sm">{message}</span>
      </div>

      {isUser && (
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
