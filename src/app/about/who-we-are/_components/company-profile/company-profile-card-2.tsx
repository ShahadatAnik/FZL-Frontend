import Image from 'next/image';
import React from 'react';

const CompanyProfileCard2: React.FC<{
  image: string;
  title: string;
  content: string;
}> = ({ title, content, image }) => {
  return (
    <div className='bg-white p-6 lg:p-10 rounded-md flex flex-col lg:flex-row gap-4 lg:gap-10 border'>
      <div className='size-16 lg:size-[100px] relative'>
        <Image fill src={image} alt='Company Profile' className='invert' />
      </div>

      <div className='flex-1 text-foreground '>
        <h4 className='text-lg lg:text-2xl font-medium border-b pb-2 font-poppins'>
          {title}
        </h4>

        <div className='mt-2 lg:mt-4'>{content}</div>
      </div>
    </div>
  );
};

export default CompanyProfileCard2;
