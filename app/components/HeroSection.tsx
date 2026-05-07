import { useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";
import { GiftRevealModal } from "./GiftRevealModal";
 
export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <> 
      <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          <div
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium text-white shadow-lg"
              style={{
                background:
                  'linear-gradient(135deg, #7b2cbf 0%, #c9188d 50%, #ff4fa3 100%)',
                boxShadow: '0 6px 20px rgba(201, 24, 141, 0.28)'
              }}
            >
              ✨ THE GIFT DISCOVERY PLATFORM
            </div>

            <h1
              className="text-5xl md:text-7xl leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Find the{' '}
              
              <span className="text-purple-700 italic">
                Magic
              </span>
              <br />
              in Giving
            </h1>

            <p className="text-lg text-gray-600 max-w-md">
              Curated gifts for every person, every occasion. Let our Secret Box surprise you with something magical.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, #7b2cbf 0%, #c9188d 50%, #ff4fa3 100%)',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(201, 24, 141, 0.35)'
                }}
              >
                <Sparkles className="w-5 h-5" />
                Open Secret Box
              </button>

              <button
                className="px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-white/60"
                style={{
                  border: '4px solid var(--color-royal-purple)',
                  color: 'rgba(244, 5, 105, 0.87)'
                }}
              >
                <Wand2 className="w-5 h-5" />
                Suggest Gifts
              </button>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
<p className="text-xs md:text-sm uppercase tracking-[0.35em] text-pink-25/70 font-light">
  Scroll to discover
</p>

<div className="relative flex justify-center">
  <div className="w-px h-14 bg-gradient-to-b from-pink-200/80 to-transparent animate-pulse" />
  <div className="absolute top-0 w-2 h-2 rounded-full bg-pink-200/90 animate-bounce" />
</div>

</div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-96 h-96 rounded-full opacity-40 blur-3xl animate-pulse-slow"
              style={{
                background: 'radial-gradient(circle, var(--color-deep-pink) 0%, var(--color-royal-purple) 100%)'
              }}
            />

            <div
              className="relative p-8 md:p-12 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 20px 60px rgba(222, 58, 125, 0.2)'
              }}
            >
              <div className="relative">
                <div className="absolute -top-8 -right-8 text-4xl md:text-6xl animate-sparkle">✨</div>
                <div className="absolute -bottom-6 -left-6 text-3xl md:text-4xl animate-float">⭐</div>
                <div className="absolute top-1/2 -left-8 text-3xl animate-float-delayed">💫</div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative w-48 h-48 md:w-64 md:h-64 rounded-3xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-3"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-gold) 0%, #FFA500 100%)',
                    boxShadow: '0 20px 60px rgba(255, 215, 0, 0.5)'
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)', transform: 'translateX(-100%)', animation: 'shimmer 3s infinite' }} />

                  <div className="text-7xl md:text-9xl transform group-hover:scale-110 transition-transform duration-500">
                    🎁
                  </div>

                

                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{
                      background: 'rgba(222, 58, 125, 0.1)',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <span className="text-white font-medium px-6 py-3 rounded-full" style={{ background: 'var(--gradient-primary)' }}>
                      Click to Open!
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-3xl md:text-4xl animate-float" style={{ background: 'rgba(255, 240, 245, 0.8)' }}>
              🎀
            </div>
          </div>
        </div>
      </section>

      <GiftRevealModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}
