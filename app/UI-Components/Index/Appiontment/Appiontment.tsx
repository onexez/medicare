import React from "react";
import Image from "next/image";
import apoentment from "@/public/apoentment.jpg";
import arrowBtn from "@/public/arrow-icon.svg";

function Appiontment() {
  return (
    <>
      <div className='px-[8%] lg:px-[12%] lg:py-15'>
        <div className='w-full relative flex flex-col-reverse lg:flex-row justify-between items-center gap-2'>
          <div className='w-full lg:w-1/1'>
            <Image src={apoentment} alt='Appointment' className='rounded-2xl' />
          </div>
          <div className='w-full lg:w-1/2 flex flex-col lg:absolute top-22 right-0 bg-white p-10 rounded-2xl'>
            <div className='title hero-title'>
              <span className='bg-(--prim-color2) text-black Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full'>Appiontment</span>
              <h1 className='text-[2rem] mt-5 text-black Unbounded '>
                Get an <span style={{ color: "#000", fontWeight: 400 }}>Appiontment</span>
              </h1>
            </div>
            <div className='flex flex-col mt-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <input
                  type='text'
                  placeholder='Your name'
                  className='w-full text-black bg-gray-200/60 border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-(--prim-color2)'
                />
                <input
                  type='email'
                  placeholder='Your email'
                  className='w-full text-black bg-gray-200/60 border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-(--prim-color2)'
                />
                <input
                  type='number'
                  placeholder='Phone number'
                  className='w-full text-black bg-gray-200/60 border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-(--prim-color2)'
                />
                <input
                  type='text'
                  placeholder='Subject'
                  className='w-full text-black bg-gray-200/60 border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-(--prim-color2)'
                />
              </div>
              <textarea
                rows={6}
                placeholder='Message'
                className='mt-4 w-full text-black bg-gray-200/60 border border-gray-300 p-3 rounded-xl focus:outline-none focus:border-(--prim-color2)'
              ></textarea>
              <button className='flex gap-2 px-5 py-3 justify-between btns text-white bg-black text-xl mt-5 Unbounded w-full rounded-full'>
                Make Appoinment
                <Image src={arrowBtn} alt='ArrowBtn' className='invert' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appiontment;
