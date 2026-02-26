import Image from "next/image";
import React from "react";

import arrowBtn from "@/public/arrow-icon.svg";
import Projects from "@/app/JsonData/Projects.json";
import Link from "next/link";

function Project() {
  return (
    <>
      <div className='px-[8%] lg:px-[12%] py-15 pb-0 lg:pb-15'>
        <div className='w-full justify-center items-center'>
          <div className='title hero-title text-center w-full mb-10'>
            <span className='bg-(--prim-color2) text-black Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full'>Latest Project</span>
            <h1 className='text-[2.5rem] mt-5 Unbounded '>
              Healing Lives One Patient <br /> at Time Trusted <span style={{ fontWeight: "400" }}> Results.</span>
            </h1>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
          {Projects.slice(0, 6).map((project, index) => (
            <Link key={index} href={`/UI-Components/Projects/brojectsDetails?id=${project.id}`}>
              <div className='project-card cursor-pointer flex flex-col mb-5' key={index}>
                <div className='project-image relative rounded-2xl overflow-hidden w-full'>
                  <Image src={project.image} alt={project.title} width={900} height={800} className='w-full h-full' />
                  <Image src={arrowBtn} alt='arrowBtn' className='project-icon' />
                </div>
                <div className='flex flex-col mt-5'>
                  <div>
                    <span className='text-xl px-3 py-2 rounded-full bg-gray-700/50 Merienda font-normal'>{project.tag}</span>
                    <h2 className='Unbounded text-2xl mt-3'>{project.title}</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
