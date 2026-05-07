import { ImageWithFallback } from "./figma/ImageWithFallback";


// product data
const trendingProducts = [
  {
    id: 1,
    name: "Velvet Rose Perfume",
    image: "https://images.unsplash.com/photo-1571302171812-11f04b0d6005?w=400",
    badge: "Trending Now"
  },
  {
    id: 2,
    name: "Gold Elegance Fragrance",
    image: "https://images.unsplash.com/photo-1586172912765-a5a31f9f0fd0?w=400",
    badge: "Trending Now"
  },
  {
    id: 3,
    name: "Luxury Jewelry Set",
    image: "https://images.unsplash.com/photo-1776267884755-0ec673b3d7e5?w=400",
    badge: "Trending Now"
  },
  {
    id: 4,
    name: "Silk Dreams Perfume",
    image: "https://images.unsplash.com/photo-1609451043305-745f798b51a3?w=400",
    badge: "Trending Now"
  },
  {
    id: 5,
    name: "Pearl Essence",
    image: "https://images.unsplash.com/photo-1571302171879-0965db383dc4?w=400",
    badge: "Trending Now"
  },
  {
    id: 6,
    name: "Midnight Bloom",
    image: "https://images.unsplash.com/photo-1604166948557-0225a9f99167?w=400",
    badge: "Trending Now"
  }
];

export function TrendingMarquee() {
  return (
    <section className="py-16 overflow-hidden" id="trending">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2
          className="text-4xl md:text-5xl mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What's{" "}
          <span
            className="italic bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #7b2cbf 0%, #c9188d 50%, #ff4fa3 100%)",
            }}
          >
            Trending
          </span>
        </h2>

        <p className="text-gray-600 text-lg">
          Discover the most loved gifts right now
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {[...trendingProducts, ...trendingProducts].map(
            (product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="min-w-[300px] rounded-[2rem] overflow-hidden group cursor-pointer flex-shrink-0 transition-all duration-500 hover:scale-105"
                style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 10px 30px rgba(201, 24, 141, 0.08)",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[320px]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Trending Badge */}
                  <div
                    className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                    style={{
                      background:
                        "linear-gradient(135deg, #7b2cbf 0%, #c9188d 50%, #ff4fa3 100%)",
                      color: "white",
                      boxShadow:
                        "0 6px 18px rgba(201, 24, 141, 0.32)",
                    }}
                  >
                    {product.badge}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-medium text-lg text-gray-800">
                    {product.name}
                  </h3>

                  <button
                    className="mt-4 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, #7b2cbf 0%, #c9188d 50%, #ff4fa3 100%)",
                      boxShadow:
                        "0 6px 18px rgba(201, 24, 141, 0.28)",
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
