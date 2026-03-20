"use client";
import Link from "next/link";
import Image from "next/image";
import arrowBtn from "@/public/arrow-icon.svg";
import DoctorData from "@/app/JsonData/Doctors.json";
import Apoentment from "@/public/sub-contact.jpg";

function Doctor() {
  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] borter-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Unbounded'>Доктора</h2>
        <div className='flex gap-2 text-2xl Unbounded'>
          <Link href='/'>Главная</Link>
          <span>/ Доктора</span>
        </div>
      </div>
      <div className='px-[8%] lg:px-[12%]'>
        {/* Card 1 */}
        {DoctorData.map((doctor, index) => (
          <Link key={index} href={`/UI-Components/Pages/blogDetails?id=${doctor.id}`}>
            <div className='feature border-t border-gray-500 cursor-pointer py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-5'>
              <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-col gap-2'>
                  <h2 className='Unbounded text-3xl'>{doctor.name}</h2>
                  <h4>{doctor.type}</h4>
                </div>
                <div className='flex flex-col'>
                  <p className='flex items-center text-gray-400'>{doctor.desc}</p>
                  <p className='flex items-center text-gray-400'>{doctor.desc2}</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10'>
                  <div className='w-full h-full md:flex items-center gap-5'>
                    <Image src={doctor.image} width={200} height={200} alt={doctor.name} className='feature-image rounded-2xl' />
                  </div>
                  <div className='flex flex-col'>
                    <button className='btns flex Unbounded bg-white text-black gap-2 px-5 py-3 rounded-full hover:text-white transition-all duration-500 cursor-pointer md:text-[11px]'>
                      Read more
                      <Image src={arrowBtn} alt='ArrowBtn' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Doctor;
