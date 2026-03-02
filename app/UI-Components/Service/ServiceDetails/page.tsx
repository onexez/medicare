"use client";

import Link from "next/link";
import React from "react";

import services from "@/app/JsonData/Service.json";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function ServiceDetails() {
  const params = useSearchParams();
  const idParams = params.get("id");
  const id = idParams ? String(idParams) : null;

  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className='p-10 text-center text-gray-500'>Service not found</div>;
  }

  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Merienda'>Service Details</h2>
        <div className='flex gap-2 text-2xl'>
          <Link href='/' className=''>
            Home
          </Link>
          <span>/ Service Details</span>
        </div>
      </div>
      <div className='px-[8%] lg:px-[12%] py-10'>
        <div className='flex flex-col lg:flex-row justify-between gap-10'>
          <div className='w-full lg:w-1/1'>
            <div className='flex flex-col md:flex-row gap-10'>
              <div className='w-1/1'>
                <Image src={service.image} alt={service.title} width={800} height={800} className='rounded-lg mb-6 object-contain' />
              </div>
              <div className='w-1/1'>
                <div className='flex flex-col'>
                  <h2 className='Unbounded text-4xl'>{service.title}</h2>
                  <p className='text-gray-400 text-xl my-2'>{service.desc}</p>
                  <p className='text-gray-300 mt-2'>
                    Medical services are an essential part of our lives, offering care and treatment for various health conditions. These services
                    encompass a wide range of specialties, including primary care, pediatrics, cardiology
                  </p>
                  <p className='text-gray-300 hidden lg:block mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero dolor nam molestiae dignissimos quis, adipisci temporibus
                    ad consequuntur vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-5'>
              <p className='text-lg'>
                <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i>Dental operations involve various procedures performed by
                dentists
              </p>
              <p className='text-lg'>
                <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i>Medical services are an essential part of our lives, offering
                care
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetails;
