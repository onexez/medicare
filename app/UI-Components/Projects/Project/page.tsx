import Link from "next/link";
import React from "react";
import ProjectsData from "@/app/JsonData/Projects.json";
import arrowBtn from "@/public/arrow-icon.svg";
import Image from "next/image";
import SpaicalCare from "../../Index/Spaical-Care/SpaicalCare";

function Projects() {
  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] borter-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Unbounded'>Проекты</h2>
        <div className='flex gap-2 text-2xl Unbounded'>
          <Link href='/'>Главная</Link>
          <span>/ Проекты</span>
        </div>
      </div>
      <div className='px-[8%] lg:px-[12%]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20'>
          {ProjectsData.slice(0, 6).map((project, index) => (
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

      <div className='mt-10'>
        <SpaicalCare />
      </div>
    </>
  );
}

export default Projects;
