import Link from "next/link";
import React from "react";
import Blogs from "@/app/JsonData/Blog.json";
import arrowBtn from "@/public/arrow-icon.svg";
import Image from "next/image";

function Blog() {
  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] borter-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Unbounded'>Блог</h2>
        <div className='flex gap-2 text-2xl Unbounded'>
          <Link href='/'>Главная</Link>
          <span>/ Детали проектов</span>
        </div>
      </div>
      <div className='px-[8%] lg:px-[12%] py-15'>
        <div className='flex flex-col lg:flex-row justify-between gap-5'>
          <div className='w-full lg:w-1/1'>
            <div className='flex flex-col gap-5'>
              {Blogs.map((blog, index) => (
                <div key={index} className=''>
                  <Link href={`/UI-Components/Blogs/blogDetails?id=${blog.id}`}>
                    <div className='blog-card rounded-2xl p-5 md:p-12'>
                      <div className='blog-img overflow-hidden rounded-2xl relative'>
                        <Image src={blog.image} alt={blog.title} width={500} height={500} className='w-full object-contain rounded-2xl' />
                        <div className='absolute bottom-5 right-5 z-50'>
                          <i className='bi bi-calendar3 px-2 py-1 rounded-full text-black bg-white'></i>
                          <span className='bg-white rounded-full text-black px-4 py-1 ms-1'>{blog.date} </span>
                        </div>
                      </div>
                      <div className='blog-content mt-8'>
                        <div className='flex items-center gap-4'>
                          <span className='text-gray-300'>
                            <i className='bi bi-person-fill text-(--prim-color) pe-1'></i>Admin
                          </span>
                          <span className='text-gray-300'>
                            <i className='bi bi-folder-symlink-fill text-(--prim-color) pe-1'></i>Category
                          </span>
                        </div>
                        <h2 className='Unbounded text-2xl mt-4 hover:text-(--prim-color) transition-all duration-300'>{blog.title}</h2>
                        <p className='text-gray-400 text-lg mb-4 mt-2'>{blog.pere}</p>
                        <button className='btns mt-2 md:mt-0 font-semibold Unbounded border border-gray-200 hover:border-transparent text-white flex items-center gap-2 px-5 py-3 rounded-full hover:text-white transition-all duration-500 cursor-pointer'>
                          Read More
                          <Image src={arrowBtn} alt='arrowBtn' className='invert' />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
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

export default Blog;
