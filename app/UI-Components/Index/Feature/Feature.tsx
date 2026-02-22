import React from "react";
import Image from "next/image";

import Ficon1 from "@/public/f-icon1.png";
import Ficon2 from "@/public/f-icon2.png";
import Ficon3 from "@/public/f-icon3.png";
import feature1 from "@/public/feature1.jpg";
import feature2 from "@/public/feature2.jpg";
import feature3 from "@/public/feature3.jpg";
import arrowBtn from "@/public/arrow-icon.svg";

function Feature() {
  return (
    <>
      <div className='px-[8%] lg:px-[12%] py-15'>
        <div className='features rounded-2xl p-8'>
          <div className='w-full lg:w-1/2'>
            <div className='title hero-title w-full'>
              <span className='bg-(--prim-color2) text-black Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full'>Our Feature</span>
              <h1 className='text-[2.5rem] mt-5 Unbounded '>
                Compassionate Care Health <span style={{ fontWeight: "400" }}> Exceptional </span> Results
              </h1>
            </div>
          </div>
          {/* Card */}
          <div className='feature-card border-t border-b border-gray-500 cursor-pointer py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
              <div className='flex items-center gap-5'>
                <div className='bg-(--prim-color2) p-3 rounded-full '>
                  <Image src={Ficon1} alt='Ficon1' className=' w-10' />
                </div>
                <h2 className='Unbounded text-3xl'>
                  Quality Care <br /> Exceptional Service
                </h2>
              </div>
              <div className='flex flex-col'>
                <p className='flex items-center text-gray-400'>
                  <span className='text-3xl text-gray-400 mr-2'>•</span>Your Health, Our Priority
                </p>
                <p className='flex items-center text-gray-400'>
                  <span className='text-3xl text-gray-400 mr-2'>•</span>Harmony Health
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10'>
              <div className='hidden md:flex items-center gap-5'>
                <Image src={feature1} alt='feature1' className='feature-image rounded-2xl' />
              </div>
              <div className='flex flex-col'>
                <button className='btns flex Unbounded bg-white text-black gap-2 px-5 py-3 rounded-full hover:text-white transition-all duration-500 cursor-pointer'>
                  Read more
                  <Image src={arrowBtn} alt='ArrowBtn' />
                </button>
              </div>
            </div>
          </div>
          {/* Card2 */}
          <div className='feature-card border-t border-b border-gray-500 cursor-pointer py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
              <div className='flex items-center gap-5'>
                <div className='bg-(--prim-color2) p-3 rounded-full'>
                  <Image src={Ficon2} alt='Ficon2' className='w-10' />
                </div>
                <h2 className='Unbounded text-3xl'>
                  Healing Lives One <br /> Patient at a Time
                </h2>
              </div>
              <div className='flex flex-col'>
                <p className='flex items-center text-gray-400'>
                  <span className='text-3xl text-gray-400 mr-2'>•</span>Your Health, Our Priority
                </p>
                <p className='flex items-center text-gray-400'>
                  <span className='text-3xl text-gray-400 mr-2'>•</span>Harmony Health
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10'>
              <div className='hidden md:flex items-center gap-5'>
                <Image src={feature2} alt='feature2' className='feature-image rounded-2xl' />
              </div>
              <div className='flex flex-col'>
                <button className='btns flex Unbounded bg-white text-black gap-2 px-5 py-3  rounded-full hover:text-white transition-all duration-500 cursor-pointer'>
                  Read more
                  <Image src={arrowBtn} alt='ArrowBtn' />
                </button>
              </div>
            </div>
          </div>
          {/* Card3 */}
          <div className='feature-card border-t border-b border-gray-500 cursor-pointer py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
              <div className='flex items-center gap-5'>
                <div className='bg-(--prim-color2) p-3 rounded-full'>
                  <Image src={Ficon3} alt='Ficon3' className='w-10' />
                </div>
                <h2 className='Unbounded text-3xl'>
                  Caring for You <br /> Care for Tomorrow
                </h2>
              </div>
              <div className='flex flex-col'>
                <p className='flex items-center text-gray-400'>
                  <span className='text-3xl text-gray-400 mr-2'>•</span>Your Health, Our Priority
                </p>
                <p className='flex items-center text-gray-400'>
                  <span className='text-3xl text-gray-400 mr-2'>•</span>Harmony Health
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10'>
              <div className='hidden md:flex items-center gap-5'>
                <Image src={feature3} alt='feature3' className='feature-image rounded-2xl' />
              </div>
              <div className='flex flex-col'>
                <button className='btns flex Unbounded bg-white text-black gap-2 px-5 py-3  rounded-full hover:text-white transition-all duration-500 cursor-pointer'>
                  Read more
                  <Image src={arrowBtn} alt='ArrowBtn' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
