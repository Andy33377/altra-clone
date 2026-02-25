const SECRET_SAUCE_IMG_TOE = "/images/pdp-cushion-mid.jpg";

const SECRET_SAUCE_IMG_FOOT = "/images/pdp-cushion-mid.jpg";

const BREAKDOWN_CUSHION_IMG = "/images/pdp-cushion-mid.jpg";

const BREAKDOWN_MAIN_IMG = "/images/26S_ExperienceFlow3_PDP_HowsItFeel_W_4x3.jpg";

const ADV_MIDSOLE_IMG = "/images/pdp-cushion-mid.jpg";

const ADV_ROCKER_IMG = "/images/pdp-cushion-mid.jpg";

const ADV_TOEBOX_IMG = "/images/pdp-cushion-mid.jpg";

const ADV_MAIN_IMG = "/images/26S_ExperienceFlow3_PDP_HowsItFeel_W_4x3.jpg";

function SecretSauceSection() {
  return (
    <section className="py-10 border-t border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-4 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
            In Every Shoe
          </h3>
          <p className="text-sm md:text-base text-neutral-700">
            With a <b>Roomy Toe Box</b> and <b>Zero-to-Low Drop</b>, our shoes
            are built to keep you comfortable and keep you running.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900">
            Learn more about our fit and cushioning in the sections below.
          </span>
        </div>

        <div className="space-y-4">
          <article className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <img
              src={SECRET_SAUCE_IMG_TOE}
              alt="Roomy Toe Box"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">
                Roomy Toe Box
              </h4>
              <p className="mt-1 text-sm text-neutral-700">
                All of our shoes are made with room for your toes, so they’re
                free to move naturally, with confidence in every foot strike.
              </p>
            </div>
          </article>

          <article className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <img
              src={SECRET_SAUCE_IMG_FOOT}
              alt="Zero-to-Low Drop"
              className="h-16 w-16 object-contain"
            />
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">
                Zero-to-Low Drop
              </h4>
              <p className="mt-1 text-sm text-neutral-700">
                Our Zero-to-Low Drop shoes are built to place your foot in a
                natural position, with a stable and confident foundation to run
                on.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function BreakdownSection() {
  return (
    <section className="py-10 border-t border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-4 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
              How’s it feel?
            </h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h5 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Ride Experience
              </h5>
              <h4 className="text-sm font-semibold text-neutral-900">Forward</h4>
              <p className="text-sm text-neutral-700">
                With a lightweight and efficient underfoot feel, experience
                effortless strides that are smooth and freeing.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Cushion
              </h5>
              <h4 className="text-sm font-semibold text-neutral-900">Mid</h4>
              <img
                src={BREAKDOWN_CUSHION_IMG}
                alt="Mid cushion"
                className="mt-2 w-full max-w-[548px] rounded-md bg-neutral-50 object-contain"
              />
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                Key Specs
              </h5>
              <ul className="space-y-2 text-sm text-neutral-800">
                <li className="flex justify-between gap-4 border-b border-dashed border-neutral-200 pb-1">
                  <span className="text-neutral-600">Weight</span>
                  <span>7.5 oz / 212 g</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-dashed border-neutral-200 pb-1">
                  <span className="text-neutral-600">Support</span>
                  <span>Neutral</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-dashed border-neutral-200 pb-1">
                  <span className="text-neutral-600">Stack Height</span>
                  <span>32mm / 28mm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-neutral-600">Heel‑to‑Toe Drop</span>
                  <span>4mm</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={BREAKDOWN_MAIN_IMG}
            alt="Women's Experience Flow 3"
            className="max-w-full rounded-lg bg-neutral-50 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section className="py-10 border-t border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-4 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        <div className="space-y-4">
          <p className="text-sm font-medium text-neutral-700">
            Women&apos;s Experience Flow 3
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
            What’s it got?
          </h3>

          <div className="space-y-4">
            <article className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <img
                src={ADV_MIDSOLE_IMG}
                alt="Altra EGO™ P35 midsole"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h5 className="text-sm font-semibold text-neutral-900">
                  Light + efficient midsole
                </h5>
                <p className="mt-1 text-sm text-neutral-700">
                  Altra EGO™ P35 is a lightweight midsole foam, designed to help
                  deliver an effortless, efficient, and comfortable underfoot
                  feel.
                </p>
              </div>
            </article>

            <article className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <img
                src={ADV_ROCKER_IMG}
                alt="Rocker shape"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h5 className="text-sm font-semibold text-neutral-900">
                  Efficient toe‑off and natural propulsion
                </h5>
                <p className="mt-1 text-sm text-neutral-700">
                  A rocker shape is designed to give the feeling of being
                  propelled forward with each step and provides an efficient
                  toe‑off without taking away from your natural stride.
                </p>
              </div>
            </article>

            <article className="flex gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <img
                src={ADV_TOEBOX_IMG}
                alt="Natural fit toe box"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h5 className="text-sm font-semibold text-neutral-900">
                  Roomy toe box for natural movement
                </h5>
              </div>
            </article>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={ADV_MAIN_IMG}
            alt="Women's Experience Flow 3 on foot"
            className="max-w-full rounded-lg bg-neutral-50 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default function PdpContent() {
  return (
    <div className="bg-white">
      <SecretSauceSection />
      <BreakdownSection />
      <AdvantagesSection />
    </div>
  );
}

