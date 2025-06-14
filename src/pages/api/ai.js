// pages/api/ai.js
import { db } from "@/util/firebase"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { input } = req.body;
  const COHERE_API_KEY = process.env.COHERE_API_KEY;

  if (!COHERE_API_KEY) {
    return res.status(500).json({ error: "Cohere API key not found" });
  }

  try {
    const cohereRes = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command",
        prompt: input,
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    const data = await cohereRes.json();

    const reply = data.generations?.[0]?.text?.trim();

    if (!reply) {
      return res.status(500).json({ error: "No valid response from Cohere" });
    }

    await addDoc(collection(db, "ai_logs"), {
      input,
      reply,
      timestamp: Timestamp.now()
    });

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Something went wrong on the server" });
  }
}
