"use client";

import Link from "next/link";
import React from "react";
import Blogs from "@/app/JsonData/Blog.json";
import defaltImg from "@/public/blogs-1.jpg";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import quote from "@/public/blog-quote.png";

function BlogDetails() {
  const params = useSearchParams();
  const idParams = params.get("id");

  const id = idParams ? String(idParams) : null;
  const blog = Blogs.find((b) => b.id === id);

  if (!blog) {
    <div className='p-10 text-center text-gray-500'>Blog not Found</div>;
  }
  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] borter-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Unbounded'>Блог</h2>
        <div className='flex gap-2 text-2xl Unbounded'>
          <Link href='/'>Главная</Link>
          <span>/ Детали Блога</span>
        </div>
      </div>
      <div className='px-[8%] lg:px-[12%] py-15'>
        <div className='flex flex-col lg:flex-row justify-between gap-5'>
          <div className='w-full lg:w-1/1'>
            <div className='flex flex-col gap-5'>
              <h2 className='Unbounded text-2xl lg:text-4xl leading-relaxed'>{blog?.title}</h2>
              <div className='flex items-center gap-4'>
                <span className='text-gray-300'>
                  <i className='bi bi-person-fill text-(--prim-color) pe-1'></i>Admin
                </span>
                <span className='text-gray-300'>
                  <i className='bi bi-folder-symlink-fill text-(--prim-color) pe-1'></i>Category
                </span>
              </div>
              <p className='text-gray-300'>{blog?.pere}</p>
              <p className='text-gray-300'>
                Medical services are an essential part of our lives, offering care and treatment for various health conditions. These are a services
                encompass a wide range of specialties, including primary care, pediatrics, cardiology Medical services are an essential part of our
                lives, offering care and treatment for various health conditions These services
              </p>
              <Image
                src={blog?.image || defaltImg}
                alt={blog?.title || "Blog image"}
                width={900}
                height={600}
                className='w-full object-contain rounded-2xl'
              />
              <h2 className='Unbounded text-3xl mt-5 text-white'>Serenity Health Center</h2>
              <p className='text-gray-400 mb-5'>
                Medical services are an essential part of our lives, offering care and treatment for various health conditions. These are a services
                encompass a wide range of specialties, including primary care, pediatrics, cardiology Medical services are an essential part of our
                lives, offering care and treatment for various health conditions These services
              </p>
              <div className='flex justify-between items-start rounded-2xl shadow-light p-8 gap-5'>
                <Image src={quote} alt='quote' width={80} height={80} />
                <div className='flex flex-col'>
                  <p className='text-gray-400'>
                    Medical care encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine
                    check-ups to life-saving surgeries, medical care plays a crucial role in ensuring the well-being of individuals and communities
                    Medical care encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine
                    check-ups to life-saving surgeries, medical care plays a crucial role in ensuring the well-being of individuals and communities
                  </p>
                </div>
              </div>
              <p className='text-gray-400 mb-5'>
                Medical care encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine
                check-ups to life-saving surgeries
              </p>
              <h2 className='Unbounded text-3xl my-5 text-white'>Senior Care Coordination </h2>
              <div className='flex flex-col mt-5'>
                <h2 className='Unbounded text-3xl my-5 text-white'>Координация ухода за пожилыми</h2>
                <div className='flex flex-col gap-2'>
                  <p className='text-lg'>
                    <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i> Стоматологические операции включают в себя различные
                    процедуры, выполняемые стоматологами
                  </p>
                  <p className='text-lg'>
                    <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i> Медицинские услуги являются неотъемлемой частью нашей
                    жизни, предлагая уход
                  </p>
                  <p className='text-lg'>
                    <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i> Эти услуги охватывают широкий спектр специальностей,
                    включая первичную помощь, педиатрию, кардиологию
                  </p>
                  <p className='text-lg'>
                    <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i> Укрепление здоровья, укрепление жизни. Экспертная помощь,
                    проверенные результаты
                  </p>
                </div>
                <h2 className='Unbounded text-3xl my-5 text-white'>Holistic Health Consulations</h2>
                <p className='text-gray-400 mb-5'>
                  Medical care encompasses a range of services aimed at promoting health, preventing disease, and treating illnesses. From routine
                  check-ups to life-saving surgeries
                </p>
                <p className='text-gray-400 mb-5'>
                  Medical services are an essential part of our lives, offering care and treatment for various health conditions. These are a services
                  encompass a wide range of specialties, including primary care, pediatrics, cardiology Medical services are an essential part of our
                  lives, offering care and treatment for various health conditions These services
                </p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/3 sticky top-25 left-0 h-full'>
            <div className='shadow-light rounded-xl p-5'>
              <h2 className='Unbounded text-2xl'>Category</h2>
              <div className='flex items-center justify-between gap-3 hover:text-(--prim-color) cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2'>
                <h2 className='Unbounded text-md'>Serenity Med</h2>
                <i className='bi bi-plus text-3xl px-1 bg-green-100 text-(--prim-color) rounded-full'></i>
              </div>
              <div className='flex items-center justify-between gap-3 hover:text-(--prim-color) cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2'>
                <h2 className='Unbounded text-md'>Serenity Health Center</h2>
                <i className='bi bi-plus text-3xl px-1 bg-green-100 text-(--prim-color) rounded-full'></i>
              </div>
              <div className='flex items-center justify-between gap-3 hover:text-(--prim-color) cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2'>
                <h2 className='Unbounded text-md'>Unity Health Services</h2>
                <i className='bi bi-plus text-3xl px-1 bg-green-100 text-(--prim-color) rounded-full'></i>
              </div>
              <div className='flex items-center justify-between gap-3 hover:text-(--prim-color) cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2'>
                <h2 className='Unbounded text-md'>Revive Medical Care</h2>
                <i className='bi bi-plus text-3xl px-1 bg-green-100 text-(--prim-color) rounded-full'></i>
              </div>
              <div className='flex items-center justify-between gap-3 hover:text-(--prim-color) cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2'>
                <h2 className='Unbounded text-md'>Harmony Hollstic Health</h2>
                <i className='bi bi-plus text-3xl px-1 bg-green-100 text-(--prim-color) rounded-full'></i>
              </div>
            </div>
            <div className='shadow-light rounded-xl p-5 mt-5'>
              <h2 className='Unbounded text-2xl'>Recent Post</h2>
              <div className='mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3'>
                {Blogs.map((blog, index) => (
                  <Link key={index} href={`/UI-Components/Blogs/blogDetails?id=${blog.id}`}>
                    <div className='flex flex-col border border-gray-500 rounded-b-md p-2 py-4'>
                      <Image src={blog.image} alt={blog.title} width={150} height={150} className='w-full rounded-md object-contain' />
                      <div className='flex items-center gap-4 mt-3 mb-2'>
                        <span className='text-gray-300'>
                          <i className='bi bi-person-fill text-(--prim-color) pe-1.5'></i>
                          Admin
                        </span>
                      </div>
                      <h2 className='Unbounded text-sm'>{blog.title}</h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className='shadow-light rounded-xl p-5 mt-5'>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='Unbounded text-2xl text-center'>Нужна помощь?</h2>
                <div className='my-5 bg-(--prim-color) px-8 py-7 rounded-full'>
                  <i className='bi bi-telephone-fill text-4xl text-white'></i>
                </div>
                <p className='text-center'>
                  Медицинская помощь — важный аспект поддержания общего благополучия, включающий широкий спектр услуг от профилактической помощ
                </p>
                <h2 className='Unbounded text-xl my-5 text-center'>(+91) 123 456 789</h2>
                <div className='flex gap-3'>
                  <i className='bi bi-instagram bg-gray-200/50 px-4 py-3 rounded-full hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer'></i>
                  <i className='bi bi-github bg-gray-200/50 px-4 py-3 rounded-full hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer'></i>
                  <i className='bi bi-threads bg-gray-200/50 px-4 py-3 rounded-full hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer'></i>
                  <i className='bi bi-behance bg-gray-200/50 px-4 py-3 rounded-full hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
