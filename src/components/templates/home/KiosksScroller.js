// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function KioskScrollSection({
//   prefix = "block2",      // 👉 image name prefix
//   frameCount = 500,        // 👉 total frames
//   folder = "/assets/",     // 👉 public folder path
//   frameExt = "png",
//   data = {},
//   value
// }) {
//   const canvasRef = useRef(null);
//   const imagesRef = useRef([]);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     const images = [];

//     // LOAD IMAGES from public/assets/prefix_0001.png ....
//     for (let i = 1; i <= frameCount; i++) {
//       const img = new Image();
//       if(value===3){
//       img.src = `${folder}${prefix}-${String(i).padStart(3, "0")}.${frameExt}`;
//       console.log(`${folder}${prefix}-${String(i).padStart(3, "0")}.${frameExt}`)

//       }else{

//         img.src = `${folder}${prefix}_${String(i).padStart(4, "0")}.${frameExt}`;
//       }
//       img.decoding = "async";
//       images.push(img);
//     }

//     imagesRef.current = images;

//     images[0].onload = () => {
//       const w = images[0].naturalWidth;
//       const h = images[0].naturalHeight;

//       canvas.width = w;
//       canvas.height = h;
//       canvas.style.width = "100%";
//       canvas.style.height = "100%";
//       canvas.style.borderRadius = "10px";

//       ctx.drawImage(images[0], 0, 0, w, h);
//     };

//     const renderFrame = (i) => {
//       const img = imagesRef.current[i];
//       if (!img || !img.complete) return;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     };

//     const state = { frame: 0 };

//     const trigger = canvas.closest(".scroll-section");

//     if (!trigger) return;

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
//         // markers:true,
//       },
//       onUpdate: () => renderFrame(Math.floor(state.frame)),
//     });

//     return () => {
//       animationRef.current?.scrollTrigger?.kill();
//       animationRef.current?.kill();
//     };
//   }, [prefix, frameCount, folder, frameExt]);

//   return (
//     <section className="scroll-section bg-black" style={{ minHeight: "100vh" }}>
//          <div className="w-full bg-black">
//                 <div
//                   className="w-[96vw] rounded-[10px] mx-auto h-[96vh]  bg-no-repeat bg-center bg-cover flex items-center"
//                   style={{ backgroundImage: "url('/assets/bg-virtual.png')" }}
//                 >
                  
//                   <div className="w-full h-full flex flex-col justify-center items-start pl-14 ">
//                     <h1 className="font-normal text-3xl md:text-3xl xl:text-[50px] text-white">
//                       {data.heading || "Self-Service Kiosks & ATMsssss"}
//                     </h1>
//                     <p className="font-normal text-[22px] text-[#B7BFC7]">{data.description || "Empower your customers; when, how and where they want."}</p>  
//                     <button className="mt-4 w-[257px] h-[63px] bg-[#AA00FF] rounded-[69px] font-bold text-xl text-white">
//                       {data.buttonText || "Discover how it works"}
//                     </button>
//                   </div>

//                   {/* <div>
//                     <Image width={100} height={200} className="w-full h-[850px]" src={"/assets/block2_0001.png"} />
//                   </div> */}
//                   <div className="h-full w-full mx-auto relative rounded-[10px]" >
//         <canvas ref={canvasRef} />
//       </div>
//                 </div>
//               </div>
     
//     </section>
//   );
// }

// First attempt
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function KioskScrollSection({
  prefix = "block2",
  frameCount = 500,
  folder = "/assets/",
  frameExt = "png",
  data = {},
  value,
}) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const images = [];
    const loadedFrames = {};

    // Helper to load a single frame
    const loadFrame = (i) => {
      const img = new Image();
      img.src =
        value === 3
          ? `${folder}${prefix}-${String(i).padStart(3, "0")}.${frameExt}`
          : `${folder}${prefix}_${String(i).padStart(4, "0")}.${frameExt}`;
      img.decoding = "async";
      img.onload = () => (loadedFrames[i] = true);
      return img;
    };

    // Load first 10 frames immediately
    for (let i = 1; i <= Math.min(frameCount, 10); i++) {
      images.push(loadFrame(i));
    }

    imagesRef.current = images;

    // Load the rest in chunks
    let currentFrame = 11;
    const loadChunk = () => {
      if (currentFrame > frameCount) return;
      const chunkSize = 10; // 10 images at a time
      for (let i = 0; i < chunkSize && currentFrame <= frameCount; i++, currentFrame++) {
        imagesRef.current.push(loadFrame(currentFrame));
      }
      setTimeout(loadChunk, 100); // load next chunk after 100ms
    };
    loadChunk();

    // Draw first frame
    images[0].onload = () => {
      canvas.width = images[0].naturalWidth;
      canvas.height = images[0].naturalHeight;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.borderRadius = "10px";
      ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
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
      },
      onUpdate: () => renderFrame(Math.floor(state.frame)),
    });

    return () => {
      animationRef.current?.scrollTrigger?.kill();
      animationRef.current?.kill();
    };
  }, [prefix, frameCount, folder, frameExt, value]);

  return (
    <section className="scroll-section bg-black" style={{ minHeight: "100vh" }}>
      <div className="w-full bg-black">
        <div
          className="w-[96vw] rounded-[10px] mx-auto h-[96vh] bg-no-repeat bg-center bg-cover flex items-center"
          style={{ backgroundImage: "url('/assets/bg-virtual.png')" }}
        >
          <div className="w-full h-full flex flex-col justify-center items-start pl-14 ">
            <h1 className="font-normal text-3xl md:text-3xl xl:text-[50px] text-white">
              {data.heading || "Self-Service Kiosks & ATMsssss"}
            </h1>
            <p className="font-normal text-[22px] text-[#B7BFC7]">
              {data.description || "Empower your customers; when, how and where they want."}
            </p>
            <button className="mt-4 w-[257px] h-[63px] bg-[#AA00FF] rounded-[69px] font-bold text-xl text-white">
              {data.buttonText || "Discover how it works"}
            </button>
          </div>

          <div className="h-full w-full mx-auto relative rounded-[10px]">
            <canvas ref={canvasRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
