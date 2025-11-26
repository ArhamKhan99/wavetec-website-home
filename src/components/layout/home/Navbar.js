"use client";

import Container from "@/components/common/Container";
import Image from "next/image";
import React, { useState } from "react";

const NAV_ITEMS = ["Industries", "Solutions", "Company", "Resources", "Contact"];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Container>
<nav className="absolute top-0 left-0 w-full z-30 py-5 bg-transparent">
      <div className="flex justify-between items-center px-6 xl:px-12 ">

        {/* LOGO */}
        <div className="relative w-[150px] h-[30px] md:w-[220px] md:h-10">
          <Image
            src="/assets/wavetec.png"
            alt="Wavetec Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="text-white text-sm lg:text-base font-semibold hover:underline transition"
            >
              {item}
            </button>
          ))}

          <button className="bg-[#006BE8] px-6 py-3 rounded-full text-white text-sm lg:text-base font-bold hover:bg-blue-700 transition">
            Get a Free Demo
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden bg-[#0A0A0A]/40 w-full transition-max-height duration-300 ease-in-out overflow-hidden ${
          dropdownOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="text-white text-lg font-semibold hover:text-blue-400 transition text-left"
              onClick={() => setDropdownOpen(false)}
            >
              {item}
            </button>
          ))}
          <button className="bg-[#006BE8] mt-2 px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700 transition">
            Get a Free Demo
          </button>
        </div>
      </div>
    </nav>
    </Container>
    
  );
}
