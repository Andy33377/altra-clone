export default function TrialRunAndHelpSection() {
  return (
    <div className="l-hp-item">
      <div
        className="l-grid_layout m-8_4 m-full_with_centered m-separator m-has_bg m-padding_top-md m-padding_bottom-md"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="l-grid_layout-content m-hide_gutters mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-12 md:gap-8">
          {/* 30-Day Trial Run — 8 cols */}
          <div className="l-grid_layout-item m-lg_8 m-md_8 m-sm_4 m-vertical_top md:col-span-8">
            <div className="b-text_block m-horizontal_left m-vertical_top">
              <div className="b-text_block-container">
                <h2 className="border-b-2 border-neutral-900 pb-1 text-2xl font-semibold text-neutral-900 md:text-3xl">
                  30-Day Trial Run
                </h2>
                <p className="title-s1 mt-3 text-base leading-relaxed text-neutral-700">
                  We want you to love your new shoes, so we give you 30 days to test them out. If they're not right for you, return them for a full refund.
                </p>
                <div className="b-actions m-one-cta mt-4">
                  <a
                    className="b-button inline-block rounded bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                    href="/en-us/help-center/customer-service/30-day-guarantee/altra-guarantee.html"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Need Help — 4 cols */}
          <div className="l-grid_layout-item m-lg_4 m-md_4 m-sm_4 m-vertical_top md:col-span-4">
            <div className="b-text_block m-horizontal_left m-vertical_top">
              <div className="b-text_block-container">
                <h2 className="title-d2 text-xl font-semibold text-neutral-900 md:text-2xl">
                  Need Help?
                </h2>
                <div className="mt-4 space-y-2 text-neutral-700">
                  <h3 className="text-sm font-semibold text-neutral-900">Customer Service Hours</h3>
                  <p className="text-sm">Monday - Friday, 8am - 6pm CST</p>
                  <p className="mt-4">
                    <a
                      href="mailto:altra_customerservice@vfc.com"
                      className="text-neutral-900 underline hover:no-underline"
                    >
                      Email Us
                    </a>
                  </p>
                  <p>
                    <a
                      href="#"
                      className="livechat inline-flex items-center gap-2 text-neutral-900 underline hover:no-underline"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                      </svg>
                      Live Chat
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
