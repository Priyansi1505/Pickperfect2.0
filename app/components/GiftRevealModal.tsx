import { X, Heart, Share2, ShoppingCart } from "lucide-react";

interface GiftRevealModalProps {
  isOpen: boolean;
  onClose: () => void;
} 

export function GiftRevealModal({ isOpen, onClose }: GiftRevealModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(12px)'
      }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-3xl p-8 md:p-12 animate-scaleIn"
        style={{
          background: 'rgba(255, 255, 255, 0.98)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 40px 100px rgba(222, 58, 125, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(222, 58, 125, 0.1)' }}>
            <span className="text-2xl">✨</span>
            <span className="text-sm font-medium" style={{ color: 'var(--color-deep-pink)' }}>
              YOUR SECRET GIFT
            </span>
          </div>
          <h2 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Stargazing Kit
          </h2>
          <p className="text-gray-600">Perfect for dreamers and night sky enthusiasts</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative rounded-2xl overflow-hidden aspect-square" style={{ background: 'linear-gradient(135deg, #FFF0F5 0%, #F3E8FF 100%)' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl animate-float">🔭</div>
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
              Limited Edition
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-deep-pink)' }}>
                  $89
                </span>
                <span className="text-xl text-gray-400 line-through">$129</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">What's Included:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span>✨</span>
                    <span>Professional telescope with tripod</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🌙</span>
                    <span>Moon & star map guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📚</span>
                    <span>Constellation journal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎒</span>
                    <span>Premium carrying case</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                className="py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(222, 58, 125, 0.3)'
                }}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    border: '2px solid var(--color-deep-pink)',
                    color: 'var(--color-deep-pink)'
                  }}
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    border: '2px solid var(--color-royal-purple)',
                    color: 'var(--color-royal-purple)'
                  }}
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>✨ This magical gift was specially curated just for you</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-in-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
