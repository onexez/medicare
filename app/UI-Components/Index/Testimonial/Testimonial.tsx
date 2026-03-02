"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import arrowBtn from "@/public/arrow-icon.svg";
import { NavigationOptions } from "swiper/types";

function Testimonial() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;
      const navigation = swiper.params.navigation as NavigationOptions;

      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);
  return (
    <>
      <div className='px-[8%] lg:px-[12%] py-15'>
        <div className='testimoial relative bg-(--prim-color2) rounded-2xl text-black'>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            speed={1000}
            loop
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            modules={[Autoplay, Navigation]}
            navigation={{}}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <div className='flex flex-col gap-3 px-10 lg:px-50 py-15'>
                <span className='text-xl'>Clients Testimonial</span>
                <h2 className='Unbounded text-3xl lg:text-6xl'>
                  What Our Users <br /> Are Saying
                </h2>
                <p className='w-full lg:w-[90%] text-xl my-2'>
                  Health is wealth, and in the realm of medical health, every life matters. It is a encompasses a wide range of specialties aimed at
                  diagnosing, treating, and preventing diseases and maintaining overall well-being. Medical health for a professionals dedicate their
                  lives to providing care
                </p>
                <h5 className='text-xl font-bold'>——— Mukesh Kumer</h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3 px-10 lg:px-50 py-15'>
                <span className='text-xl'>Clients Testimonial</span>
                <h2 className='Unbounded text-3xl lg:text-6xl'>
                  What Our Users <br /> Are Saying
                </h2>
                <p className='w-full lg:w-[90%] text-xl my-2'>
                  Health is wealth, and in the realm of medical health, every life matters. It is a encompasses a wide range of specialties aimed at
                  diagnosing, treating, and preventing diseases and maintaining overall well-being. Medical health for a professionals dedicate their
                  lives to providing care
                </p>
                <h5 className='text-xl font-bold'>——— Mukesh Kumer</h5>
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            ref={prevRef}
            className='swiper-btn absolute top-[80%] lg:top-1/2 left-10 -translate-y-1/2 z-50 w-14 h-14 rounded-full border border-black flex items-center justify-center cursor-pointer'
          >
            <Image src={arrowBtn} alt='prev' className='rotate-180' />
          </div>

          <div
            ref={nextRef}
            className='swiper-btn absolute top-[80%] lg:top-1/2 right-10 -translate-y-1/2 z-50 w-14 h-14 rounded-full border border-black flex items-center justify-center cursor-pointer'
          >
            <Image src={arrowBtn} alt='next' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
