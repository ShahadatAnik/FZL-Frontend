import React from 'react';
import CertificateCard from './certificate-card';
import data from '../../_config/certificates.json';

const Certificates = () => {
  return (
    <div className='grid grid-cols-2 xl:grid-cols-6 gap-8'>
      {data.map((item, index) => (
        <CertificateCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Certificates;
