"use client";

import { useState } from "react";
import Chatbot from "./Chatbot";

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 text-white shadow-[0_20px_60px_-24px_rgba(56,189,248,0.8)] transition hover:-translate-y-0.5 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        <span className="text-2xl">💬</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-slate-950/80 p-4 backdrop-blur-sm sm:items-center">
          <div className="relative w-full max-w-md rounded-[2rem] border border-slate-800/90 bg-slate-950/95 shadow-2xl shadow-slate-950/60 h-[85vh] max-h-[85vh] overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot panel"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900 text-slate-100 transition hover:bg-slate-800"
            >
              ✕
            </button>
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
}
