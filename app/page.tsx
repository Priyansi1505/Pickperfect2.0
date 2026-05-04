"use client";
import { CloudyBackground } from "./components/CloudyBackground";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { TrendingMarquee } from "./components/TrendingMarquee";
import { CategoryCloud } from "./components/CategoryCloud";
import { ProductGrid } from "./components/ProductGrid";
import { MagicWandButton } from "./components/MagicWandButton";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen relative">
      <CloudyBackground />
      <Navigation />
      <HeroSection />
      <TrendingMarquee />
      <CategoryCloud />
      <ProductGrid />
      <MagicWandButton />
      <Footer />
     </div>
   );
 }