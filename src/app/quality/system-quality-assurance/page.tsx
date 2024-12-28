import React from 'react';

import PageTitle from '@/components/page-title';
import PageContainer from '@/components/page-container';

import Certificates from './_components/certificates';
import QualityCertification from './_components/certifications/quality-certification';
import ProductCertification from './_components/certifications/product-certification';
import EnvironmentCertification from './_components/certifications/environment-certification';
import SocialResponsibility from './_components/certifications/social-responsibility';
import OccupationHealthAndSafety from './_components/certifications/occupation-health-and-safety';

const Page = () => {
  return (
    <div>
      <PageTitle title='System & Quality Assurance' />

      <PageContainer>
        <div className='pb-8 space-y-8'>
          <p className='text-muted-foreground text-lg '>
            Equipped with various cutting-edge experimental and inspection
            devices, we monitor the whole process ranging from raw materials to
            the finished products, including the examination of the precision of
            molds & equipment accessories, chemical composition content, heavy
            metal content, physical properties, crystal structure, color
            fastness and so forth, all of which make sure that every index
            conforms with the standard requirements for zippers and goes above
            the customers’ requirements. We have passed the certifications of
            ISO9001:2015, ISO14001:2015, ISO45001:2018, Oeko-Tex100, Bluesign®
            System, etc., and have always been carrying out operations in strict
            compliance with these systems.
          </p>
          <QualityCertification />
          <ProductCertification />
          <EnvironmentCertification />
          <SocialResponsibility />
          <OccupationHealthAndSafety />
        </div>
        <Certificates />
      </PageContainer>
    </div>
  );
};

export default Page;
