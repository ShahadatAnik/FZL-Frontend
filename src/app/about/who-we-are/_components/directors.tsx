import React from 'react';
import data from '../_config/directors-data.json';
import DirectorCard from './director-card';

const Directors = () => {
  return (
    <section>
      <h2 className='text-2xl lg:text-4xl text-center font-poppins font-light'>
        Board of Directors
      </h2>

      <div className='mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='flex justify-center'>
          <DirectorCard data={data[0]} />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4  place-items-center'>
          {data.slice(1, data.length).map((director, index) => (
            <DirectorCard
              titleClassName='lg:text-lg'
              key={index}
              data={director}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directors;
