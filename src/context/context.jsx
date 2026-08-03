import { createContext, useState } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [recentPrompt, setRecentPrompt] = useState("");
const [prevPrompts, setPrevPrompts] = useState([]);

  const onSent = async () => {
  if (!input.trim()) return;

  setLoading(true);
  setShowResult(true);

  setRecentPrompt(input);
  setPrevPrompts((prev) => [...prev, input]);

  const response = await runChat(input);

  setResultData(response);
  setLoading(false);
  setInput("");
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
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;