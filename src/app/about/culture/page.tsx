import React from 'react';
import PageContainer from '@/components/page-container';
import PageTitle from '@/components/page-title';
import Hero from './_components/hero';
import Features from './_components/features';
import Philosophy from './_components/philosophy';

const Page = () => {
  return (
    <div>
      <PageTitle title='Culture' />
      <PageContainer className='space-y-20'>
        <Hero />
        <Features />
        <Philosophy />
      </PageContainer>
    </div>
  );
};

export default Page;
