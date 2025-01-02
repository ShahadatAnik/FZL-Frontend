import React from 'react';

const Slide1 = () => {
  return (
    <div className='bg-white py-40 pl-40 h-full  flex'>
      <div className='max-w-[600px]'>
        <h2 className='text-5xl leading-snug'>
          <span className='font-light italic'>Green Energy</span>
        </h2>
        <p className='mt-4 text-base text-muted-foreground'>
          At Fortune Zipper Limited, sustainability is at the heart of our
          operations. We have installed solar panels across our facilities,
          reducing our reliance on external power sources. Our goal is to expand
          this initiative to ensure that a significant portion of our energy
          needs are met through renewable sources, with the vision of becoming
          fully self-sustainable in terms of energy usage.
        </p>
      </div>
    </div>
  );
};

export default Slide1;
