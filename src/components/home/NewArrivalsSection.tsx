import ProductTile from "../product/ProductTile";
import { products } from "./ProductGridBanner";

const newArrivalsProducts = products.slice(0, 6);

export default function NewArrivalsSection() {
  return (
    <div className="l-hp-item py-8 md:py-10">
      <div className="l-grid_layout m-1_up m-full_with_centered max-w-[1280px] mx-auto px-4">
        <div className="l-grid_layout-content m-has_cta m-has_title">
          <div className="l-grid_layout-item m-title mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="title-d2 text-2xl md:text-3xl font-semibold text-neutral-900">
              New Arrivals
            </h2>
            <a
              href="/en-us/new-arrivals"
              className="b-button rounded border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 w-full sm:w-auto text-center"
            >
              Shop New Arrivals
            </a>
          </div>
          <div className="b-carousel-body -mx-4 px-4 md:mx-0 md:px-0">
            <div
              className="b-carousel-track flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:overflow-visible"
              style={{ scrollbarWidth: "thin" }}
            >
              {newArrivalsProducts.map((p) => (
                <div
                  key={p.id}
                  className="b-carousel-item shrink-0 w-[280px] sm:w-[300px] md:w-full snap-start"
                >
                  <ProductTile
                    id={p.id}
                    name={p.name}
                    href={p.href}
                    price={p.price}
                    images={p.images}
                    swatches={p.swatches}
                    swatchesExtraCount={p.swatchesExtraCount}
                    labels={p.labels}
                    badge={p.badge}
                    badgeIcons={p.badgeIcons}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
