export default function Header() {
  return (
    <header
      className="l-header border-b border-neutral-200 bg-white"
      aria-label="Site header"
    >
      {/* Top row */}
      <div className="l-header-top border-b border-neutral-100"></div>

      {/* Bottom row: logo + nav */}
      <div className="l-header-bottom">
        <div className="l-header-inner max-w-[1280px] mx-auto px-4 flex items-center justify-between min-h-[72px]">
          <div className="l-header-left">
            <a className="b-logo block" href="/" aria-label="Altra home">
              <img
                src={`/images/${encodeURIComponent("Altra Running logo - Brandlogos.net.svg")}`}
                alt="Altra"
                width="178"
                height="48"
                className="h-10 w-auto"
              />
            </a>
          </div>

          <nav className="b-menu_panel hidden md:block" aria-label="Main menu">
            <ul
              className="b-menu_bar-inner flex items-center gap-6 list-none m-0 p-0"
              role="menubar"
            >
              <li role="none">
                <a
                  href="/en-us/new-arrivals"
                  className="b-menu_bar-link text-neutral-900 font-medium hover:underline py-4 block"
                >
                  New Arrivals
                </a>
              </li>

              {/* Men */}
              <li role="none" className="relative group">
                <a
                  href="/en-us/men"
                  className="b-menu_bar-link flex items-center gap-1 text-neutral-900 font-medium hover:underline py-4"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Men</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-70"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
                <div className="b-menu_bar-flyout absolute left-0 top-full pt-0 hidden group-hover:block z-10 min-w-[720px]">
                  <div className="b-menu_bar-flyout_inner bg-white border border-neutral-200 shadow-lg rounded mt-0 p-6 flex gap-8">
                    <div className="b-menu_bar-flyout_columns_wrap flex flex-1 gap-8">
                      <div className="b-menu_bar-flyout_column flex flex-col gap-3 min-w-[140px]">
                        <a
                          href="/en-us/men"
                          className="b-menu_item-link m-all_link text-neutral-900 font-medium hover:underline"
                        >
                          Shop All
                        </a>
                        <a
                          href="/en-us/men/new-arrivals"
                          className="text-neutral-700 hover:underline"
                        >
                          New Arrivals
                        </a>
                        <a
                          href="/en-us/men/best-sellers"
                          className="text-neutral-700 hover:underline"
                        >
                          Best Sellers
                        </a>
                        <a
                          href="/en-us/men/lone-peak-family"
                          className="text-neutral-700 hover:underline"
                        >
                          Lone Peak Family
                        </a>
                        <a
                          href="/en-us/shoe-finder.html"
                          className="text-neutral-700 hover:underline"
                        >
                          Shoe Finder
                        </a>
                        <a
                          href="/en-us/men/sale"
                          className="text-neutral-700 hover:underline font-medium"
                        >
                          Sale
                        </a>
                        <div className="pt-2 mt-2 border-t border-neutral-100">
                          <span className="text-neutral-900 font-medium block mb-1">
                            Shoes
                          </span>
                          <a
                            href="/en-us/men/shoes"
                            className="text-neutral-700 hover:underline block"
                          >
                            Shop All
                          </a>
                          <a
                            href="/en-us/men/shoes/road"
                            className="text-neutral-700 hover:underline block"
                          >
                            Road
                          </a>
                          <a
                            href="/en-us/men/shoes/trail"
                            className="text-neutral-700 hover:underline block"
                          >
                            Trail
                          </a>
                          <a
                            href="/en-us/men/shoes/hike"
                            className="text-neutral-700 hover:underline block"
                          >
                            Hike
                          </a>
                          <a
                            href="/en-us/men/shoes/walk"
                            className="text-neutral-700 hover:underline block"
                          >
                            Walk
                          </a>
                          <a
                            href="/en-us/men/shoes/gym-training"
                            className="text-neutral-700 hover:underline block"
                          >
                            Gym & Training
                          </a>
                          <a
                            href="/en-us/men/shoes/waterproof"
                            className="text-neutral-700 hover:underline block"
                          >
                            Waterproof
                          </a>
                          <a
                            href="/en-us/men/shoes/wides"
                            className="text-neutral-700 hover:underline block"
                          >
                            Wides
                          </a>
                          <a
                            href="/en-us/men/shoes/podiatrist-recommended"
                            className="text-neutral-700 hover:underline block"
                          >
                            Podiatrist Recommended
                          </a>
                        </div>
                      </div>
                      <div className="b-menu_bar-flyout_column flex flex-col gap-3 min-w-[140px]">
                        <span className="text-neutral-900 font-medium">
                          Activity
                        </span>
                        <a
                          href="/en-us/men/activity"
                          className="text-neutral-700 hover:underline"
                        >
                          Shop All
                        </a>
                        <a
                          href="/en-us/men/activity/everyday-running"
                          className="text-neutral-700 hover:underline"
                        >
                          Everyday Running
                        </a>
                        <a
                          href="/en-us/men/activity/road-racing"
                          className="text-neutral-700 hover:underline"
                        >
                          Road Racing
                        </a>
                        <a
                          href="/en-us/men/activity/trail-racing"
                          className="text-neutral-700 hover:underline"
                        >
                          Trail Racing
                        </a>
                        <a
                          href="/en-us/men/activity/day-hiking"
                          className="text-neutral-700 hover:underline"
                        >
                          Day Hiking
                        </a>
                        <a
                          href="/en-us/men/activity/backpacking"
                          className="text-neutral-700 hover:underline"
                        >
                          Backpacking
                        </a>
                        <a
                          href="/en-us/men/activity/cross-training"
                          className="text-neutral-700 hover:underline"
                        >
                          Cross Training
                        </a>
                        <div className="pt-2 mt-2 border-t border-neutral-100">
                          <span className="text-neutral-900 font-medium block mb-1">
                            Socks & Accessories
                          </span>
                          <a
                            href="/en-us/men/socks-accessories"
                            className="text-neutral-700 hover:underline"
                          >
                            Shop All
                          </a>
                          <a
                            href="/en-us/men/socks-accessories/smartwool-socks"
                            className="text-neutral-700 hover:underline block"
                          >
                            Smartwool Socks
                          </a>
                          <a
                            href="/en-us/men/socks-accessories/gear-accessories"
                            className="text-neutral-700 hover:underline block"
                          >
                            Gear & Accessories
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="b-menu_bar-flyout_promo shrink-0 w-[308px]">
                      <figure className="b-promo_tile m-0">
                        <a
                          href="/en-us/choose-your-experience.html"
                          className="block rounded overflow-hidden bg-neutral-100 aspect-3/4"
                        >
                          <span className="flex items-center justify-center w-full h-full text-neutral-400 text-sm">
                            Experience 3
                          </span>
                        </a>
                        <figcaption className="b-promo_tile-caption mt-2">
                          <p className="b-promo_tile-title text-sm text-neutral-600 lg:hidden">
                            The Experience 3 Collection
                          </p>
                          <a
                            href="/en-us/choose-your-experience.html"
                            className="b-promo_tile-button text-neutral-900 font-medium hover:underline text-sm"
                          >
                            Shop the Collection
                          </a>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </li>

              {/* Women */}
              <li role="none" className="relative group">
                <a
                  href="/en-us/women"
                  className="b-menu_bar-link flex items-center gap-1 text-neutral-900 font-medium hover:underline py-4"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Women</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-70"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
                <div className="b-menu_bar-flyout absolute left-0 top-full pt-0 hidden group-hover:block z-10 min-w-[720px]">
                  <div className="b-menu_bar-flyout_inner bg-white border border-neutral-200 shadow-lg rounded mt-0 p-6 flex gap-8">
                    <div className="b-menu_bar-flyout_columns_wrap flex flex-1 gap-8">
                      <div className="b-menu_bar-flyout_column flex flex-col gap-3 min-w-[140px]">
                        <a
                          href="/en-us/women"
                          className="b-menu_item-link m-all_link text-neutral-900 font-medium hover:underline"
                        >
                          Shop All
                        </a>
                        <a
                          href="/en-us/women/new-arrivals"
                          className="text-neutral-700 hover:underline"
                        >
                          New Arrivals
                        </a>
                        <a
                          href="/en-us/women/best-sellers"
                          className="text-neutral-700 hover:underline"
                        >
                          Best Sellers
                        </a>
                        <a
                          href="/en-us/women/lone-peak-family"
                          className="text-neutral-700 hover:underline"
                        >
                          Lone Peak Family
                        </a>
                        <a
                          href="/en-us/shoe-finder.html"
                          className="text-neutral-700 hover:underline"
                        >
                          Shoe Finder
                        </a>
                        <a
                          href="/en-us/women/sale"
                          className="text-neutral-700 hover:underline font-medium"
                        >
                          Sale
                        </a>
                        <div className="pt-2 mt-2 border-t border-neutral-100">
                          <span className="text-neutral-900 font-medium block mb-1">
                            Shoes
                          </span>
                          <a
                            href="/en-us/women/shoes"
                            className="text-neutral-700 hover:underline"
                          >
                            Shop All
                          </a>
                          <a
                            href="/en-us/women/shoes/road"
                            className="text-neutral-700 hover:underline block"
                          >
                            Road
                          </a>
                          <a
                            href="/en-us/women/shoes/trail"
                            className="text-neutral-700 hover:underline block"
                          >
                            Trail
                          </a>
                          <a
                            href="/en-us/women/shoes/hike"
                            className="text-neutral-700 hover:underline block"
                          >
                            Hike
                          </a>
                          <a
                            href="/en-us/women/shoes/walk"
                            className="text-neutral-700 hover:underline block"
                          >
                            Walk
                          </a>
                          <a
                            href="/en-us/women/shoes/gym-training"
                            className="text-neutral-700 hover:underline block"
                          >
                            Gym & Training
                          </a>
                          <a
                            href="/en-us/women/shoes/waterproof"
                            className="text-neutral-700 hover:underline block"
                          >
                            Waterproof
                          </a>
                          <a
                            href="/en-us/women/shoes/wides"
                            className="text-neutral-700 hover:underline block"
                          >
                            Wides
                          </a>
                          <a
                            href="/en-us/women/shoes/podiatrist-recommended"
                            className="text-neutral-700 hover:underline block"
                          >
                            Podiatrist Recommended
                          </a>
                        </div>
                      </div>
                      <div className="b-menu_bar-flyout_column flex flex-col gap-3 min-w-[140px]">
                        <span className="text-neutral-900 font-medium">
                          Activity
                        </span>
                        <a
                          href="/en-us/women/activity"
                          className="text-neutral-700 hover:underline"
                        >
                          Shop All
                        </a>
                        <a
                          href="/en-us/women/activity/everyday-running"
                          className="text-neutral-700 hover:underline"
                        >
                          Everyday Running
                        </a>
                        <a
                          href="/en-us/women/activity/road-racing"
                          className="text-neutral-700 hover:underline"
                        >
                          Road Racing
                        </a>
                        <a
                          href="/en-us/women/activity/trail-racing"
                          className="text-neutral-700 hover:underline"
                        >
                          Trail Racing
                        </a>
                        <a
                          href="/en-us/women/activity/day-hiking"
                          className="text-neutral-700 hover:underline"
                        >
                          Day Hiking
                        </a>
                        <a
                          href="/en-us/women/activity/backpacking"
                          className="text-neutral-700 hover:underline"
                        >
                          Backpacking
                        </a>
                        <a
                          href="/en-us/women/activity/cross-training"
                          className="text-neutral-700 hover:underline"
                        >
                          Cross Training
                        </a>
                        <div className="pt-2 mt-2 border-t border-neutral-100">
                          <span className="text-neutral-900 font-medium block mb-1">
                            Socks & Accessories
                          </span>
                          <a
                            href="/en-us/women/socks-accessories"
                            className="text-neutral-700 hover:underline"
                          >
                            Shop All
                          </a>
                          <a
                            href="/en-us/women/socks-accessories/smartwool-socks"
                            className="text-neutral-700 hover:underline block"
                          >
                            Smartwool Socks
                          </a>
                          <a
                            href="/en-us/women/socks-accessories/gear-accessories"
                            className="text-neutral-700 hover:underline block"
                          >
                            Gear & Accessories
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="b-menu_bar-flyout_promo shrink-0 w-[308px]">
                      <figure className="b-promo_tile m-0">
                        <a
                          href="/en-us/choose-your-experience.html"
                          className="block rounded overflow-hidden bg-neutral-100 aspect-3/4"
                        >
                          <span className="flex items-center justify-center w-full h-full text-neutral-400 text-sm">
                            Experience 3
                          </span>
                        </a>
                        <figcaption className="b-promo_tile-caption mt-2">
                          <p className="b-promo_tile-title text-sm text-neutral-600 lg:hidden">
                            The Experience 3 Collection
                          </p>
                          <a
                            href="/en-us/choose-your-experience.html"
                            className="b-promo_tile-button text-neutral-900 font-medium hover:underline text-sm"
                          >
                            Shop the Collection
                          </a>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </li>

              <li role="none">
                <a
                  href="/en-us/shoe-finder.html"
                  className="b-menu_bar-link text-neutral-900 font-medium hover:underline py-4 block"
                >
                  Shoe finder
                </a>
              </li>

              {/* Who We Are */}
              <li role="none" className="relative group">
                <a
                  href="/en-us/who-we-are"
                  className="b-menu_bar-link flex items-center gap-1 text-neutral-900 font-medium hover:underline py-4"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>Who We Are</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-70"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
                <div className="b-menu_bar-flyout absolute left-0 top-full pt-0 hidden group-hover:block z-10 min-w-[220px]">
                  <div className="b-menu_bar-flyout_inner bg-white border border-neutral-200 shadow-lg rounded mt-0 p-4 flex flex-col gap-2">
                    <a
                      href="/en-us/who-we-are"
                      className="b-menu_item-link m-all_link text-neutral-900 font-medium hover:underline"
                    >
                      Shop All
                    </a>
                    <a
                      href="/en-us/who-we-are/our-story"
                      className="text-neutral-700 hover:underline"
                    >
                      Our Story
                    </a>
                    <a
                      href="/en-us/who-we-are/the-altra-fit"
                      className="text-neutral-700 hover:underline"
                    >
                      The Altra Fit
                    </a>
                    <a
                      href="/en-us/who-we-are/our-values"
                      className="text-neutral-700 hover:underline"
                    >
                      Our Values
                    </a>
                    <a
                      href="/en-us/who-we-are/inclusion-diversity"
                      className="text-neutral-700 hover:underline"
                    >
                      Inclusion & Diversity
                    </a>
                    <a
                      href="/en-us/who-we-are/footshape-fits"
                      className="text-neutral-700 hover:underline"
                    >
                      FootShape Fits
                    </a>
                    <a
                      href="/en-us/who-we-are/altra-elite-athletes"
                      className="text-neutral-700 hover:underline"
                    >
                      Altra Elite Athletes
                    </a>
                    <a
                      href="/en-us/who-we-are/run-better-blog"
                      className="text-neutral-700 hover:underline"
                    >
                      Run Better Blog
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="l-header-right flex items-center gap-1">
            <div className="l-header-right_bottom_actions">
              <div className="b-header_actions flex items-center gap-0">
                <div
                  className="b-header_actions-item m-search hidden md:block"
                  role="search"
                >
                  <button
                    type="button"
                    className="b-search_toggle b-header_button flex items-center gap-1.5 p-2 text-neutral-700 hover:text-neutral-900"
                    aria-label="Search"
                    title="Search"
                  >
                    <span className="b-search_toggle-icon" aria-hidden>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M18.9645 17.5503L26.0355 24.6213L24.6213 26.0355L17.5503 18.9645L18.9645 17.5503Z" />
                        <path
                          fillRule="evenodd"
                          d="M13.9645 19.9645C17.2782 19.9645 19.9645 17.2782 19.9645 13.9645C19.9645 10.6508 17.2782 7.96448 13.9645 7.96448C10.6508 7.96448 7.96448 10.6508 7.96448 13.9645C7.96448 17.2782 10.6508 19.9645 13.9645 19.9645ZM13.9645 21.9645C18.3828 21.9645 21.9645 18.3828 21.9645 13.9645C21.9645 9.5462 18.3828 5.96448 13.9645 5.96448C9.5462 5.96448 5.96448 9.5462 5.96448 13.9645C5.96448 18.3828 9.5462 21.9645 13.9645 21.9645Z"
                        />
                      </svg>
                    </span>
                    <span className="b-search_toggle-text text-sm hidden lg:inline">
                      Search
                    </span>
                  </button>
                </div>
                <div className="b-header_actions-item m-wishlist">
                  <a
                    href="/en-us/wishlist/"
                    className="b-header_wishlist flex items-center gap-1.5 p-2 text-neutral-700 hover:text-neutral-900"
                    title="Wish List"
                    aria-label="Wish List"
                  >
                    <span className="b-header_wishlist-icon" aria-hidden>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M15.988 24.344 8.471 16.4c-1.961-2.07-1.961-5.43 0-7.502 1.687-1.783 4.277-2.032 6.217-.745.314.207.611.456.884.745l.44.465.445-.47c.272-.287.567-.534.879-.741 1.933-1.283 4.516-1.036 6.198.742 1.955 2.065 1.955 5.413 0 7.477z" />
                      </svg>
                    </span>
                    <span className="b-header_wishlist-copy text-sm hidden lg:inline">
                      Wish List
                    </span>
                  </a>
                </div>
                <div className="b-header_actions-item m-minicart">
                  <a
                    href="/en-us/cart/"
                    className="b-minicart_icon-link b-header_button flex items-center gap-1.5 p-2 text-neutral-700 hover:text-neutral-900"
                    title="View your cart"
                    aria-label="View your cart"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6.93428 7.75H5.15369V5.75H8.47948L11.3365 16.7018L10.1082 18.9415H22.175V20.9415H6.82816L9.18367 16.3727L6.93428 7.75Z" />
                      <path d="M23.6102 9.87773H9.05806V7.87773H26.8463L22.0165 17.5373H10.6857V15.5373H20.7804L23.6102 9.87773Z" />
                      <path d="M12.4623 24.1224C12.4623 25.2975 11.5097 26.2501 10.3346 26.2501C9.15955 26.2501 8.20696 25.2975 8.20696 24.1224C8.20696 22.9473 9.15955 21.9948 10.3346 21.9948C11.5097 21.9948 12.4623 22.9473 12.4623 24.1224Z" />
                      <path d="M22.2454 24.1224C22.2454 25.2975 21.2928 26.2501 20.1177 26.2501C18.9427 26.2501 17.9901 25.2975 17.9901 24.1224C17.9901 22.9473 18.9427 21.9948 20.1177 21.9948C21.2928 21.9948 22.2454 22.9473 22.2454 24.1224Z" />
                    </svg>
                  </a>
                </div>
                <div className="b-header_actions-item m-hamburger md:hidden">
                  <button
                    type="button"
                    className="b-header_button m-navigation p-2 text-neutral-700 hover:text-neutral-900"
                    aria-controls="main-navigation"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="Show navigation"
                    title="Show navigation"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M26 10H6V8h20v2ZM26 17H6v-2h20v2ZM26 24H6v-2h20v2Z" />
                    </svg>
                    <span className="sr-only">Show navigation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
