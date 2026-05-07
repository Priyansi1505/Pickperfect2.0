import { Wand2 } from "lucide-react";
import { useState } from "react";

export function MagicWandButton() {
  const [isOpen, setIsOpen] = useState(false);

  const gradient =
    "linear-gradient(135deg, #7b2cbf 0%, #c9188d 50%, #ff4fa3 100%)";

  return (
    <>
      {/* Floating Magic Wand Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        style={{
          background: gradient,
          boxShadow: "0 12px 35px rgba(201, 24, 141, 0.45)",
        }}
      >
        <Wand2 className="w-7 h-7 text-white" />
      </button>

      {/* AI Assistant Popup */}
      {isOpen && (
        <div
          className="fixed bottom-28 right-8 w-80 rounded-[2rem] p-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
          style={{
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 20px 60px rgba(123, 44, 191, 0.12)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: gradient,
              }}
            >
              <Wand2 className="w-6 h-6 text-white" />
            </div>

            <div>
              <h3
                className="text-xl font-bold text-black"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                AI Gift Assistant
              </h3>

              <p className="text-sm text-gray-500">Ask me anything!</p>
            </div>
          </div>

          {/* Chat Bubble */}
          <div className="mb-5">
            <div
              className="p-5 rounded-3xl text-[15px] leading-relaxed text-black"
              style={{
                background: "rgba(123, 44, 191, 0.08)",
              }}
            >
              Hi! I'm your magical gift finder. What kind of gift are you
              looking for today?
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder:text-gray-400"
            />

            <button
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: gradient,
                color: "white",
                boxShadow: "0 6px 20px rgba(201, 24, 141, 0.35)",
              }}
            >
              ✨
            </button>
          </div>
        </div>
      )}
    </>
  );
}