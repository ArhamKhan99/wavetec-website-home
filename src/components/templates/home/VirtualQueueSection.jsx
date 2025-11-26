"use client";
import Image from "next/image";
import { Manrope } from "next/font/google";

import BackgroundImage from "/public/assets/virtual-queue-background.png";
import KioskImage from "/public/assets/virtual-queue-kiosk.png";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function VirtualQueueSection() {
  return (
    <section
      className={`${manrope.className} w-full bg-black flex justify-center py-5 px-8`}
    >
      {/* ---------------------------- */}
      {/* DESKTOP VERSION (UNCHANGED) */}
      {/* ---------------------------- */}
      <div
        className="
          hidden lg:flex
          relative 
          w-[98vw]
          mx-auto 
          h-[95vh]
          overflow-hidden 
          rounded-[10px] 
          bg-[#0A0A0D]
          p-4
        "
      >
        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 flex flex-col justify-center pl-10 w-[55%]">
          <h1 className="text-[50px] font-normal tracking-[-0.02em] leading-none text-white mb-4">
            Virtual Queue Management
          </h1>

          <p className="text-[22px] text-[#B7BFC7] font-normal tracking-[-0.02em] leading-[1.2] mb-6">
            Reduce waiting time and enhance customer visits.
          </p>

          <button
            className="
    bg-[#006BEB]
    text-white 
    text-[16px] 
    font-medium
    h-[50px]
    px-8
    rounded-full
    flex 
    items-center 
    justify-center
    w-max
  
    hover:bg-[#005FD3]
    transition
  "
          >
            Discover how it works
          </button>
        </div>

        <div className="relative z-10 flex items-end justify-end w-[45%]">
          <Image
            src={KioskImage}
            alt="Kiosk"
            width={506}
            height={906}
            className="relative top-14"
            priority
          />
        </div>
      </div>

      {/* ---------------------------- */}
      {/* TABLET RESPONSIVE (FIXED)   */}
      {/* ---------------------------- */}
      <div
        className="
          hidden md:flex lg:hidden
          relative 
          w-full max-w-[95%]
          h-[460px]
          mx-auto 
          overflow-hidden 
          rounded-[10px] 
          bg-[#0A0A0D]
          p-5
        "
      >
        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          className="object-cover opacity-80 z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 flex flex-col justify-center w-1/2 pr-4">
          <h2 className="text-[28px] font-[400] text-white leading-none mb-2">
            Virtual Queue Management
          </h2>

          <p className="text-[15px] text-[#B7BFC7] leading-tight mb-4">
            Reduce waiting time and enhance customer visits.
          </p>

          <button className="bg-[#007BFF] text-white text-[14px] px-5 py-2 rounded-full font-medium">
            Discover how it works
          </button>
        </div>

        <div className="relative z-10 w-1/2 flex items-end justify-center">
          <Image
            src={KioskImage}
            alt="Kiosk"
            width={300}
            height={520}
            className="relative -top-3"
          />
        </div>
      </div>

      {/* ---------------------------- */}
      {/* MOBILE RESPONSIVE (FIXED)   */}
      {/* ---------------------------- */}
      <div
        className="
    md:hidden 
    relative 
    w-full max-w-[360px]
    mx-auto
    min-h-[420px]        // FIXED: was h-[300px]
    overflow-hidden 
    rounded-[18px] 
    bg-[#0A0A0D]
    pt-5 pb-6 px-4       // better spacing
  "
      >
        {/* Background */}
        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          className="object-cover opacity-60 z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <Image
            src={KioskImage}
            alt="Kiosk"
            width={135} // slightly larger
            height={220}
            className="mb-3"
          />

          <h3 className="text-[18px] text-white leading-none mb-2">
            Virtual Queue Management
          </h3>

          <p className="text-[12px] text-[#B7BFC7] leading-tight mb-4 max-w-[250px]">
            Reduce waiting time and enhance customer visits.
          </p>

          <button className="bg-[#007BFF] text-white text-[13px] px-5 py-2 rounded-full font-medium shadow-lg">
            Discover how it works
          </button>
        </div>
      </div>
    </section>
  );
}
