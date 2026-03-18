"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  {
    label: "Услуги",
    href: "/UI-Components/Servece",
    dropdown: [
      { label: "Service", href: "/UI-Components/Service" },
      { label: "Service Details", href: "/UI-Components/Service/ServiceDetails?id=1" },
    ],
  },
  {
    label: "Проекты",
    href: "/UI-Components/Projects",
    dropdown: [
      { label: "Projects", href: "/UI-Components/Projects" },
      { label: "Project Details", href: "/UI-Components/Projects/ProjectsDetails?id=2" },
    ],
  },
  {
    label: "Блог",
    href: "/UI-Components/Blogs",
    dropdown: [
      { label: "Blogs", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/Blogs/blogsDetails?id=1" },
    ],
  },
  {
    label: "Страницы",
    href: "/UI-Components/Pages/About",
    dropdown: [
      { label: "About", href: "/UI-Components/Pages/About" },
      { label: "Doctor", href: "/UI-Components/Pages/doctor" },
      { label: "Blog Details", href: "/UI-Components/Pages/doctorDetails?id=3" },
      { label: "Pricing", href: "/UI-Components/Pages/Pricing" },
    ],
  },
  { label: "Связь с нами", href: "/UI-Components/Pages/Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [isFixed, setIsFixed] = React.useState(false);
  const [navHeight, setNavHeight] = React.useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    // Measure real navbar height so placeholder matches exactly
    const updateHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);

    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
      updateHeight();
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Placeholder keeps page layout stable when navbar becomes fixed */}
      <div style={{ height: isFixed ? navHeight : 0 }} aria-hidden='true' />

      <div
        ref={navRef}
        className={`w-full bg-white shadow-sm transition-[box-shadow,background-color] py-4 lg:py-2 duration-300 ${
          isFixed ? "fixed top-0 left-0 right-0 z-50" : "relative z-10"
        }`}
      >
        <div className='flex items-center justify-between px-[8%] lg:px[12%] pb-2 lg:pb-0 text-gray-700'>
          {/* Logo */}
          <Link href='/' className='text-4xl font-bold Merienda text-black'>
            Medi <span className='text-(--prim-color)'>Care+</span>
          </Link>

          {/* Desktop nav — NOT TOUCHED */}
          <nav className='hidden lg:flex space-x-6 menu-link'>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className='relative group z-99999'>
                  <Link href={link.href} className='flex items-center gap 1 text-lg font-semibold Unbounded'>
                    {link.label} <i className='ri-arrow-down-s-line'></i>
                  </Link>
                  <div
                    className='absolute left-0 top-full opacity-0 scale-95 translate-y-2 pointer-events none group-hover:opacity-100 group-hover:scale-100 
                group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 bg-white border border-gray-100 rounded-lg min-w-37.5'
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className='block font-semibold px-3 py-2 rounded-md hover:bg-(--prim-color) hover:text-white transition-all Unbounded'
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link className='text-lg font-bold hover:text-(--prim-color) transition-colors' key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Call button — desktop */}
          <button className='nav-button items-center cursor-pointer font-bold p-3 hidden lg:flex'>
            <i className='bi bi-telephone pe-3 text-4xl'></i>
            <div className='flex flex-col items-start'>
              <p className='text-gray-500 font-medium Unbounded'>Нужна помощь?</p>
              (91)+123 456 789
            </div>
          </button>

          {/* Mobile hamburger — animated to X */}
          <div className='lg:hidden flex items-center'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label='Toggle menu'
              className='relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] focus:outline-none'
            >
              <span
                className={`block h-[2px] bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-6"
                }`}
              />
              <span
                className={`block h-[2px] bg-gray-700 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-6"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={closeMobileMenu}
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-400 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[80vw] max-w-xs bg-white z-50 shadow-2xl flex flex-col
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Panel header */}
        <div className='flex items-center justify-between px-6 py-5 border-b border-gray-100'>
          <Link href='/' onClick={closeMobileMenu} className='text-2xl font-bold Merienda text-black'>
            Medi <span className='text-(--prim-color)'>Care+</span>
          </Link>
          <button
            onClick={closeMobileMenu}
            className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
            aria-label='Close menu'
          >
            <i className='ri-close-line text-xl text-gray-700'></i>
          </button>
        </div>

        {/* Nav links */}
        <nav className='flex-1 overflow-y-auto px-4 py-4 space-y-1'>
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <div
                key={link.label}
                className='rounded-xl overflow-hidden'
                style={{
                  transitionDelay: mobileMenuOpen ? `${i * 60 + 80}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: "transform 0.4s ease, opacity 0.4s ease",
                }}
              >
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className='flex justify-between items-center w-full px-4 py-3 text-base font-bold text-gray-800 hover:bg-gray-50 rounded-xl transition-colors'
                >
                  <span>{link.label}</span>
                  <i
                    className={`ri-arrow-down-s-line text-lg text-gray-500 transition-transform duration-300 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {/* Accordion body */}
                <div
                  className={`overflow-hidden transition-all duration-350 ease-in-out ${
                    activeDropdown === link.label ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className='pl-4 pb-2 space-y-1'>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-(--prim-color) hover:bg-red-50 rounded-lg transition-all'
                      >
                        <span className='w-1 h-1 rounded-full bg-current opacity-50 shrink-0' />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={link.label}
                style={{
                  transitionDelay: mobileMenuOpen ? `${i * 60 + 80}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: "transform 0.4s ease, opacity 0.4s ease",
                }}
              >
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className='block px-4 py-3 text-base font-bold text-gray-800 hover:text-(--prim-color) hover:bg-gray-50 rounded-xl transition-all'
                >
                  {link.label}
                </Link>
              </div>
            ),
          )}
        </nav>

        {/* Call block at bottom */}
        <div
          className='px-6 py-5 border-t border-gray-100'
          style={{
            transitionDelay: mobileMenuOpen ? "400ms" : "0ms",
            transform: mobileMenuOpen ? "translateY(0)" : "translateY(12px)",
            opacity: mobileMenuOpen ? 1 : 0,
            transition: "transform 0.4s ease, opacity 0.4s ease",
          }}
        >
          <p className='text-xs text-gray-400 Unbounded mb-1'>Нужна помощь?</p>
          <a href='tel:+91123456789' className='flex items-center gap-3 font-bold text-gray-800 hover:text-(--prim-color) transition-colors'>
            <i className='bi bi-telephone text-xl'></i>
            <span>(91)+123 456 789</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
