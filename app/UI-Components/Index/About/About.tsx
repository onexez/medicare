import React from "react";
import Image, { StaticImageData } from "next/image";
import AboutImg from "@/public/about.png";
import heroShape1 from "@/public/about-element1.png";
import heroShape2 from "@/public/about-element2.png";
import heroShape3 from "@/public/dots-element.png";
import heroShape4 from "@/public/about-element3.png";

function About() {
  return (
    <>
      <div className='px-[8%] lg:px-[12%] py-15 pb-0 lg:pb-15'>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5'>
          <div className='w-full lg:w-1/2'>
            <div className='title hero-title'>
              <span className='bg-(--prim-color2) text-black Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full'>About</span>
              <h1 className='text-[2rem] mt-5 Unbounded '>
                Compassionate Care Always There <span> Health </span> First
              </h1>
              <p className='mt-5 text-gray-400'>
                Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive care to treatment of
                cuses on promoting
              </p>
              <div className='flex flex-col mt-10'>
                <div className='flex flex-col gap-2 mb-10'>
                  <div className='flex gap-5'>
                    <h2 className='Unbounded text-2xl md:text-3xl'>01</h2>
                    <h2 className='Unbounded text-2xl md:text-3xl'>Enhancing Lives Through Care</h2>
                  </div>
                  <p className='ps-5 text-gray-400'>
                    Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive care to
                    treatment of cuses on promoting
                  </p>
                  <div className='flex gap-5'>
                    <h2 className='Unbounded text-2xl md:text-3xl'>02</h2>
                    <h2 className='Unbounded text-2xl md:text-3xl'>Tomorrow's Health, Today's Care</h2>
                  </div>
                  <p className='ps-5 text-gray-400'>
                    Health care is a vital aspect of maintaining overall well-being, encompassing a range of services from preventive care to
                    treatment of cuses on promoting
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 relative'>
            <Image src={AboutImg} alt='AboutImg' className='about-img' />
            <Image src={heroShape4} alt='heroShape4' className='absolute bottom-0 left-3 lg:-left-10 -z-1' />
            <Image src={heroShape1} alt='heroShape1' className='about-ele1 hidden lg:block absolute bottom-0 -left-20' />
            <Image src={heroShape2} alt='heroShape2' className='about-ele2 hidden md:block absolute top-0 -left-30' />
            <Image src={heroShape2} alt='heroShape2' className='about-ele2 hidden lg:block absolute bottom-5 right-0' />
            <Image src={heroShape1} alt='heroShape1' className='about-ele1 hidden md:block absolute top-0 -right-20' />
            <Image src={heroShape3} alt='heroShape3' className='hero-shape1 w-62.5 lg:block absolute top-10 left-25 -z-1' />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
