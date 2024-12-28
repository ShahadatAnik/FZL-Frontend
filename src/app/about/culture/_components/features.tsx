import React from 'react';
import data from '../_const/features-data.json';
import Image from 'next/image';

const Features = () => {
  return (
    <div className='grid grid-cols-3 gap-10'>
      {data.map((feature, index) => {
        return (
          <div
            key={index}
            className='relative p-10 w-full aspect-square group overflow-hidden'
          >
            <div className='absolute inset-0'>
              <Image
                className='object-cover object-center group-hover:scale-110 transition-transform duration-200 ease-in'
                fill
                src={feature.image}
                alt={feature.title}
              />
            </div>
            <div className='z-50 absolute inset-0 flex items-end '>
              <div className='h-2 bg-accent w-0 group-hover:w-full transition-all duration-200 ease-in'></div>
            </div>
            <div className='absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-200 ease-in'></div>
            <div className='relative z-20 text-white flex flex-col justify-center '>
              <h3 className='font-poppins text-2xl '>{feature.title}</h3>
              <p className='mt-2 text-white text-base'>{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
