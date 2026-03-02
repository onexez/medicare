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
      { label: "Service", href: "/UI-Components/Service" },
      { label: "Service Details", href: "/UI-Components/Service/ServiceDetails?id=1" },
    ],
  },
  {
    label: "Project",
    href: "/UI-Components/Projects",
    dropdown: [
      { label: "Projects", href: "/UI-Components/Projects" },
      { label: "Project Details", href: "/UI-Components/Projects/brojectsDetails?id=2" },
    ],
  },
  {
    label: "Blogs",
    href: "/UI-Components/Blogs",
    dropdown: [
      { label: "Blogs", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/Blogs/blogsDetails?id=1" },
    ],
  },
  {
    label: "Pages",
    href: "/UI-Components/Pages/About",
    dropdown: [
      { label: "About", href: "/UI-Components/Pages/About" },
      { label: "Doctor", href: "/UI-Components/Pages/doctor" },
      { label: "Blog Details", href: "/UI-Components/Pages/doctorDetails?id=3" },
      { label: "Pricing", href: "/UI-Components/Pages/Pricing" },
    ],
  },
  { label: "Contact us", href: "/UI-Components/Pages/Contact" },
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
    <div className={`w-full bg-white z-99999 shadow-sm transition-all py-4 lg:py-2 duration-500 ${isFixed ? "fixed top-0 z-50 fixed-nav" : ""}`}>
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
                group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 bg-white border border-gray-100 rounded-lg min-w-37.5'
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='block font-semibold px-3 py-2 rounded-md hover:bg-(--prim-color) hover:text-white transition-all'
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
        {/* {Call button} */}
        <button className='nav-button items-center cursor-pointer font-bold p-3 hidden lg:flex'>
          <i className='bi bi-telephone pe-3 text-4xl'></i>
          <div className='flex flex-col items-start'>
            <p className='text-gray-500 font-medium'>Need Help?</p>
            (91)+123 456 789
          </div>
        </button>

        {/* Mobile Nav Header */}

        <div className='lg:hidden flex items-center justify-between gap-4'>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-2xl focus:outline-none'>
            <div className='flex items-center gap-x-8'>
              <i className='ri-menu-line'></i>
            </div>
          </button>
        </div>
      </div>
      {/* Mobile menu Smooth Transition */}

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-600px opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className='px-[8%] pb-6 space-y-4'>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className='space-y-2'>
                <button onClick={() => toggleDropdown(link.label)} className='flex justify-between w-full text-lg font-bold text-gray-700'>
                  {link.label}
                  <i className={`ri-arrow-down-s-line transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}></i>
                </button>

                <div className={`pl-4 space-y-2 transition-all duration-300 ${activeDropdown === link.label ? "block" : "hidden"}`}>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className='block text-gray-600 hover:text-(--prim-color)'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className='block text-lg font-semibold text-gray-700 hover:text-(--prim-color)'
              >
                {link.label}
              </Link>
            ),
          )}

          {/* Mobile Call Button */}
          <button className='flex items-center gap-3 mt-4 font-bold'>
            <i className='bi bi-telephone text-2xl'></i>
            <span>(91)+123 456 789</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
