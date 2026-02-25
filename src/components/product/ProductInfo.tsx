const PRODUCT_NAME = "Women's Experience Flow 3";
const PRICE = "$145.00";

const LABELS = ["Road Running", "Walking"];

const COLORS = [
  { id: "922", name: "Tan" },
  { id: "220", name: "Gray" },
  { id: "444", name: "Light Blue" },
  { id: "010", name: "Black/White" },
  { id: "161", name: "White/Coral" },
  { id: "111", name: "White/White" },
];

const SIZES = [
  "4",
  "4.5",
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
];

export default function ProductInfo() {
  return (
    <section
      className="l-pdp-details b-product_details m-image_gallery"
      aria-label="Product details"
    >
      <div className="b-product_details-wrap">
        {/* Title + labels */}
        <div className="b-product_details-top mb-3">
          <h1
            className="b-product_details-name text-2xl font-semibold text-neutral-900 md:text-3xl"
            id="productTitle"
          >
            {PRODUCT_NAME}
          </h1>
        </div>

        {LABELS.length > 0 && (
          <div className="b-product_labels mb-4">
            <div
              className="b-product_labels-list flex flex-wrap gap-2 text-sm text-neutral-600"
              id="productLabel"
            >
              {LABELS.map((label) => (
                <span
                  key={label}
                  className="b-product_labels-item rounded bg-neutral-100 px-2 py-0.5"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="b-product_details-form mt-2">
        {/* Price */}
        <div className="b-product_details-price_container mb-3">
          <div className="b-product_details-price flex items-baseline gap-2 text-neutral-900">
            <div className="b-price" data-tau-price="product_price">
              <span className="b-price-item text-xl font-semibold">
                {PRICE}
              </span>
            </div>
          </div>
        </div>

        {/* Rating summary (без реальных отзывов) */}
        <div className="b-product_details-rating mb-4 text-sm text-neutral-700">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5" aria-label="Rated 4.7 out of 5 stars" role="img">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="inline-block h-4 w-4 text-yellow-500"
                >
                  ★
                </span>
              ))}
              <span className="inline-block h-4 w-4 text-yellow-500">☆</span>
            </div>
            <span className="text-xs text-neutral-500">(20 reviews)</span>
          </div>
        </div>

        {/* Gender switch */}
        <div className="b-related_product mb-4 flex gap-3 text-sm">
          <button
            type="button"
            className="b-related_product-link text-neutral-700 underline-offset-2 hover:underline"
          >
            Men's
          </button>
          <button
            type="button"
            className="b-related_product-link current-type font-medium text-neutral-900"
            aria-disabled="true"
          >
            Women's
          </button>
        </div>

        {/* Color swatches (статичные, без логики) */}
        <section
          className="b-variations_item m-swatch m-color mb-4"
          aria-label="Color"
        >
          <p className="b-variations_item-name mb-2 text-sm font-medium text-neutral-900">
            <span className="b-variations_item-name_label">Color</span>
          </p>
          <div className="b-variations_item-content m-list flex flex-wrap gap-2">
            {COLORS.map((color, index) => (
              <button
                key={color.id}
                type="button"
                className={`b-variation_swatch m-tile m-attribute_color flex items-center gap-2 rounded border px-2 py-1 text-xs ${
                  index === 0
                    ? "border-neutral-900"
                    : "border-neutral-300 hover:border-neutral-500"
                }`}
              >
                <span className="b-variation_swatch-value inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-200" />
                <span className="b-variation_swatch-name text-neutral-800">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Size swatches (статичные, без валидации) */}
        <section
          className="b-variations_item m-swatch m-size mb-6"
          aria-label="Size"
        >
          <p className="b-variations_item-name mb-2 text-sm font-medium text-neutral-900">
            <span className="b-variations_item-name_label">Size</span>
          </p>
          <div className="b-variations_item-content m-list flex flex-wrap gap-2">
            {SIZES.map((size, index) => (
              <button
                key={size}
                type="button"
                className={`b-variation_swatch m-tile m-size rounded border px-3 py-1 text-xs ${
                  index === 5
                    ? "border-neutral-900 font-medium"
                    : "border-neutral-300 hover:border-neutral-500"
                }`}
              >
                <span className="b-variation_swatch-value">{size}</span>
              </button>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-4 flex flex-col gap-3">
          <button
            type="button"
            className="b-button inline-flex items-center justify-center rounded bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Add to Cart
          </button>
          <p className="text-xs text-neutral-500">
            Find your flow state in the Experience Flow 3, with a lightweight
            midsole, room for your toes, and a breathable upper made for an
            effortless ride.
          </p>
        </div>
      </div>
    </section>
  );
}

