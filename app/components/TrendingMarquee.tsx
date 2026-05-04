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
      <div className="mb-8 text-center">
        <h2 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          What's <span className="italic" style={{ color: 'var(--color-royal-purple)' }}>Trending</span>
        </h2>
        <p className="text-gray-600">Discover the most loved gifts right now</p>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {[...trendingProducts, ...trendingProducts].map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="min-w-[300px] rounded-3xl overflow-hidden group cursor-pointer flex-shrink-0 transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 8px 24px rgba(222, 58, 125, 0.1)'
              }}
            >
              <div className="relative overflow-hidden h-[300px]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(222, 58, 125, 0.3)'
                  }}
                >
                  {product.badge}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

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
