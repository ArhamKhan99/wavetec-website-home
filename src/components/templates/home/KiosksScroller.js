"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KioskScrollSection({
  prefix = "block2",      // 👉 image name prefix
  frameCount = 500,        // 👉 total frames
  folder = "/assets/",     // 👉 public folder path
  frameExt = "png",
  data = {},
  value
}) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const images = [];

    // LOAD IMAGES from public/assets/prefix_0001.png ....
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      if(value===3){
      img.src = `${folder}${prefix}-${String(i).padStart(3, "0")}.${frameExt}`;
      console.log(`${folder}${prefix}-${String(i).padStart(3, "0")}.${frameExt}`)

      }else{

        img.src = `${folder}${prefix}_${String(i).padStart(4, "0")}.${frameExt}`;
      }
      img.decoding = "async";
      images.push(img);
    }

    imagesRef.current = images;

    images[0].onload = () => {
      const w = images[0].naturalWidth;
      const h = images[0].naturalHeight;

      canvas.width = w;
      canvas.height = h;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.borderRadius = "10px";

      ctx.drawImage(images[0], 0, 0, w, h);
    };

    const renderFrame = (i) => {
      const img = imagesRef.current[i];
      if (!img || !img.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const state = { frame: 0 };

    const trigger = canvas.closest(".scroll-section");

    if (!trigger) return;

    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === trigger) st.kill();
    });

    animationRef.current = gsap.to(state, {
      frame: frameCount - 1,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top top",
        end: "200% bottom",
        scrub: 1,
        pin: true,
        // markers:true,
      },
      onUpdate: () => renderFrame(Math.floor(state.frame)),
    });

    return () => {
      animationRef.current?.scrollTrigger?.kill();
      animationRef.current?.kill();
    };
  }, [prefix, frameCount, folder, frameExt]);

  return (
    <section className="scroll-section bg-black" style={{ minHeight: "100vh" }}>
         <div className="w-full bg-black">
                <div
                  className="w-[96vw] rounded-[10px] mx-auto h-[96vh]  bg-no-repeat bg-center bg-cover flex items-center"
                  style={{ backgroundImage: "url('/assets/bg-virtual.png')" }}
                >
                  
                  <div className="w-full h-full flex flex-col justify-center items-start pl-14 ">
                    <h1 className="font-normal text-3xl md:text-3xl xl:text-[50px] text-white">
                      {data.heading || "Self-Service Kiosks & ATMsssss"}
                    </h1>
                    <p className="font-normal text-[22px] text-[#B7BFC7]">{data.description || "Empower your customers; when, how and where they want."}</p>  
                    <button className="mt-4 w-[257px] h-[63px] bg-[#AA00FF] rounded-[69px] font-bold text-xl text-white">
                      {data.buttonText || "Discover how it works"}
                    </button>
                  </div>

                  {/* <div>
                    <Image width={100} height={200} className="w-full h-[850px]" src={"/assets/block2_0001.png"} />
                  </div> */}
                  <div className="h-full w-full mx-auto relative rounded-[10px]" >
        <canvas ref={canvasRef} />
      </div>
                </div>
              </div>
     
    </section>
  );
}

