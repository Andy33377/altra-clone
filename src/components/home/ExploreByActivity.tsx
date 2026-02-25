const activities = [
  { href: "/en-us/all-shoes/trail-shoes", label: "Trail Shoes", img: "/images/ActivityCarousel_Trail_Running.avif" },
  { href: "/en-us/all-shoes/road-shoes", label: "Road Shoes", img: "/images/ActivityCarousel_Road_Running.avif" },
  { href: "/en-us/all-shoes/hike-shoes", label: "Hiking Shoes", img: "/images/ActivityCarousel_Hiking.avif" },
  { href: "/en-us/all-shoes/gym-shoes", label: "Gym Shoes", img: "/images/ActivityCarousel_Cross_Training.avif" },
  { href: "/en-us/all-shoes/walk-shoes", label: "Walking Shoes", img: "/images/ActivityCarousel_Road_Running.avif" },
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
          <div className="b-carousel-body mb-4">
            <div className="b-carousel-track flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
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
                      className="b-category_tile-cta block bg-neutral-900 px-4 py-3 text-center text-sm font-bold text-white hover:bg-neutral-800"
                    >
                      {item.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Полоса прогресса: красная слева, белая справа */}
          <div className="flex h-1 w-full bg-white/30 mb-4">
            <div className="h-full w-3/4 bg-red-600" aria-hidden />
            <div className="h-full flex-1 bg-white" aria-hidden />
          </div>
          <div className="b-carousel-cta m-bottom">
            <a
              href="/en-us/all-shoes"
              className="b-button m-cta m-white inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
            >
              SHOP ALL
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
