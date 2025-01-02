import React from 'react';

const CompanyProfileCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='bg-white p-6 lg:p-10 rounded-md flex flex-col lg:flex-row gap-4 lg:gap-10 border'>
      {children}
    </div>
  );
};

export default CompanyProfileCard;
