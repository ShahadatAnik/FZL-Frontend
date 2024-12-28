import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/hero.jpg')`,
      }}
      className={` relative`}
    >
      <div className='absolute inset-0  bg-gradient-to-r from-black/50 via-black/30 to-black/10 bg-blend-multiply bg-center'></div>
      <div className='relative z-10 max-w-[1000px] p-20 md:p-32 xl:p-40 text-white space-y-4'>
        <div className='space-y-2'>
          <h6 className='text-sm font-semibold'>WHO WE ARE</h6>
          <h2 className='text-4xl font-light font-poppins leading-normal'>
            Tex Fasteners is a leading global manufacturer of premium zippers,
            sliders, pullers & metal buttons
          </h2>
        </div>
        <p className='text-base'>
          We have over 30 years of manufacturing experience, 8 worldwide offices
          and 4 factories in Bangladesh, Vietnam and India.
          <br />
          Leading apparel brands worldwide choose Tex as their preferred
          fastening devices manufacturer, especially for their Bangladesh and
          Vietnam production.
          <br />
          <br />
          Over 80% of our manufacturer products are used by European & Americans
          brands. Tex supplies fasteners to apparel factories in Bangladesh,
          Vietnam, and India.
        </p>
      </div>
    </section>
  );
};

export default Hero;
