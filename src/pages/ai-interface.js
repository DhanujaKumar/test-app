import { useState } from "react";

export default function AiInterface() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) {
      setResponse("Please enter a question.");
      return;
    }

    setLoading(true);
    setResponse(""); // clear previous response

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
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
    } finally {
      setLoading(false);
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

      <button className="ai-button" onClick={handleSubmit} disabled={loading}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {response && (
        <div className="ai-response">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
