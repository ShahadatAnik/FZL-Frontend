import React from 'react';
import Hero from './_components/hero';
import PageContainer from '@/components/page-container';
import Products from './_components/products';
import WhoWeAre from './_components/who-we-are';
import OurClients from './_components/our-clients';
import Achievements from './_components/achievements';
import Certificates from '../quality/system-quality-assurance/_components/certificates';
import Moments from './_components/moments';
import Testimonials from './_components/testimonials';

const Page = () => {
  return (
    <>
      <Hero />
      <PageContainer>
        <WhoWeAre />
        <Achievements />
        <div className='py-8'>
          <Certificates />
        </div>

        <Products />
        <OurClients />

        <div className='py-8'>
          <Moments />
        </div>
        <Testimonials />
      </PageContainer>
    </>
  );
};

export default Page;
