import React from "react";
import Image from "next/image";
import arrowBtn from "@/public/arrow-icon.svg";
import heroShape1 from "@/public/hero-shape-1.png";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className='px-[8%] lg:px-[20%] py-15 relative'>
        <Image src={heroShape1} alt='heroShape' className='absolute top-0 right-0' />
        <Image src={heroShape1} alt='heroShape' className='absolute top-0 right-0' />
        <Image src={heroShape1} alt='heroShape' className='absolute top-0 right-0' />
        <Image src={heroShape1} alt='heroShape' className='absolute top-3 left-0 -rotate-90' />
        <Image src={heroShape1} alt='heroShape' className='absolute top-3 left-0 -rotate-90' />
        <Image src={heroShape1} alt='heroShape' className='absolute top-3 left-0 -rotate-90' />
        <span className='bg-(--prim-color2) text-black Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full'>Madical Care</span>
        <div className='hero-title w-[70%] my-5'>
          <h1 className='text-7xl leading-25 Unbounded '>
            Trusted <span> Medical </span> care near you, supporting <span> health </span> each day
          </h1>
        </div>
        <div className='flex items-center gap-5'>
          <button className='btns bg-white text-black gap-2 px-5 py-3 rounded-full hover:text-white transition-all duration-500 cursor-pointer'>
            <Link className='flex items-center Unbounded' href='UI-Components/Pages/Contact'>
              Make Appoinment
              <Image src={arrowBtn} alt='ArrowBtn' className='ms-3' />
            </Link>
          </button>
          <span className='Unbounded cursor-pointer play-btn'>
            <i className=' bi bi-play-fill mr-2 text-2xl bg-(--prim-color) px-3 py-2 rounded-full'></i>
            Play Now
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
