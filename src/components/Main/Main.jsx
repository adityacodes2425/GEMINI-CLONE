import { useContext } from "react";
import { Context } from "../../context/context.jsx";

import "./Main.css";
import {
  MdAutoAwesome,
  MdCode,
  MdLightbulb,
  MdTravelExplore,
  MdSend,
} from "react-icons/md";

function Main() {
    const { input, setInput, onSent, loading, resultData, showResult } =
  useContext(Context);
  return (
    <div className="main">
      <div className="main-nav">
        <h2>Gemini AI</h2>

        <div className="profile">
          A
        </div>
      </div>

      <div className="main-content">
    
  {!showResult ? (
    <>
      <div className="greeting">
        <h1>Hello, Aditya 👋</h1>
        <p>How can I help you today?</p>
      </div>

      <div className="cards">
        <div className="card">
          <MdTravelExplore size={28} />
          <p>Plan a weekend trip</p>
        </div>

        <div className="card">
          <MdCode size={28} />
          <p>Explain my React code</p>
        </div>

        <div className="card">
          <MdLightbulb size={28} />
          <p>Generate project ideas</p>
        </div>

        <div className="card">
          <MdAutoAwesome size={28} />
          <p>Write professional emails</p>
        </div>
      </div>
    </>
  ) : (
    <div className="result">
      {loading ? <p>Loading...</p> : <p>{resultData}</p>}
    </div>
  )}

  <div className="search-box">
    <input
      type="text"
      placeholder="Ask anything..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSent();
      }}
    />

    <button onClick={onSent}>
      <MdSend size={22} />
    </button>
  
        </div>
      </div>
    </div>
  );
}

export default Main;