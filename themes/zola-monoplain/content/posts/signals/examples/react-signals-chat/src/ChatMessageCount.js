import React, { useState, useEffect } from "react";
import { useChat } from "./ChatProvider";

const ChatMessageCount = () => {
  const [messages, setMessages] = useState([]);
  const chat = useChat();

  useEffect(() => {
    const unsubscribe = chat.subscribe((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => unsubscribe();
  }, []);

  return <div>Count: {messages.length}</div>;
};

export default ChatMessageCount;
