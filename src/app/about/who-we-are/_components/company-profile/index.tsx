import React from 'react';
import PrimaryCompanyAdvantages from './primary-company-advantages';
import BusinessType from './business-type';
import ExportMarkets from './export-markets';
import ExportPercentage from './export-percentage';
import FactoryArea from './factory-area';
import YearEstablished from './year-established';
import MonthlyCapacity from './monthly-capacity';
import PlantAndMachinery from './plant-and-machinery';
import StaffNumbers from './staff-numbers';
import SafetyApprovals from './safety-approvals';
import ProductRange from './product-range';

const CompanyProfile = () => {
  return (
    <section>
      <h2 className='text-2xl lg:text-4xl text-center font-poppins font-light'>
        Company Profile
      </h2>

      <div className='mt-4 lg:mt-10 space-y-4'>
        <PrimaryCompanyAdvantages />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <BusinessType />
          <ExportMarkets />
          <ExportPercentage />
          <FactoryArea />
          <YearEstablished />
          <MonthlyCapacity />
        </div>
        <PlantAndMachinery />
        <div className='grid grid-cols-2 gap-4'>
          <StaffNumbers />
          <SafetyApprovals />
        </div>
        <ProductRange />
      </div>
    </section>
  );
};

export default CompanyProfile;
