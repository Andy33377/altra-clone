export default function Footer() {
  const shopLinks = [
    { label: "Men", href: "/en-us/men" },
    { label: "Women", href: "/en-us/women" },
    { label: "New Arrivals", href: "/en-us/new-arrivals" },
    { label: "Shoe Finder", href: "/en-us/shoe-finder" },
    { label: "Gift Cards", href: "/en-us/altra-us-storefront-catalog/e-gift-card/AL0GFTCD.html" },
    { label: "True Fit Finder", href: "/en-us/about-us/altra-truefit.html" },
  ];
  const aboutLinks = [
    { label: "30-Day Trial Run", href: "/en-us/help-center/customer-service/30-day-guarantee/altra-guarantee.html" },
    { label: "Careers", href: "#", external: false },
    { label: "International Distributors", href: "/en-us/help-center/customer-service/international-distributors/international-distributors.html" },
    { label: "Accessibility Statement", href: "/en-us/help-center/legal/accessibility-statement/altra-running-accessibility-statement.html" },
  ];
  const customerServiceLinks = [
    { label: "Customer Support", href: "/en-us/help-center/customer-service/" },
    { label: "Order Status", href: "/en-us/order-trackform/" },
    { label: "Shipping", href: "/en-us/help-center/customer-service/shipping/shipping.html" },
    { label: "Returns", href: "/en-us/help-center/customer-service/returns/return-policy.html" },
    { label: "Warranty", href: "/en-us/help-center/customer-service/warranty/warranty.html" },
    { label: "FAQs", href: "/en-us/help-center/customer-service/faq/faq.html" },
    { label: "Size Charts", href: "/en-us/help-center/customer-service/size-charts/size-chart.html" },
  ];
  const accountLinks = [
    { label: "Sign In | Join", href: "/en-us/login/" },
    { label: "Wish List", href: "/en-us/wishlist/" },
  ];
  const socialLinks = [
    { label: "Youtube", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
    { label: "Pinterest", href: "#" },
  ];

  return (
    <footer className="l-page-footer b-footer border-t border-neutral-200 bg-white" id="footercontent">
      <div className="b-footer-content">
        <div className="b-footer-inner b-footer-grid mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="b-footer-left flex flex-col gap-6">
            <div className="b-footer_top-logo">
              <a href="/" aria-label="Altra home">
                <img
                  src={`/images/${encodeURIComponent("Altra Running logo - Brandlogos.net.svg")}`}
                  alt="Altra"
                  width="180"
                  height="49"
                  className="h-10 w-auto"
                />
              </a>
            </div>

            <div className="b-footer-newsletters">
              <form
                className="b-newsletters flex flex-wrap items-end gap-2"
                name="subscribe-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="dwfrm_emailsubscribe_email"
                  placeholder="Email Address"
                  className="b-input b-newsletters-input min-w-[200px] flex-1 rounded border border-neutral-300 px-3 py-2 text-sm"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="b-newsletters-submit b-button rounded bg-neutral-900 p-2 text-white hover:bg-neutral-800"
                  title="Sign up"
                  aria-label="Sign up"
                >
                  <svg aria-hidden width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </button>
              </form>
            </div>

            <section aria-label="Follow Altra" className="b-footer_social flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="b-footer_social-link text-neutral-600 hover:text-neutral-900"
                  aria-label={s.label}
                  title={`Follow us on ${s.label}`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-sm font-medium">
                    {s.label.charAt(0)}
                  </span>
                </a>
              ))}
            </section>
          </div>

          <div className="b-footer-navigation grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <section aria-label="Shop" className="b-footer_nav-column">
              <h2 className="b-footer_nav-title text-sm font-semibold text-neutral-900">Shop</h2>
              <ul className="b-footer_nav-list mt-2 list-none space-y-1.5 p-0">
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="b-footer_nav-link text-sm text-neutral-600 hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-label="About" className="b-footer_nav-column">
              <h2 className="b-footer_nav-title text-sm font-semibold text-neutral-900">About</h2>
              <ul className="b-footer_nav-list mt-2 list-none space-y-1.5 p-0">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="b-footer_nav-link text-sm text-neutral-600 hover:underline"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-label="Customer Service" className="b-footer_nav-column">
              <h2 className="b-footer_nav-title text-sm font-semibold text-neutral-900">Customer Service</h2>
              <ul className="b-footer_nav-list mt-2 list-none space-y-1.5 p-0">
                {customerServiceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="b-footer_nav-link text-sm text-neutral-600 hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-label="Account" className="b-footer_nav-column">
              <h2 className="b-footer_nav-title text-sm font-semibold text-neutral-900">Account</h2>
              <ul className="b-footer_nav-list mt-2 list-none space-y-1.5 p-0">
                {accountLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="b-footer_nav-link text-sm text-neutral-600 hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="b-footer_nav-bottom border-t border-neutral-100 px-4 py-3">
          <div className="mx-auto max-w-6xl">
            <a
              href="/en-us/stores/"
              className="b-footer_nav-link inline-flex items-center gap-2 text-sm text-neutral-600 hover:underline"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM6 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
                <path fillRule="evenodd" d="M10.505 8.437c.349-.616.495-1.083.495-1.381C11 5.356 9.644 4 8 4S5 5.355 5 7.056c0 .298.146.765.495 1.381.335.591.795 1.214 1.275 1.793.439.53.88 1.005 1.23 1.365.35-.36.791-.836 1.23-1.365.48-.58.94-1.202 1.275-1.793ZM8 13s4-3.704 4-5.944C12 4.816 10.21 3 8 3S4 4.816 4 7.056 8 13 8 13Z" />
              </svg>
              Find a store
            </a>
          </div>
        </div>

        <div className="b-footer-copyright border-t border-neutral-100 px-4 py-6">
          <div className="b-footer_info mx-auto max-w-6xl">
            <div className="b-footer_info-copyright text-sm text-neutral-600">
              ©2026 Altra, a division of VF Outdoor, LLC. All rights reserved.
            </div>
            <div className="b-footer_info-links mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a href="/en-us/help-center/legal/terms-of-use/terms-and-conditions.html" className="b-footer_info-link text-neutral-600 hover:underline">
                Terms of Use
              </a>
              <a href="/en-us/help-center/legal/privacy-policy/privacy-policy.html" className="b-footer_info-link text-neutral-600 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="b-footer_info-link text-neutral-600 hover:underline">
                Modern Slavery Statement
              </a>
              <a href="/en-us/help-center/legal/privacy-policy/privacy-policy.html#additionalinformation" className="b-footer_info-link text-neutral-600 hover:underline">
                Notice at Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
