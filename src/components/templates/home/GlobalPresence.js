'use client';
import Image from "next/image";
import MapMarker from "./MapMarker";
import { useState } from "react";
import Container from "@/components/common/Container";

export default function MapPage() {
      const [activeCity, setActiveCity] = useState(null);

  const cities = [
    {
      name: "Dubai (Head Office)",
      description: "Our primary global headquarters located in UAE.",
      color: "bg-[#FF5733]",
      glow: "rgba(255, 87, 51, 0.8)",
      flag: "/assets/flags/uae.png",
      address: "Sheikh Zayed Road, Dubai, UAE",
      email: "dubai@company.com",
      phone: "+971 123 4567",
      style: "top-[49%] left-[68.2%]",
    },
    {
      name: "Karachi",
      description: "Our major tech & engineering development hub.",
      color: "bg-[#33FF57]",
      glow: "rgba(51, 255, 87, 0.8)",
      flag: "/assets/flags/pakistan.png",
      address: "Shahrah-e-Faisal, Karachi",
      email: "karachi@company.com",
      phone: "+92 300 1234567",
      style: "top-[49%] left-[71%]",
    },
    {
      name: "Riyadh",
      description: "Serving the GCC region with localized services.",
      color: "bg-[#FF3333]",
      glow: "rgba(255, 51, 51, 0.8)",
      flag: "/assets/flags/saudi.png",
      address: "King Fahd Road, Riyadh, KSA",
      email: "riyadh@company.com",
      phone: "+966 500 123456",
      style: "top-[49%] left-[66.3%]",
    },
    {
      name: "London",
      description: "UK regional office for Europe operations.",
      color: "bg-[#FF33A6]",
      glow: "rgba(255, 51, 166, 0.8)",
      flag: "/assets/flags/uk.png",
      address: "Baker Street, London, UK",
      email: "london@company.com",
      phone: "+44 20 1234 5678",
      style: "top-[32.4%] left-[55.8%]",
    },
    {
      name: "Barcelona",
      description: "European creative and solutions design hub.",
      color: "bg-[#FF1E56]",
      glow: "rgba(255, 30, 86, 0.8)",
      flag: "/assets/flags/spain.png",
      address: "La Rambla, Barcelona, Spain",
      email: "barcelona@company.com",
      phone: "+34 61 123 4567",
      style: "top-[40%] left-[56.1%]",
    },
    {
      name: "Nairobi",
      description: "Serving East Africa regional clients.",
      color: "bg-[#FF9E0F]",
      glow: "rgba(255, 158, 15, 0.8)",
      flag: "/assets/flags/kenya.png",
      address: "Westlands, Nairobi, Kenya",
      email: "nairobi@company.com",
      phone: "+254 700 123456",
      style: "top-[61%] left-[64.4%]",
    },
    {
      name: "New York",
      description: "North America HQ located in NYC.",
      color: "bg-[#A633FF]",
      glow: "rgba(166, 51, 255, 0.8)",
      flag: "/assets/flags/usa.png",
      address: "Manhattan, New York, USA",
      email: "ny@company.com",
      phone: "+1 212 123 4567",
      style: "top-[39.5%] left-[39.59%]",
    },
    {
      name: "México City",
      description: "LATAM regional office based in Mexico.",
      color: "bg-[#339BFF]",
      glow: "rgba(51, 155, 255, 0.8)",
      flag: "/assets/flags/mexico.png",
      address: "Centro, CDMX",
      email: "mexico@company.com",
      phone: "+52 55 1234 5678",
      style: "top-[51.5%] left-[33%]",
    },
    {
      name: "Lima",
      description: "South American operations center.",
      color: "bg-[#33FF8A]",
      glow: "rgba(51, 255, 138, 0.8)",
      flag: "/assets/flags/peru.png",
      address: "Miraflores, Lima, Peru",
      email: "lima@company.com",
      phone: "+51 900 123456",
      style: "top-[67%] left-[38.2%]",
    },
  ];

  return (
  <div className="bg-black relative w-full  ">
      <div className="max-w-5xl mx-auto flex justify-center items-center flex-col gap-8 bg-black">
        <div>
            <h1 className="font-normal text-[50px] text-[#0099FF]">Global <span className="text-white">Presence</span></h1>
        </div>
        <Image
          src="/assets/map.png"
          alt="world map"
          width={1421}
          height={781}
          className="object-cover opacity-80"
        />

        </div>
  </div>
    
    //  <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
    //     <Container>
    //             <Image
    //     src="/assets/map.png"
    //     alt="world map"
    //     width={100}
    //     height={781}
    //     className="w-[90vw] object-cover opacity-80"
    //   />
    //   {cities.map((city, i) => (
    //     <div
    //       key={i}
    //       className={`absolute ${city.style} transform -translate-x-1/2 -translate-y-1/2`}
    //     >
    //       <MapMarker
    //         city={city}
    //         activeCity={activeCity}
    //         setActiveCity={setActiveCity}
    //       />
    //     </div>
    //     ))}

    //     </Container>
    // </div>
  );
}
