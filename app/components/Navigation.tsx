import { useState } from "react";
import { Heart, ShoppingBag, Menu, X, Gift } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gradient =
    "linear-gradient(135deg, #7b2cbf 0%, #c9188d 50%, #ff4fa3 100%)";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div
          className="px-8 lg:px-10 py-2 rounded-full flex items-center justify-between"
          style={{
            backdropFilter: "blur(24px)",
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "0 10px 40px rgba(123, 44, 191, 0.08)",
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-3xl">🎁</div>

            <h1
              className="text-3xl italic font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pick
              <span className="text-purple-700">Perfect</span>
            </h1>
          </div>

          {/* RIGHT SIDE NAVIGATION */}
          <div className="hidden md:flex items-center ml-auto gap-14 pr-10">
            <a
              href="#discover"
              className="text-gray-700 hover:text-black transition-all duration-300 text-lg font-medium"
            >
              Discover
            </a>

            <a
              href="#categories"
              className="text-gray-700 hover:text-black transition-all duration-300 text-lg font-medium"
            >
              Categories
            </a>

            <a
              href="#trending"
              className="text-gray-700 hover:text-black transition-all duration-300 text-lg font-medium"
            >
              Trending
            </a>

            <a
              href="#saved"
              className="text-gray-700 hover:text-black transition-all duration-300 text-lg font-medium"
            >
              Saved
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <button className="p-2 rounded-full hover:bg-white/60 transition-all duration-300 hover:scale-110">
              <Heart className="w-7 h-7 text-pink-500 stroke-[2]" />
            </button>

            {/* Cart */}
            <button
              className="hidden sm:flex items-center gap-3 px-5 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: gradient,
                boxShadow: "0 8px 25px rgba(201, 24, 141, 0.28)",
              }}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="text-lg">Cart</span>
            </button>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-white/50 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-pink-500" />
              ) : (
                <Menu className="w-6 h-6 text-pink-500" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md rounded-[2rem] p-6 md:hidden"
          style={{
            backdropFilter: "blur(24px)",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 20px 60px rgba(123, 44, 191, 0.15)",
          }}
        >
          <div className="flex flex-col gap-3">
            {["Discover", "Categories", "Trending", "Saved"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="p-4 rounded-2xl text-gray-700 hover:bg-white/70 transition-all duration-300 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="h-px bg-gray-200 my-2" />

            <button
              className="w-full px-5 py-4 rounded-full flex items-center justify-center gap-3 text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: gradient,
                boxShadow: "0 8px 25px rgba(201, 24, 141, 0.28)",
              }}
            >
              <ShoppingBag className="w-5 h-5" />
              View Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}