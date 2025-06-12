import { useState } from "react";

export default function AiInterface() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }), // use `input` from state
      });

      const data = await res.json();
      console.log("Frontend received:", data);

      if (data.reply) {
        setResponse(data.reply);
      } else if (data.error) {
        setResponse("Error: " + data.error);
      } else {
        setResponse("No valid response from backend.");
      }
    } catch (err) {
      setResponse("Request failed: " + err.message);
    }
  };

  return (
    <div className="ai-container">
      <h2 className="ai-title">GovEase AI Assistant</h2>
      <textarea
        className="ai-textarea"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something about government approvals..."
      />
      <button className="ai-button" onClick={handleSubmit}>
        Ask AI
      </button>
      <div className="ai-response">
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}
