import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/why-fzl.jpg')`,
      }}
      className={` relative`}
    >
      <div className='absolute inset-0  bg-gradient-to-r from-black/50 via-black/30 to-black/10 bg-blend-multiply bg-center'></div>
      <div className='relative z-10 max-w-[1000px] p-20 md:p-32 xl:p-40 text-white space-y-4'>
        <div className='space-y-2'>
          <h6 className='text-sm font-semibold'>WHY FZL</h6>
          <h2 className='text-4xl font-light font-poppins leading-normal'>
            Quality, Consistency & Commitment
          </h2>
        </div>
        <p className='text-base leading-relaxed'>
          The work culture at FZL is truly unique, shaped by the dedication and
          resilience of our employees. In challenging times and moments of
          uncertainty, our culture empowers us to make sound decisions, remain
          agile, and foster trust, enabling us to adapt and discover innovative
          solutions. A cornerstone of our success is our unwavering commitment
          to delivering quality—regardless of the size of the order, the client,
          or the urgency of the delivery.
        </p>
      </div>
    </section>
  );
};

export default Hero;
