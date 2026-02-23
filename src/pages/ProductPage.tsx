import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";

export default function ProductPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1280px] px-[40px] pt-[40px]">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-[60px]">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Tabs */}
        <div className="mt-[60px]">
          <ProductTabs />
        </div>

        {/* Related */}
        <div className="mt-[80px]">{/* <RelatedProducts /> */}</div>
      </div>
    </main>
  );
}
