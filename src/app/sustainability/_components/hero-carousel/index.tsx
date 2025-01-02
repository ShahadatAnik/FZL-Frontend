'use client';

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import sliders from '../../_config/sliders';

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
            className='h-[90vh] w-full relative bg-cover bg-center'
          >
            <div className='absolute inset-0 bg-black/10'></div>
            <div className='absolute inset-0 z-10'>{slide.content}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
