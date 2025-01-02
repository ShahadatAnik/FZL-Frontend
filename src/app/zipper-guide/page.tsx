import Image from 'next/image';
import React from 'react';
import Content from './_components/content';

import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <PageContainer className='space-y-8 lg:space-y-12 2xl:space-y-20'>
      <div className='aspect-video lg:aspect-auto lg:h-[600px] w-full relative'>
        <Image
          className='object-cover'
          fill
          src={'/images/a-guide-to-zipper.webp'}
          alt='A Guide to Zipper'
        />
      </div>
      <Content />
    </PageContainer>
  );
};

export default Page;
