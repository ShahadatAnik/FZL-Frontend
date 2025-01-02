import React from 'react';
import TestingCapabilities from './_components/testing-capabilities';
import TestingEquipments from './_components/testing-equipments';
import SafetyAndRegulation from './_components/safety-and-regulation';
import PageContainer from '@/components/page-container';

const Page = () => {
  return (
    <PageContainer>
      <TestingCapabilities />
      <TestingEquipments />
      <SafetyAndRegulation />
    </PageContainer>
  );
};

export default Page;
