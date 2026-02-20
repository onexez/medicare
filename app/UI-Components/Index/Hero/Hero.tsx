import React from "react";
import Image, { StaticImageData } from "next/image";
import arrowBtn from "@/public/arrow-icon.svg";
import heroShape1 from "@/public/dots-element.png";
import heroShape2 from "@/public/hero-shape-2.png";
import heroShape3 from "@/public/circle-element.png";
import hero1 from "@/public/hero1.jpg";
import Ficon1 from "@/public/f-icon1.png";
import Ficon2 from "@/public/f-icon2.png";
import Ficon3 from "@/public/f-icon3.png";

type HeroCardType = {
  title: string;
  image: StaticImageData;
};

const HeroCard: HeroCardType[] = [
  {
    title: "Your health our priority wellness Healing with heart",
    image: Ficon1,
  },
  {
    title: "A healthy tomorrow starts today Where health meets hope",
    image: Ficon2,
  },
  {
    title: "Your health our priority wellness Healing with heart",
    image: Ficon3,
  },
];

function Hero() {
  return (
    <>
      <div className='px-[8%] lg:px-[12%] py-15 relative'>
        <Image src={heroShape1} alt='heroShape1' className='hero-shape1 w-50 absolute -top-30 right-30 -z-1' />
        <Image src={heroShape2} alt='heroShape2' className='hero-shape2 absolute top-0 -left-10 -z-1' />
        <Image src={hero1} alt='Hero' className='w-full h-full rounded-2xl object-contain' />
        <Image
          src={heroShape3}
          alt='heroShape3'
          className='hero-circle-text hidden lg:block bg-(--prim-color2) rounded-full p-3 w-42.5  absolute -top-20 left-[60%]'
        />
        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {HeroCard.map((card, index) => (
            <div key={index} className='hero-card flex flex-col cursor-pointer'>
              <Image src={card.image} alt={card.title} className='invert' />
              <h2 className='text-2xl mt-5 mb-2 text-gray-400 Merienda hover:text-white transition all duration-200'>
                {card.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
