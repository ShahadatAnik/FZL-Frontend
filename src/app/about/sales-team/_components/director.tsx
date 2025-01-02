import Image from 'next/image';
import React from 'react';

const Director = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
      <Image
        width={400}
        height={400}
        src={'/human-placeholder.jpg'}
        alt='Habib Chowdhury'
      />

      <div className='max-w-[680px]'>
        <h2 className='text-3xl font-medium font-poppins'>
          Ahmed Habib Chowdhury
        </h2>
        <p className='text-lg text-muted-foreground'>
          <span>Director</span>
          <br />
          <span>Marketing</span>

          <blockquote className='text-lg mt-8 text-pretty italic'>
            &#x0022;Building lasting relationships with our clients is our top
            priority. We are committed to understanding their unique needs and
            providing tailored solutions that not only meet but exceed their
            expectations, solidifying FZL&apos;s position as a leader in the
            industry.&#x0022;
          </blockquote>
        </p>
      </div>
    </div>
  );
};

export default Director;
