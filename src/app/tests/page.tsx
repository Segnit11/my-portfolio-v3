"use client";
import { useState } from "react";
import Link from "next/link";

export default function Pause() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello there. I sense that you might be feeling overwhelmed or perhaps seeking some gentle guidance today. Take a moment to pause and breathe—there’s no rush here, we can go at your pace.",
    },
  ]);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;
  
    const userMessage = { role: "user", content: message };
    const updatedMessages = [...messages, userMessage, { role: "assistant", content: "" }];
    setMessages(updatedMessages);
    setMessage("");
  
    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, userMessage]),
      });
  
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
  
      if (!reader) {
        throw new Error("No response body.");
      }
  
      let assistantReply = "";
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
  
        const chunk = decoder.decode(value, { stream: true });
        assistantReply += chunk;
  
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last.role !== "assistant") return prev;
  
          const updated = [...prev.slice(0, -1), { ...last, content: last.content + chunk }];
          return updated;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Optional fallback error message
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          content: "⚠️ Sorry, I had trouble responding. Please try again.",
        },
      ]);
    }
  };
  

  return (
    <div className="flex flex-col bg-white items-center justify-end min-h-screen p-6 fade-in">
      <header className="w-full fixed top-0 pt-2 pb-2 left-0 bg-white">
          <Link href="/">
            <h1 className="text-2xl  text-center text-black font-bold cursor-pointer">wherewepause</h1>
          </Link>
      </header>

      <div className="max-w-md text-black w-full mt-16">
        <div className="p-4 rounded-lg mb-3 mt-3 mb-4">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={`${
                msg.role === "user" ? "mt-2 text-right text-gray-600" : "mb-2 mt-2 text-black"
              }`}
            >
              {msg.role === "assistant" ? "🦔💬 " : "You: "}
              {msg.content}
            </p>
          ))}
        </div>

        <input
          type="text"
          placeholder="what’s on your mind right now?"
          className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-gray-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage(); 
          }}
        />
      </div>
    </div>
  );
}