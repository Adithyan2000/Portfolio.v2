"use client";

import { useEffect, useRef, useState } from "react";

export default function Chatbot({ isOpen }) {
  const [messages, setMessages] = useState([
    {
      id: 0,
      text: "Hi, I’m Adithyan’s portfolio assistant. Ask me about his experience, projects, or what he’s learning next.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagePaneRef = useRef(null);
  const inputRef = useRef(null);
  const pendingRef = useRef(false);
  const requestRef = useRef(null);
  const nextMessageId = useRef(1);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus({ preventScroll: true });
  }, [isOpen]);

  useEffect(() => {
    const pane = messagePaneRef.current;
    if (!isOpen || !pane) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    pane.scrollTo({
      top: pane.scrollHeight,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }, [messages, loading, error, isOpen]);

  useEffect(() => () => requestRef.current?.abort(), []);

  async function sendMessage(value, isRetry = false) {
    const message = value.trim();
    if (!message || pendingRef.current) return;
    pendingRef.current = true;
    setLoading(true);
    setError(null);
    if (!isRetry) {
      const id = nextMessageId.current++;
      setMessages((previous) => [
        ...previous,
        { id, text: message, sender: "user" },
      ]);
      setInput("");
    }
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
        signal: controller.signal,
      });
      const data = await response.json();
      if (!response.ok || typeof data.reply !== "string" || !data.reply.trim())
        throw new Error("Assistant unavailable");
      const id = nextMessageId.current++;
      setMessages((previous) => [
        ...previous,
        { id, text: data.reply, sender: "bot" },
      ]);
    } catch {
      setError({
        prompt: message,
        message:
          "The assistant couldn’t reply just now. Try again, or get in touch by email.",
      });
    } finally {
      window.clearTimeout(timeout);
      requestRef.current = null;
      pendingRef.current = false;
      setLoading(false);
    }
  }

  return (
    <div className="chat-content">
      <div
        className="chat-messages"
        ref={messagePaneRef}
        role="log"
        aria-label="Conversation with Adithyan’s portfolio assistant"
        aria-live="polite"
        aria-relevant="additions text"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message chat-message-${message.sender}`}
          >
            <span className="chat-message-author">
              {message.sender === "bot" ? "Assistant" : "You"}
            </span>
            <p>{message.text}</p>
          </div>
        ))}
        {messages.length === 1 && (
          <div className="chat-suggestions" aria-label="Suggested questions">
            {["What is he building now?", "Tell me about his experience"].map(
              (question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  disabled={loading}
                >
                  {question}
                </button>
              ),
            )}
          </div>
        )}
        {loading && (
          <p className="chat-thinking" role="status">
            Thinking…
          </p>
        )}
        {error && (
          <div className="chat-error">
            <p role="alert">{error.message}</p>
            <div className="chat-error-actions">
              <button
                type="button"
                onClick={() => sendMessage(error.prompt, true)}
                disabled={loading}
              >
                Try again
              </button>
              <a href="mailto:ksadithyan.mec@gmail.com">Email Adithyan</a>
            </div>
          </div>
        )}
      </div>
      <form
        className="chat-form"
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage(input);
        }}
      >
        <label className="chat-input-label" htmlFor="portfolio-chat-input">
          Your question
        </label>
        <div className="chat-input-row">
          <input
            ref={inputRef}
            id="portfolio-chat-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about my work…"
            maxLength={1200}
            autoComplete="off"
          />
          <button type="submit" disabled={loading || !input.trim()}>
            {loading ? "Wait…" : "Send"}
          </button>
        </div>
        <p className="chat-disclaimer">
          AI assistant · Answers from my portfolio
        </p>
      </form>
    </div>
  );
}
