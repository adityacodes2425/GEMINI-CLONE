import { useState } from "react";
import { runChat } from "./config/gemini";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    const result = await runChat(prompt);

    setResponse(result);
    setLoading(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Gemini Clone</h1>

      <input
        type="text"
        placeholder="Ask anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "350px",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button onClick={handleSend}>
        {loading ? "Loading..." : "Send"}
      </button>

      <h3>Response</h3>
      <p>{response}</p>
    </div>
  );
}

export default App;