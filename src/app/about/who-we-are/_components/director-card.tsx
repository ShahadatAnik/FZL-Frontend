import { cn } from '@/lib/utils';
import { IDirector } from '@/types';
import Image from 'next/image';
import React from 'react';

const DirectorCard: React.FC<{
  data: IDirector;
  className?: string;
  titleClassName?: string;
}> = ({ data, className, titleClassName }) => {
  return (
    <div
      className={cn(
        'w-full max-w-[400px]  lg:max-w-full flex flex-col items-center gap-3 group relative overflow-hidden',
        className
      )}
    >
      <div className='w-full aspect-square relative'>
        <Image
          className='object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-200 ease-in'
          fill
          src={data.image}
          alt={data.name}
        />
      </div>

      <div className=' z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-in absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black via-black/50 to-transparent  text-white flex flex-col justify-end'>
        <h3
          className={cn(
            'text-lg lg:text-2xl font-poppins font-medium',
            titleClassName
          )}
        >
          {data.name}
        </h3>
        <p className='text-base font-poppins font-light'>{data.designation}</p>
      </div>
    </div>
  );
};

export default DirectorCard;
