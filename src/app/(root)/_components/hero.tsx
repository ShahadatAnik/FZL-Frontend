'use client';

import sliders from '../_config/hero-sliders-data.json';

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      loop
      effect={'fade'}
      modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 3000,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className='h-screen bg-cover bg-center bg-no-repeat relative'
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 bg-blend-multiply'></div>

            <div className='absolute inset-0 z-10 px-12 lg:px-20'>
              <div className='max-w-[1280px]  w-full h-full '>
                <div className='size-full  flex items-end py-16 xl:py-28'>
                  <div className=''>
                    <h2 className='text-white text-3xl xl:text-5xl font-poppins'>
                      {slide.title}
                    </h2>
                    <p className='mt-2 text-slate-200 text-base  xl:text-lg '>
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
