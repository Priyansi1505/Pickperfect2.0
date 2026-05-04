
import { useState } from "react";
import { Heart, ShoppingBag, Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div
          className="px-6 lg:px-8 py-4 rounded-full flex items-center justify-between transition-all duration-300"
          style={{
            backdropFilter: 'blur(24px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 32px rgba(222, 58, 125, 0.15)'
          }}
        >

          <div className="flex items-center gap-2">
            <span className="text-2xl"></span>
            <span className="text-xl lg:text-2xl italic" style={{ fontFamily: 'var(--font-heading)' }}>
              Pick<span style={{ color: 'var(--color-royal-purple)' }}>Perfect</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#discover" className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">Discover</a>
            <a href="#categories" className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">Categories</a>
            <a href="#trending" className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">Trending</a>
            <a href="#saved" className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">Saved</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/50 transition-all duration-300 hover:scale-110">
              <Heart className="w-5 h-5" style={{ color: 'var(--color-deep-pink)' }} />
            </button>

            <button
              className="hidden sm:flex px-5 py-2.5 rounded-full items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: 'var(--gradient-primary)',
                color: 'white',
                boxShadow: '0 4px 15px rgba(222, 58, 125, 0.3)'
              }}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden lg:inline">Cart</span>
            </button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-white/50 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" style={{ color: 'var(--color-deep-pink)' }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: 'var(--color-deep-pink)' }} />
              )}
            </button>
          </div>
        </div>
      </nav>


      {mobileMenuOpen && (
        <div
          className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md rounded-3xl p-6 md:hidden"
          style={{
            backdropFilter: 'blur(24px)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 20px 60px rgba(222, 58, 125, 0.2)'
          }}
        >
          <div className="flex flex-col gap-4">
            <a
              href="#discover"
              className="p-3 rounded-xl text-gray-700 hover:bg-white/60 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Discover
            </a>
            <a
              href="#categories"
              className="p-3 rounded-xl text-gray-700 hover:bg-white/60 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="#trending"
              className="p-3 rounded-xl text-gray-700 hover:bg-white/60 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trending
            </a>
            <a
              href="#saved"
              className="p-3 rounded-xl text-gray-700 hover:bg-white/60 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Saved
            </a>

            <div className="h-px bg-gray-200 my-2" />

            <button
              className="w-full px-5 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--gradient-primary)',
                color: 'white',
                boxShadow: '0 4px 15px rgba(222, 58, 125, 0.3)'
              }}
            >
              <ShoppingBag className="w-4 h-4" />
              View Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
