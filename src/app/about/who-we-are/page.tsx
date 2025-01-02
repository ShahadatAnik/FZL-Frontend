import PageContainer from '@/components/page-container';
import React from 'react';
import Hero from './_components/hero';
import CompanyProfile from './_components/company-profile';
import Directors from './_components/directors';
import Moments from './_components/moments';

const Page = () => {
  return (
    <PageContainer className='space-y-8 lg:space-y-12 2xl:space-y-20'>
      <Hero />
      <CompanyProfile />
      <Directors />
      <Moments />
    </PageContainer>
  );
};

export default Page;
