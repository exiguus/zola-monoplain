import React from "react";
import { ChatProvider } from "./ChatProvider";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import ChatMessageCount from "./ChatMessageCount";

const App = () => {
  return (
    <ChatProvider>
      <main>
        <h1>Chat Application</h1>
        <h2>React Signal example</h2>
        <ChatMessageCount />
        <ChatMessages />
        <ChatInput />
      </main>
    </ChatProvider>
  );
};

export default App;
