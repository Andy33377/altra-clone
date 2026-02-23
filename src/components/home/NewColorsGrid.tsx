const ASSETS = "https://assets.altrarunning.com/image/upload/dpr_auto,f_auto,q_auto";

const cards = [
  {
    image: `${ASSETS}/26S_Olympus_6_CU_W_Product-Focused_1x1?_i=AH`,
    eyebrow: "New Colors",
    title: "Olympus 6",
    textColor: "white",
    ctas: [
      { label: "Shop Women", href: "/en-us/trail/womens-olympus-6/AL0A85NK.html" },
      { label: "Shop Men", href: "/en-us/trail/mens-olympus-6/AL0A85NJ.html" },
    ],
    buttonClass: "m-cta m-white",
  },
  {
    image: `${ASSETS}/26S_Paradigm8_CU_W_Product-Focused_1x1?_i=AH`,
    eyebrow: "New Colors",
    title: "Paradigm 8",
    textColor: "black",
    ctas: [
      { label: "Shop Women", href: "/en-us/road/womens-paradigm-8/AL0A85RN.html" },
      { label: "Shop Men", href: "/en-us/road/mens-paradigm-8/AL0A85RM.html" },
    ],
    buttonClass: "",
  },
  {
    image: `${ASSETS}/26S_Olympus_6_CU_W_Product-Focused_1x1_v2?_i=AH`,
    eyebrow: "New Colors",
    title: "Olympus 6 Hike Low",
    textColor: "white",
    ctas: [
      { label: "Shop Women", href: "/en-us/hike/womens-olympus-6-hike-low-gtx/AL0A85NN.html" },
      { label: "Shop Men", href: "/en-us/hike/mens-olympus-6-hike-low-gtx/AL0A85NM.html" },
    ],
    buttonClass: "m-cta m-white",
  },
];

export default function NewColorsGrid() {
  return (
    <div className="l-hp-item py-8 md:py-10">
      <div className="l-grid_layout m-3_up m-full_with_centered max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="l-grid_layout-item">
            <figure className="b-bnnr-inner relative overflow-hidden rounded-lg bg-neutral-800">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover aspect-square"
              />
              <figcaption className="b-bnnr-caption absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start">
                <h4 className={`title-h4 text-sm font-medium mb-1 ${card.textColor === "white" ? "text-white" : "text-black"}`}>
                  {card.eyebrow}
                </h4>
                <h2 className={`title-d2 text-xl md:text-2xl font-semibold mb-4 ${card.textColor === "white" ? "text-white" : "text-black"}`}>
                  {card.title}
                </h2>
                <div className="b-actions flex flex-wrap gap-2">
                  {card.ctas.map((cta, j) => (
                    <a
                      key={j}
                      href={cta.href}
                      className={`b-button m-cta rounded border px-4 py-2 text-sm font-medium ${card.buttonClass ? "border-white bg-white text-neutral-900 hover:bg-neutral-100" : "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800"}`}
                    >
                      {cta.label}
                    </a>
                  ))}
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
