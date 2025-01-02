import Image from 'next/image';
import React from 'react';
import CompanyProfileCard from './company-profile-card';

const items = ['1994'];

const YearEstablished = () => {
  return (
    <CompanyProfileCard>
      <div className='h-[100px] w-[100px] relative'>
        <Image
          fill
          src={'/images/company-profile/year-established.png'}
          alt='Company Profile'
          className='invert'
        />
      </div>

      <div className='flex-1 text-foreground '>
        <h4 className='text-2xl font-medium border-b pb-2 font-poppins'>
          Year Established
        </h4>

        <ul className='mt-4 flex flex-col flex-wrap gap-x-10 gap-y-2'>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </CompanyProfileCard>
  );
};

export default YearEstablished;
