import React from 'react';
import Marquee from 'react-fast-marquee';

import data from '../_config/testimonials-data.json';
import TestimonialCard from './testimonial-card';
import SectionContainer from './section-container';
import SectionTitle from './section-title';

const Testimonials = () => {
  return (
    <SectionContainer>
      <SectionTitle title='Words of praise from others about our presence' />
      <div className='mt-8 relative'>
        <Marquee>
          <div className='grid grid-cols-4 p-0 m-0'>
            {data.map((item, index) => {
              return <TestimonialCard key={index} index={index} item={item} />;
            })}
          </div>
        </Marquee>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
