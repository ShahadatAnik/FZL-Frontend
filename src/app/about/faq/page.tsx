import React from 'react';

import TradeKnowledge from './_components/trade-knowledge';
import ZipperKnowledge from './_components/zipper-knowledge';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <PageContainer className='space-y-10'>
      <TradeKnowledge />
      <ZipperKnowledge />
    </PageContainer>
  );
};

export default Page;
