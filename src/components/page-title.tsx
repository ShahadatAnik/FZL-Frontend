import { cn } from '@/lib/utils';
import React from 'react';

const PageTitle: React.FC<{ title: string; className?: string }> = ({
  className,
  title,
}) => {
  return (
    <div className='bg-secondary py-4 lg:py-8  border-b px-10'>
      <h1
        className={cn(
          'max-w-[1400px] mx-auto text-2xl lg:text-4xl font-light font-poppins tracking-wide text-center capitalize ',
          className
        )}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
