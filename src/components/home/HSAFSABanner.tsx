const ASSETS = "https://assets.altrarunning.com/image/upload/dpr_auto,f_auto,q_auto";
const bgDesktop = `${ASSETS}/PaperTexture_Background?_i=AH`;
const heroDesktop = `${ASSETS}/Truemed_PLP_Hero_01_Desktop?_i=AH`;
const heroMobile = `${ASSETS}/Truemed_PLP_Hero_01_Mobile?_i=AH`;

export default function HSAFSABanner() {
  return (
    <div
      className="l-hp-item py-8 md:py-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgDesktop})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="l-grid_layout m-1_up m-full_with_centered max-w-[1280px] mx-auto px-4">
        <div className="l-grid_layout-item">
          <figure className="b-bnnr-inner relative overflow-hidden rounded-lg">
            <picture>
              <source media="(max-width: 767px)" srcSet={heroMobile} />
              <img
                src={heroDesktop}
                alt=""
                className="w-full h-auto object-cover"
              />
            </picture>
            <figcaption className="b-bnnr-caption absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="title-d2 text-2xl md:text-4xl font-semibold mb-2">
                Altra Is Now HSA/FSA Eligible
              </h2>
              <p className="title-s3 text-base md:text-lg mb-6 max-w-xl">
                You may qualify to pay for Altra shoes using tax-free funds.
              </p>
              <a
                href="/en-us/truemed.html"
                className="b-button m-white inline-block rounded border border-white bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Learn More
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
