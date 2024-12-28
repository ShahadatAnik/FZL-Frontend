import Image from 'next/image';
import React from 'react';

const Details = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className='w-full aspect-square relative group'>
          <Image
            className='object-cover '
            fill
            src={'/placeholder.svg'}
            alt={'Image'}
          />
        </div>
      ))}
    </div>
  );
};

export default Details;
