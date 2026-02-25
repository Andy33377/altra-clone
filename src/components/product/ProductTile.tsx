import { useState } from "react";
import { Link } from "react-router-dom";

export type ProductTileProps = {
  id: string;
  name: string;
  href: string;
  price: string;
  images: { src: string; alt: string }[];
  swatches: { colorId: string; title: string; imageUrl: string; href: string }[];
  swatchesExtraCount?: number;
  labels?: string[];
  /** Text badge (e.g. "New") */
  badge?: { text: string; bg?: string; color?: string };
  /** Icon badges (e.g. Vibram logo) — shown in addition to or instead of badge */
  badgeIcons?: { src: string; alt: string }[];
};

function ChevronBack({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" aria-hidden fill="none" focusable="false" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronForward({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" aria-hidden fill="none" focusable="false" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function ProductTile({
  id,
  name,
  href,
  price,
  images,
  swatches,
  swatchesExtraCount = 0,
  labels = [],
  badge,
  badgeIcons,
}: ProductTileProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  const goToPrev = () => setCurrentSlide((p) => (p <= 0 ? totalSlides - 1 : p - 1));
  const goToNext = () => setCurrentSlide((p) => (p >= totalSlides - 1 ? 0 : p + 1));

  const visibleSwatches = swatches.slice(0, 6);
  const leftover = swatches.length > 6 ? swatches.length - 6 : swatchesExtraCount;

  return (
    <section
      className="b-product_ext flex flex-col"
      data-pid={id}
      data-product-name={name}
      data-widget="productTile"
    >
      <div className="b-product_tile">
        <div className="b-product_tile-top relative">
          {/* Carousel */}
          <div className="b-hero_carousel relative overflow-hidden rounded-lg bg-neutral-100">
            <button
              type="button"
              className="b-hero_carousel-ctrl m-prev absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Previous image"
              onClick={goToPrev}
            >
              <ChevronBack />
            </button>
            <button
              type="button"
              className="b-hero_carousel-ctrl m-next absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              aria-label="Next image"
              onClick={goToNext}
            >
              <ChevronForward />
            </button>

            <div className="b-hero_carousel-pagination absolute bottom-2 left-0 right-0 z-10 flex justify-center gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1} of ${totalSlides}`}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 w-1.5 rounded-full transition ${i === currentSlide ? "bg-neutral-900" : "bg-white/70 hover:bg-white"}`}
                />
              ))}
            </div>

            <div className="b-hero_carousel-track overflow-hidden">
              <div
                className="flex h-full transition-transform duration-300 ease-out"
                style={{
                  width: `${images.length * 100}%`,
                  transform: `translateX(-${(currentSlide / images.length) * 100}%)`,
                }}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="b-hero_carousel-item shrink-0"
                    style={{ width: `${100 / images.length}%` }}
                    aria-roledescription="slide"
                    aria-hidden={i !== currentSlide}
                  >
                    <Link className="block aspect-square w-full" to={`/products/${id}`}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-contain"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="b-product_tile-content mt-3">
          {/* Swatches */}
          <div className="b-product_tile_swatches-wrap mb-2">
            <div className="b-product_tile_swatches flex flex-wrap items-center gap-1">
              {visibleSwatches.map((s) => (
                <a
                  key={s.colorId}
                  href={href + (s.href.startsWith("?") ? s.href : "?" + s.href)}
                  title={s.title}
                  className="b-product_tile_swatches-swatch inline-block h-5 w-5 shrink-0 overflow-hidden rounded-full border border-neutral-300 bg-neutral-100 ring-1 ring-transparent hover:ring-neutral-400"
                  style={{ backgroundImage: `url(${s.imageUrl})`, backgroundSize: "cover" }}
                >
                  <span className="sr-only">{s.title}</span>
                </a>
              ))}
              {leftover > 0 && (
                <a
                  href={href}
                  className="b-product_tile_swatches-leftover text-xs text-neutral-500 hover:underline"
                  aria-label={`Show another ${leftover} colors`}
                >
                  +{leftover}
                </a>
              )}
            </div>
          </div>

          <div className="b-product_tile-title mb-1">
            <Link
              to={`/products/${id}`}
              className="b-product_tile-link font-medium text-neutral-900 hover:underline"
            >
              {name}
            </Link>
          </div>

          {labels.length > 0 && (
            <div className="b-product_labels mb-1 flex flex-wrap gap-1">
              {labels.map((l) => (
                <span key={l} className="b-product_labels-item text-xs text-neutral-500">
                  {l}
                </span>
              ))}
            </div>
          )}

          <div className="b-product_tile-price font-semibold text-neutral-900">{price}</div>
        </div>

        {((badge != null) || (badgeIcons != null && badgeIcons.length > 0)) && (
          <div className="b-badges mt-2 flex flex-wrap items-center gap-1">
            {badge != null && (
              <span
                className="b-badges-item m-text inline-block rounded px-2 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: badge.bg ?? "#1a1a1a",
                  color: badge.color ?? "#ffffff",
                }}
              >
                {badge.text}
              </span>
            )}
            {badgeIcons?.map((b, i) => (
              <span key={i} className="b-badges-item m-icon inline-flex">
                <img src={b.src} alt={b.alt} className="h-5 w-5 object-contain" />
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