// optimize image

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function KioskScrollSection({
//   prefix = "block2",
//   frameCount = 500,
//   folder = "/assets/",
//   frameExt = "png",
//   data = {},
//   value
// }) {
//   const canvasRef = useRef(null);
//   const imagesRef = useRef({}); // store loaded frames dynamically
//   const animationRef = useRef(null);

//   // Load a single frame
//   const loadFrame = (i) =>
//     new Promise((resolve) => {
//       if (imagesRef.current[i]) return resolve(imagesRef.current[i]);
//       const img = new Image();
//       const frameNumber = value === 3 ? String(i).padStart(3, "0") : String(i).padStart(4, "0");
//       img.src = `${folder}${prefix}_${frameNumber}.${frameExt}`;
//       img.decoding = "async";
//       img.onload = () => {
//         imagesRef.current[i] = img;
//         resolve(img);
//       };
//     });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");

//     let canvasWidth = 0;
//     let canvasHeight = 0;

//     const renderFrame = async (i) => {
//       const img = await loadFrame(i);
//       if (!canvasWidth) {
//         canvasWidth = img.naturalWidth;
//         canvasHeight = img.naturalHeight;
//         canvas.width = canvasWidth;
//         canvas.height = canvasHeight;
//         canvas.style.width = "100%";
//         canvas.style.height = "100%";
//       }
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     };

//     const state = { frame: 0 };
//     const trigger = canvas.closest(".scroll-section");
//     if (!trigger) return;

//     // Kill existing triggers
//     ScrollTrigger.getAll().forEach((st) => {
//       if (st.trigger === trigger) st.kill();
//     });

//     animationRef.current = gsap.to(state, {
//       frame: frameCount - 1,
//       ease: "none",
//       scrollTrigger: {
//         trigger,
//         start: "top top",
//         end: "200% bottom",
//         scrub: 1,
//         pin: true,
//         // markers:true
//       },
//       onUpdate: () => renderFrame(Math.floor(state.frame)),
//     });

//     // Load first frame immediately
//     renderFrame(0);

//     return () => {
//       animationRef.current?.scrollTrigger?.kill();
//       animationRef.current?.kill();
//     };
//   }, [prefix, frameCount, folder, frameExt, value]);

//   return (
//     <section className="scroll-section bg-black" style={{ minHeight: "100vh" }}>
//       <div className="w-full bg-black">
//         <div
//           className="w-[96vw] rounded-[10px] mx-auto h-[96vh] bg-no-repeat bg-center bg-cover flex items-center"
//           style={{ backgroundImage: "url('/assets/bg-virtual.png')" }}
//         >
//           <div className="w-full h-full flex flex-col justify-center items-start pl-14">
//             <h1 className="font-normal text-3xl md:text-3xl xl:text-[50px] text-white">
//               {data.heading || "Self-Service Kiosks & ATMs"}
//             </h1>
//             <p className="font-normal text-[22px] text-[#B7BFC7]">
//               {data.description || "Empower your customers; when, how and where they want."}
//             </p>
//             <button className="mt-4 w-[257px] h-[63px] bg-[#AA00FF] rounded-[69px] font-bold text-xl text-white">
//               {data.buttonText || "Discover how it works"}
//             </button>
//           </div>

//           <div className="h-full w-full mx-auto relative rounded-[10px]">
//             <canvas ref={canvasRef} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// video approach
// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function KioskVideoScroll({
//   videoSrc = "/assets/block2.mp4", // your video path
//   data = {},
// }) {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     const container = containerRef.current;
//     if (!video || !container) return;

//     // Ensure video is ready
//     video.pause();
//     video.currentTime = 0;

//     // GSAP ScrollTrigger to control video currentTime
//     const animation = gsap.to(video, {
//       currentTime: video.duration || 1, // video duration
//       ease: "none",
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "200% 200%",
//         scrub: 1,
//         pin: true,
//         markers: true,
//       },
//       onUpdate: () => {
//         // video.currentTime automatically updates
//       },
//     });

//     return () => {
//       animation.scrollTrigger?.kill();
//       animation.kill();
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="scroll-section bg-black"
//       style={{ minHeight: "100vh" }}
//     >
//       <div className="w-full h-[96vh] mx-auto relative rounded-[10px] flex items-center justify-center bg-black">
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           muted
//           playsInline
//           preload="auto"
         
//         />
//         <div className="absolute top-14 left-14 flex flex-col gap-4">
//           <h1 className="text-white font-normal text-3xl md:text-3xl xl:text-[50px]">
//             {data.heading || "Self-Service Kiosks & ATMs"}
//           </h1>
//           <p className="text-[#B7BFC7] font-normal text-[22px]">
//             {data.description || "Empower your customers; when, how and where they want."}
//           </p>
//           <button className="mt-4 w-[257px] h-[63px] bg-[#AA00FF] rounded-[69px] font-bold text-xl text-white">
//             {data.buttonText || "Discover how it works"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
