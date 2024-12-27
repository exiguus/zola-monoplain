import React, { useState } from "react";
import { useChat } from "./ChatProvider";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const chat = useChat();

  const sendMessage = () => {
    if (message.trim()) {
      chat.emit(message);
      setMessage("");
    }
  };

  const onSubmit = (event) => event.preventDefault();

  return (
    <form onSubmit={onSubmit}>
      <legend>Send a message</legend>
      <label htmlFor="message">Message</label>
      <input
        id="message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </form>
  );
};

export default ChatInput;
