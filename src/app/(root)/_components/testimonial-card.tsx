import { cn } from '@/lib/utils';
import { ITestimonial } from '@/types';
import Image from 'next/image';
import React from 'react';

const TestimonialCard: React.FC<{ item: ITestimonial; index: number }> = ({
  item,
}) => {
  return (
    <div
      className={cn(
        'bg-gray-50 p-4 lg:p-8 rounded-lg border w-[200px] lg:w-[400px] gap-4 lg:gap-6 m-2 lg:m-4 flex flex-col justify-between'
      )}
    >
      <div>
        <Image
          src={'/quote.svg'}
          alt='Quote'
          width={30}
          height={30}
          className=''
        />
        <p className='mt-2 text-sm lg:text-base'>{item.quote}</p>
      </div>

      <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
        <div className='size-10 relative '>
          <Image
            className='rounded-full object-cover object-center'
            fill
            src={item.image}
            alt={item.name}
          />
        </div>

        <div>
          <h4 className='font-semibold'>{item.name}</h4>
          <p className='text-sm text-muted-foreground'>{item.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
