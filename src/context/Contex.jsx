// context/ContextProvider.js
import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index,nextWord) => {
    
  }

  // Define newChat if needed
  const newChat = () => {
    // Logic for starting a new chat (if applicable) 
  };

  const onSent = async (prompt) => {
    try {
      setResultData(""); 
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      const response = await run(input);
      setResultData(response);
      setLoading(false);
      setInput("")
      console.log("Response:", response);
    } catch (error) {
      console.error("Error sending prompt:", error);
    } finally {
      setLoading(false);
    }
  };

 
  const contextValue = {
    onSent,
    prevPrompts,
    setPrevPrompts,
    recentPrompt,
    setRecentPrompt,
    input,
    setInput,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
