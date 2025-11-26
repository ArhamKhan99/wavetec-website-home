"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MapMarker({ city, activeCity, setActiveCity }) {
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  const isOpen = activeCity === city.name;

  // RUN animation when popup becomes active
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    }
  }, [isOpen]);

  const closePopup = () => {
    gsap.to(popupRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
    });

    setTimeout(() => setActiveCity(null), 250);
  };

  return (
    <>
      {/* MARKER POINT */}
      <div
        onMouseEnter={() => setActiveCity(city.name)}
        className={`w-4 h-4 rounded-full cursor-pointer ${city.color}`}
        style={{
          boxShadow: `0 0 16px ${city.glow}`,
        }}
      ></div>

      {/* POPUP */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed w-[500px] inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 opacity-0"
        >
          <div
            ref={popupRef}
            className="relative  bg-white/30 backdrop-blur-2xl
              border border-white/20 rounded-2xl p-6 shadow-2xl text-white scale-0"
            style={{ boxShadow: `0 0 25px ${city.glow}` }}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white text-lg"
            >
              ✕
            </button>

            <div className="flex items-center gap-3">
              {/* <img
                src={city.flag}
                className="w-10 h-10 rounded-full border border-white/40"
                alt=""
              /> */}
              <h2 className="text-2xl font-semibold">{city.name}</h2>
            </div>

            <p className="mt-4 text-gray-200">{city.description}</p>

            <div className="mt-5 space-y-1 text-sm text-gray-300">
              <p><strong>Address:</strong> {city.address}</p>
              <p><strong>Email:</strong> {city.email}</p>
              <p><strong>Contact:</strong> {city.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
