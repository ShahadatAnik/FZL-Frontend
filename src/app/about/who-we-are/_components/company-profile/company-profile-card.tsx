import React from 'react';

const CompanyProfileCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='bg-white p-10 rounded-md flex gap-10 border'>
      {children}
    </div>
  );
};

export default CompanyProfileCard;
