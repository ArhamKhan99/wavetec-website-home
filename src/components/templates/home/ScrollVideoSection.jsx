"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ anticipatePin: 1 });

export default function ScrollVideoGSAP({
  videoSrc = "/assets/demo.mp4",
  data = {},
  start = "top center",
  end,
  scrollLengthMultiplier = 400,
}) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.preload = "auto";
    video.load();

    const initScrollAnimation = () => {
      const duration = video.duration;
      if (!duration) return;

      const viewportHeight =
        typeof window !== "undefined"
          ? window.innerHeight
          : section.getBoundingClientRect().height || 0;

      const scrollDistance = Math.max(
        duration * scrollLengthMultiplier,
        viewportHeight * 1.2
      );

      const computedEnd = end || `+=${scrollDistance}`;

      if (animationRef.current) {
        animationRef.current.scrollTrigger?.kill();
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start,
          end: computedEnd,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      initScrollAnimation();
    } else {
      video.addEventListener("loadedmetadata", initScrollAnimation);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.scrollTrigger?.kill();
        animationRef.current.kill();
      }
      video.removeEventListener("loadedmetadata", initScrollAnimation);
    };
  }, [videoSrc, start, end, scrollLengthMultiplier]);

  return (
    <section
      ref={sectionRef}
      className="bg-black w-full min-h-screen overflow-hidden scroll-section"
    >
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
    </section>
  );
}

