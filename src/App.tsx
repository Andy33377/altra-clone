import { Routes, Route, useParams } from "react-router-dom";
import HeaderPromo from "./components/layout/HeaderPromo";
import Header from "./components/layout/Header";
import HeroBanner from "./components/home/HeroBanner";
import ExploreByActivity from "./components/home/ExploreByActivity";
import ProductGridBanner from "./components/home/ProductGridBanner";
import ShoeFinderAndAltraFit from "./components/home/ShoeFinderAndAltraFit";
import HSAFSABanner from "./components/home/HSAFSABanner";
import EscalanteVideoSection from "./components/home/EscalanteVideoSection";
import NewColorsGrid from "./components/home/NewColorsGrid";
import NewArrivalsSection from "./components/home/NewArrivalsSection";
import TrialRunAndHelpSection from "./components/home/TrialRunAndHelpSection";
import Footer from "./components/layout/Footer";
import PdpContent from "./components/product/PdpContent";
import ProductGallery from "./components/product/ProductGallery";
import ProductInfo from "./components/product/ProductInfo";
import ProductTabs from "./components/product/ProductTabs";
import { useState } from "react";
import { AuthModal } from "./components/AuthModal";

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <HeaderPromo />
      <Header onOpenAuth={() => setIsAuthOpen(true)} />
      <div className="l-header_promo" aria-hidden />
      <div className="l-page-content" id="maincontent">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </main>
        <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      </div>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <h1 className="sr-only">Altra Homepage</h1>
      <div className="l-hp m-page_designer" id="altra-homepage">
        <HeroBanner />
        <ExploreByActivity />
        <ProductGridBanner />
        <ShoeFinderAndAltraFit />
        <HSAFSABanner />
        <EscalanteVideoSection />
        <NewColorsGrid />
        <NewArrivalsSection />
        <TrialRunAndHelpSection />
      </div>
    </>
  );
}

function ProductPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <div id="altra-pdp" className="bg-white pb-10">
        <div className="max-w-[1280px] mx-auto px-4 pt-6">
          {/* Верхний блок: галерея + основная информация */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <ProductGallery />
            <div>
              {id && (
                <p className="mb-2 text-xs text-neutral-500">
                  Product ID: <span className="font-mono">{id}</span>
                </p>
              )}
              <ProductInfo />
            </div>
          </div>

          {/* Табы с описанием / тех. инфой */}
          <div className="mt-8">
            <ProductTabs />
          </div>
        </div>

        {/* Дополнительный PDP‑контент: secret sauce, how’s it feel, advantages, reviews */}
        <div className="mt-10">
          <PdpContent />
        </div>
      </div>
    </>
  );
}
