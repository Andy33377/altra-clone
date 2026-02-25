export default function HeroBanner() {
  return (
    <div className="l-hp-item">
      <div className="l-grid_layout m-1_up m-full_bleed">
        <div className="l-grid_layout-content">
          <div className="l-grid_layout-item m-lg_12 m-md_12 m-sm_4">
            <div className="l-grid_layout-item_in m-banner_ext">
              <figure className="b-bnnr m-vertical_top">
                <div className="b-bnnr-inner relative w-full overflow-hidden bg-neutral-700" style={{ aspectRatio: "16/9" }}>
                  <div className="b-cld_image absolute inset-0">
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcSet="/images/ActivityCarousel_Trail_Running.avif"
                      />
                      <img
                        src="/images/ActivityCarousel_Trail_Running.avif"
                        alt="Choose Your Experience — road and trail running"
                        className="w-full h-full object-cover"
                      />
                    </picture>
                  </div>
                  <figcaption className="b-bnnr-caption m-vertical_middle m-horizontal_center absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div className="b-banner_content px-4">
                      <div className="b-actions m-row m-center flex flex-col items-center justify-center gap-4">
                        <a
                          href="/en-us/experience-flow-3.html"
                          className="b-button m-large m-white inline-block rounded-none border border-white bg-white px-10 py-4 font-medium text-neutral-900 hover:bg-neutral-100"
                        >
                          Explore the Road
                        </a>
                        <a
                          href="/en-us/experience-wild-3.html"
                          className="b-button m-large m-white inline-block rounded-none border border-white bg-white px-10 py-4 font-medium text-neutral-900 hover:bg-neutral-100"
                        >
                          Explore the Trail
                        </a>
                      </div>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
