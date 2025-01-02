import Image from 'next/image';
import React from 'react';
import CompanyProfileCard from './company-profile-card';

const items = ['Exporter', 'Manufacturer'];

const BusinessType = () => {
  return (
    <CompanyProfileCard>
      <div className='size-16 lg:size-[100px] relative'>
        <Image
          fill
          src={'/images/company-profile/business-type.png'}
          alt='Company Profile'
          className='invert'
        />
      </div>

      <div className='flex-1 text-foreground '>
        <h4 className='text-lg lg:text-2xl font-medium border-b pb-2 font-poppins'>
          Business Type
        </h4>
        <ul className='mt-2 lg:mt-4 flex flex-col flex-wrap gap-2 lg:gap-x-10 lg:gap-y-2'>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </CompanyProfileCard>
  );
};

export default BusinessType;
