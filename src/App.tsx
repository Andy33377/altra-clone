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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <HeaderPromo />
      <Header />
      <div className="l-header_promo" aria-hidden />
      <div className="l-page-content" id="maincontent">
        <main id="altra-homepage">
          <h1 className="sr-only">Altra Homepage</h1>
          <div className="l-hp m-page_designer">
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
        </main>
      </div>
      <Footer />
    </div>
  );
}
