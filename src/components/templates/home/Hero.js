import Navbar from "@/components/layout/home/Navbar";

export default function Hero({
  videoSrc = "/assets/video/waves-hero.mov",
  overlayOpacity = 40,
  title = "Make every visit feel seamless. Solutions that fuse",
  subtitle = "Innovation, Design, Manufacturing, Data & AI with humans at the core.",
  primaryBtnText = "Find Your Solution",
  secondaryBtnText = "How it works",
}) {
  return (
    <div className="relative  h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-95"
      >
        <source src={videoSrc} />
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/${overlayOpacity} z-10`}></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 xl:px-12">
        <div className="max-w-3xl">
          <h1 className="font-manrope text-white font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-tight">
            {title}
          </h1>

          <p className="font-manrope text-white font-normal text-lg sm:text-xl mt-4">
            {subtitle}
          </p>
          <div className="mb-4">
            <button className="font-manrope text-[#0099FF] font-bold text-[22px] md:text-2xl hover:underline transition ">
              {primaryBtnText}
            </button>
          </div>

          <div>
            <button className="font-manrope  w-[174px] h-[63px] bg-[#CFD3D8] rounded-full text-black font-bold text-lg cursor-pointer">
              {secondaryBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
