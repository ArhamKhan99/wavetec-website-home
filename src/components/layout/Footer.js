import React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "../common/Button";
// import ButtonOne from '../Buttons/ButtonOne';
// import ButtonTwo from '../Buttons/ButtonTwo';

const sections = [
  {
    title: "Product",
    links: [
      "Overview",
      "Features",
      "Solutions",
      "Tutorials",
      "Pricing",
      "Releases",
    ],
    badge: "Solutions",
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Newsletter",
      "Events",
      "Help centre",
      "Tutorials",
      "Support",
    ],
  },
  {
    title: "Use cases",
    links: [
      "Startups",
      "Enterprise",
      "Government",
      "SaaS centre",
      "Marketplaces",
      "Ecommerce",
    ],
  },
  {
    title: "Social",
    links: [
      "Twitter",
      "LinkedIn",
      "Facebook",
      "GitHub",
      "AngelList",
      "Dribbble",
    ],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-background text-white-foreground  py-10 ">
      <Container>
        {/* Top CTA */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Let’s get started on something great
          </h2>
          <p className="text-sm md:text-base mb-6 ">
            Join over 4,000+ companies already growing with Wavetec.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              className="
              w-full md:w-[120px]
    bg-[#ffff] 
    py-3 
    px-[18px]
    cursor-pointer
    border
    border-[#D5D7DA]
    font-semibold
    text-base
    rounded-lg
   text-[#414651]
  "
            >
              Chat to us
            </button>
            <button

              className="
              
              w-full md:w-[130px]
    bg-[#155EEF]
    py-3
    px-[18px]
    cursor-pointer
    border-2
    border-[#155EEF]
        shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05),0px_-2px_0px_0px_rgba(10,13,18,0.05),0px_0px_0px_1px_rgba(10,13,18,0.05)]

    
    rounded-lg
    text-white
  "
            >
              Get started
            </button>
            {/* <ButtonOne
              title={'Chat to us'}
              icon={null}
              className={'px-5 !py-2 rounded-lg font-semibold'}
            />
            <ButtonTwo
              title={'Get started'}
              className="btn-primary-color border hover:border !py-2 border-[#155EEF] cursor-pointer text-white px-5  rounded-lg font-semibold"
            /> */}
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm place-items-start text-white/90 mb-12 px-4">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="font-semibold text-sm mb-3 text-white leading-5 ">
                {section.title}
              </div>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="flex items-center text-base text-white font-semibold cursor-pointer hover:underline leading-6"
                  >
                    {link}
                    {section.badge === link && (
                      <span className="ml-2 text-xs bg-white text-blue-700 px-1 rounded">
                        New
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-start  gap-4 text-sm text-gray-100 px-4">
          <Image
            src="/assets/logo-white.png"
            alt="Logo"
            width={100}
            height={24}
            className="h-6 w-auto"
            priority
          />
          <span className="text-center sm:text-left">
            © 2025 Wavetec. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
