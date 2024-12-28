import Image from 'next/image';
import React from 'react';
import CompanyProfileCard from './company-profile-card';

const items = [
  'Nylon zipper chain forming machine',
  'Finished zipper equipment',
  'Dyeing machine',
  'Zipper sewing machine',
  'Plastic-injection zipper machine',
];

const PlantAndMachinery = () => {
  return (
    <CompanyProfileCard>
      <div className='h-[100px] w-[100px] relative'>
        <Image
          fill
          src={'/images/company-profile/sewing.png'}
          alt='Company Profile'
          className='invert'
        />
      </div>

      <div className='flex-1 text-foreground '>
        <h4 className='text-2xl font-medium border-b pb-2 font-poppins'>
          Type of Plant & Machinery in Factories
        </h4>

        <ul className='mt-4 grid grid-cols-3 gap-x-10 gap-y-4'>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </CompanyProfileCard>
  );
};

export default PlantAndMachinery;
