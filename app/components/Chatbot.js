"use client";

import { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! Ask me about Adithyan.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleClick(event) {
    event.preventDefault();
    if (!input.trim()) return;

    const newMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`error ${response.status}`);
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: data.reply, sender: "bot" },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: "Something went wrong.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-full flex-col rounded-[1.75rem] bg-slate-950">
      <div className="rounded-t-[1.75rem] border-b border-slate-800 bg-slate-900/95 px-5 py-4 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-sky-300/80">
              AI assistant
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              Chat with Adithyan's AI
            </h3>
          </div>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800 text-slate-200 shadow-sm">
            🤖
          </span>
        </div>
      </div>

      <div
        className="flex-1 min-h-0 overflow-y-auto p-5 space-y-4"
        aria-live="polite"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-sm transition duration-200 ${
                message.sender === "user"
                  ? "bg-sky-500 text-slate-950 shadow-sky-500/20"
                  : "bg-slate-900 text-slate-200 shadow-slate-950/30"
              }`}
            >
              {message.sender === "bot" && (
                <span className="mb-2 block text-[0.70rem] uppercase tracking-[0.24em] text-slate-400">
                  Assistant
                </span>
              )}
              <p>{message.text}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-3xl bg-slate-900 px-4 py-3 text-sm text-slate-400 shadow-slate-950/20">
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleClick}
        className="border-t border-slate-800 bg-slate-950 px-4 py-4"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="chat-input" className="sr-only">
            Type a message
          </label>
          <input
            id="chat-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about experience, projects, or skills..."
            className="flex-1 rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-12 items-center justify-center rounded-3xl bg-sky-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chatbot;
