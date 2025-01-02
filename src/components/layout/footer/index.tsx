import BrandLogo from '@/components/brand-logo';
import PageContainer from '@/components/page-container';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import Socials from './_components/socials';
import FooterLinks from './_components/footer-links';

const Footer = () => {
  return (
    <footer className='bg-gray-50 pt-6 pb-4 lg:pt-12 lg:pb-4 border-t'>
      <PageContainer className='my-0 lg:my-0 2xl:my-0'>
        <div className='flex flex-col  lg:flex-row justify-between gap-4 lg:gap-8'>
          <div className='lg:w-[400px] '>
            <BrandLogo className=' w-[140px] lg:w-[120px]' />
            <div className='text-gray-500 space-y-2 mt-4'>
              <p className='lg:text-lg'>
                Fortune Zipper designs, manufactures all sorts of zipper.
                Fortune Zipper has a good record of manufacturing good quality
                products.
              </p>
            </div>
          </div>
          <FooterLinks />
        </div>
        <Separator className='my-6' />

        <div className='flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-1'>
          <small className='text-gray-500 text-center sm:text-left '>
            Copyright © {new Date().getFullYear()} - All rights reserved Fortune
            Zipper LTD
          </small>

          <Socials />
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
