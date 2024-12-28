import { IPhilosophy } from '@/types';
import Image from 'next/image';
import React from 'react';

const PhilosophyCard: React.FC<{ data: IPhilosophy }> = ({ data }) => {
  return (
    <div className=''>
      <h4 className='text-3xl leading-relaxed font-poppins font-medium'>
        {data.title}
      </h4>
      <div className=' mt-4 relative w-full aspect-video'>
        <Image
          className='object-cover object-center'
          fill
          src={data.image}
          alt={data.title}
        />
      </div>
      <p className='mt-6 text-base text-justify text-muted-foreground leading-relaxed'>
        {data.description}
      </p>
    </div>
  );
};

export default PhilosophyCard;
