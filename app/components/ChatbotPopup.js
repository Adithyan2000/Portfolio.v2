"use client";

import { useState } from "react";
import Chatbot from "./Chatbot";

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg text-2xl z-40"
      >
        💬
      </button>

      {/* Modal Backdrop + Chatbot */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-gray-900 rounded-lg shadow-2xl w-96 h-96 flex flex-col relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl z-10"
            >
              ✕
            </button>

            {/* Chatbot Component */}
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
}
