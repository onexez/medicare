"use client";

import Link from "next/link";

import services from "@/app/JsonData/Service.json";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import flask from "@/public/flask.png";
import serum from "@/public/serum.png";

function ServiceDetails() {
  const params = useSearchParams();
  const idParams = params.get("id");
  const id = idParams ? String(idParams) : null;

  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className='p-10 text-center text-gray-500'>Услуга не найдена</div>;
  }

  return (
    <>
      <div className='section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center'>
        <h2 className='text-3xl md:mt-6xl Merienda'>Детали услуг</h2>
        <div className='flex gap-2 text-2xl'>
          <Link href='/' className=''>
            Главная
          </Link>
          <span>/ Детали услуг</span>
        </div>
      </div>
      <div className='px-[8%] lg:px-[12%] py-10'>
        <div className='flex flex-col lg:flex-row justify-between gap-5'>
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
                    Медицинские услуги являются неотъемлемой частью нашей жизни, предлагая уход и лечение различных состояний здоровья. Эти услуги
                    охватывают широкий спектр специальностей, включая первичную помощь, педиатрию, кардиологию
                  </p>
                  <p className='text-gray-300 hidden lg:block mt-2'>
                    Современные медицинские технологии позволяют эффективно выявлять и лечить множество заболеваний на ранних стадиях, что значительно
                    повышает качество жизни пациентов и уменьшает риск осложнений.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-5'>
              <h2 className='Unbounded text-3xl my-5 text-white'>Координация ухода за пожилыми</h2>
              <div className='flex flex-col gap-2'>
                <p className='text-lg'>
                  <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i> Стоматологические операции включают в себя различные
                  процедуры, выполняемые стоматологами
                </p>
                <p className='text-lg'>
                  <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i> Медицинские услуги являются неотъемлемой частью нашей жизни,
                  предлагая уход
                </p>
                <p className='text-lg'>
                  <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i> Эти услуги охватывают широкий спектр специальностей, включая
                  первичную помощь, педиатрию, кардиологию
                </p>
                <p className='text-lg'>
                  <i className='bi bi-chevron-double-right pe-1 text-green-500 mr-2'></i> Укрепление здоровья, укрепление жизни. Экспертная помощь,
                  проверенные результаты
                </p>
              </div>
              <h2 className='Unbounded text-3xl mt-10 mb-5 text-white'>Консультации по холистическому здоровью</h2>
              <p className='text-gray-400 text-lg mb-5'>
                Медицинские услуги являются неотъемлемой частью нашей жизни, предлагая уход и лечение различных состояний здоровья. Эти услуги
                охватывают широкий спектр специальностей, включая первичную помощь, педиатрию, кардиологию
              </p>
              <p className='text-gray-400 text-lg mb-5'>
                Медицинские услуги являются неотъемлемой частью нашей жизни, предлагая уход и лечение различных состояний здоровья. Эти услуги
                охватывают широкий спектр специальностей, включая первичную помощь, педиатрию, кардиологию
              </p>
              <h2 className='Unbounded text-3xl mt-10 mb-5 text-white'>Проблемы здоровья, о которых мы заботимся</h2>

              <p className='text-gray-400 text-lg mb-5'>
                Медицинские услуги являются неотъемлемой частью нашей жизни, предлагая уход и лечение различных состояний здоровья. Эти услуги
                охватывают широкий спектр специальностей, включая первичную помощь, педиатрию, кардиологию
              </p>
              <div className='flex flex-col md:flex-row mt-5 gap-5'>
                <div className='flex flex-col'>
                  <Image src={flask} alt='пробирка' className='invert' />
                  <h3 className='Unbounded my-3'>Оазис здоровья, клиника CarePoint, Институт Thrive Wellness Hub</h3>
                  <p className='text-gray-300 text-md'>
                    Здравоохранение представляет собой жизненно важный аспект поддержания общего благополучия, охватывающего широкий спектр
                  </p>
                </div>
                <div className='flex flex-col'>
                  <Image src={serum} alt='сыворотка' className='invert' />
                  <h3 className='Unbounded my-3'>Оазис здоровья, клиника CarePoint, Институт Thrive Wellness Hub</h3>
                  <p className='text-gray-300 text-md'>
                    Здравоохранение представляет собой жизненно важный аспект поддержания общего благополучия, охватывающего широкий спектр
                  </p>
                </div>
              </div>
              <h2 className='Unbounded text-3xl mt-10 mb-5 text-white'>Проблемы здоровья, о которых мы заботимся</h2>

              <p className='text-gray-400 text-lg mb-5'>
                Медицинские услуги являются неотъемлемой частью нашей жизни, предлагая уход и лечение различных состояний здоровья. Эти услуги
                охватывают широкий спектр специальностей, включая первичную помощь, педиатрию, кардиологию
              </p>
              <p className='text-gray-400 mb-5'>
                Медицинские услуги — неотъемлемая часть нашей жизни, предлагающая уход и лечение различных состояний здоровья. Эти услуги охватывают
                широкий спектр специальностей, включая первичную помощь, педиатрию, кардиологию
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 sticky top-25 left-0 h-full'>
            <div className='shadow-light rounded-xl p-5'>
              <h2 className='Unbounded text-2xl'>Услуги</h2>
              <div className='flex justify-between border px-4 py-2 hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer rounded-full border-gray-400 mt-5'>
                <span>
                  <i className='bi bi-chevron-double-right pe-2'> Традиционное лечение</i>
                </span>
                <span>(02)</span>
              </div>
              <div className='flex justify-between border px-4 py-2 hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer rounded-full border-gray-400 mt-5'>
                <span>
                  <i className='bi bi-chevron-double-right pe-2'> Центр гармонии и холистического здоровья</i>
                </span>
                <span>(02)</span>
              </div>
              <div className='flex justify-between border px-4 py-2 hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer rounded-full border-gray-400 mt-5'>
                <span>
                  <i className='bi bi-chevron-double-right pe-2'> Оживляем медицинскую помощь</i>
                </span>
                <span>(02)</span>
              </div>
              <div className='flex justify-between border px-4 py-2 hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer rounded-full border-gray-400 mt-5'>
                <span>
                  <i className='bi bi-chevron-double-right pe-2'> Eдиный центр медицинских услуг</i>
                </span>
                <span>(02)</span>
              </div>
              <div className='flex justify-between border px-4 py-2 hover:bg-(--prim-color) hover:text-white transition-all duration-300 cursor-pointer rounded-full border-gray-400 mt-5'>
                <span>
                  <i className='bi bi-chevron-double-right pe-2'> Традиционное лечение</i>
                </span>
                <span>(02)</span>
              </div>
            </div>
            <div className='shadow-light rounded-xl p-5 mt-5'>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='Unbounded text-2xl'>Нужна помощь?</h2>
                <div className='my-5 bg-(--prim-color) px-8 py-7 rounded-full'>
                  <i className='bi bi-telephone-fill text-4xl text-white'></i>
                </div>
                <p className='text-center'>
                  Медицинская помощь — важный аспект поддержания общего благополучия, включающий широкий спектр услуг от профилактической помощ
                </p>
                <h2 className='Unbounded text-2xl my-5'>(+91) 123 456 789</h2>
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

export default ServiceDetails;
