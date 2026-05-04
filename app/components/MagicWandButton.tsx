import { Wand2 } from "lucide-react";
import { useState } from "react";

export function MagicWandButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50"
        style={{
          background: 'var(--gradient-primary)',
          boxShadow: '0 10px 40px rgba(222, 58, 125, 0.4)'
        }}
      >
        <Wand2 className="w-7 h-7 text-white" />
      </button>

      {isOpen && (
        <div
          className="fixed bottom-28 right-8 w-80 rounded-3xl p-6 shadow-2xl z-50"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--gradient-primary)'
              }}
            >
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>AI Gift Assistant</h3>
              <p className="text-xs text-gray-500">Ask me anything!</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div
              className="p-3 rounded-2xl text-sm"
              style={{ background: 'rgba(113, 58, 148, 0.1)' }}
            >
              Hi! I'm your magical gift finder. What kind of gift are you looking for today?
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-200 text-sm"
            />
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'var(--gradient-primary)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(222, 58, 125, 0.3)'
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
