const ASSETS = "https://assets.altrarunning.com/image/upload/dpr_auto,f_auto,q_auto";

const items = [
  {
    image: `${ASSETS}/26S_ExperienceCollection_Homepage_ShoeFinder?_i=AH`,
    title: "Find the Right Pair",
    text: "Use our Shoe Finder and take the guess work out of finding your next pair.",
    ctaLabel: "Get Started",
    ctaHref: "/en-us/shoe-finder.html",
  },
  {
    image: `${ASSETS}/AltraDifference_English?_i=AH`,
    title: "Discover the Altra Fit",
    text: "A roomy toe box for comfort, balance, and strength.",
    ctaLabel: "Learn More",
    ctaHref: "/en-us/who-we-are/the-altra-difference",
  },
];

const bgImage = "https://assets.altrarunning.com/image/upload/dpr_auto,f_auto,q_auto/dark_texture_background?_i=AH";

export default function ShoeFinderAndAltraFit() {
  return (
    <div
      className="l-hp-item py-10 md:py-14"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="l-grid_layout m-2_up m-full_with_centered max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} className="l-grid_layout-item flex flex-col">
            <div className="l-grid_layout-item_in m-banner_ext w-full">
              <figure className="b-bnnr-inner overflow-hidden rounded-lg bg-neutral-800">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </figure>
            </div>
            <div className="l-grid_layout-item_in m-text_block mt-4">
              <div className="b-text_block">
                <h2 className="title-d2 text-2xl md:text-3xl font-semibold text-white mb-3">
                  {item.title}
                </h2>
                <p className="text-white text-lg mb-6">{item.text}</p>
                <a
                  href={item.ctaHref}
                  className="b-button m-white inline-block rounded border border-white bg-white px-5 py-2.5 font-medium text-neutral-900 hover:bg-neutral-100"
                >
                  {item.ctaLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
