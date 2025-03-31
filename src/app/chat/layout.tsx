import type { Metadata } from "next";
import React from "react";

interface Props {
  children: React.JSX.Element;
}
export const metadata: Metadata = {
  title: "Chat | Echo Chat",
  description: "Chat page for users",
};
const ChatLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col py-5 justify-center items-center gap-5">
      {children}
    </main>
  );
};

export default ChatLayout;
