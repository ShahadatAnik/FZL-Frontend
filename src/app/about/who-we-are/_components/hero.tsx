import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/hero-2.png')`,
      }}
      className={`relative bg-center  bg-no-repeat `}
    >
      <div className='absolute inset-0  bg-gradient-to-r from-black/60 via-black/30 to-black/10 bg-blend-multiply bg-cover bg-center'></div>
      <div className='relative z-10 max-w-[1000px] p-8 md:p-20 2xl:p-40 text-white space-y-4'>
        <div className='space-y-2'>
          <h6 className='text-sm font-semibold'>WHO WE ARE</h6>
          <h2 className='text-2xl lg:text-4xl font-light font-poppins leading-10'>
            Defining Excellence in <br /> Zipper Manufacturing since 1994
          </h2>
        </div>
        <p className='text-base'>
          Established in 1994, Fortune Zipper Limited is one of the forerunners
          of Bangladeshi zipper manufacturers. Equipped with state-of-the-art
          machinery, and a highly dedicated team, we deliver
          precision-engineered products that define industry benchmarks.
        </p>
      </div>
    </section>
  );
};

export default Hero;
