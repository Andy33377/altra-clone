export default function ProductTabs() {
  return (
    <section aria-label="Product information" className="mt-4">
      <div className="border-b border-neutral-200">
        <nav className="flex gap-6 text-sm font-medium text-neutral-700">
          <button
            type="button"
            className="pb-3 border-b-2 border-neutral-900 text-neutral-900"
          >
            Details
          </button>
          <button
            type="button"
            className="pb-3 border-b-2 border-transparent hover:border-neutral-300"
          >
            Tech Specs
          </button>
          <button
            type="button"
            className="pb-3 border-b-2 border-transparent hover:border-neutral-300"
          >
            Cushion &amp; Ride
          </button>
        </nav>
      </div>

      <div className="pt-4 text-sm leading-relaxed text-neutral-700">
        <p className="mb-3">
          Experience an easy, efficient ride in the Experience Flow 3. A
          lightweight midsole, rocker geometry, and a breathable upper are
          designed to help you find your flow mile after mile.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Balanced cushioning with a low 4&nbsp;mm drop</li>
          <li>Standard FootShape™ Fit with room for natural toe splay</li>
          <li>
            Lightweight, responsive midsole tuned for daily training and longer
            efforts
          </li>
        </ul>
      </div>
    </section>
  );
}

