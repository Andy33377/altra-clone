import ProductTile from "../product/ProductTile";

const ASSETS = "https://assets.altrarunning.com/image/upload/f_auto,q_auto,dpr_auto";

const products: Array<{
  id: string;
  name: string;
  href: string;
  price: string;
  images: { src: string; alt: string }[];
  swatches: { colorId: string; title: string; imageUrl: string; href: string }[];
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
      { src: `${ASSETS}/AL0A85U7922-HERO`, alt: "Women's Experience Flow 3 - Tan" },
      { src: `${ASSETS}/AL0A85U7922-ALT1`, alt: "Women's Experience Flow 3 - Tan" },
      { src: `${ASSETS}/AL0A85U7922-ALT2`, alt: "Women's Experience Flow 3 - Tan" },
    ],
    swatches: [
      { colorId: "922", title: "Women's Experience Flow 3 - Tan", imageUrl: `${ASSETS}/q_auto/AL0A85U7922-HERO`, href: "?dwvar_AL0A85U7_color=922" },
      { colorId: "161", title: "White/Coral", imageUrl: `${ASSETS}/q_auto/AL0A85U7161-HERO`, href: "?dwvar_AL0A85U7_color=161" },
      { colorId: "224", title: "Light Gray", imageUrl: `${ASSETS}/q_auto/AL0A85U7224-HERO`, href: "?dwvar_AL0A85U7_color=224" },
      { colorId: "315", title: "Dusty Olive", imageUrl: `${ASSETS}/q_auto/AL0A85U7315-HERO`, href: "?dwvar_AL0A85U7_color=315" },
      { colorId: "010", title: "Black/White", imageUrl: `${ASSETS}/q_auto/AL0A85U7010-HERO`, href: "?dwvar_AL0A85U7_color=010" },
      { colorId: "001", title: "Black/Black", imageUrl: `${ASSETS}/q_auto/AL0A85U7001-HERO`, href: "?dwvar_AL0A85U7_color=001" },
    ],
    swatchesExtraCount: 6,
    labels: ["Road Running", "Walking"],
    badge: { text: "New", bg: "#1a1a1a", color: "#ffffff" },
  },
  {
    id: "AL0A85SS",
    name: "Men's Experience Flow 3",
    href: "/en-us/road/mens-experience-flow-3/AL0A85SS.html",
    price: "$145.00",
    images: [
      { src: `${ASSETS}/AL0A85SS446-HERO`, alt: "Men's Experience Flow 3 - Navy/Light blue" },
      { src: `${ASSETS}/AL0A85SS446-ALT1`, alt: "Men's Experience Flow 3 - Navy/Light blue" },
      { src: `${ASSETS}/AL0A85SS446-ALT2`, alt: "Men's Experience Flow 3 - Navy/Light blue" },
    ],
    swatches: [
      { colorId: "446", title: "Navy/Light blue", imageUrl: `${ASSETS}/q_auto/AL0A85SS446-HERO`, href: "?dwvar_AL0A85SS_color=446" },
      { colorId: "161", title: "White/Coral", imageUrl: `${ASSETS}/q_auto/AL0A85SS161-HERO`, href: "?dwvar_AL0A85SS_color=161" },
      { colorId: "224", title: "Light Gray", imageUrl: `${ASSETS}/q_auto/AL0A85SS224-HERO`, href: "?dwvar_AL0A85SS_color=224" },
      { colorId: "315", title: "Dusty Olive", imageUrl: `${ASSETS}/q_auto/AL0A85SS315-HERO`, href: "?dwvar_AL0A85SS_color=315" },
      { colorId: "010", title: "Black/White", imageUrl: `${ASSETS}/q_auto/AL0A85SS010-HERO`, href: "?dwvar_AL0A85SS_color=010" },
      { colorId: "001", title: "Black/Black", imageUrl: `${ASSETS}/q_auto/AL0A85SS001-HERO`, href: "?dwvar_AL0A85SS_color=001" },
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
      { src: `${ASSETS}/AL0A85SU442-HERO`, alt: "Women's Experience Wild 3 - Dark Blue" },
      { src: `${ASSETS}/AL0A85SU442-ALT1`, alt: "Women's Experience Wild 3 - Dark Blue" },
      { src: `${ASSETS}/AL0A85SU442-ALT2`, alt: "Women's Experience Wild 3 - Dark Blue" },
    ],
    swatches: [
      { colorId: "442", title: "Dark Blue", imageUrl: `${ASSETS}/q_auto/AL0A85SU442-HERO`, href: "?dwvar_AL0A85SU_color=442" },
      { colorId: "110", title: "White", imageUrl: `${ASSETS}/q_auto/AL0A85SU110-HERO`, href: "?dwvar_AL0A85SU_color=110" },
      { colorId: "000", title: "Black", imageUrl: `${ASSETS}/q_auto/AL0A85SU000-HERO`, href: "?dwvar_AL0A85SU_color=000" },
      { colorId: "161", title: "White/Coral", imageUrl: `${ASSETS}/q_auto/AL0A85SU161-HERO`, href: "?dwvar_AL0A85SU_color=161" },
      { colorId: "922", title: "Tan", imageUrl: `${ASSETS}/q_auto/AL0A85SU922-HERO`, href: "?dwvar_AL0A85SU_color=922" },
    ],
    swatchesExtraCount: 4,
    labels: ["Trail Running", "Hiking"],
    badge: { text: "New", bg: "#1a1a1a", color: "#ffffff" },
  },
  {
    id: "AL0A85U6",
    name: "Men's Experience Wild 3",
    href: "/en-us/trail/mens-experience-wild-3/AL0A85U6.html",
    price: "$150.00",
    images: [
      { src: `${ASSETS}/AL0A85U6990-HERO`, alt: "Men's Experience Wild 3 - Brown" },
      { src: `${ASSETS}/AL0A85U6990-ALT1`, alt: "Men's Experience Wild 3 - Brown" },
      { src: `${ASSETS}/AL0A85U6990-ALT2`, alt: "Men's Experience Wild 3 - Brown" },
    ],
    swatches: [
      { colorId: "990", title: "Brown", imageUrl: `${ASSETS}/q_auto/AL0A85U6990-HERO`, href: "?dwvar_AL0A85U6_color=990" },
      { colorId: "001", title: "Black/Black", imageUrl: `${ASSETS}/q_auto/AL0A85U6001-HERO`, href: "?dwvar_AL0A85U6_color=001" },
      { colorId: "161", title: "White/Coral", imageUrl: `${ASSETS}/q_auto/AL0A85U6161-HERO`, href: "?dwvar_AL0A85U6_color=161" },
      { colorId: "922", title: "Tan", imageUrl: `${ASSETS}/q_auto/AL0A85U6922-HERO`, href: "?dwvar_AL0A85U6_color=922" },
      { colorId: "232", title: "Gray/Lime", imageUrl: `${ASSETS}/q_auto/AL0A85U6232-HERO`, href: "?dwvar_AL0A85U6_color=232" },
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
      { src: `${ASSETS}/AL0A85NF93I-HERO`, alt: "Women's Escalante 4 - Black/Iridescent" },
      { src: `${ASSETS}/AL0A85NF93I-ALT1`, alt: "Women's Escalante 4 - Black/Iridescent" },
      { src: `${ASSETS}/AL0A85NF93I-ALT2`, alt: "Women's Escalante 4 - Black/Iridescent" },
    ],
    swatches: [
      { colorId: "93I", title: "Women's Escalante 4 - Black/Iridescent", imageUrl: `${ASSETS}/q_auto/AL0A85NF93I-HERO`, href: "?dwvar_AL0A85NF_color=93I" },
      { colorId: "84P", title: "White/Rose Violet", imageUrl: `${ASSETS}/q_auto/AL0A85NF84P-HERO`, href: "?dwvar_AL0A85NF_color=84P" },
      { colorId: "442", title: "Dark Blue", imageUrl: `${ASSETS}/q_auto/AL0A85NF442-HERO`, href: "?dwvar_AL0A85NF_color=442" },
      { colorId: "922", title: "Tan", imageUrl: `${ASSETS}/q_auto/AL0A85NF922-HERO`, href: "?dwvar_AL0A85NF_color=922" },
      { colorId: "224", title: "Light Gray", imageUrl: `${ASSETS}/q_auto/AL0A85NF224-HERO`, href: "?dwvar_AL0A85NF_color=224" },
      { colorId: "233", title: "Gray/Teal", imageUrl: `${ASSETS}/q_auto/AL0A85NF233-HERO`, href: "?dwvar_AL0A85NF_color=233" },
      { colorId: "111", title: "White/White", imageUrl: `${ASSETS}/q_auto/AL0A85NF111-HERO`, href: "?dwvar_AL0A85NF_color=111" },
      { colorId: "108", title: "White/Orange", imageUrl: `${ASSETS}/q_auto/AL0A85NF108-HERO`, href: "?dwvar_AL0A85NF_color=108" },
      { colorId: "001", title: "Black/Black", imageUrl: `${ASSETS}/q_auto/AL0A85NF001-HERO`, href: "?dwvar_AL0A85NF_color=001" },
      { colorId: "130", title: "White/Green", imageUrl: `${ASSETS}/q_auto/AL0A85NF130-HERO`, href: "?dwvar_AL0A85NF_color=130" },
      { colorId: "000", title: "Black", imageUrl: `${ASSETS}/q_auto/AL0A85NF000-HERO`, href: "?dwvar_AL0A85NF_color=000" },
      { colorId: "220", title: "Gray", imageUrl: `${ASSETS}/q_auto/AL0A85NF220-HERO`, href: "?dwvar_AL0A85NF_color=220" },
      { colorId: "445", title: "Navy", imageUrl: `${ASSETS}/q_auto/AL0A85NF445-HERO`, href: "?dwvar_AL0A85NF_color=445" },
    ],
    swatchesExtraCount: 12,
    labels: ["Road Running", "Speedwork", "Walking"],
  },
  {
    id: "AL0A85QE",
    name: "Men's Torin 8",
    href: "/en-us/road/mens-torin-8/AL0A85QE.html",
    price: "$160.00",
    images: [
      { src: `${ASSETS}/AL0A85QE241-HERO`, alt: "Men's Torin 8 - Dark Gray/Blue" },
      { src: `${ASSETS}/AL0A85QE241-ALT1`, alt: "Men's Torin 8 - Dark Gray/Blue" },
      { src: `${ASSETS}/AL0A85QE241-ALT2`, alt: "Men's Torin 8 - Dark Gray/Blue" },
    ],
    swatches: [
      { colorId: "241", title: "Dark Gray/Blue", imageUrl: `${ASSETS}/q_auto/AL0A85QE241-HERO`, href: "?dwvar_AL0A85QE_color=241" },
      { colorId: "102", title: "White/Lime", imageUrl: `${ASSETS}/q_auto/AL0A85QE102-HERO`, href: "?dwvar_AL0A85QE_color=102" },
      { colorId: "220", title: "Gray", imageUrl: `${ASSETS}/q_auto/AL0A85QE220-HERO`, href: "?dwvar_AL0A85QE_color=220" },
      { colorId: "315", title: "Dusty Olive", imageUrl: `${ASSETS}/q_auto/AL0A85QE315-HERO`, href: "?dwvar_AL0A85QE_color=315" },
      { colorId: "031", title: "Black/Lime", imageUrl: `${ASSETS}/q_auto/AL0A85QE031-HERO`, href: "?dwvar_AL0A85QE_color=031" },
      { colorId: "222", title: "Dark Shadow", imageUrl: `${ASSETS}/q_auto/AL0A85QE222-HERO`, href: "?dwvar_AL0A85QE_color=222" },
      { colorId: "224", title: "Light Gray", imageUrl: `${ASSETS}/q_auto/AL0A85QE224-HERO`, href: "?dwvar_AL0A85QE_color=224" },
      { colorId: "923", title: "Taupe", imageUrl: `${ASSETS}/q_auto/AL0A85QE923-HERO`, href: "?dwvar_AL0A85QE_color=923" },
      { colorId: "470", title: "Blue/Yellow", imageUrl: `${ASSETS}/q_auto/AL0A85QE470-HERO`, href: "?dwvar_AL0A85QE_color=470" },
      { colorId: "444", title: "Light Blue", imageUrl: `${ASSETS}/q_auto/AL0A85QE444-HERO`, href: "?dwvar_AL0A85QE_color=444" },
      { colorId: "445", title: "Navy", imageUrl: `${ASSETS}/q_auto/AL0A85QE445-HERO`, href: "?dwvar_AL0A85QE_color=445" },
      { colorId: "000", title: "Black", imageUrl: `${ASSETS}/q_auto/AL0A85QE000-HERO`, href: "?dwvar_AL0A85QE_color=000" },
      { colorId: "010", title: "Black/White", imageUrl: `${ASSETS}/q_auto/AL0A85QE010-HERO`, href: "?dwvar_AL0A85QE_color=010" },
      { colorId: "442", title: "Dark Blue", imageUrl: `${ASSETS}/q_auto/AL0A85QE442-HERO`, href: "?dwvar_AL0A85QE_color=442" },
      { colorId: "440", title: "Blue", imageUrl: `${ASSETS}/q_auto/AL0A85QE440-HERO`, href: "?dwvar_AL0A85QE_color=440" },
    ],
    swatchesExtraCount: 14,
    labels: ["Daily Runs", "Walking"],
  },
  {
    id: "AL0A85RG",
    name: "Men's Lone Peak 9+",
    href: "/en-us/trail/mens-lone-peak-9%2B/AL0A85RG.html",
    price: "$160.00",
    images: [
      { src: `${ASSETS}/AL0A85RG280-HERO`, alt: "Men's Lone Peak 9+ - Basalt" },
      { src: `${ASSETS}/AL0A85RG280-ALT1`, alt: "Men's Lone Peak 9+ - Basalt" },
      { src: `${ASSETS}/AL0A85RG280-ALT2`, alt: "Men's Lone Peak 9+ - Basalt" },
    ],
    swatches: [
      { colorId: "91J", title: "Basalt", imageUrl: `${ASSETS}/q_auto/AL0A85RG280-HERO`, href: "?dwvar_AL0A85RG_color=91J" },
      { colorId: "031", title: "Black/Lime", imageUrl: `${ASSETS}/q_auto/AL0A85RG031-HERO`, href: "?dwvar_AL0A85RG_color=031" },
      { colorId: "080", title: "Black/Orange", imageUrl: `${ASSETS}/q_auto/AL0A85RG080-HERO`, href: "?dwvar_AL0A85RG_color=080" },
      { colorId: "442", title: "Dark Blue", imageUrl: `${ASSETS}/q_auto/AL0A85RG442-HERO`, href: "?dwvar_AL0A85RG_color=442" },
      { colorId: "220", title: "Gray", imageUrl: `${ASSETS}/q_auto/AL0A85RG220-HERO`, href: "?dwvar_AL0A85RG_color=220" },
      { colorId: "222", title: "Dark Shadow", imageUrl: `${ASSETS}/q_auto/AL0A85RG222-HERO`, href: "?dwvar_AL0A85RG_color=222" },
      { colorId: "330", title: "Green", imageUrl: `${ASSETS}/q_auto/AL0A85RG330-HERO`, href: "?dwvar_AL0A85RG_color=330" },
      { colorId: "013", title: "Black/Orange", imageUrl: `${ASSETS}/q_auto/AL0A85RG013-HERO`, href: "?dwvar_AL0A85RG_color=013" },
      { colorId: "445", title: "Navy", imageUrl: `${ASSETS}/q_auto/AL0A85RG445-HERO`, href: "?dwvar_AL0A85RG_color=445" },
      { colorId: "000", title: "Black", imageUrl: `${ASSETS}/q_auto/AL0A85RG000-HERO`, href: "?dwvar_AL0A85RG_color=000" },
      { colorId: "800", title: "Orange/Black", imageUrl: `${ASSETS}/q_auto/AL0A85RG800-HERO`, href: "?dwvar_AL0A85RG_color=800" },
      { colorId: "315", title: "Dusty Olive", imageUrl: `${ASSETS}/q_auto/AL0A85RG315-HERO`, href: "?dwvar_AL0A85RG_color=315" },
      { colorId: "334", title: "Lime", imageUrl: `${ASSETS}/q_auto/AL0A85RG334-HERO`, href: "?dwvar_AL0A85RG_color=334" },
    ],
    swatchesExtraCount: 12,
    labels: ["Trail Running", "Hiking", "Thru Hiking"],
    badgeIcons: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vibram_logo.svg/120px-Vibram_logo.svg.png", alt: "Vibram" },
    ],
  },
  {
    id: "AL0A85RJ",
    name: "Men's Experience Flow ST",
    href: "/en-us/road/mens-experience-flow-st/AL0A85RJ.html",
    price: "$145.00",
    images: [
      { src: `${ASSETS}/AL0A85RJ161-HERO`, alt: "Men's Experience Flow ST - White/Coral" },
      { src: `${ASSETS}/AL0A85RJ161-ALT1`, alt: "Men's Experience Flow ST - White/Coral" },
      { src: `${ASSETS}/AL0A85RJ161-ALT2`, alt: "Men's Experience Flow ST - White/Coral" },
    ],
    swatches: [
      { colorId: "161", title: "White/Coral", imageUrl: `${ASSETS}/q_auto/AL0A85RJ161-HERO`, href: "?dwvar_AL0A85RJ_color=161" },
      { colorId: "420", title: "Blue/Gray", imageUrl: `${ASSETS}/q_auto/AL0A85RJ420-HERO`, href: "?dwvar_AL0A85RJ_color=420" },
      { colorId: "010", title: "Black/White", imageUrl: `${ASSETS}/q_auto/AL0A85RJ010-HERO`, href: "?dwvar_AL0A85RJ_color=010" },
      { colorId: "445", title: "Navy", imageUrl: `${ASSETS}/q_auto/AL0A85RJ445-HERO`, href: "?dwvar_AL0A85RJ_color=445" },
      { colorId: "001", title: "Black/Black", imageUrl: `${ASSETS}/q_auto/AL0A85RJ001-HERO`, href: "?dwvar_AL0A85RJ_color=001" },
      { colorId: "224", title: "Light Gray", imageUrl: `${ASSETS}/q_auto/AL0A85RJ224-HERO`, href: "?dwvar_AL0A85RJ_color=224" },
      { colorId: "315", title: "Dusty Olive", imageUrl: `${ASSETS}/q_auto/AL0A85RJ315-HERO`, href: "?dwvar_AL0A85RJ_color=315" },
    ],
    swatchesExtraCount: 4,
    labels: ["Road Running", "Walking"],
    badge: { text: "New", bg: "#1a1a1a", color: "#ffffff" },
  },
  {
    id: "AL0A85RK",
    name: "Women's Experience Flow ST",
    href: "/en-us/road/womens-experience-flow-st/AL0A85RK.html",
    price: "$145.00",
    images: [
      { src: `${ASSETS}/AL0A85RK161-HERO`, alt: "Women's Experience Flow ST - White/Coral" },
      { src: `${ASSETS}/AL0A85RK161-ALT1`, alt: "Women's Experience Flow ST - White/Coral" },
      { src: `${ASSETS}/AL0A85RK161-ALT2`, alt: "Women's Experience Flow ST - White/Coral" },
    ],
    swatches: [
      { colorId: "161", title: "White/Coral", imageUrl: `${ASSETS}/q_auto/AL0A85RK161-HERO`, href: "?dwvar_AL0A85RK_color=161" },
      { colorId: "922", title: "Tan", imageUrl: `${ASSETS}/q_auto/AL0A85RK922-HERO`, href: "?dwvar_AL0A85RK_color=922" },
      { colorId: "010", title: "Black/White", imageUrl: `${ASSETS}/q_auto/AL0A85RK010-HERO`, href: "?dwvar_AL0A85RK_color=010" },
      { colorId: "110", title: "White", imageUrl: `${ASSETS}/q_auto/AL0A85RK110-HERO`, href: "?dwvar_AL0A85RK_color=110" },
      { colorId: "444", title: "Light Blue", imageUrl: `${ASSETS}/q_auto/AL0A85RK444-HERO`, href: "?dwvar_AL0A85RK_color=444" },
      { colorId: "120", title: "White/Gray", imageUrl: `${ASSETS}/q_auto/AL0A85RK120-HERO`, href: "?dwvar_AL0A85RK_color=120" },
    ],
    swatchesExtraCount: 4,
    labels: ["Road Running", "Walking"],
    badge: { text: "New", bg: "#1a1a1a", color: "#ffffff" },
  },
  {
    id: "AL0A85V0",
    name: "Men's Experience Wild 3+",
    href: "/en-us/trail/mens-experience-wild-3%2B/AL0A85V0.html",
    price: "$165.00",
    images: [
      { src: `${ASSETS}/AL0A85V0923-HERO`, alt: "Men's Experience Wild 3+ - Taupe" },
      { src: `${ASSETS}/AL0A85V0923-ALT1`, alt: "Men's Experience Wild 3+ - Taupe" },
      { src: `${ASSETS}/AL0A85V0923-ALT2`, alt: "Men's Experience Wild 3+ - Taupe" },
    ],
    swatches: [
      { colorId: "923", title: "Taupe", imageUrl: `${ASSETS}/q_auto/AL0A85V0923-HERO`, href: "?dwvar_AL0A85V0_color=923" },
      { colorId: "001", title: "Black/Black", imageUrl: `${ASSETS}/q_auto/AL0A85V0001-HERO`, href: "?dwvar_AL0A85V0_color=001" },
      { colorId: "102", title: "White/Lime", imageUrl: `${ASSETS}/q_auto/AL0A85V0102-HERO`, href: "?dwvar_AL0A85V0_color=102" },
    ],
    swatchesExtraCount: 0,
    labels: ["Trail Running", "Hiking"],
    badge: { text: "New", bg: "#1a1a1a", color: "#ffffff" },
  },
  {
    id: "AL0A85UZ",
    name: "Women's Experience Wild 3+",
    href: "/en-us/trail/womens-experience-wild-3%2B/AL0A85UZ.html",
    price: "$165.00",
    images: [
      { src: `${ASSETS}/AL0A85UZ665-HERO`, alt: "Women's Experience Wild 3+ - Magenta" },
      { src: `${ASSETS}/AL0A85UZ665-ALT1`, alt: "Women's Experience Wild 3+ - Magenta" },
      { src: `${ASSETS}/AL0A85UZ665-ALT2`, alt: "Women's Experience Wild 3+ - Magenta" },
    ],
    swatches: [
      { colorId: "665", title: "Magenta", imageUrl: `${ASSETS}/q_auto/AL0A85UZ665-HERO`, href: "?dwvar_AL0A85UZ_color=665" },
      { colorId: "001", title: "Black/Black", imageUrl: `${ASSETS}/q_auto/AL0A85UZ001-HERO`, href: "?dwvar_AL0A85UZ_color=001" },
      { colorId: "220", title: "Gray", imageUrl: `${ASSETS}/q_auto/AL0A85UZ220-HERO`, href: "?dwvar_AL0A85UZ_color=220" },
      { colorId: "921", title: "Sand", imageUrl: `${ASSETS}/q_auto/AL0A85UZ921-HERO`, href: "?dwvar_AL0A85UZ_color=921" },
    ],
    swatchesExtraCount: 2,
    labels: ["Trail Running", "Hiking"],
    badge: { text: "New", bg: "#1a1a1a", color: "#ffffff" },
  },
];

export { products };

export default function ProductGridBanner() {
  return (
    <div className="l-hp-item bg-white py-10 md:py-14">
      <div className="l-grid_layout m-1_up m-full_with_centered max-w-[1280px] mx-auto px-4">
        <div className="l-grid_layout-content m-has_title">
          <div className="l-grid_layout-item m-title mb-6">
            <div className="b-header_ext m-horizontal_left m-vertical_top">
              <h2 className="title-d2 text-2xl md:text-3xl font-semibold text-neutral-900">
                Page Designer Banner
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
                    badgeIcons={p.badgeIcons}
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
