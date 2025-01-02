import React from 'react';

import PageContainer from '@/components/page-container';

import Certificates from './_components/certificates';
import QualityCertification from './_components/certifications/quality-certification';
import ProductCertification from './_components/certifications/product-certification';
import EnvironmentCertification from './_components/certifications/environment-certification';
import SocialResponsibility from './_components/certifications/social-responsibility';
import OccupationHealthAndSafety from './_components/certifications/occupation-health-and-safety';

const Page = () => {
  return (
    <PageContainer>
      <div className='pb-8 space-y-8 '>
        <p className='text-foreground text-lg '>
          In Bangladesh’s competitive zipper manufacturing industry, ensuring
          top-tier quality and reliability is crucial to maintaining trust and
          standing out in global markets. Consistent quality and assurance not
          only uphold the reputation of manufacturers but also drive long-term
          partnerships and customer satisfaction.
        </p>
        <QualityCertification />
        <ProductCertification />
        <EnvironmentCertification />
        <SocialResponsibility />
        <OccupationHealthAndSafety />
      </div>
      <Certificates />
    </PageContainer>
  );
};

export default Page;
