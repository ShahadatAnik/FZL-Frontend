import Image from 'next/image';
import React from 'react';

const MomentCard: React.FC<{ item: string }> = ({ item }) => {
  return (
    <div className='w-full aspect-video relative group'>
      <Image
        className='object-cover grayscale group-hover:grayscale-0 transition-all duration-100 ease-in'
        fill
        src={item}
        alt='Image'
      />
    </div>
  );
};

export default MomentCard;
