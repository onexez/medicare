"use client";
import Link from "next/link";
import React from "react";
import ProjectData from "@/app/JsonData/Projects.json";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import projectDetails1 from "@/public/project-details1.jpg";
import projectDetails2 from "@/public/project-details2.jpg";

function ProjectsDetails() {
  const params = useSearchParams();

  const idParams = params.get("id");

  const project = ProjectData.find((p) => p.id === idParams);

  if (!project) {
    return <div className='p-10 text-center text-gray-500'>Project not found</div>;
  }

  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] borter-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Merienda'>Детали проектов</h2>
        <div className='flex gap-2 text-2xl'>
          <Link href='/'>Главная</Link>
          <span>/ Детали проектов</span>
        </div>
      </div>
      <div className='px-[8%] lg:px-[12%] py-10'>
        <div className='flex flex-col lg:flex-row justify-between gap-5'>
          <div className='w-full lg:w-1/2'>
            <Image src={project.image} alt={project.title} width={700} height={700} className='rounded-2xl object-contain' />
          </div>
          <div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
            <span className='Unbounded bg-gray-200/20 px-5 py-3 rounded-full'>{project.tag}</span>
            <h2 className='Unbounded text-4xl my-7'>{project.title}</h2>
            <p className='text-gray-300 mb-5'>{project.desc}</p>
            <p className='text-gray-300 mb-5'>{project.desc2}</p>
            <p className='text-gray-300 mb-5'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem tempora dignissimos nisi, ipsam error omnis quibusdam tenetur animi
              earum tempore illo explicabo accusamus magnam at consequuntur incidunt maxime. Reprehenderit, magnam.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-start lg:place-items-center mt-5 bg-white text-black p-8 rounded-xl'>
          <div className='flex flex-col'>
            <h2 className='Unbounded text-2xl'>Location</h2>
            <p className='text-lg mt-2'>Mirpur 10 Road 14 House</p>
          </div>
          <div className='flex flex-col'>
            <h2 className='Unbounded text-2xl'>Clients</h2>
            <p className='text-lg mt-2'>Jenny Wilson</p>
          </div>
          <div className='flex flex-col'>
            <h2 className='Unbounded text-2xl'>Website</h2>
            <p className='text-lg mt-2'>www.jennywilson.com</p>
          </div>
          <div className='flex flex-col'>
            <h2 className='Unbounded text-2xl'>Date</h2>
            <p className='text-lg mt-2'>16 August 2025</p>
          </div>
        </div>
        <p className='text-gray-300 my-8'>
          Medical care encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine check-ups
          to life-saving surgeries, medical care plays a crucial role in ensuring the well-being of individuals and communities Medical care
          encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine check-ups to life-saving
          surgeries, medical care plays a crucial role in ensuring the well-being of individuals and communities
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-2'>
            <Image src={projectDetails1} alt='projectDetails1' className='rounded-2xl' />
            <h2 className='Unbounded text-2xl mt-2'>Health Guardians</h2>
            <p className='text-gray-300'>
              Medical care encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine
              check-ups to life-saving surgeries
            </p>
            <p className='text-lg text-gray-300'>
              <i className='bi bi-chevron-double-right text-(--prim-color)'></i>Your Health, Our Priority
            </p>
            <p className='text-lg text-gray-300'>
              <i className='bi bi-chevron-double-right text-(--prim-color)'></i>Compassionate Care, Exceptional Results
            </p>
            <p className='text-lg text-gray-300'>
              <i className='bi bi-chevron-double-right text-(--prim-color)'></i>Healing Lives, Patients at a Time
            </p>
            <p className='text-lg text-gray-300'>
              <i className='bi bi-chevron-double-right text-(--prim-color)'></i>Empowering Health, Empowering Lives
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <Image src={projectDetails2} alt='projectDetails2' className='rounded-2xl' />
            <h2 className='Unbounded text-2xl mt-2'>Health Guardians</h2>
            <p className='text-gray-300'>
              Medical care encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine
              check-ups to life-saving surgeries
            </p>
            <p className='text-lg text-gray-300'>
              <i className='bi bi-chevron-double-right text-(--prim-color)'></i>Partnering for Better Health
            </p>
            <p className='text-lg text-gray-300'>
              <i className='bi bi-chevron-double-right text-(--prim-color)'></i>Compassionate Care, Exceptional Results
            </p>
            <p className='text-lg text-gray-300'>
              <i className='bi bi-chevron-double-right text-(--prim-color)'></i>Healing Lives, Patients at a Time
            </p>
            <p className='text-lg text-gray-300'>
              <i className='bi bi-chevron-double-right text-(--prim-color)'></i>Empowering Health, Empowering Lives
            </p>
          </div>
          <h2 className='Unbounded text-3xl mt-10 mb-5 text-white'>Health Matters We Care</h2>
        </div>
        <p className='text-gray-400 mb-5'>
          Medical services are an essential part of our lives, offering care and treatment for various health conditions. These are a services
          encompass a wide range of specialties, including primary care, pediatrics, cardiology Medical services are an essential part of our lives,
          offering care and treatment for various health conditions These services
        </p>
        <p className='text-gray-400 mb-5'>
          Medical care encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine check-ups
          to life-saving surgeries, medical care plays a crucial role in ensuring the well-being of individuals and communities Medical care
          encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine check-ups to life-saving
          surgeries, medical care plays a crucial role in ensuring the well-being of individuals and communities
        </p>
      </div>
    </>
  );
}

export default ProjectsDetails;
