import React, { useMemo } from "react";
import Image from "next/image";

import HeroImage from "/public/assets/ai-power.png";
import BGImage from "/public/assets/bg3.png";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { decodeAmp, splitByLineBreaks } from "@/utils/helper";
import Navbar from "@/components/layout/Navbar";
function Hero({ data }) {
  const value = splitByLineBreaks(data?.text || "");
  return (
    //  py-12 lg:py-22 
    <section
      className="relative bg-background w-full overflow-hidden"
      aria-label="Solution Hero Section"
    >
      <Image
        src={BGImage}
        alt="WaveTec Background Image"
        fill
        priority={true}
        className="object-cover  pointer-events-none dark:opacity-20"
      />

      <Navbar />
      <div className="py-12 lg:py-20">

      </div>
      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-6 text-black">
              {value?.[0] ||
                "AI-Powered Customer Journeys for Modern Bankingsss"}
            </h1>
            <p className="text-accent text-base sm:text-lg xl:text-xl mb-8 max-w-lg font-normal leading-[30px]">
              {value?.[1] ||
                "Leverage artificial intelligence to transform banking experiences. Automate service, predict customer needs, and deliver seamless interactions across every branch and digital channelsssss."}
            </p>
            {data?.buttons?.length > 0 ? (
              <Button value={decodeAmp(data?.buttons?.[0]?.text)} />
            ) : null}
          </div>

          <div className="flex justify-center">
            <Image
              src={data?.images?.[0] || HeroImage}
              alt={"AI-Powered Customer Journeys"}
              width={600}
              height={400}
              loading="lazy"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
