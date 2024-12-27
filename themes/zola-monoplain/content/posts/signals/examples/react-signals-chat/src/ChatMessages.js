import React, { useEffect, useState } from "react";
import { useChat } from "./ChatProvider";

const ChatMessages = () => {
  const [messages, setMessages] = useState([]);
  const chat = useChat();

  useEffect(() => {
    const unsubscribe = chat.subscribe((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Chat Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatMessages;
