"use client";
import Image from "next/image";
import { Manrope } from "next/font/google";
import LogoFrame from "/public/assets/Frame 7.svg";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function HeroLogosSection() {
  return (
    <section
      className={`${manrope.className} relative w-full h-[70vh] text-white overflow-hidden`}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video/stars.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Logo Row */}
        <div className="mb-8">
          <Image
            src={LogoFrame}
            alt="Brand Logos"
            width={900}
            height={120}
            className="opacity-90"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[40px] md:text-[50px] font-normal leading-none tracking-[-0.02em] max-w-[980px] mx-auto">
          <span className="text-[#2BB7FF]">More than products.</span> A platform
          that transforms experiences.
        </h2>

        {/* Description */}
        <p className="mt-6 text-[18px] md:text-[22px] font-normal tracking-[-0.02em] max-w-[800px] mx-auto text-[#B7BFC7] leading-tight">
          From virtual queues to intuitive AI-enabled self-service kiosks,
          Wavetec unites innovation, design, manufacturing and data to craft
          customer experiences people genuinely love.
        </p>
      </div>
    </section>
  );
}
