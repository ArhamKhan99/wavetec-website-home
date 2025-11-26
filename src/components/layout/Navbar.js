"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMoon, FaSun, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import LanguageDropdown from "@/components/common/LanguageDropdown";
import Container from "../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/slices/themeSlice";
import { useTemplate } from "@/hooks/useTemplate";
import { templateBackground } from "@/utils/config";
import { SlugIds } from "@/utils/config";
import { mapApiMenuData } from "@/utils/helper";

// ✅ Centralized Menu Configuration


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [hoverMenu, setHoverMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const hoverTimer = useRef(null);
  const template = useTemplate();
  const bgImage = templateBackground[template];

  // ✅ Initialize dark mode only once
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    dispatch(setTheme(isDark ? "dark" : "light"));
  }, []);

  // ✅ Dark mode toggle (useCallback to prevent re-renders)
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      dispatch(setTheme(next ? "dark" : "light"));
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  }, []);

  // ✅ Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Hover menu logic (optimized)
  const showMenu = useCallback((title) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHoverMenu(title);
  }, []);

  const hideMenu = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHoverMenu(null), 150);
  }, []);

  // ✅ Handle mobile accordion menu
  const toggleMobileMenu = useCallback((title) => {
    setExpandedMenu((prev) => (prev === title ? null : title));
  }, []);

  const MENU_ITEMS=mapApiMenuData(SlugIds)
  console.log(MENU_ITEMS)

  return (
    // <header
    //   role="banner"
    //   className={`relative z-50 transition-all bg-transparent ${
    //     isSticky ? `shadow-md ${template==="industries" ? "bg-background" : "bg-background-two"}` : `${template==="industries" ? "bg-background" : "bg-background-two"}`
    //   }`}
    // >
    <header
  role="banner"
  className={`fixed top-0 left-0  w-full z-50 transition-all duration-300 
    ${isSticky 
      ? `shadow-md ${template === "industries" ? "bg-background" : "bg-background-two"}`
      : "bg-transparent"
    }`
  }
>
      {/* ✅ Background Image */}
      {/* {!isSticky && (
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={bgImage}
            alt="Background"
            fill
            priority
            className="object-cover  pointer-events-none dark:opacity-20"
          />
        </div>
      )} */}

      {/* ✅ Navbar Container */}
      <Container>
        <div className="relative z-10 mx-auto flex items-center justify-between py-4  ">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Go to homepage">
            <Image
              src="/assets/logo.png"
              alt="Wavetec Logo"
              width={140}
              height={40}
              priority
            />
          </Link>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {MENU_ITEMS.map((item) =>
              item.url ? (
                <Link
                  key={item.title}
                  href={item.url}
                  className="py-2 text-[16px] font-semibold text-[#414651] hover:text-[#155EEF] dark:text-gray-100"
                >
                  {item.title}
                </Link>
              ) : (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => showMenu(item.title)}
                  onMouseLeave={hideMenu}
                >
                  <button
                    className="flex items-center gap-1 text-base font-semibold text-[#414651] dark:text-gray-100"
                    aria-haspopup="true"
                    aria-expanded={hoverMenu === item.title}
                  >
                    {item.title}
                    <FaChevronDown className="ml-1 h-3.5 w-3.5 opacity-80" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute -left-60 z-99 top-8 mt-2 min-w-[800px] rounded-xl border border-gray-200 bg-white/95 p-6 shadow-2xl backdrop-blur-lg dark:border-gray-700 dark:bg-[#0C0E12]/95 transition-all duration-200 ${
                      hoverMenu === item.title
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 -translate-y-2"
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-3">
                      {item.links?.map((link) => (
                        <Link
                          key={link.label}
                          href={link.url}
                          className="flex items-center gap-2 rounded-md p-3 text-sm font-medium text-[#414651] hover:bg-gray-50 hover:text-[#155EEF] dark:text-[#CECFD2] dark:hover:bg-[#1D2939]"
                        >
                          <span className="text-[18px] text-[#155EEF] dark:text-blue-400">
                            {link.icon}
                          </span>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          {/* ✅ Right Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500 text-lg" />
              ) : (
                <FaMoon className="text-gray-700 dark:text-gray-200 text-lg" />
              )}
            </button>

            <div className="hidden lg:block">
              <LanguageDropdown />
            </div>

            <button className="hidden lg:flex bg-[#155EEF] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Book a free demo
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden rounded-full border border-gray-300 p-2 dark:text-white dark:border-gray-700"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </Container>

      {/* ✅ Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#FFFDF6] dark:bg-[#0C0E12] border-t border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-4">
            {MENU_ITEMS.map((item) =>
              item.url ? (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[16px] font-semibold text-[#1D1D1D] dark:text-white"
                >
                  {item.title}
                </Link>
              ) : (
                <div key={item.title}>
                  <button
                    onClick={() => toggleMobileMenu(item.title)}
                    className="flex w-full items-center justify-between font-semibold text-[#1D1D1D] dark:text-white"
                  >
                    {item.title}
                    <FaChevronDown
                      className={`transition-transform ${
                        expandedMenu === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedMenu === item.title && (
                    <div className="mt-2 pl-3 space-y-1">
                      {item.links?.map((link) => (
                        <Link
                          key={link.label}
                          href={link.url}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-[#414651] hover:text-[#155EEF] dark:text-[#CECFD2]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}

            <button className="w-full rounded-lg bg-[#155EEF] px-4 py-2 font-medium text-white hover:bg-blue-700 transition">
              Book a free demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
