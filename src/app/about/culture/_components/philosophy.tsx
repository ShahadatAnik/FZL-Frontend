import React from 'react';
import data from '../_config/philosophy-data.json';
import PhilosophyCard from './philosophy-card';

const Philosophy = () => {
  return (
    <div>
      <h3 className='text-2xl font-poppins bg-secondary text-foreground py-4 px-8 border-l-8 border-accent'>
        Philosophy
      </h3>
      <p className='mt-4 text-base leading-relaxed max-w-[1200px]'>
        Every successful company thrives on values that define its purpose. At
        Fortune Zipper Limited, our philosophy is the guiding force behind every
        decision and action, fostering trust and driving excellence.
        <br />
        <br />
        We believe that without a clear philosophy, success loses its meaning.
        Our values unify our team and reflect our unwavering commitment to
        clients.
        <br />
        <br />
        In the following sections, we present the core philosophies that define
        FZL—quality, consistency, and commitment—brought to life with visuals
        that capture their essence.
      </p>

      <div className=' my-10 max-w-[960px] space-y-12'>
        {data.map((item, index) => (
          <PhilosophyCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Philosophy;
