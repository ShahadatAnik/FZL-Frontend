import React from 'react';

import data from './_config/management.json';
import ManagementCard from './_components/management-card';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <PageContainer className='space-y-12 lg:space-y-20'>
      {data.map((item, index) => (
        <ManagementCard key={index} data={item} index={index} />
      ))}
    </PageContainer>
  );
};

export default Page;
