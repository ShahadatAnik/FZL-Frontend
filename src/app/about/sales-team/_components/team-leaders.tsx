import React from 'react';
import salesManagersData from '../_config/team-leaders-data.json';
import Image from 'next/image';

const TeamLeaders = () => {
  return (
    <div>
      <h2 className='text-center text-2xl lg:text-3xl font-poppins mb-8 font-light'>
        Team Leaders
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12'>
        {salesManagersData.map((item, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <Image
              src={item.image || '/human-placeholder.jpg'}
              alt={'Image'}
              width={300}
              height={300}
            />
            <div>
              <h4 className='text-xl lg:text-2xl font-medium font-poppins'>
                {item.name}
              </h4>
              <h6 className='mt-1 text-muted-foreground'>{item.designation}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamLeaders;
