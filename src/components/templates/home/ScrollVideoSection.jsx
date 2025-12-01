"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoGSAP({
  videoSrc = "/assets/demo.mp4",
  data = {},
}) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.preload = "auto";
    video.load();

    const initScrollAnimation = () => {
      const duration = video.duration;
      if (!duration) return;

      gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
          markers: true,
        },
      });
    };

    setTimeout(() => {
      if (video.readyState >= 1) initScrollAnimation();
      else video.addEventListener("loadedmetadata", initScrollAnimation);
    }, 50);

    return () => {
      ScrollTrigger.getAll().forEach((s) => s.kill());
      video.removeEventListener("loadedmetadata", initScrollAnimation);
    };
  }, []);

 return (
  <section className="bg-black w-full min-h-screen scroll-section">
    <div className="w-full bg-black">
      <div
        className="w-[96vw] rounded-[10px] mx-auto h-[96vh] bg-no-repeat bg-center bg-cover flex items-center relative overflow-hidden"
        style={{ backgroundImage: "url('/assets/bg-virtual.png')" }}
      >
        {/* LEFT CONTENT ---------------------------- */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-14 z-10">
          <h1 className="font-normal text-3xl md:text-3xl xl:text-[50px] text-white">
            {data.heading || "Self-Service Kiosks & ATMs"}
          </h1>

          <p className="font-normal text-[22px] text-[#B7BFC7] mt-2">
            {data.description ||
              "Empower your customers; when, how and where they want."}
          </p>

          <button className="mt-6 w-[257px] h-[63px] bg-[#AA00FF] rounded-[69px] font-bold text-xl text-white">
            {data.buttonText || "Discover how it works"}
          </button>
        </div>

        {/* RIGHT VIDEO SECTION ---------------------------- */}
        <div className="w-1/2 h-full relative overflow-hidden">

          {/* Scroll area that controls the animation */}
          <div
            ref={sectionRef}
            style={{
              height: "300vh", // full scroll height
              width: "100%",
              position: "relative",
            }}
          >
            {/* VIDEO STICKY INSIDE THIS ONLY */}
            <div
              style={{
                position: "sticky",
                top: 0,
                height: "96vh",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                muted
                playsInline
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);


}
