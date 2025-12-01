"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoGSAP({
  videoSrc = "/assets/demo.mp4", // Video path
  sectionHeight = "100vh",      // Scrollable section height
}) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Pause initially
    video.pause();
    video.currentTime = 0;

    const initScrollAnimation = () => {
      const videoDuration = video.duration;

      // GSAP tween controlling video currentTime based on scroll
      gsap.to(video, {
        currentTime: videoDuration,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true, // video stays pinned
          markers: true,
        },
      });
    };

    // Wait for video metadata to get duration
    if (video.readyState >= 1) {
      initScrollAnimation();
    } else {
      video.addEventListener("loadedmetadata", initScrollAnimation);
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      video.removeEventListener("loadedmetadata", initScrollAnimation);
    };
  }, []);

  return (
    <section ref={sectionRef} style={{width:"100%", height: sectionHeight, position: "relative" }}>
      <video
        ref={videoRef}
        src={videoSrc}
        style={{
          position: "sticky",
          top: 0,
          width: "50%",
          height: "100vh",
          objectFit: "cover",
        }}
        muted
        playsInline
      />
    </section>
  );
}
