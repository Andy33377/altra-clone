const videoDesktop = "https://assets.altrarunning.com/video/upload/v1768928979/Oilslick_Escalante_HomePage_16x9_3.mp4";
const videoMobile = "https://assets.altrarunning.com/video/upload/v1768929028/Oilslick_Escalante_HomePage_3x4_2.mp4";

export default function EscalanteVideoSection() {
  return (
    <div className="l-hp-item">
      <div className="l-grid_layout m-1_up m-full_bleed">
        <div className="video-wrapper relative w-full overflow-hidden bg-neutral-900">
          <video
            className="video-desktop hidden md:block w-full"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={videoDesktop} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="video-mobile block md:hidden w-full"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={videoMobile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay absolute inset-0 flex flex-col justify-end items-start p-[5vw] pb-[5vw] box-border z-10">
            <h1 className="text-white text-left text-3xl md:text-4xl font-semibold mb-0 capitalize tracking-normal">
              Escalante 4
            </h1>
            <p className="text-white text-left text-base md:text-xl mb-8 max-w-[600px]">
              Black Iridescent
            </p>
            <div className="button-container flex gap-4 flex-wrap justify-start">
              <a
                href="/en-us/road/womens-escalante-4/AL0A85NF.html"
                className="b-button m-white inline-block rounded border border-white bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Shop Women
              </a>
              <a
                href="/en-us/road/mens-escalante-4/AL0A85NE.html"
                className="b-button m-white inline-block rounded border border-white bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Shop Men
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .video-wrapper .overlay {
            align-items: center;
            padding-left: 0;
            padding-right: 0;
            top: -3vw;
          }
          .video-wrapper .overlay h1 {
            font-size: 2.25rem;
            text-align: center;
          }
          .video-wrapper .overlay p {
            font-size: 1rem;
            text-align: center;
          }
          .video-wrapper .overlay .button-container {
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            width: 100%;
            gap: 0.75rem;
          }
          .video-wrapper .overlay .button-container a {
            width: auto;
            flex: 0 0 auto;
            text-align: center;
            min-width: fit-content;
            padding: 1.5em 1em;
          }
        }
      `}</style>
    </div>
  );
}
