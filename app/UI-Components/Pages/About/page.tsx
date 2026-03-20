"use client";

import Link from "next/link";
import About from "../../Index/About/About";
import Feature from "../../Index/Feature/Feature";
import WhyChoseUs from "../../Index/WhyChoseUs/WhyChoseUs";
import SpaicalCare from "../../Index/Spaical-Care/SpaicalCare";
import Testimonial from "../../Index/Testimonial/Testimonial";

function page() {
  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] borter-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Unbounded'>О нас</h2>
        <div className='flex gap-2 text-2xl Unbounded'>
          <Link href='/'>Главная</Link>
          <span>/ О нас</span>
        </div>
      </div>
      <About />
      <Feature />
      <WhyChoseUs />
      <SpaicalCare />
      <Testimonial />
    </>
  );
}

export default page;
