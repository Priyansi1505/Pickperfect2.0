
import { useState } from "react";
import Masonry from "react-responsive-masonry";
import { Heart, Share2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Filters
const filters = ["All", "For Her", "For Him", "Luxury"];

// Products
const products = [
  { 
    id: 1,
    name: "Velvet Rose Perfume",
    price: "$95",
    image: "https://images.unsplash.com/photo-1571302171812-11f04b0d6005?w=400",
    occasion: "Romantic",
    category: "For Her"
  },
  {
    id: 2,
    name: "Silk Pyjama Set",
    price: "$110",
    image: "https://images.unsplash.com/photo-1591892212776-a09de24dbe84?w=400",
    occasion: "Birthday",
    category: "For Him"
  },
  {
    id: 3,
    name: "Hand Painted Journal",
    price: "$42",
    image: "https://images.unsplash.com/photo-1677104469830-f9347e911b64?w=400",
    occasion: "Luxury",
    category: "For Her"
  },
  {
    id: 4,
    name: "Artisan Chocolate Box",
    price: "$48",
    image: "https://images.unsplash.com/photo-1591348070182-2d3e408dc246?w=400",
    occasion: "Romantic",
    category: "Sweets"
  },
  {
    id: 5,
    name: "Artisan Coffee Set",
    price: "$65",
    image: "https://images.unsplash.com/photo-1591892153927-33f7a2ffec89?w=400",
    occasion: "Wedding",
    category: "For Him"
  },
  {
    id: 6,
    name: "Organic Skincare",
    price: "$88",
    image: "https://images.unsplash.com/photo-1585995597138-35224b7995ef?w=400",
    occasion: "Birthday",
    category: "For Her"
  },
  {
    id: 7,
    name: "Luxury Jewelry Display",
    price: "$125",
    image: "https://images.unsplash.com/photo-1744367848798-0ae273da9d65?w=400",
    occasion: "Luxury",
    category: "For Her"
  },
  {
    id: 8,
    name: "Chanel Chance",
    price: "$130",
    image: "https://images.unsplash.com/photo-1558038785-4fe65c791c99?w=400",
    occasion: "Romantic",
    category: "For Her"
  },
  {
    id: 9,
    name: "Elegant Perfume Set",
    price: "$105",
    image: "https://images.unsplash.com/photo-1680789526879-944b2b74b84a?w=400",
    occasion: "Birthday",
    category: "For Her"
  }
];

export function ProductGrid() {
  const [savedItems, setSavedItems] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const toggleSaved = (id: number) => {
    setSavedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  // Filter logic
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter(
          p =>
            p.category === activeFilter ||
            p.occasion === activeFilter
        );

  return (
    <section className="py-20 px-6" id="discover">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <div className="flex-1">

            {/* 🔥 Heading + Filters */}
            <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* Heading */}
              <div>
                <h2
                  className="text-4xl mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Curated{" "}
                  <span
                    className="italic"
                    style={{ color: "var(--color-deep-pink)" }}
                  >
                    Picks
                  </span>
                </h2>
                <p className="text-gray-600">
                  Discover thoughtfully selected gifts for every occasion
                </p>
              </div>

              {/* Filters */}
              <div className="flex gap-3 flex-wrap">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className="px-5 py-2 rounded-full transition-all duration-300"
                      style={{
                        background: isActive
                          ? "var(--gradient-primary)"
                          : "transparent",
                        color: isActive
                          ? "white"
                          : "var(--color-royal-purple)",
                        border: isActive
                          ? "none"
                          : "2px solid rgba(113, 58, 148, 0.3)",
                        boxShadow: isActive
                          ? "0 4px 12px rgba(222, 58, 125, 0.3)"
                          : "none"
                      }}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 🧱 Masonry Grid */}
            <Masonry columnsCount={3} gutter="24px">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 8px 24px rgba(222, 58, 125, 0.1)"
                  }}
                >
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Occasion Tag */}
                    <div
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        color: "var(--color-royal-purple)",
                        boxShadow: "0 2px 8px rgba(113, 58, 148, 0.2)"
                      }}
                    >
                      {product.occasion}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-medium mb-1">
                      {product.name}
                    </h3>

                    <p
                      className="font-semibold mb-4"
                      style={{ color: "var(--color-deep-pink)" }}
                    >
                      {product.price}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleSaved(product.id)}
                        className="flex-1 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                        style={{
                          background: savedItems.includes(product.id)
                            ? "var(--gradient-primary)"
                            : "rgba(255, 255, 255, 0.8)",
                          color: savedItems.includes(product.id)
                            ? "white"
                            : "var(--color-deep-pink)",
                          border: savedItems.includes(product.id)
                            ? "none"
                            : "2px solid var(--color-deep-pink)"
                        }}
                      >
                        <Heart
                          className="w-4 h-4"
                          fill={
                            savedItems.includes(product.id)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>

                      <button
                        className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                          background: "rgba(255, 255, 255, 0.8)",
                          border:
                            "2px solid var(--color-royal-purple)",
                          color: "var(--color-royal-purple)"
                        }}
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </section>
  );
}