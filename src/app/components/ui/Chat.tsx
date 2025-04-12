"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello there. You can ask me about my work, or just talk to me about your day and get to know me outside of my work :-)",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages: Message[] = [
      ...messages,
      userMessage,
      { role: "assistant", content: "" },
    ];
    setMessages(updatedMessages);

    setInput("");

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

      if (!reader) throw new Error("No response body from server.");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last.role !== "assistant") return prev;

          return [
            ...prev.slice(0, -1),
            { ...last, content: last.content + chunk },
          ];
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          content: "⚠️ Sorry, I had trouble responding. Please try again.",
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const [highlightIcon, setHighlightIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setHighlightIcon(true);
        setTimeout(() => setHighlightIcon(false), 1500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {/* Tooltip */}
      <AnimatePresence>
        {highlightIcon && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-20 right-2 bg-[#2a2a2a] text-gray-300 text-xs px-3 py-1 rounded shadow border border-gray-700"
          >
            Psst… you can talk to me :-)
          </motion.div>
        )}
      </AnimatePresence>
      {/* Trigger */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none rounded-full hover:opacity-90 hover:-translate-y-1 transition"
      >
        {!isOpen && (
          <motion.span className="px-4 py-0.5 rounded-full bg-white border border-black text-sm">
            Segnify (beta)
          </motion.span>
        )}
        {/* Animated Avatar */}
        <motion.div
          animate={
            highlightIcon
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: "0 0 50px rgba(0,0,0,4.9)",
                }
              : {}
          }
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="rounded-full"
        >
          <Image
            src="/avatar.png"
            alt="Chat Avatar"
            width={55}
            height={55}
            className="rounded-full"
          />
        </motion.div>
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-[90vw] sm:w-[50vh] bg-[#1e1e1e] text-gray-200 rounded-xl border border-gray-700 p-4 shadow-lg max-w-sm"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/segni-pic2.jpg"
                alt="Segni Tulu"
                width={45}
                height={45}
                className="rounded-full object-cover border border-gray-500"
              />
              <h2 className="text-sm font-bold">
                Segnify <span className="text-gray-400 font-normal">(beta)</span>:
              </h2>
            </div>

            {/* Messages */}
            <div className="mt-2 mb-3 max-h-80 overflow-y-auto space-y-2 text-sm pr-1 scroll-smooth">
              {messages.map((msg, i) => (
                <p
                  key={i}
                  className={`${
                    msg.role === "assistant"
                      ? "text-gray-300 italic"
                      : "text-right text-white"
                  }`}
                >
                  {msg.content}
                </p>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center space-x-2 border-t border-gray-600 pt-2">
              <input
                type="text"
                placeholder="ask me :-)"
                className="w-full text-sm text-white bg-[#2a2a2a] placeholder-gray-400 border border-gray-600 rounded px-2 py-1 focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <AnimatePresence>
                {input.trim() && (
                  <motion.button
                    onClick={sendMessage}
                    className="text-sm px-2 py-1 text-blue-400 hover:underline"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    send
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="mt-3 text-xs text-gray-400 flex justify-between">
              <span>rather talk to human An?</span>
              <div className="space-x-2">
                <Link
                  href="mailto:stulujr@cord.edu"
                  className="text-blue-400 underline"
                >
                  mail
                </Link>
                <Link
                  href="https://www.linkedin.com/in/segnitulu/"
                  target="_blank"
                  className="text-blue-400 underline"
                >
                  linkedin
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chat;
