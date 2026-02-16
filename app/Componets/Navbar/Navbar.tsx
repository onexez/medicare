"use client";

import Link from "next/link";
import React, { useEffect } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Service",
    href: "/UI-Components/Servece",
    dropdown: [
      { label: "Servece", href: "/UI-Components/Servece" },
      { label: "Servece Details", href: "/UI-Components/serveceDetails?id=1" },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [isFixed, setIsFixed] = React.useState(false);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full bg-white z-99999 shadow-sm transition-all py-4 lg:py-2 duration-500 ${isFixed ? "fixed top-0 z-50 fixed-nav" : ""}`}
    >
      <div className='flex items-center justify-between px-[8%] lg:px[12%] pb-2 lg:pb-0 text-gray-700'>
        {/* Logo */}
        <Link href='/' className='text-4xl font-bold Merienda text-black'>
          Medi <span className='text-(--prim-color)'>Care+</span>
        </Link>

        {/* Desktop nav */}
        <nav className='hidden lg:flex space-x-6 menu-link'>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className='relative group z-99999'>
                <Link href={link.href} className='flex items-center gap 1 text-lg font-semibold '>
                  {link.label} <i className='ri-arrow-down-s-line'></i>
                </Link>
                {/* Smooth Dropdown */}
                <div
                  className='absolute left-0 top-full opacity-0 scale-95 translate-y-2 pointer-events none group-hover:opacity-100 group-hover:scale-100 
                group-hover:tra'
                ></div>
              </div>
            ) : (
              <Link
                className='text-lg font-semibold hover:text-blue-500 transition-colors'
                key={link.label}
                href={link.href}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
