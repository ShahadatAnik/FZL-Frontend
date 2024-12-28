import Image from 'next/image';
import React from 'react';
import CompanyProfileCard from './company-profile-card';

const items = [
  'Zipper chain: 30,000,000y',
  'Finished zipper: 30,000,000pc',
  'Slider: 40,000,000pc',
];

const MonthlyCapacity = () => {
  return (
    <CompanyProfileCard>
      <div className='h-[100px] w-[100px] relative'>
        <Image
          fill
          src={'/images/company-profile/monthly-capacity.png'}
          alt='Company Profile'
          className='invert'
        />
      </div>

      <div className='flex-1 text-foreground'>
        <h4 className='text-2xl font-medium border-b pb-2 font-poppins'>
          Monthly Capacity
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

export default MonthlyCapacity;
