import ProductTile from "../product/ProductTile";

const ASSETS =
  "https://assets.altrarunning.com/image/upload/f_auto,q_auto,dpr_auto";

export const products: Array<{
  id: string;
  name: string;
  href: string;
  price: string;
  images: { src: string; alt: string }[];
  swatches: {
    colorId: string;
    title: string;
    imageUrl: string;
    href: string;
  }[];
  swatchesExtraCount?: number;
  labels: string[];
  badge?: { text: string; bg?: string; color?: string };
  badgeIcons?: { src: string; alt: string }[];
}> = [
  {
    id: "AL0A85U7",
    name: "Women's Experience Flow 3",
    href: "/en-us/road/womens-experience-flow-3/AL0A85U7.html",
    price: "$145.00",
    images: [
      {
        src: `${ASSETS}/AL0A85U7922-HERO`,
        alt: "Women's Experience Flow 3 - Tan",
      },
      {
        src: `${ASSETS}/AL0A85U7922-ALT1`,
        alt: "Women's Experience Flow 3 - Tan",
      },
      {
        src: `${ASSETS}/AL0A85U7922-ALT2`,
        alt: "Women's Experience Flow 3 - Tan",
      },
    ],
    swatches: [
      {
        colorId: "922",
        title: "Women's Experience Flow 3 - Tan",
        imageUrl: `${ASSETS}/q_auto/AL0A85U7922-HERO`,
        href: "?dwvar_AL0A85U7_color=922",
      },
      {
        colorId: "161",
        title: "White/Coral",
        imageUrl: `${ASSETS}/q_auto/AL0A85U7161-HERO`,
        href: "?dwvar_AL0A85U7_color=161",
      },
      {
        colorId: "224",
        title: "Light Gray",
        imageUrl: `${ASSETS}/q_auto/AL0A85U7224-HERO`,
        href: "?dwvar_AL0A85U7_color=224",
      },
      {
        colorId: "315",
        title: "Dusty Olive",
        imageUrl: `${ASSETS}/q_auto/AL0A85U7315-HERO`,
        href: "?dwvar_AL0A85U7_color=315",
      },
      {
        colorId: "010",
        title: "Black/White",
        imageUrl: `${ASSETS}/q_auto/AL0A85U7010-HERO`,
        href: "?dwvar_AL0A85U7_color=010",
      },
      {
        colorId: "001",
        title: "Black/Black",
        imageUrl: `${ASSETS}/q_auto/AL0A85U7001-HERO`,
        href: "?dwvar_AL0A85U7_color=001",
      },
    ],
    swatchesExtraCount: 6,
    labels: ["Road Running", "Walking"],
    badge: { text: "New", bg: "#1a1a1a", color: "#ffffff" },
  },
  {
    id: "AL0A85SU",
    name: "Women's Experience Wild 3",
    href: "/en-us/trail/womens-experience-wild-3/AL0A85SU.html",
    price: "$150.00",
    images: [
      {
        src: `${ASSETS}/AL0A85SU442-HERO`,
        alt: "Women's Experience Wild 3 - Dark Blue",
      },
      {
        src: `${ASSETS}/AL0A85SU442-ALT1`,
        alt: "Women's Experience Wild 3 - Dark Blue",
      },
      {
        src: `${ASSETS}/AL0A85SU442-ALT2`,
        alt: "Women's Experience Wild 3 - Dark Blue",
      },
    ],
    swatches: [
      {
        colorId: "442",
        title: "Dark Blue",
        imageUrl: `${ASSETS}/q_auto/AL0A85SU442-HERO`,
        href: "?dwvar_AL0A85SU_color=442",
      },
      {
        colorId: "110",
        title: "White",
        imageUrl: `${ASSETS}/q_auto/AL0A85SU110-HERO`,
        href: "?dwvar_AL0A85SU_color=110",
      },
      {
        colorId: "000",
        title: "Black",
        imageUrl: `${ASSETS}/q_auto/AL0A85SU000-HERO`,
        href: "?dwvar_AL0A85SU_color=000",
      },
      {
        colorId: "161",
        title: "White/Coral",
        imageUrl: `${ASSETS}/q_auto/AL0A85SU161-HERO`,
        href: "?dwvar_AL0A85SU_color=161",
      },
      {
        colorId: "922",
        title: "Tan",
        imageUrl: `${ASSETS}/q_auto/AL0A85SU922-HERO`,
        href: "?dwvar_AL0A85SU_color=922",
      },
    ],
    swatchesExtraCount: 4,
    labels: ["Trail Running", "Hiking"],
    badge: { text: "New", bg: "#1a1a1a", color: "#ffffff" },
  },
  {
    id: "AL0A85NF",
    name: "Women's Escalante 4",
    href: "/en-us/road/womens-escalante-4/AL0A85NF.html",
    price: "$130.00",
    images: [
      {
        src: `${ASSETS}/AL0A85NF93I-HERO`,
        alt: "Women's Escalante 4 - Black/Iridescent",
      },
      {
        src: `${ASSETS}/AL0A85NF93I-ALT1`,
        alt: "Women's Escalante 4 - Black/Iridescent",
      },
      {
        src: `${ASSETS}/AL0A85NF93I-ALT2`,
        alt: "Women's Escalante 4 - Black/Iridescent",
      },
    ],
    swatches: [
      {
        colorId: "93I",
        title: "Women's Escalante 4 - Black/Iridescent",
        imageUrl: `${ASSETS}/q_auto/AL0A85NF93I-HERO`,
        href: "?dwvar_AL0A85NF_color=93I",
      },
      {
        colorId: "84P",
        title: "White/Rose Violet",
        imageUrl: `${ASSETS}/q_auto/AL0A85NF84P-HERO`,
        href: "?dwvar_AL0A85NF_color=84P",
      },
      {
        colorId: "442",
        title: "Dark Blue",
        imageUrl: `${ASSETS}/q_auto/AL0A85NF442-HERO`,
        href: "?dwvar_AL0A85NF_color=442",
      },
      {
        colorId: "922",
        title: "Tan",
        imageUrl: `${ASSETS}/q_auto/AL0A85NF922-HERO`,
        href: "?dwvar_AL0A85NF_color=922",
      },
      {
        colorId: "224",
        title: "Light Gray",
        imageUrl: `${ASSETS}/q_auto/AL0A85NF224-HERO`,
        href: "?dwvar_AL0A85NF_color=224",
      },
      {
        colorId: "233",
        title: "Gray/Teal",
        imageUrl: `${ASSETS}/q_auto/AL0A85NF233-HERO`,
        href: "?dwvar_AL0A85NF_color=233",
      },
    ],
    swatchesExtraCount: 6,
    labels: ["Road Running", "Speedwork", "Walking"],
  },
  {
    id: "AL0A85QE",
    name: "Men's Torin 8",
    href: "/en-us/road/mens-torin/",
    price: "$160.00",
    images: [
      {
        src: `${ASSETS}/AL0A85QE241-HERO`,
        alt: "Men's Torin 8 - Dark Gray/Blue",
      },
      {
        src: `${ASSETS}/AL0A85QE241-ALT1`,
        alt: "Men's Torin 8 - Dark Gray/Blue",
      },
      {
        src: `${ASSETS}/AL0A85QE241-ALT2`,
        alt: "Men's Torin 8 - Dark Gray/Blue",
      },
    ],
    swatches: [
      {
        colorId: "241",
        title: "Dark Gray/Blue",
        imageUrl: `${ASSETS}/q_auto/AL0A85QE241-HERO`,
        href: "?dwvar_AL0A85QE_color=241",
      },
      {
        colorId: "102",
        title: "White/Lime",
        imageUrl: `${ASSETS}/q_auto/AL0A85QE102-HERO`,
        href: "?dwvar_AL0A85QE_color=102",
      },
      {
        colorId: "220",
        title: "Gray",
        imageUrl: `${ASSETS}/q_auto/AL0A85QE220-HERO`,
        href: "?dwvar_AL0A85QE_color=220",
      },
      {
        colorId: "315",
        title: "Dusty Olive",
        imageUrl: `${ASSETS}/q_auto/AL0A85QE315-HERO`,
        href: "?dwvar_AL0A85QE_color=315",
      },
      {
        colorId: "031",
        title: "Black/Lime",
        imageUrl: `${ASSETS}/q_auto/AL0A85QE031-HERO`,
        href: "?dwvar_AL0A85QE_color=031",
      },
      {
        colorId: "222",
        title: "Dark Shadow",
        imageUrl: `${ASSETS}/q_auto/AL0A85QE222-HERO`,
        href: "?dwvar_AL0A85QE_color=222",
      },
    ],
    swatchesExtraCount: 6,
    labels: ["Daily Runs", "Walking"],
  },
];

export default function ProductGridBanner() {
  return (
    <div className="l-hp-item bg-white py-10 md:py-14">
      <div className="l-grid_layout m-1_up m-full_with_centered max-w-[1280px] mx-auto px-4">
        <div className="l-grid_layout-content m-has_title">
          <div className="l-grid_layout-item m-title mb-6">
            <div className="b-header_ext m-horizontal_left m-vertical_top">
              <h2 className="title-d2 text-2xl md:text-3xl font-semibold text-neutral-900">
                Featured Products
              </h2>
            </div>
          </div>

          <div className="b-carousel-body">
            <div
              className="b-carousel-track grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              data-layout-type="fullBleed"
            >
              {products.map((p) => (
                <div
                  key={p.id}
                  className="b-carousel-item"
                  data-cell-type="lg-6 md-6 sm-4"
                >
                  <ProductTile
                    id={p.id}
                    name={p.name}
                    href={p.href}
                    price={p.price}
                    images={p.images}
                    swatches={p.swatches}
                    swatchesExtraCount={p.swatchesExtraCount}
                    labels={p.labels}
                    badge={p.badge}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

