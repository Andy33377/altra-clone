import { useState } from "react";

const LOCAL_PRODUCT_IMAGE = "/images/26S_ExperienceFlow3_PDP_HowsItFeel_W_4x3.jpg";

const productImages = [
  {
    src: LOCAL_PRODUCT_IMAGE,
    alt: "Experience Flow 3 – main view",
  },
  {
    src: LOCAL_PRODUCT_IMAGE,
    alt: "Experience Flow 3 – side view",
  },
  {
    src: LOCAL_PRODUCT_IMAGE,
    alt: "Experience Flow 3 – detail view",
  },
];

export default function ProductGallery() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev <= 0 ? productImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev >= productImages.length - 1 ? 0 : prev + 1));
  };

  const currentImage = productImages[current];

  return (
    <section
      className="b-product_gallery m-image_gallery"
      aria-label="Product images"
    >
      <div className="b-product_gallery-inner">
        {/* Main image */}
        <div className="relative overflow-hidden rounded-lg bg-neutral-50">
          <picture className="block">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="b-product_image-img w-full h-auto object-contain"
              width={800}
              height={800}
              loading="eager"
            />
          </picture>

          {/* New badge (only on first image, как на оригинале) */}
          {current === 0 && (
            <div className="b-badges absolute left-4 top-4">
              <span
                className="b-badges-item m-text rounded px-2 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
              >
                New
              </span>
            </div>
          )}

          {/* Controls */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="b-product_slider-ctrl m-prev absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
          >
            <svg
              width="20"
              height="20"
              aria-hidden="true"
              fill="none"
              focusable="false"
            >
              <path
                d="M14.7533 6L15.58 6.87266L10.1678 12L15.58 17.1273L14.7533 18L8.41992 12L14.7533 6Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="b-product_slider-ctrl m-next absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
          >
            <svg
              width="20"
              height="20"
              aria-hidden="true"
              fill="none"
              focusable="false"
            >
              <path
                d="M9.24665 18L8.41992 17.1273L13.8321 12L8.41992 6.87266L9.24666 6L15.58 12L9.24665 18Z"
                fill="currentColor"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="b-product_slider-count absolute bottom-3 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            <span>{current + 1}</span> / {productImages.length}
          </div>
        </div>

        {/* Dots */}
        <div className="b-product_gallery-dots mt-4 flex justify-center gap-2">
          {productImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              className={`b-product_gallery-dot h-2 w-2 rounded-full ${
                index === current
                  ? "bg-neutral-900"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

