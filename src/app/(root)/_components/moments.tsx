import React from 'react';
import SectionContainer from './section-container';
import data from '@/app/about/who-we-are/_config/moments-data.json';
import MomentCard from '@/app/about/who-we-are/_components/moment-card';
import SectionTitle from './section-title';

const Moments = () => {
  return (
    <SectionContainer>
      <SectionTitle title='FZL at a Glance' />
      <div className='mt-6 grid grid-cols-3 gap-1'>
        {data.map((item, index) => (
          <MomentCard key={index} item={item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Moments;
