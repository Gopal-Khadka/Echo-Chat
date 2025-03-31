import React from "react";

interface Props {
  children: React.JSX.Element;
}

const ChatLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col py-5 justify-center items-center gap-5">
      {children}
    </main>
  );
};

export default ChatLayout;
