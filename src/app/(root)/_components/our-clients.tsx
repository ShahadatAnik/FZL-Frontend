import React from 'react';
import SectionContainer from './section-container';
import SectionTitle from './section-title';
import Image from 'next/image';

const OurClients = () => {
  return (
    <SectionContainer>
      <SectionTitle
        title='Who We Work With'
        description='Brand Clients We Cooperate'
      />

      <div className='mt-4 lg:mt-6 w-full flex justify-center'>
        <Image
          className='object-contain'
          width={1200}
          height={500}
          src={'/images/home/brand-clients.webp'}
          alt='Brand-Clients'
        />
      </div>
    </SectionContainer>
  );
};

export default OurClients;
