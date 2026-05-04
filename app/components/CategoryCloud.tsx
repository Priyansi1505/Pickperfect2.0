import { useState } from "react";

const categories = [
  {
    label: "For Her",
    color: "#DE3A7D",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path d="M12 2C8 6 4 10 12 22C20 10 16 6 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    subcategories: ["Jewelry", "Perfume", "Spa Sets"]
  },
  { 
    label: "Tech",
    color: "#713A94",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    subcategories: ["Gadgets", "Smart Home", "Audio"]
  },
  {
    label: "Sweets",
    color: "#FFB347",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M6 12h12" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    subcategories: ["Chocolates", "Cookies", "Candy"]
  },
  {
    label: "Weddings",
    color: "#DE3A7D",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="9" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="15" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    subcategories: ["Decor", "Keepsakes", "Registry"]
  },
  {
    label: "New Baby",
    color: "#87CEEB",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M6 20c0-4 12-4 12 0" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    subcategories: ["Toys", "Clothes", "Nursery"]
  },
  {
    label: "Birthdays",
    color: "#9370DB",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <rect x="5" y="8" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 8v10M8 8V5h8v3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    subcategories: ["Cards", "Balloons", "Cakes"]
  },
  {
    label: "Luxury",
    color: "#FFD700",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <polygon points="12,3 19,9 15,21 9,21 5,9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    subcategories: ["Premium", "Designer", "Exclusive"]
  }
];

export function CategoryCloud() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section className="py-24 px-6" id="categories">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wider mb-2 text-purple-600">
          Browse by Occasion
        </p>
        <h2 className="text-4xl font-semibold">
          Gift <span className="italic text-purple-600">Categories</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover the perfect category for every special moment.
        </p>
      </div>

      {/* Straight layout */}
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {categories.map((category, index) => {
          const isActive = activeCategory === index;

          return (
            <div key={index} className="relative">
              <button
                onClick={() => setActiveCategory(isActive ? null : index)}
                className="w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(16px)",
                  border: `2px solid ${category.color}`,
                  boxShadow: isActive
                    ? `0 15px 40px ${category.color}60`
                    : `0 8px 20px ${category.color}30`,
                  transform: isActive ? "scale(1.1)" : "scale(1)"
                }}
              >
                <div style={{ color: category.color }}>
                  {category.icon}
                </div>

                <span className="text-sm font-medium text-gray-700 mt-2">
                  {category.label}
                </span>
              </button>

              {/* Dropdown */}
              {isActive && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 p-4 rounded-2xl min-w-[180px] z-50 animate-bloom"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${category.color}`,
                    boxShadow: `0 10px 30px ${category.color}40`
                  }}
                >
                  <div className="flex flex-col gap-2">
                    {category.subcategories.map((sub, i) => (
                      <a
                        key={i}
                        href="#"
                        className="px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 transition"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                    style={{
                      background: "white",
                      borderLeft: `1px solid ${category.color}`,
                      borderTop: `1px solid ${category.color}`
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes bloom {
          from {
            opacity: 0;
            transform: translate(-50%, -10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }
        .animate-bloom {
          animation: bloom 0.25s ease-out;
        }
      `}</style>
    </section>
  );
}