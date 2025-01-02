'use client';

import React from 'react';
import SectionContainer from './section-container';
import data from '../_config/achievements-data.json';
import Image from 'next/image';
import CountUp from 'react-countup';

const Achievements = () => {
  return (
    <SectionContainer>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className='text-center flex flex-col items-center gap-8'
          >
            <Image
              src={'/placeholder.svg'}
              alt={'Image'}
              width={200}
              height={200}
            />
            <div>
              <CountUp
                duration={10}
                className='text-3xl xl:text-5xl font-semibold font-poppins'
                decimal=','
                end={item.value}
                suffix='+'
              />

              <p className='mt-2 text-lg text-muted-foreground font-poppins'>
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Achievements;
