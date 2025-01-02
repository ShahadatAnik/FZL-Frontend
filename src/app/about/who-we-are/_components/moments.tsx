import React from 'react';
import data from '../_config/moments-data.json';

import MomentCard from './moment-card';

const Moments = () => {
  return (
    <section>
      <h2 className='text-2xl lg:text-4xl text-center font-poppins font-light'>
        FZL at a Glance
      </h2>

      <div className='mt-6 grid grid-cols-3 gap-1'>
        {data.map((item, index) => (
          <MomentCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Moments;
