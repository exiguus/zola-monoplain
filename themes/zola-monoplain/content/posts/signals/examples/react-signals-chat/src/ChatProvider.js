import React, { createContext, useContext } from "react";
import useSignal from "./hooks/useSignal";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const chatSignal = useSignal();
  return (
    <ChatContext.Provider value={chatSignal}>{children}</ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
