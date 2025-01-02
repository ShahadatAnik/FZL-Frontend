import React from 'react';
import PageContainer from '@/components/page-container';
import Hero from './_components/hero';
import Features from './_components/features';
import Philosophy from './_components/philosophy';

const Page = () => {
  return (
    <PageContainer className=' space-y-8 lg:space-y-12 2xl:space-y-20'>
      <Hero />
      <Features />
      <Philosophy />
    </PageContainer>
  );
};

export default Page;
