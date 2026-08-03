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

  try {
    setRecentPrompt(input);
    setPrevPrompts((prev) => [...prev, input]);

    const response = await runChat(input);

    setResultData(response);
    setInput("");
  } catch (error) {
    console.error(error);
    setResultData(
      "⚠️ Gemini API quota exceeded. Please wait or use another API key."
    );
  } finally {
    setLoading(false);
  }
};
const newChat = () => {
  setShowResult(false);
  setLoading(false);
  setResultData("");
    setRecentPrompt("");
  setInput("");
};
const loadPrompt = async (prompt) => {
  setRecentPrompt(prompt);
  setShowResult(true);
  setLoading(true);
  setInput("");

  try {
    const response = await runChat(prompt);
    setResultData(response);
  } catch (error) {
    console.error(error);
    setResultData(
      "⚠️ Gemini API quota exceeded. Please wait or use another API key."
    );
  } finally {
    setLoading(false);
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
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;