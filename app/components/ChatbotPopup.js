"use client";

import { useRef, useState } from "react";
import Chatbot from "./Chatbot";
import "./chat.css";

function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a8 8 0 0 1-8 8H4l1.7-4A8 8 0 1 1 20 11.5Z" />
      <path d="M8.5 9h7M8.5 12.5h4.5" />
    </svg>
  );
}

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const launcherRef = useRef(null);

  function openChat() {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      setIsOpen(true);
    }
  }

  function closeChat() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className="chat-launcher"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="portfolio-chat-dialog"
        onClick={openChat}
      >
        <ChatIcon />
        <span>Ask my AI</span>
      </button>
      <dialog
        ref={dialogRef}
        id="portfolio-chat-dialog"
        className="chat-dialog"
        aria-labelledby="portfolio-chat-title"
        onClose={() => {
          setIsOpen(false);
          launcherRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            closeChat();
        }}
      >
        <div className="chat-dialog-inner">
          <header className="chat-header">
            <div className="chat-header-icon">
              <ChatIcon />
            </div>
            <div>
              <h2 id="portfolio-chat-title">A little more about me</h2>
              <p>Adithyan’s portfolio assistant</p>
            </div>
            <button
              type="button"
              className="chat-close"
              aria-label="Close portfolio assistant"
              onClick={closeChat}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </header>
          <Chatbot isOpen={isOpen} />
        </div>
      </dialog>
    </>
  );
}
