import { createContext, useState, useEffect } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [messages, setMessages] = useState(() => {
  const saved = localStorage.getItem("messages");
            return saved ? JSON.parse(saved) : [];
          });
  const [prevPrompts, setPrevPrompts] = useState(() => {
  const saved = localStorage.getItem("prevPrompts");
        return saved ? JSON.parse(saved) : [];
           });



const [chatHistory, setChatHistory] = useState(() => {
  const saved = localStorage.getItem("chatHistory");
  return saved ? JSON.parse(saved) : [];
});
  
useEffect(() => {
  localStorage.setItem(
    "prevPrompts",
    JSON.stringify(prevPrompts)
  );
}, [prevPrompts]);

useEffect(() => {
  localStorage.setItem(
    "chatHistory",
    JSON.stringify(chatHistory)
  );
}, [chatHistory]);

useEffect(() => {
  localStorage.setItem(
    "messages",
    JSON.stringify(messages)
  );
}, [messages]);

 const onSent = async () => {
  if (!input.trim()) return;

  setLoading(true);
  setShowResult(true);

  setRecentPrompt(input);

  setPrevPrompts((prev) => {
  if (prev.includes(input)) return prev;
  return [...prev, input];
});


const response = await runChat(input);

setResultData(response);

setMessages((prev) => [
  ...prev,
  {
    role: "user",
    text: input,
  },
  {
    role: "ai",
    text: response,
  },
]);

setChatHistory((prev) => [
  ...prev,
  {
    prompt: input,
    response: response,
  }
]);

  setInput("");
  setLoading(false);
};

const newChat = () => {
  setShowResult(false);
  setLoading(false);
  setResultData("");
  setRecentPrompt("");
  setInput("");
  setMessages([]);
};
const loadPrompt = (prompt) => {
  const chat = chatHistory.find(
    (item) => item.prompt === prompt
  );

  if (chat) {
  setRecentPrompt(chat.prompt);
  setResultData(chat.response);

  setMessages([
    {
      role: "user",
      text: chat.prompt,
    },
    {
      role: "ai",
      text: chat.response,
    },
  ]);

  setShowResult(true);
}
};

  const value = {
    input,
    setInput,
    loading,
    resultData,
    showResult,
    onSent,
    recentPrompt,
     setRecentPrompt,
     prevPrompts,
    setPrevPrompts,
    newChat,
    loadPrompt,
    chatHistory,
    setChatHistory,
    messages,
    setMessages,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;