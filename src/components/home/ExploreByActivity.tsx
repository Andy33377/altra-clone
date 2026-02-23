const activities = [
  { href: "/en-us/all-shoes/trail-shoes", label: "Trail Shoes", img: "/images/ActivityCarousel_Trail_Running.avif" },
  { href: "/en-us/all-shoes/road-shoes", label: "Road Shoes", img: "/images/ActivityCarousel_Trail_Running.avif" },
  { href: "/en-us/all-shoes/hike-shoes", label: "Hiking Shoes", img: "/images/ActivityCarousel_Trail_Running.avif" },
  { href: "/en-us/all-shoes/gym-shoes", label: "Gym Shoes", img: "/images/ActivityCarousel_Trail_Running.avif" },
  { href: "/en-us/all-shoes/walk-shoes", label: "Walking Shoes", img: "/images/ActivityCarousel_Trail_Running.avif" },
];

export default function ExploreByActivity() {
  return (
    <div className="l-hp-item bg-neutral-900 bg-cover bg-center py-10 md:py-14">
      <div className="l-grid_layout m-1_up m-full_with_centered max-w-[1280px] mx-auto px-4">
        <div className="l-grid_layout-content m-has_title">
          <div className="l-grid_layout-item m-title mb-6">
            <div className="b-header_ext m-horizontal_left m-vertical_top">
              <h2 className="title-d2 text-2xl md:text-3xl font-semibold text-white">Explore by Activity</h2>
            </div>
          </div>
          <div className="b-carousel-cta m-bottom mb-4">
            <a
              href="/en-us/all-shoes"
              className="b-button m-cta m-white inline-flex items-center gap-2 rounded border border-white bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-neutral-900"
            >
              Shop All
              <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="m14.41 7.53-.57.57 1.55 1.55 1.55 1.55H4v1.6h12.94l-1.55 1.55-1.55 1.551.57.569.571.57 2.519-2.52L20.02 12 17.5 9.48l-2.52-2.52-.57.57" />
              </svg>
            </a>
          </div>
          <div className="b-carousel-body">
            <div className="b-carousel-track flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible md:justify-center">
              {activities.map((item) => (
                <div key={item.href} className="b-carousel-item shrink-0 w-[280px] md:w-[200px]">
                  <div className="b-category_tile group block overflow-hidden rounded-lg bg-neutral-800">
                    <a className="b-category_tile-link block aspect-3/4 overflow-hidden" href={item.href}>
                      <img
                        src={item.img}
                        alt=""
                        className="h-full w-full object-cover transition group-hover:scale-105"
                      />
                    </a>
                    <a
                      href={item.href}
                      className="b-category_tile-cta m-cta m-arrow-forward block bg-neutral-900 px-4 py-3 text-sm font-bold text-white hover:bg-neutral-800"
                    >
                      {item.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
