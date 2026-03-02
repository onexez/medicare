import Link from "next/link";
import React from "react";

import services from "@/app/JsonData/Service.json";
import Image from "next/image";
import arrowBtn from "@/public/arrow-icon.svg";
import Appiontment from "@/public/sub-contact.jpg";

function Service() {
  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] borter-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Merienda'>Service</h2>
        <div className='flex gap-2 text-2xl'>
          <Link href='/'>Home</Link>
          <span>/ Service</span>
        </div>
      </div>
      <div className='px-[8%] lg:px-[12%] pb-10'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service) => (
            <div key={service.id} className='service-card shadow-md rounded-3xl p-6 text-center hover:shadow-xl transition-all duration-300'>
              <Link href={`UI-Components/Service/serviceDetails/${service.id}`}>
                <div className='flex items-center gap-2 mb-2'>
                  <div className='service-icon rounded-full w-18 h-18 flex items-center justify-center'>
                    <Image src={service.titleImage} alt={service.title} width={100} height={100} className='w-8 h-8 object-contain invert' />
                  </div>
                  <h3 className='text-xl Unbounded font-bold mb-3'>{service.title}</h3>
                </div>
                <p className='text-gray-400 mb-5 text-start text-lg leading-relaxed'>{service.desc}</p>
                <div className='relative rounded-2xl overflow-hidden mb-5'>
                  <Image src={service.image} alt={service.title} width={400} height={100} className='object-cover rounded-2xl' />
                  <button className='absolute service-btn btns mt-2 md:mt-0 font-semibold Unbounded bg-(--prim-color2) text-black flex items-center gap-2 px-5 py-3 rounded-full hover:text-white transition-all duration-300 cursor-pointer'>
                    Read More
                    <Image src={arrowBtn} alt='arrowBtn' />
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className='w-full mt-10 relative flex flex-col-reverse lg:flex-row justify-between items-center gap-2'>
          <div className='w-full lg:w-1/1'>
            <Image src={Appiontment} alt='Appointment' className='rounded-2xl' />
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
                  type='Phone'
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

export default Service;
