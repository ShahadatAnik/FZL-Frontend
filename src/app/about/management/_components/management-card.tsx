import { cn } from '@/lib/utils';
import { IManagement } from '@/types';
import Image from 'next/image';
import React from 'react';

const ManagementCard: React.FC<{ data: IManagement; index: number }> = ({
  data,
  index,
}) => {
  return (
    <div
      className={cn(
        'flex gap-6 lg:gap-10 text-center lg:text-left ',
        index % 2 === 0
          ? 'flex-col lg:flex-row '
          : 'flex-col lg:flex-row-reverse'
      )}
    >
      <div className='relative w-[320px] lg:w-[400px] lg:h-[400px] aspect-square  mx-auto'>
        <Image
          className='object-cover object-center'
          fill
          //   src={'/human-placeholder.jpg'}
          src={data.image}
          alt={`${data.name}'s image`}
        />
      </div>

      <div className='flex-1'>
        <h4 className='text-2xl lg:text-3xl font-medium font-poppins'>
          {data.name}
        </h4>
        <h6 className='mt-1 lg:mt-2 text-muted-foreground'>
          {data.designation}
        </h6>
        <blockquote className='text-lg mt-4 lg:mt-8 text-pretty italic'>
          &#x0022;{data.quote}&#x0022;
        </blockquote>
      </div>
    </div>
  );
};

export default ManagementCard;
