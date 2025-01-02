import React from 'react';
import SectionContainer from './section-container';
import SectionTitle from './section-title';

const WhoWeAre = () => {
  return (
    <SectionContainer>
      <SectionTitle title='Who We Are' />
      <div className='mt-4 '>
        <p className='text-base lg:text-lg leading-relaxed text-center'>
          Established in 1994, Fortune Zipper Limited has earned its reputation
          as one of the leading zipper manufacturers in Bangladesh. With decades
          of expertise, we pride ourselves on delivering exceptional quality and
          innovative solutions to meet the diverse needs of our clients.
          Equipped with state-of-the-art machinery sourced from Japan, Korea,
          and Taiwan, our production processes are meticulously designed to
          ensure precision and reliability. Every product undergoes rigorous
          quality control measures, guaranteeing excellence from start to
          finish. At Fortune Zipper, our dedicated team of professionals brings
          unparalleled skill and commitment, ensuring we remain at the forefront
          of the industry, setting benchmarks for quality and customer
          satisfaction.
        </p>
      </div>
    </SectionContainer>
  );
};

export default WhoWeAre;
