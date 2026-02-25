type HeaderProps = {
  onOpenAuth?: () => void;
};

export default function Header({ onOpenAuth }: HeaderProps) {
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
                          <img
                            src="/gifs/experience-men.gif"
                            alt="Choose your Experience – Men"
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
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
                          <img
                            src="/gifs/experience-women.gif"
                            alt="Choose your Experience – Women"
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
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
                      <img
                        src="/images/svg/search.svg"
                        alt=""
                        className="w-5 h-5"
                      />
                    </span>
                    <span className="b-search_toggle-text text-sm hidden lg:inline">
                      Search
                    </span>
                  </button>
                </div>
                <div className="b-header_actions-item">
                  <button
                    type="button"
                    className="b-header_button flex items-center gap-1.5 p-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
                    onClick={() => onOpenAuth?.()}
                  >
                    <img
                      src="/images/svg/login.svg"
                      alt=""
                      className="w-5 h-5 hidden lg:block"
                      aria-hidden
                    />
                    <span className="b-header_wishlist-copy text-sm hidden lg:inline">
                      Log{" "}
                    </span>
                    <span className="lg:hidden" aria-hidden>
                      Log In
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
                      <img
                        src="/images/svg/like.svg"
                        alt=""
                        className="w-5 h-5"
                      />
                    </span>
                    <span className="b-header_wishlist-copy text-sm hidden lg:inline">
                      Wish
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
                    <img
                      src="/images/svg/cart.svg"
                      alt=""
                      className="w-5 h-5"
                    />
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
