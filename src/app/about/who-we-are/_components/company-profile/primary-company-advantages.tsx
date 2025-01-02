import Image from 'next/image';
import React from 'react';
import CompanyProfileCard from './company-profile-card';

const items = [
  'OEM Capability',
  'Large Product Line',
  'Reputation',
  'Competitive Prices',
  'Production Capacity',
  'Reliability',
  `Buyer's Specifications Accepted`,
];

const PrimaryCompanyAdvantages = () => {
  return (
    <CompanyProfileCard>
      <div className='size-16 lg:size-[100px] relative'>
        <Image
          fill
          src={'/images/company-profile/1.png'}
          alt='Company Profile'
          className='invert'
        />
      </div>

      <div className='flex-1 text-foreground '>
        <h4 className='text-lg lg:text-2xl font-medium border-b pb-2 font-poppins'>
          Primary Competitive Advantages
        </h4>

        <ul className='mt-2 lg:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-10 lg:gap-y-4'>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </CompanyProfileCard>
  );
};

export default PrimaryCompanyAdvantages;
